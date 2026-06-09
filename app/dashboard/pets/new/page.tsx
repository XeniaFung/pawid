import { PetForm } from '@/components/PetForm';

export default function NewPetPage() {
  return (
    <main className="min-h-screen bg-[#fff8f1] px-4 py-6 text-slate-900">
      <section className="mx-auto max-w-xl space-y-5">
        <div>
          <a href="/dashboard" className="text-sm font-semibold text-orange-600">← Back to dashboard</a>
          <h1 className="mt-4 text-3xl font-bold">Add pet</h1>
          <p className="mt-2 text-slate-600">Create a pet profile that can be linked to a PawID NFC card.</p>
        </div>
        <PetForm />
      </section>
    </main>
  );
}
