
# Pre-Order Form Modal

## What We're Building

A modal dialog (overlay popup) will appear when a visitor clicks any "Pre-Order Now" or "Upgrade Your Court" button. It collects:

- Full Name
- Email
- Club Name
- Location

On submission, the form data is sent directly to **flipscorepadel@gmail.com** via the free [Formspree](https://formspree.io) service — no backend or account needed.

---

## How It Works

```text
User clicks button
       ↓
Modal opens with form
       ↓
User fills: Name, Email, Club Name, Location
       ↓
Clicks "Send Pre-Order Request"
       ↓
Formspree sends email to flipscorepadel@gmail.com
       ↓
Success message shown in modal
```

---

## Files to Create / Edit

### New file: `src/components/landing/PreOrderModal.tsx`
A modal dialog built with the existing Radix UI Dialog component (already installed). Contains:
- Form with 4 fields: Name, Email, Club Name, Location
- Submits via `fetch` to a Formspree endpoint
- Shows a success confirmation after submission
- Styled consistently with the rest of the landing page (rounded-none, serif headings, brand colors)

### Edited: `src/components/landing/Hero.tsx`
- Import and render `PreOrderModal`
- "Pre-Order Now" button opens the modal

### Edited: `src/components/landing/Solution.tsx`
- Import and render `PreOrderModal`
- "Upgrade Your Court" button opens the modal

### Edited: `src/components/landing/FinalCTA.tsx`
- Import and render `PreOrderModal`
- "Pre-Order Now" button opens the modal

---

## Formspree Setup (One-Time, Free)

To activate email delivery, you'll need to:

1. Go to [formspree.io](https://formspree.io) and sign up for a free account
2. Create a new form — it will give you a short endpoint ID (e.g. `xpwzgkqb`)
3. Paste that ID into the code where indicated

Until you do this, the form will still show and submit — it just won't send emails yet. I can hardcode a placeholder so it's ready for your ID.

---

## Technical Notes

- Uses the existing `@radix-ui/react-dialog` (already installed — no new packages needed)
- Uses the existing `react-hook-form` + `zod` for validation (already installed)
- All 4 fields are required with basic validation (valid email format, non-empty strings)
- Form resets and shows a thank-you message on success
- Modal is fully responsive and accessible
