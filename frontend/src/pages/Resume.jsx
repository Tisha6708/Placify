import resumeData from "../data/resume";

function Resume() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Resume Tips & Templates
      </h1>

      {/* Tips */}
      <div className="mb-8 bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold mb-3">Resume Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {resumeData.tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>

      {/* Mistakes */}
      <div className="mb-8 bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold mb-3">Common Mistakes</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {resumeData.mistakes.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>

      {/* Templates */}
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold mb-4">Resume Templates</h2>

        <div className="space-y-3">
          {resumeData.templates.map((t, i) => (
            <a
              key={i}
              href={t.link}
              target="_blank"
              rel="noreferrer"
              className="block px-4 py-3 border rounded hover:bg-gray-50"
            >
              📄 {t.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
