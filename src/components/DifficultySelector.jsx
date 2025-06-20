import React, { useState } from "react";

export default function DifficultySelector({ onStart }) {
  const [category, setCategory] = useState("html");
  return (
    <div className="setup-container">
      <h2>Select category and start</h2>
      <select onChange={(e)=>setCategory(e.target.value)} value={category}>
        <option value="all">All Mixed</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
        <option value="react">React</option>
      </select>
      <button onClick={()=>onStart(category)}>Start Quiz</button>
    </div>
  )
}
