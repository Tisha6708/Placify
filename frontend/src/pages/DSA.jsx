import { useState } from "react";
import problems from "../data/dsa.json";

function DSA() {
  const [topic, setTopic] = useState("All");

  const solved = JSON.parse(localStorage.getItem("dsaSolved") || "[]");

  const filtered =
    topic === "All"
      ? problems
      : problems.filter(p => p.topic === topic);

  const markSolved = (id) => {
    if (!solved.includes(id)) {
      localStorage.setItem("dsaSolved", JSON.stringify([...solved, id]));
      window.location.reload(); // simple refresh for now
    }
  };

  const topics = ["All", ...new Set(problems.map(p => p.topic))];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">DSA Practice</h1>

      {/* Filters */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {topics.map(t => (
          <button
            key={t}
            onClick={() => setTopic(t)}
            className={`px-4 py-2 rounded ${
              topic === t ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Problems */}
      <div className="space-y-4">
        {filtered.map(p => (
          <div
            key={p.id}
            className="p-4 border rounded flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{p.title}</h2>
              <p className="text-sm text-gray-500">
                {p.topic} • {p.difficulty}
              </p>
              <p className="text-xs text-gray-400">
                {p.companies.join(", ")}
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 bg-indigo-600 text-white rounded text-sm"
              >
                Solve
              </a>

              {solved.includes(p.id) ? (
                <span className="text-green-600 font-semibold">✔ Done</span>
              ) : (
                <button
                  onClick={() => markSolved(p.id)}
                  className="px-3 py-1 bg-green-600 text-white rounded text-sm"
                >
                  Mark Solved
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DSA;
