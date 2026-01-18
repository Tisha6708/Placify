import { useState } from "react";
import companies from "../data/companies";

function Companies() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Company-wise Preparation
      </h1>

      {/* Company Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {companies.map(c => (
          <div
            key={c.id}
            onClick={() => setSelected(c)}
            className="p-5 border rounded shadow hover:shadow-lg cursor-pointer bg-white"
          >
            <h2 className="text-xl font-semibold">{c.name}</h2>
            <p className="text-gray-500 text-sm mt-1">
              Pattern: {c.pattern}
            </p>
          </div>
        ))}
      </div>

      {/* Selected Company Details */}
      {selected && (
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>

          <p className="mb-3">
            <span className="font-medium">Exam Pattern:</span>{" "}
            {selected.pattern}
          </p>

          <p className="font-medium mb-1">Topics Asked:</p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            {selected.topics.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>

          <p className="font-medium mb-1">Preparation Tips:</p>
          <ul className="list-disc list-inside text-gray-700">
            {selected.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Companies;
