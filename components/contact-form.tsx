"use client"

import { useActionState, useEffect, useRef } from "react"
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react"
import { sendEnquiry, type EnquiryState } from "@/app/actions/send-enquiry"

const fieldClass =
  "w-full rounded-sm border border-ink/15 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-navy focus:ring-2 focus:ring-hive/40"

const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-paper/70"

const initialState: EnquiryState = { status: "idle", message: "" }

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendEnquiry, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset()
  }, [state])

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-5 rounded-sm bg-navy p-8 md:p-10">
      <h3 className="font-display text-2xl font-semibold text-paper">Request a consultation</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required maxLength={120} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} className={fieldClass} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required maxLength={200} className={fieldClass} />
      </div>
      <div>
        <label htmlFor="property" className={labelClass}>
          Property type
        </label>
        <select id="property" name="property" defaultValue="Villa" className={fieldClass}>
          <option>Villa</option>
          <option>Apartment</option>
          <option>Townhouse</option>
          <option>Office</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          maxLength={5000}
          className={`${fieldClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="mt-2 inline-flex items-center justify-center gap-3 rounded-sm bg-hive px-6 py-4 text-sm font-semibold text-hive-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? (
          <>
            Sending <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          </>
        ) : (
          <>
            Send Enquiry <ArrowUpRight className="size-4" aria-hidden="true" />
          </>
        )}
      </button>
      <p
        role="status"
        aria-live="polite"
        className={state.status === "idle" ? "sr-only" : "flex items-start gap-2 text-sm leading-relaxed text-paper"}
      >
        {state.status === "success" && <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-hive" aria-hidden="true" />}
        {state.status === "error" ? (
          <span>
            {state.message}{" "}
            <a href="mailto:support@icehivehome.com" className="underline underline-offset-4">
              support@icehivehome.com
            </a>
          </span>
        ) : (
          state.message
        )}
      </p>
    </form>
  )
}
