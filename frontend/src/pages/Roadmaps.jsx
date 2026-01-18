import { useState } from "react";
import roadmaps from "../data/roadmaps";

function Roadmaps() {
  const [tier, setTier] = useState("tier1");

  const data = roadmaps[tier];

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Placement Preparation Roadmaps
      </h1>

      {/* Tier Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setTier("tier1")}
          className={`px-4 py-2 rounded ${
            tier === "tier1" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Tier 1
        </button>

        <button
          onClick={() => setTier("tier2")}
          className={`px-4 py-2 rounded ${
            tier === "tier2" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Tier 2
        </button>

        <button
          onClick={() => setTier("tier3")}
          className={`px-4 py-2 rounded ${
            tier === "tier3" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Tier 3
        </button>
      </div>

      {/* Roadmap Card */}
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Focus:</span> {data.focus}
        </p>

        <ul className="space-y-3 list-decimal list-inside">
          {data.steps.map((step, idx) => (
            <li key={idx} className="text-gray-700">
              {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Roadmaps;
