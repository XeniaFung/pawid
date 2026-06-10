const records = [
  ['Vaccination', 'Annual core vaccine', '2026-03-20', '2027-03-20'],
  ['Deworm', 'Deworm tablet', '2026-05-02', '2026-08-02'],
  ['Operation', 'No operation record added', '-', '-']
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#fff8f1] px-4 py-6 text-slate-900">
      <section className="mx-auto max-w-5xl space-y-5">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-pink-100">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-500">Meowkad