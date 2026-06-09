type RecordItem = {
  id: string;
  type: string;
  title: string;
  date: string;
  nextDueDate?: string;
  vetName?: string;
  notes?: string;
};

export function MedicalTimeline({ records }: { records: RecordItem[] }) {
  return (
    <div className="space-y-3">
      {records.map((record) => (
        <article key={record.id} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-orange-100">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">{record.type}</p>
              <h3 className="mt-1 font-semibold text-slate-900">{record.title}</h3>
            </div>
            <p className="text-sm text-slate-500">{record.date}</p>
          </div>
          {record.nextDueDate ? <p className="mt-2 text-sm text-slate-600">Next due: {record.nextDueDate}</p> : null}
          {record.vetName ? <p className="text-sm text-slate-600">Vet: {record.vetName}</p> : null}
          {record.notes ? <p className="mt-2 text-sm text-slate-500">{record.notes}</p> : null}
        </article>
      ))}
    </div>
  );
}
