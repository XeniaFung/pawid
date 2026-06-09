export function PetForm() {
  return (
    <form className="space-y-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
      {[
        ['petName', 'Pet name', 'Mochi'],
        ['species', 'Species', 'Dog'],
        ['breed', 'Breed', 'Poodle Mix'],
        ['gender', 'Gender', 'Female'],
        ['birthday', 'Birthday', '2021-04-12'],
        ['allergyNote', 'Allergy note', 'No known allergy']
      ].map(([id, label, placeholder]) => (
        <label key={id} className="block">
          <span className="text-sm font-medium text-slate-700">{label}</span>
          <input
            id={id}
            name={id}
            placeholder={placeholder}
            className="mt-1 w-full rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 text-sm outline-none focus:border-orange-300"
          />
        </label>
      ))}
      <label className="block">
        <span className="text-sm font-medium text-slate-700">Public note</span>
        <textarea
          name="publicNote"
          rows={4}
          placeholder="Friendly but nervous around loud sounds."
          className="mt-1 w-full rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 text-sm outline-none focus:border-orange-300"
        />
      </label>
      <button type="button" className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
        Save pet profile
      </button>
      <p className="text-xs text-slate-500">This is a UI form placeholder. After Supabase is connected, this form will save to the pets table.</p>
    </form>
  );
}
