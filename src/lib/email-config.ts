export function emailEnabled() {
  // Direct email remains disabled for this public launch, regardless of secrets.
  if (process.env.NODE_ENV === "production") return false;
  const key = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_EMAIL_FROM?.trim();
  if (!key || !from) return false;
  return true;
}
