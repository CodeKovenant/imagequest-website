import type { FormEvent } from "react";

const CONTACT_EMAIL = "info@imagequest.co.ke";

export function sendContactRequest(event: FormEvent<HTMLFormElement>, subject: string) {
  event.preventDefault();
  const form = event.currentTarget;
  const labels = Array.from(form.querySelectorAll("label"));
  const fields = Array.from(
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
      "input, textarea, select",
    ),
  );

  const details = fields
    .filter((field) => {
      if (field instanceof HTMLInputElement) {
        return (
          !["button", "submit", "reset", "hidden", "file"].includes(field.type) &&
          (!["checkbox", "radio"].includes(field.type) || field.checked)
        );
      }
      return true;
    })
    .map((field, index) => {
      const label = labels.find((item) => item.htmlFor === field.id || item.contains(field));
      const labelText = label?.textContent?.replace(/\s+/g, " ").trim();
      const placeholder = "placeholder" in field ? field.placeholder : "";
      const fieldName = labelText || field.name || placeholder || `Field ${index + 1}`;
      return `${fieldName}: ${field.value}`;
    })
    .filter((entry) => !entry.endsWith(": "));

  const body = [
    "Please send this request to Image Quest Graphics Ltd.",
    "",
    ...details,
    "",
    `Page: ${window.location.href}`,
  ].join("\n");
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
