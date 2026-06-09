import { MedicalTimeline } from './MedicalTimeline';

type PetRecord = {
  id: string;
  type: string;
  title: string;
  date: string;
  nextDueDate?: string;
  vetName?: string;
  notes?: string;
};

type PetPublicProfileProps = {
  pet: {
    name: string;
    species: string;
    breed?: string;
    gender?: string;
    birthday?: string;
    allergyNote?: string;
    publicNote?: string;
    ownerName?: string;
    ownerPhone?: string;
    records: PetRecord[];
  };
  publicCode: string;
};

export function PetPublicProfile({ pet, publicCode }: PetPublicProfileProps) {
  const whatsappUrl = pet.ownerPhone ? `https://wa.me/${pet.ownerPhone.replace(/[^0-9]/g, '')}` : '#';

  return (
    <main className="min-h-screen bg-[#fff8f1] px-4 py-6 text-slate-900">
      <section className="mx-auto max-w-xl space-y-5">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">PawID card</p>
          <div className="mt-5 flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-100 text-4xl">🐾</div>
            <div>
              <h1 className="text-3xl font-bold">{pet.name}</h1>
              <p className="mt-1 text-slate-600">{pet.breed || pet.species} • {pet.gender || 'Pet'}</p>
              <p className="mt-1 text-xs text-slate-400">Card code: {publicCode}</p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-orange-50 p-3">
              <p className="text-slate-500">Species</p>
              <p className="font-semibold">{pet.species}</p>
            </div>
            <div className="rounded-2xl bg-orange-50 p-3">
              <p className="text-slate-500">Birthday</p>
              <p className="font-semibold">{pet.birthday || 'Not set'}</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-orange-100">
          <h2 className="font-semibold">Important notes</h2>
          <p className="mt-2 text-sm text-slate-600">Allergy: {pet.allergyNote || 'Not set'}</p>
          <p className="mt-1 text-sm text-slate-600">{pet.publicNote || 'No public note.'}</p>
          <a className="mt-4 block rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white" href={whatsappUrl}>
            Contact owner
          </a>
        </div>

        <div>
          <h2 className="mb-3 px-1 font-semibold">Health records</h2>
          <MedicalTimeline records={pet.records} />
        </div>
      </section>
    </main>
  );
}
