import { useEffect, useState } from "react";
import allQuestions from "../data/aptitude.json";

function MockTest() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(300); // 5 min
  const [finished, setFinished] = useState(false);

  const startTest = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 5)); // 5 for now
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
        <p className="mb-6">5 questions • 5 minutes</p>

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
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Test Completed</h1>
        <p className="text-xl mb-4">
          Score: {score} / {questions.length}
        </p>

        <button
          onClick={() => window.location.reload()}
          className="px-5 py-2 bg-green-600 text-white rounded"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <div className="flex justify-between mb-4">
        <p>Question {current + 1}/{questions.length}</p>
        <p className="font-semibold">
          ⏱ {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
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
