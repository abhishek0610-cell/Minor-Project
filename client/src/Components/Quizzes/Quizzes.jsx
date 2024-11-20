import React, { useState } from "react";
import Layout from "../Layout/Layout";

const Quizzes = () => {
  // Quiz data organized semester-wise and subject-wise
  const quizData = {
    "Semester 1": {
      BEE: [
        {
          question: "What is the SI unit of electric current?",
          options: ["Volt", "Stack", "Ampere", "Watt"],
          answer: "Ampere",
        },
        {
          question: "What does a capacitor store?",
          options: [
            "Electric charge",
            "Magnetic flux",
            "Current",
            "Resistance",
          ],
          answer: "Electric charge",
        },
      ],
      "Communication and Skills": [
        {
          question:
            "Which of the following is a key component of effective communication?",
          options: [
            "Listening",
            "Speaking loudly",
            "Ignoring feedback",
            "Avoiding questions",
          ],
          answer: "Listening",
        },
      ],
    },
    "Semester 2": {
      "Operating Systems": [
        {
          question: "Which of the following is not an OS?",
          options: ["Linux", "Windows", "Oracle", "MacOS"],
          answer: "Oracle",
        },
      ],
    },
  };

  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
    setSelectedSubject("");
    setAnswers({});
    setScore(null);
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setAnswers({});
    setScore(null);
  };

  const handleOptionChange = (questionIndex, selectedOption) => {
    setAnswers({ ...answers, [questionIndex]: selectedOption });
  };

  const handleSubmit = () => {
    const questions = quizData[selectedSemester][selectedSubject];
    let calculatedScore = 0;

    questions.forEach((question, index) => {
      if (answers[index] === question.answer) calculatedScore++;
    });

    setScore(calculatedScore);
  };

  return (
    <Layout>
      <div className="quiz-container">
        <h1 className="quiz-title">B.Tech CSE Quiz</h1>

        {/* Semester Selection */}
        <div className="quiz-select">
          <label>Select Semester:</label>
          <select onChange={handleSemesterChange} value={selectedSemester}>
            <option value="">--Select--</option>
            {Object.keys(quizData).map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </div>

        {/* Subject Selection */}
        {selectedSemester && (
          <div className="quiz-select">
            <label>Select Subject:</label>
            <select onChange={handleSubjectChange} value={selectedSubject}>
              <option value="">--Select--</option>
              {Object.keys(quizData[selectedSemester]).map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Questions */}
        {selectedSubject && (
          <div className="quiz-questions">
            {quizData[selectedSemester][selectedSubject].map((q, index) => (
              <div key={index} className="question-card">
                <h3>{q.question}</h3>
                {q.options.map((option, i) => (
                  <label key={i} className="option-label">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      onChange={() => handleOptionChange(index, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        )}

        {/* Score Display */}
        {score !== null && (
          <div className="score-display">
            You scored {score} out of{" "}
            {quizData[selectedSemester][selectedSubject].length}!
          </div>
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        .quiz-container {
          max-width: 800px;
          margin: auto;
          padding: 20px;
          background: #f7f9fc;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .quiz-title {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
        }
        .quiz-select {
          margin-bottom: 20px;
        }
        .quiz-select label {
          font-weight: bold;
          margin-right: 10px;
        }
        .quiz-select select {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        .quiz-questions {
          margin-top: 20px;
        }
        .question-card {
          padding: 20px;
          background: #fff;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }
        .option-label {
          display: block;
          margin: 10px 0;
        }
        .submit-btn {
          display: block;
          margin: 20px auto;
          padding: 10px 20px;
          background: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        .submit-btn:hover {
          background: #0056b3;
        }
        .score-display {
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          color: green;
          margin-top: 20px;
        }
      `}</style>
    </Layout>
  );
};

export default Quizzes;
