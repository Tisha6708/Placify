import { useState } from "react";
import allQuestions from "../data/aptitude.json";

function Aptitude() {
  const [topic, setTopic] = useState("Quant");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = allQuestions.filter(q => q.topic === topic);
  const q = questions[current];

  const handleNext = () => {
    if (selected === q.answer) setScore(score + 1);

    // save solved
    const solved = JSON.parse(localStorage.getItem("aptSolved") || "[]");
    if (!solved.includes(q.id)) {
      localStorage.setItem("aptSolved", JSON.stringify([...solved, q.id]));
    }

    setSelected(null);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Aptitude Practice</h1>

      {/* Topic Buttons */}
      <div className="flex gap-3 mb-6">
        {["Quant", "Logical", "Verbal"].map(t => (
          <button
            key={t}
            onClick={() => {
              setTopic(t);
              resetQuiz();
            }}
            className={`px-4 py-2 rounded ${
              topic === t ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {questions.length === 0 ? (
        <p>No questions available.</p>
      ) : showResult ? (
        <div>
          <h2 className="text-xl font-semibold mb-2">Result</h2>
          <p>You scored {score} out of {questions.length}</p>

          <button
            onClick={resetQuiz}
            className="mt-4 px-5 py-2 bg-green-600 text-white rounded"
          >
            Practice Again
          </button>
        </div>
      ) : (
        <>
          <p className="mb-4 font-medium">
            Q{current + 1}. {q.question}
          </p>

          <div className="space-y-3">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(opt)}
                className={`w-full text-left px-4 py-2 rounded border
                  ${
                    selected === opt
                      ? "bg-blue-500 text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={!selected}
            className="mt-6 px-6 py-2 bg-green-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}

export default Aptitude;
