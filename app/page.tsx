export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fff8f1] px-6 py-10 text-slate-900">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-orange-100">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">PawID</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Smart NFC identity cards for pets.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Scan a PawID card to view a pet profile, vaccination status, deworm records and safe emergency contact details.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white" href="/dashboard">
              Owner dashboard
            </a>
            <a className="rounded-full bg-orange-100 px-5 py-3 text-sm font-semibold text-orange-700" href="/admin/cards">
              Admin cards
            </a>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['NFC scan page', 'Each card opens a unique public pet profile URL.'],
            ['Owner records', 'Owners can update vaccination, deworm and health records.'],
            ['Privacy first', 'Public users see safe information only. Editing requires login.']
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
