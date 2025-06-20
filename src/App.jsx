import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import questionsData from "./data/questions";
import "./index.css";

// Importă SVG-urile ca imagini pentru Vite!
import htmlLogo from "./logos/html.svg";
import cssLogo from "./logos/css.svg";
import jsLogo from "./logos/js.svg";
import reactLogo from "./logos/react.svg";

const CATEGORIES = [
  { id: "html", label: "HTML", icon: <img src={htmlLogo} alt="HTML" width={38} height={38} /> },
  { id: "css", label: "CSS", icon: <img src={cssLogo} alt="CSS" width={38} height={38} /> },
  { id: "javascript", label: "JavaScript", icon: <img src={jsLogo} alt="JavaScript" width={38} height={38} /> },
  { id: "react", label: "React", icon: <img src={reactLogo} alt="React" width={38} height={38} /> },
  { id: "all", label: "All Mixed", icon: "🔀" },
];

function getRandomQuestions(questionsArray, count = 10) {
  const shuffled = [...questionsArray].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function App() {
  const [stage, setStage] = useState("start");
  const [category, setCategory] = useState("html");
  const [score, setScore] = useState(0);
  const [gameQuestions, setGameQuestions] = useState([]);

  function handleStart() {
    let selectedQuestions = [];
    if (category === "all") {
      const allQuestions = Object.values(questionsData).flat();
      selectedQuestions = getRandomQuestions(allQuestions, 10);
    } else {
      selectedQuestions = getRandomQuestions(questionsData[category] || [], 10);
    }
    setGameQuestions(selectedQuestions);
    setStage("quiz");
  }

  function handleFinish(finalScore) {
    setScore(finalScore);
    setStage("result");
  }

  function handleRestart() {
    setStage("start");
    setScore(0);
  }

  return (
    <div className="app">
      {stage === "start" && (
        <>
          <header className="hero">
            <h1>DevQuiz</h1>
            <p className="hero-sub">Select a category and hit start!</p>
          </header>

          <div className="categories-grid">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={
                  "category-card" + (category === cat.id ? " selected" : "")
                }
                onClick={() => setCategory(cat.id)}
              >
                <span className="category-icon">{cat.icon}</span>
                <span className="category-label">{cat.label}</span>
              </button>
            ))}
            <button
              key="start"
              onClick={handleStart}
              className="category-card start-card selected"
            >
              <span className="category-icon start-icon">▶</span>
              <span className="start-text">Start Game</span>
            </button>
          </div>
        </>
      )}

      {stage === "quiz" && (
        <div className="page-section">
          <Quiz
            questions={gameQuestions}
            onFinish={handleFinish}
            onRestart={handleRestart}
          />
        </div>
      )}

      {stage === "result" && (
        <div className="page-section">
          <Result score={score} onRestart={handleRestart} />
        </div>
      )}
    </div>
  );
}