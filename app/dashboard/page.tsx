import { demoPet } from '@/lib/demo-data';
import { MedicalTimeline } from '@/components/MedicalTimeline';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#fff8f1] px-4 py-6 text-slate-900">
      <section className="mx-auto max-w-4xl space-y-5">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">Owner dashboard</p>
          <h1 className="mt-3 text-3xl font-bold">Manage your pets</h1>
          <p className="mt-2 text-slate-600">Add pet profiles, update vaccination records, deworm history and medical notes.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="/dashboard/pets/new" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">Add pet</a>
            <a href="/p/DEMO01" className="rounded-full bg-orange-100 px-5 py-3 text-sm font-semibold text-orange-700">Preview scan page</a>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-orange-100">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">🐾</div>
              <div>
                <h2 className="text-xl font-bold">{demoPet.name}</h2>
                <p className="text-sm text-slate-600">{demoPet.breed} • {demoPet.gender}</p>
              </div>
            </div>
            <dl className="mt-5 space-y-3 text-sm">
              <div><dt className="text-slate-500">Species</dt><dd className="font-semibold">{demoPet.species}</dd></div>
              <div><dt className="text-slate-500">Birthday</dt><dd className="font-semibold">{demoPet.birthday}</dd></div>
              <div><dt className="text-slate-500">Allergy</dt><dd className="font-semibold">{demoPet.allergyNote}</dd></div>
            </dl>
            <a href="/dashboard/pets/demo" className="mt-5 block rounded-2xl bg-orange-100 px-4 py-3 text-center text-sm font-semibold text-orange-700">Edit pet profile</a>
          </div>

          <div>
            <h2 className="mb-3 px-1 font-semibold">Latest records</h2>
            <MedicalTimeline records={demoPet.records} />
          </div>
        </div>
      </section>
    </main>
  );
}
