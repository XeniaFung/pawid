export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#fff8f1] px-6 py-8 text-slate-900">
      <section className="mx-auto max-w-4xl space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-pink-100">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink-500">Meowkad ID Profile</p>
          <h1 className="mt-3 text-3xl font-bold">Pet ID Card Dashboard</h1>
          <p className="mt-2 text-slate-600">Customer logs in with ID Card No and default password abc123. Profile can be edited after login.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-pink-100">
            <h2 className="text-xl font-bold">Pet Profile</h2>
            <p className="mt-3 text-sm text-slate-600">Name, species, breed, sex, status, address and owner contact will be managed here.</p>
            <a className="mt-5 inline-block rounded-full bg-pink-100 px-5 py-3 text-sm font-semibold text-pink-700" href="/dashboard/pets/new">Edit profile</a>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-pink-100">
            <h2 className="text-xl font-bold">Health Records</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Vaccination record</li>
              <li>Deworm record</li>
              <li>Operation record</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
