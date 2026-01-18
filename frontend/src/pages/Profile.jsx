import { useState } from "react";

function Profile() {
  const [tier, setTier] = useState(
    localStorage.getItem("targetTier") || "Tier 2"
  );

  const aptSolved = JSON.parse(localStorage.getItem("aptSolved") || "[]");
  const dsaSolved = JSON.parse(localStorage.getItem("dsaSolved") || "[]");
  const mockAttempts = localStorage.getItem("mockAttempts") || 0;

  const updateTier = (t) => {
    setTier(t);
    localStorage.setItem("targetTier", t);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>

      {/* Target Tier */}
      <div className="bg-white shadow rounded p-6 mb-6">
        <h2 className="text-lg font-semibold mb-3">Target Companies</h2>

        <div className="flex gap-3">
          {["Tier 1", "Tier 2", "Tier 3"].map(t => (
            <button
              key={t}
              onClick={() => updateTier(t)}
              className={`px-4 py-2 rounded ${
                tier === t ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-2">
          Current target: <span className="font-medium">{tier}</span>
        </p>
      </div>

      {/* Stats */}
      <div className="bg-white shadow rounded p-6 mb-6">
        <h2 className="text-lg font-semibold mb-3">Your Stats</h2>

        <p>🧠 Aptitude Solved: {aptSolved.length}</p>
        <p>💻 DSA Solved: {dsaSolved.length}</p>
        <p>🧪 Mock Tests: {mockAttempts}</p>
      </div>

      {/* Future Section */}
      <div className="bg-white shadow rounded p-6 text-gray-500">
        <h2 className="text-lg font-semibold mb-2">Coming Soon</h2>
        <ul className="list-disc list-inside">
          <li>Login & cloud sync</li>
          <li>Resume upload</li>
          <li>Interview experience submission</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
