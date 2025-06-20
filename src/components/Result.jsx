import React from "react";

function getResultEmoji(score, total) {
  const percent = score / total;
  if (percent === 1) return "🏆";
  if (percent >= 0.8) return "🎉";
  if (percent >= 0.5) return "👍";
  if (percent > 0) return "🙂";
  return "😅";
}

function getResultMessage(score, total) {
  const percent = score / total;
  if (percent === 1) return "Legend! You got all answers right!";
  if (percent >= 0.8) return "Awesome! Great score!";
  if (percent >= 0.5) return "Good job! Keep training!";
  if (percent > 0) return "You can do better!";
  return "Try again and beat your best!";
}

export default function Result({ score, onRestart }) {
  const total = 10;
  return (
    <div className="result-container fancy-result">
      <div className="result-emoji">{getResultEmoji(score, total)}</div>
      <div className="result-score">
        {score} / {total}
      </div>
      <div className="result-bar-wrap">
        <div className="result-bar-bg">
          <div
            className="result-bar-fill"
            style={{
              width: `${(score / total) * 100}%`,
              background:
                score === total
                  ? "linear-gradient(90deg, #FFD700 60%, #ff71ce 100%)"
                  : score >= 8
                  ? "linear-gradient(90deg, #89e18a 60%, #57c357 100%)"
                  : score >= 5
                  ? "linear-gradient(90deg, #a45de4 60%, #57c357 100%)"
                  : "linear-gradient(90deg, #ffb3b3 60%, #fa5959 100%)",
            }}
          ></div>
        </div>
      </div>
      <div className="result-message">{getResultMessage(score, total)}</div>
      <button className="primary-btn result-btn" onClick={onRestart}>
        Try Again
      </button>
    </div>
  );
}