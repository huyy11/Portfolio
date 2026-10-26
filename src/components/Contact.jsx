import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import "./Contact.css";

const EMAIL = "sivmeybtb199@gmail.com";
const PHONE = "+855 93586328";
const PHONE_HREF = "tel:+85593586328";
const GITHUB = "https://github.com/hanhuymey";

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

const PinIcon = () => (
  <svg {...iconProps}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const GithubIcon = () => (
  <svg {...iconProps}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 5-1.9 5-6.4a5 5 0 0 0-1.4-3.5 4.6 4.6 0 0 0-.1-3.5s-1.4-.4-4.5 1.7a12.3 12.3 0 0 0-6.6 0C5.3 1.7 3.9 2.1 3.9 2.1a4.6 4.6 0 0 0-.1 3.5A5 5 0 0 0 2.4 9.1c0 4.5 2 6.1 5 6.4a3.4 3.4 0 0 0-1 2.6V21" />
  </svg>
);

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
    setSent(false);
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = t.contact.form.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = t.contact.form.errors.email;
    if (!form.subject.trim()) next.subject = t.contact.form.errors.subject;
    if (form.message.trim().length < 10)
      next.message = t.contact.form.errors.message;
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // No backend configured — hand the validated message to the visitor's
    // email app via a prefilled mailto draft (a real, working fallback).
    const subject = encodeURIComponent(form.subject.trim());
    const body = encodeURIComponent(
      `${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const infos = [
    {
      icon: <MailIcon />,
      label: t.contact.info.email,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: <PhoneIcon />,
      label: t.contact.info.phone,
      value: PHONE,
      href: PHONE_HREF,
    },
    {
      icon: <PinIcon />,
      label: t.contact.info.location,
      value: t.contact.locationValue,
      href: null,
    },
    {
      icon: <GithubIcon />,
      label: t.contact.info.github,
      value: "github.com/hanhuymey",
      href: GITHUB,
    },
  ];

  const fieldClass = (field) =>
    `contact-field${errors[field] ? " has-error" : ""}`;

  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <p className="section-label">{t.contact.label}</p>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-sub">{t.contact.text}</p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__info-col" delay={0.05}>
            <ul className="contact__info">
              {infos.map((info) => (
                <li key={info.label}>
                  <span className="contact__icon">{info.icon}</span>
                  <div>
                    <span className="contact__info-label">{info.label}</span>
                    {info.href ? (
                      <a className="contact__info-value" href={info.href}>
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact__info-value">
                        {info.value}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="cf-name">{t.contact.form.name}</label>
                  <input
                    id="cf-name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    className={fieldClass("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "cf-name-error" : undefined}
                  />
                  {errors.name && (
                    <p className="contact-form__error" id="cf-name-error" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="contact-form__field">
                  <label htmlFor="cf-email">{t.contact.form.email}</label>
                  <input
                    id="cf-email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    className={fieldClass("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "cf-email-error" : undefined}
                  />
                  {errors.email && (
                    <p className="contact-form__error" id="cf-email-error" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="cf-subject">{t.contact.form.subject}</label>
                <input
                  id="cf-subject"
                  type="text"
                  value={form.subject}
                  onChange={update("subject")}
                  className={fieldClass("subject")}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "cf-subject-error" : undefined}
                />
                {errors.subject && (
                  <p className="contact-form__error" id="cf-subject-error" role="alert">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="contact-form__field">
                <label htmlFor="cf-message">{t.contact.form.message}</label>
                <textarea
                  id="cf-message"
                  rows="5"
                  value={form.message}
                  onChange={update("message")}
                  className={fieldClass("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "cf-message-error" : undefined}
                />
                {errors.message && (
                  <p className="contact-form__error" id="cf-message-error" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn--primary">
                {t.contact.form.send}
                <MailIcon />
              </button>

              {sent && (
                <p className="contact-form__success" role="status">
                  {t.contact.form.success}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
