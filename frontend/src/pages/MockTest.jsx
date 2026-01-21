import { useEffect, useState } from "react";
import allQuestions from "../data/aptitude.json";

function MockTest() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 min
  const [finished, setFinished] = useState(false);

  const startTest = () => {
    const quant = allQuestions.filter(q => q.topic === "Quant");
    const logical = allQuestions.filter(q => q.topic === "Logical");
    const verbal = allQuestions.filter(q => q.topic === "Verbal");

    const pick = (arr, n) =>
      [...arr].sort(() => 0.5 - Math.random()).slice(0, n);

    const selected = [
      ...pick(quant, 5),
      ...pick(logical, 5),
      ...pick(verbal, 5)
    ].sort(() => 0.5 - Math.random());

    setQuestions(selected);
    setStarted(true);
  };

  useEffect(() => {
    if (!started || finished) return;

    if (timeLeft === 0) {
      submitTest();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [started, timeLeft, finished]);

  const submitTest = () => {
    setFinished(true);

    let attempts = JSON.parse(localStorage.getItem("mockAttempts") || "0");
    localStorage.setItem("mockAttempts", attempts + 1);
  };

  const q = questions[current];

  if (!started) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Mock Test</h1>
        <p className="mb-2">15 questions • 20 minutes</p>
        <p className="text-sm text-gray-500 mb-6">
          Quant: 5 • Logical: 5 • Verbal: 5
        </p>

        <button
          onClick={startTest}
          className="px-6 py-3 bg-blue-600 text-white rounded"
        >
          Start Test
        </button>
      </div>
    );
  }

  if (finished) {
    const score = questions.filter(
      q => answers[q.id] === q.answer
    ).length;

    return (
      <div className="p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Test Completed</h1>

        <p className="text-xl mb-6 text-center">
          Score: {score} / {questions.length}
        </p>

        {/* REVIEW */}
        <div className="text-left mb-8">
          <h3 className="font-semibold mb-3">Review Answers</h3>

          {questions.map((q, i) => (
            <div key={q.id} className="mb-3 text-sm">
              <p className="font-medium">
                Q{i + 1}. {q.question}
              </p>
              <p>
                Your answer:{" "}
                <span
                  className={
                    answers[q.id] === q.answer
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {answers[q.id] || "Not answered"}
                </span>
              </p>
              <p className="text-green-700">Correct: {q.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => window.location.reload()}
            className="px-5 py-2 bg-green-600 text-white rounded"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <div className="flex justify-between mb-4">
        <p>
          Question {current + 1}/{questions.length}
        </p>
        <p className="font-semibold">
          ⏱ {Math.floor(timeLeft / 60)}:
          {String(timeLeft % 60).padStart(2, "0")}
        </p>
      </div>

      <p className="mb-4 font-medium">{q.question}</p>

      <div className="space-y-3">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() =>
              setAnswers({ ...answers, [q.id]: opt })
            }
            className={`w-full text-left px-4 py-2 rounded border
              ${
                answers[q.id] === opt
                  ? "bg-blue-500 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          disabled={current === 0}
          onClick={() => setCurrent(c => c - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {current === questions.length - 1 ? (
          <button
            onClick={submitTest}
            className="px-5 py-2 bg-green-600 text-white rounded"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={() => setCurrent(c => c + 1)}
            className="px-5 py-2 bg-blue-600 text-white rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default MockTest;
