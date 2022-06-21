import React, { useEffect, useState } from 'react'

const QuizCard = ({ questionNo, data }) => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        setDetails(data.filter((item) => item.questionId === questionNo))
        console.log(details)
    }, [questionNo])
    
    const checkAnswer = (selected) => {
        selected === details.correct ? window.alert("You answered correct") : window.alert("You answered wrong!!")
    }

  return (
      <div key={details.questionId}>
          {details?.map((item) => (
              <div key={item.questionId}>
                  <div style={{fontWeight: "500", fontSize: "30px"}}>{item.question}</div>
                  <div>{item.answer?.map((item) => (
                      <div onClick={e => checkAnswer(e.target.value)} value={item} style={{border: "1px solid black", width: "50%", margin: "1%", padding: "2%", fontWeight: "500",fontSize: "20px", cursor: "pointer"}}>{item}</div>
                  ))}</div>
            </div>
        ))}
    </div>
  )
}

export default QuizCard;