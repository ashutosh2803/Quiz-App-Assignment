import React, { useEffect, useState } from "react";
import data from "./data.json";

const Quiz = () => {
  const [count, setCount] = useState(10);
  const [questionNo, setQuestionNo] = useState(1);
  useEffect(() => {
    if (count === 0 && questionNo !== 10) {
      setCount(10);
      setQuestionNo(questionNo + 1);
    }
    const timer = count > 0 && setInterval(() => setCount(count - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
    
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <h1>Quiz App</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div>Question {questionNo}/10</div>
        <div>Time Left 0:{count}</div>
      </div>
      <div style={{ width: "80%", margin: "auto", border: "1px solid black" }}>
        {data?.map((item) => (
          <div>
            <div>{item.question}</div>
            <div>
              {item.answer?.map((item) => (
                <div>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
