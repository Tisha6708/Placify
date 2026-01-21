import PageWrapper from "../components/PageWrapper";

function Progress() {
  const aptSolved = JSON.parse(localStorage.getItem("aptSolved") || "[]");
  const dsaSolved = JSON.parse(localStorage.getItem("dsaSolved") || "[]");
  const mockAttempts = localStorage.getItem("mockAttempts") || 0;
  const tier = localStorage.getItem("targetTier") || "Tier 2";

  const goals = {
    "Tier 1": { apt: 200, dsa: 300 },
    "Tier 2": { apt: 120, dsa: 150 },
    "Tier 3": { apt: 80, dsa: 80 }
  };

  const aptPercent = Math.min(
    (aptSolved.length / goals[tier].apt) * 100,
    100
  );
  const dsaPercent = Math.min(
    (dsaSolved.length / goals[tier].dsa) * 100,
    100
  );

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold mb-8">Your Progress</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500 mb-1">Aptitude Solved</p>
          <p className="text-3xl font-bold mb-2">{aptSolved.length}</p>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${aptPercent}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Goal: {goals[tier].apt}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500 mb-1">DSA Solved</p>
          <p className="text-3xl font-bold mb-2">{dsaSolved.length}</p>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: `${dsaPercent}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Goal: {goals[tier].dsa}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500 mb-1">Mock Tests</p>
          <p className="text-3xl font-bold mb-2">{mockAttempts}</p>
          <p className="text-xs text-gray-500 mt-4">
            Try at least 10 before interviews
          </p>
        </div>
      </div>

      {/* Goal Message */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="font-semibold text-lg mb-2">
          🎯 Target: {tier} Companies
        </h2>

        <p className="text-gray-700">
          Aim for at least{" "}
          <span className="font-medium">{goals[tier].dsa} DSA problems</span>{" "}
          and{" "}
          <span className="font-medium">{goals[tier].apt} aptitude questions</span>{" "}
          to be well prepared for {tier} companies.
        </p>
      </div>
    </PageWrapper>
  );
}

export default Progress;
