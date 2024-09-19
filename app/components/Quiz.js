"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const Quiz = ({ category }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    async function fetchQuizData() {
      try {
        const response = await axios.get(`/api/proxy?category=${category}`);
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching quiz data", error);
      }
    }
    fetchQuizData();
  }, [category]);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-md max-w-lg mx-auto">
      {showScore ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            Your Score: {score} / {questions.length}
          </h1>
        </div>
      ) : questions.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-4">
            <button
              className={`w-full p-3 border ${
                selectedAnswer === "A" ? "bg-blue-200" : ""
              }`}
              onClick={() => handleAnswerOptionClick("A")}
            >
              {questions[currentQuestion].option_a}
            </button>
            <button
              className={`w-full p-3 border ${
                selectedAnswer === "B" ? "bg-blue-200" : ""
              }`}
              onClick={() => handleAnswerOptionClick("B")}
            >
              {questions[currentQuestion].option_b}
            </button>
            <button
              className={`w-full p-3 border ${
                selectedAnswer === "C" ? "bg-blue-200" : ""
              }`}
              onClick={() => handleAnswerOptionClick("C")}
            >
              {questions[currentQuestion].option_c}
            </button>
            <button
              className={`w-full p-3 border ${
                selectedAnswer === "D" ? "bg-blue-200" : ""
              }`}
              onClick={() => handleAnswerOptionClick("D")}
            >
              {questions[currentQuestion].option_d}
            </button>
          </div>
          <button
            onClick={handleNextQuestion}
            className="right-3 mt-6 bg-blue-500 text-white px-4 py-2 rounded"
            disabled={!selectedAnswer}
          >
            Next
          </button>
        </div>
      ) : (
        <div className="text-center">Loading questions...</div>
      )}
    </div>
  );
};

export default Quiz;
