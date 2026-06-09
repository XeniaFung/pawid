const demoCards = [
  { code: 'DEMO01', status: 'active', petName: 'Mochi', url: '/p/DEMO01' },
  { code: 'NEW892', status: 'unused', petName: '-', url: '/p/NEW892' },
  { code: 'LOST77', status: 'lost', petName: 'Boba', url: '/p/LOST77' }
];

export default function AdminCardsPage() {
  return (
    <main className="min-h-screen bg-[#fff8f1] px-4 py-6 text-slate-900">
      <section className="mx-auto max-w-4xl space-y-5">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">Admin</p>
          <h1 className="mt-3 text-3xl font-bold">NFC card generator</h1>
          <p className="mt-2 text-slate-600">Create unique public codes and write the generated URL into each physical NFC card.</p>
          <button className="mt-5 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">Generate new card code</button>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-orange-100">
          <table className="w-full text-left text-sm">
            <thead className="bg-orange-50 text-slate-600">
              <tr>
                <th className="px-4 py-3">Code</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Pet</th>
                <th className="px-4 py-3">Scan URL</th>
              </tr>
            </thead>
            <tbody>
              {demoCards.map((card) => (
                <tr key={card.code} className="border-t border-orange-100">
                  <td className="px-4 py-3 font-semibold">{card.code}</td>
                  <td className="px-4 py-3">{card.status}</td>
                  <td className="px-4 py-3">{card.petName}</td>
                  <td className="px-4 py-3"><a className="font-semibold text-orange-600" href={card.url}>{card.url}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
