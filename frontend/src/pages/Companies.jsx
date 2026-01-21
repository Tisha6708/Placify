import { useState } from "react";
import companies from "../data/companies";
import PageWrapper from "../components/PageWrapper";

function Companies() {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");

  const filteredCompanies = companies.filter(c =>
  c.name.toLowerCase().includes(query.toLowerCase())
);


  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold mb-6">Company-wise Preparation</h1>

      {/* MOBILE VIEW */}
      <div className="md:hidden">

        <input
  type="text"
  placeholder="Search company..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  className="mb-4 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
/>

        {!selected ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredCompanies.map(c => (
              <div
                key={c.id}
                onClick={() => setSelected(c)}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer text-center"
              >
                <h2 className="font-semibold">{c.name}</h2>
                <p className="text-xs text-gray-500 mt-1">Tap to view</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow p-6">
            <button
              onClick={() => setSelected(null)}
              className="mb-4 text-blue-600 text-sm"
            >
              ← Back to companies
            </button>

            <h2 className="text-2xl font-bold mb-3">{selected.name}</h2>

            <p className="mb-4">
              <span className="font-medium">Exam Pattern:</span>{" "}
              {selected.pattern}
            </p>

            <div className="mb-5">
              <p className="font-medium mb-2">Topics Asked</p>
              <div className="flex flex-wrap gap-2">
                {selected.topics.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">Preparation Tips</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {selected.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* DESKTOP VIEW */}
      <input
  type="text"
  placeholder="Search company..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  className="mb-4 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
/>

      <div className="hidden md:grid md:grid-cols-3 gap-6">
        
        {/* List */}
        <div className="space-y-4">
          {filteredCompanies.map(c => (
            <div
              key={c.id}
              onClick={() => setSelected(c)}
              className={`p-4 rounded-lg cursor-pointer transition border
                ${
                  selected?.id === c.id
                    ? "bg-blue-50 border-blue-500"
                    : "bg-white hover:bg-gray-50"
                }`}
            >
              <h2 className="font-semibold">{c.name}</h2>
              <p className="text-xs text-gray-500 mt-1">{c.pattern}</p>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
          {selected ? (
            <>
              <h2 className="text-2xl font-bold mb-3">{selected.name}</h2>

              <p className="mb-4">
                <span className="font-medium">Exam Pattern:</span>{" "}
                {selected.pattern}
              </p>

              <div className="mb-5">
                <p className="font-medium mb-2">Topics Asked</p>
                <div className="flex flex-wrap gap-2">
                  {selected.topics.map((t, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-medium mb-2">Preparation Tips</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {selected.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <p className="text-gray-500">
              Select a company to view details
            </p>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}

export default Companies;
