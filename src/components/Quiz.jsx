import React, { useEffect, useState, useRef } from "react";

export default function Quiz({ questions, onFinish, onRestart }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answersShuffled, setAnswersShuffled] = useState([]);
  const correctSoundRef = useRef();
  const wrongSoundRef = useRef();
  const timeoutRef = useRef();

  useEffect(() => {
    const shuffled = questions.map(q => {
      const shuffledAnswers = shuffleArray(q.answers);
      const correctIndex = shuffledAnswers.findIndex(ans => ans === q.correct);
      return { shuffledAnswers, correctIndex };
    });
    setAnswersShuffled(shuffled);
  }, [questions]);

  // CURĂȚĂ orice timeout activ la demontare (fix pentru bugul cu dispariția rezultatului)
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!questions || !questions.length || !answersShuffled.length) {
    return <div>No questions for this category!</div>;
  }

  const { shuffledAnswers, correctIndex } = answersShuffled[current];

  function handleSelect(idx) {
    setSelected(idx);
    const isCorrect = idx === correctIndex;
    let nextScore = score;

    if (isCorrect) {
      correctSoundRef.current.currentTime = 0;
      correctSoundRef.current.play();
      nextScore = score + 1;
      setScore(nextScore);
    } else {
      wrongSoundRef.current.currentTime = 0;
      wrongSoundRef.current.play();
    }

    // Salvează timeout-ul în ref pentru a-l putea curăța la unmount!
    timeoutRef.current = setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((c) => c + 1);
        setSelected(null);
      } else {
        onFinish(nextScore); // Folosește scorul local, nu score-ul din stare!
      }
    }, 1200);
  }

  function handleRestart() {
    const shuffled = questions.map(q => {
      const shuffledAnswers = shuffleArray(q.answers);
      const correctIndex = shuffledAnswers.findIndex(ans => ans === q.correct);
      return { shuffledAnswers, correctIndex };
    });
    setAnswersShuffled(shuffled);
    setCurrent(0);
    setScore(0);
    setSelected(null);
    if (typeof onRestart === "function") onRestart();
    // Curăță timeout dacă există
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  // Bara de progres fluentă
  const progress = ((current + (selected !== null ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <audio ref={correctSoundRef} src="/correct.wav" preload="auto" />
      <audio ref={wrongSoundRef} src="/wrong.wav" preload="auto" />

      <div className="top-info">
        <span>
          Question {current + 1} / {questions.length}
        </span>
        <button
          className="primary-btn"
          style={{ padding: "0.35em 1.1em", fontSize: "0.99rem" }}
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>

      <div className="quiz-question">{questions[current].question}</div>

      <div className="answers-grid">
        {shuffledAnswers.map((ans, idx) => {
          let btnClass = "";
          if (selected === null) {
            btnClass = "";
          } else if (idx === correctIndex) {
            btnClass = "correct";
          } else if (idx === selected) {
            btnClass = "incorrect";
          } else {
            btnClass = "disabled";
          }
          return (
            <button
              key={idx}
              className={btnClass}
              disabled={selected !== null}
              onClick={() => handleSelect(idx)}
            >
              {ans}
            </button>
          );
        })}
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}