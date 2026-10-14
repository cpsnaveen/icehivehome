"use server"

import { randomUUID } from "node:crypto"
import { Resend } from "resend"

const SUPPORT_EMAIL = "support@icehivehome.com"

const PROPERTY_TYPES = ["Villa", "Apartment", "Townhouse", "Office", "Other"] as const
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type EnquiryState = {
  status: "idle" | "success" | "error"
  message: string
}

function readField(formData: FormData, key: string, maxLength: number) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function sendEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const name = readField(formData, "name", 120)
  const phone = readField(formData, "phone", 40)
  const email = readField(formData, "email", 200)
  const propertyInput = readField(formData, "property", 40)
  const message = readField(formData, "message", 5000)
  const property = PROPERTY_TYPES.find((type) => type === propertyInput) ?? "Other"

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email and project details." }
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." }
  }

  const apiKey = process.env.RESEND_API_KEY
  const domain = process.env.RESEND_EMAIL_DOMAIN
  if (!apiKey || !domain) {
    console.error("Resend is not configured: missing RESEND_API_KEY or RESEND_EMAIL_DOMAIN")
    return { status: "error", message: "We couldn't send your enquiry right now. Please email us directly." }
  }

  const resend = new Resend(apiKey)
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["Property type", property],
  ]

  const html = `
    <h2 style="font-family:sans-serif;color:#0f2c4c">New consultation enquiry</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:6px 16px 6px 0;color:#555"><strong>${label}</strong></td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>
    <h3 style="font-family:sans-serif;color:#0f2c4c;margin-top:24px">Project details</h3>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(message)}</p>
  `
  const text = `${rows.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\nProject details:\n${message}`

  const { error } = await resend.emails.send(
    {
      from: `Ice Hive Website <enquiries@${domain}>`,
      to: [SUPPORT_EMAIL],
      replyTo: email,
      subject: `New enquiry from ${name} (${property})`,
      html,
      text,
    },
    { idempotencyKey: `website-enquiry/${randomUUID()}` },
  )

  if (error) {
    console.error("Failed to send enquiry email:", error.message)
    return { status: "error", message: "We couldn't send your enquiry right now. Please email us directly." }
  }

  return { status: "success", message: "Thank you! Your enquiry has been sent. Our team will be in touch shortly." }
}
