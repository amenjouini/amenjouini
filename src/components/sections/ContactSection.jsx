import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, CalendarDays, Check, Copy, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { contactTopics, profile } from "@/data/portfolio";
import { MotionReveal } from "@/components/MotionReveal";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

async function submitWithFallback(payload) {
  if (emailJsConfig.serviceId && emailJsConfig.templateId && emailJsConfig.publicKey) {
    return emailjs.send(emailJsConfig.serviceId, emailJsConfig.templateId, payload, {
      publicKey: emailJsConfig.publicKey,
    });
  }

  const formData = new FormData();
  formData.append("access_key", "251a6a2b-26a2-4836-8ea9-602372e5968c");
  formData.append("subject", `Portfolio enquiry from ${payload.name}`);
  Object.entries(payload).forEach(([key, value]) => formData.append(key, value));

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });
  const result = await response.json().catch(() => null);

  if (!response.ok || result?.success === false) throw new Error("Form submit failed");
  return result;
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-9 items-center gap-2 rounded-full border border-ink/25 px-3.5 font-mono text-[0.6875rem] uppercase tracking-wider text-ink/80 transition-colors hover:border-ink hover:text-ink"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-signal" /> : <Copy className="h-3.5 w-3.5" />}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

function FieldLabel({ htmlFor, children, optional }) {
  return (
    <label htmlFor={htmlFor} className="eyebrow flex items-center justify-between">
      {children}
      {optional ? <span className="normal-case tracking-normal opacity-70">Optional</span> : null}
    </label>
  );
}

function FieldError({ id, error }) {
  if (!error) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-signal-deep">
      {error.message}
    </p>
  );
}

export function ContactSection() {
  const [selectedDate, setSelectedDate] = useState();
  const [topic, setTopic] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [formError, setFormError] = useState("");
  const calendarRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (!isCalendarOpen) return undefined;

    const onPointerDown = (event) => {
      if (!calendarRef.current?.contains(event.target)) setIsCalendarOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsCalendarOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isCalendarOpen]);

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : "Pick a date";

  const onSubmit = async (values) => {
    setFormError("");
    const payload = {
      ...values,
      topic: topic || "Not specified",
      project_date: selectedDate
        ? selectedDate.toLocaleDateString("en-CA") // local YYYY-MM-DD
        : "Not specified",
    };

    try {
      await submitWithFallback(payload);
      reset();
      setSelectedDate(undefined);
      setTopic("");
      setIsSuccessOpen(true);
    } catch {
      setFormError(`The message could not be sent. Please try again, or email me directly at ${profile.email}.`);
    }
  };

  return (
    <section id="contact" className="surface-ink relative overflow-hidden py-24 md:py-36">
      <div className="container">
        <MotionReveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-signal">05</span>
            <span className="h-px w-8 bg-ink/30" aria-hidden="true" />
            Contact
          </p>
          <h2 className="display-xl mt-8 max-w-[15ch]">
            Let's build <br className="hidden sm:block" />
            something <span className="accent-serif">useful.</span>
          </h2>
        </MotionReveal>

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          <MotionReveal className="lg:col-span-5">
            <p className="lede max-w-md">
              Have a project in mind, a role to fill, or just want to say hello? Tell me what you're working on — I read
              every message.
            </p>

            <div className="mt-12 border-t pt-6">
              <p className="eyebrow">Email</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="link-rule break-all font-display text-2xl font-semibold tracking-tight sm:text-3xl"
                >
                  {profile.email}
                </a>
                <CopyEmail />
              </div>
            </div>

            <ul className="mt-10 border-t">
              {profile.socials.map((social) => (
                <li key={social.label} className="border-b">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <span className="eyebrow w-20 transition-colors group-hover:text-ink">{social.label}</span>
                    <span className="flex-1 truncate text-[0.9375rem] text-ink/80">{social.handle}</span>
                    <ArrowUpRight className="h-4 w-4 text-ink/50 transition-all duration-300 group-hover:rotate-45 group-hover:text-signal" />
                  </a>
                </li>
              ))}
              <li className="border-b">
                <a
                  href={profile.cv.href}
                  download={profile.cv.filename}
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <span className="eyebrow w-20 transition-colors group-hover:text-ink">CV</span>
                  <span className="flex-1 truncate text-[0.9375rem] text-ink/80">Download as PDF</span>
                  <ArrowUpRight className="h-4 w-4 rotate-90 text-ink/50 transition-colors duration-300 group-hover:text-signal" />
                </a>
              </li>
            </ul>

            <p className="mt-8 font-mono text-[0.6875rem] leading-relaxed text-muted">
              {profile.location} · Building globally
            </p>
          </MotionReveal>

          <MotionReveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-2xl border bg-raised p-6 sm:p-10"
              aria-label="Contact form"
            >
              <fieldset>
                <legend className="eyebrow">What do you need?</legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {contactTopics.map((item) => (
                    <button
                      key={item}
                      type="button"
                      aria-pressed={topic === item}
                      onClick={() => setTopic((value) => (value === item ? "" : item))}
                      className={cn(
                        "h-9 rounded-full border px-4 text-sm transition-colors duration-200",
                        topic === item
                          ? "border-signal bg-signal text-white"
                          : "border-ink/25 text-ink/80 hover:border-ink hover:text-ink",
                      )}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                <div>
                  <FieldLabel htmlFor="name">Your name</FieldLabel>
                  <Input
                    id="name"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name", { required: "Please enter your name." })}
                  />
                  <FieldError id="name-error" error={errors.name} />
                </div>

                <div>
                  <FieldLabel htmlFor="email">Your email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email", {
                      required: "Please enter your email.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address.",
                      },
                    })}
                  />
                  <FieldError id="email-error" error={errors.email} />
                </div>

                <div ref={calendarRef} className="relative sm:col-span-2">
                  <FieldLabel htmlFor="project-date" optional>
                    Preferred start date
                  </FieldLabel>
                  <button
                    id="project-date"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded={isCalendarOpen}
                    className={cn(
                      "flex h-12 w-full items-center justify-between border-b border-ink/25 text-left text-base transition-colors hover:border-ink/50 focus-visible:border-signal focus-visible:ring-0",
                      !selectedDate && "text-muted/80",
                    )}
                    onClick={() => setIsCalendarOpen((value) => !value)}
                  >
                    {formattedDate}
                    <CalendarDays className="h-4 w-4 text-muted" />
                  </button>
                  {isCalendarOpen ? (
                    <div className="absolute left-0 top-full z-20 mt-2">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => {
                          setSelectedDate(date);
                          setIsCalendarOpen(false);
                        }}
                        disabled={{ before: new Date() }}
                      />
                    </div>
                  ) : null}
                </div>

                <div className="sm:col-span-2">
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="A few lines about the project, timeline or role."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    {...register("message", { required: "Please add a message." })}
                  />
                  <FieldError id="message-error" error={errors.message} />
                </div>
              </div>

              {formError ? (
                <p
                  role="alert"
                  className="mt-6 rounded-lg border border-signal/40 bg-signal/10 p-4 text-sm leading-relaxed"
                >
                  {formError}
                </p>
              ) : null}

              <Button
                type="submit"
                size="lg"
                variant="accent"
                className="mt-8 w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Send message"}
                <Send className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </Button>
            </form>
          </MotionReveal>
        </div>
      </div>

      <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
        <DialogContent label="Message sent" onClose={() => setIsSuccessOpen(false)}>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-signal text-white">
            <Check className="h-5 w-5" />
          </span>
          <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">Message sent.</h3>
          <p className="mt-2 leading-relaxed text-ink/75">Thank you for reaching out — I'll get back to you shortly.</p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
