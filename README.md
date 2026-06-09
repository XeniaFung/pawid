# PawID

PawID is a mobile-first NFC pet identity card web app. Each NFC card stores a unique public URL. When scanned, it opens a pet profile page with public pet information, vaccination and deworm records, and emergency contact options. Owners can sign in to edit their pets and update medical history.

## MVP features

- Public NFC scan page: `/p/[publicCode]`
- Owner dashboard: `/dashboard`
- Add and edit pet profiles
- Vaccination, deworm, checkup and medical record timeline
- Admin NFC card generator: `/admin/cards`
- Supabase Auth, PostgreSQL database and Storage-ready structure
- Vercel-ready Next.js app

## Tech stack

- Next.js App Router
- TypeScript
- Supabase Auth + Database
- Tailwind CSS
- Vercel deployment

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Create a Supabase project and paste the values into `.env.local`.

4. Run the SQL in `supabase/schema.sql` inside Supabase SQL Editor.

5. Start development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## NFC flow

1. Admin creates an NFC card in `/admin/cards`.
2. PawID generates a URL like `https://your-domain.com/p/AB12CD`.
3. Write that URL to a physical NFC card using an NFC writer app.
4. Pet owner claims the card and adds pet information.
5. Anyone scanning the card can view safe public information only.
6. Only logged-in owner/admin users can edit records.

## Important privacy rules

- Do not display full address publicly.
- Do not allow public users to edit pet data.
- Use owner login for all edit actions.
- Public contact should use a controlled button such as WhatsApp or call.
- Add a Privacy Policy before real launch.
