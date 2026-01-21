import { useState } from "react";
import problems from "../data/dsa.json";
import PageWrapper from "../components/PageWrapper";

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
      window.location.reload();
    }
  };

  const topics = ["All", ...new Set(problems.map(p => p.topic))];

  const diffColor = (d) => {
    if (d === "Easy") return "bg-green-100 text-green-700";
    if (d === "Medium") return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold mb-6">DSA Practice</h1>

      {/* Filters */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {topics.map(t => (
          <button
            key={t}
            onClick={() => setTopic(t)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              topic === t
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6">
        {filtered.map(p => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-semibold">{p.title}</h2>
                <span
                  className={`text-xs px-2 py-1 rounded ${diffColor(
                    p.difficulty
                  )}`}
                >
                  {p.difficulty}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-3">{p.topic}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.companies.map((c, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Solve →
              </a>

              {solved.includes(p.id) ? (
                <span className="text-green-600 font-semibold text-sm">
                  ✔ Solved
                </span>
              ) : (
                <button
                  onClick={() => markSolved(p.id)}
                  className="text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Mark Solved
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

export default DSA;
