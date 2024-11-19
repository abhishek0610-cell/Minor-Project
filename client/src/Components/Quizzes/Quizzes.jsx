import React, { useState } from "react";
import Layout from "../Layout/Layout";

const Quizzes = () => {
  // Quiz data organized semester-wise and subject-wise
  const quizData = {
    "Semester 1": {
      BEE: [
        {
          question: "What is the SI unit of electric current?",
          options: ["Volt", "stack", "Ampere", "watt"],
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
        {
          question: "Which device converts AC to DC?",
          options: ["Transformer", "Rectifier", "Inverter", "stack"],
          answer: "Rectifier",
        },
        {
          question: "The unit of resistance is:",
          options: ["Coulomb", "Ohm", "Tesla", "Linked List"],
          answer: "Ohm",
        },
        {
          question: "The frequency of DC supply is:",
          options: ["0 Hz", "50 Hz", "60 Hz", "O(1)"],
          answer: "0 Hz",
        },
        {
          question: "Which material is commonly used in electrical wiring?",
          options: ["Iron", "Queue", "Copper", "Array", "Linked List"],
          answer: "Copper",
        },
        {
          question: "What is the function of a transformer?",
          options: [
            "To convert AC to DC",
            "To step up or step down voltage",
            "O(n^2)",
            "O(1)",
          ],
          answer: "To step up or step down voltage",
        },
      ],
      "Communication and skills ": [
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
        {
          question:
            "Which of the following is a barrier to effective communication?",
          options: [
            " Clarity in message",
            "Active listening",
            "Noise and distractions",
            "Positive body language",
          ],
          answer: "2x",
        },
        {
          question: " What is the primary goal of assertive communication?",
          options: [
            "Linux",
            "Dominating the conversation",
            "Avoiding confrontation",
            "Expressing thoughts and feelings respectfully",
            "Agreeing with everyone",
            "Oracle",
            "MacOS",
          ],
          answer: "Oracle",
        },
        {
          question: "What is a deadlock?",
          options: [
            "A situation where processes wait indefinitely",
            "A type of mutex",
            "An interrupt handler",
            "A process scheduler",
          ],
          answer: "A situation where processes wait indefinitely",
        },
      ],
       "engineeringPhysicsMCQs" : [
        {
          question: "The speed of light in vacuum is:",
          options: ["a)", "b)", "c)", "d)"],
          answer: "a)"
        },
        {
          question: "Newton’s First Law is also known as:",
          options: ["a) Law of Acceleration", "b) Law of Action and Reaction", "c) Law of Inertia", "d) Conservation of Energy"],
          answer: "c) Law of Inertia"
        },
        {
          question: "The unit of Planck’s constant is:",
          options: ["a) Joule", "b) Joule-second", "c) Newton-second", "d) Newton-meter"],
          answer: "b) Joule-second"
        },
        {
          question: "What is the dimensional formula of pressure?",
          options: ["a)", "b)", "c)", "d)"],
          answer: "b)"
        },
        {
          question: "Which of the following is not a scalar quantity?",
          options: ["a) Speed", "b) Distance", "c) Force", "d) Energy"],
          answer: "c) Force"
        },
        {
          question: "The escape velocity on Earth is approximately:",
          options: ["a)", "b)", "c)", "d)"],
          answer: "b)"
        },
        {
          question: "Which law explains the working of optical fibers?",
          options: ["a) Snell’s Law", "b) Laws of Reflection", "c) Total Internal Reflection", "d) Law of Refraction"],
          answer: "c) Total Internal Reflection"
        },
        {
          question: "What is the SI unit of magnetic flux?",
          options: ["a) Weber", "b) Tesla", "c) Henry", "d) Farad"],
          answer: "a) Weber"
        },
        {
          question: "Which phenomenon proves the wave nature of light?",
          options: ["a) Interference", "b) Photoelectric effect", "c) Diffraction", "d) Both a and c"],
          answer: "d) Both a and c"
        },
        {
          question: "Who proposed the uncertainty principle?",
          options: ["a) Newton", "b) Einstein", "c) Heisenberg", "d) Bohr"],
          answer: "c) Heisenberg"
        },
        {
          question: "What is the value of acceleration due to gravity on Earth?",
          options: ["a)", "b)", "c)", "d)"],
          answer: "c)"
        },
        {
          question: "The concept of blackbody radiation was explained by:",
          options: ["a) Einstein", "b) Planck", "c) Bohr", "d) Maxwell"],
          answer: "b) Planck"
        },
        {
          question: "Which of the following is a renewable energy source?",
          options: ["a) Coal", "b) Natural gas", "c) Solar energy", "d) Nuclear fuel"],
          answer: "c) Solar energy"
        },
        {
          question: "Which principle explains the buoyant force?",
          options: ["a) Archimedes’ Principle", "b) Bernoulli’s Principle", "c) Pascal’s Law", "d) Newton’s Third Law"],
          answer: "a) Archimedes’ Principle"
        },
        {
          question: "The unit of electric potential is:",
          options: ["a) Ampere", "b) Coulomb", "c) Volt", "d) Watt"],
          answer: "c) Volt"
        },
        {
          question: "The ratio of stress to strain is called:",
          options: ["a) Modulus of elasticity", "b) Poisson's ratio", "c) Bulk modulus", "d) Shear modulus"],
          answer: "a) Modulus of elasticity"
        },
        {
          question: "What is the nature of sound waves in air?",
          options: ["a) Longitudinal", "b) Transverse", "c) Electromagnetic", "d) Stationary"],
          answer: "a) Longitudinal"
        },
        {
          question: "In Young’s double-slit experiment, the interference pattern results from:",
          options: ["a) Refraction", "b) Diffraction", "c) Superposition of waves", "d) Polarization"],
          answer: "c) Superposition of waves"
        },
        {
          question: "The law of conservation of energy states that energy can:",
          options: [
            "a) Be created but not destroyed",
            "b) Be destroyed but not created",
            "c) Neither be created nor destroyed, only transformed",
            "d) None of the above"
          ],
          answer: "c) Neither be created nor destroyed, only transformed"
        },
        {
          question: "Which of these is the fastest in vacuum?",
          options: ["a) Sound waves", "b) Light waves", "c) Mechanical waves", "d) Water waves"],
          answer: "b) Light waves"
        }
      ]
      
    },
    "Semester 2": {
      "Operating Systems": [
        {
          question: "Which of the following is not an OS?",
          options: ["Linux", "Windows", "Oracle", "MacOS"],
          answer: "Oracle",
        },
        {
          question: "What is a deadlock?",
          options: [
            "A situation where processes wait indefinitely",
            "A type of mutex",
            "An interrupt handler",
            "A process scheduler",
          ],
          answer: "A situation where processes wait indefinitely",
        },
      ],
      Databases: [
        {
          question: "What is the full form of SQL?",
          options: [
            "Structured Query Language",
            "Simple Query Language",
            "Sorted Query Language",
            "Statement Query Language",
          ],
          answer: "Structured Query Language",
        },
        {
          question: "Which SQL command is used to delete data?",
          options: ["DELETE", "REMOVE", "DROP", "CUT"],
          answer: "DELETE",
        },
      ],
    },
  
    // Add more semesters and subjects here
  };

  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  // Handle semester change
  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
    setSelectedSubject("");
    setAnswers({});
    setScore(null);
  };

  // Handle subject change
  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setAnswers({});
    setScore(null);
  };

  // Handle option selection
  const handleOptionChange = (questionIndex, selectedOption) => {
    setAnswers({ ...answers, [questionIndex]: selectedOption });
  };

  // Calculate and display score
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
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          maxWidth: "800px",
          margin: "auto",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333" }}>B.Tech CSE Quiz</h1>

        {/* Semester Selection */}
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <label htmlFor="semester" style={{ fontWeight: "bold" }}>
            Select Semester:
          </label>
          <select
            id="semester"
            onChange={handleSemesterChange}
            value={selectedSemester}
            style={{
              marginLeft: "10px",
              padding: "8px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          >
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
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <label htmlFor="subject" style={{ fontWeight: "bold" }}>
              Select Subject:
            </label>
            <select
              id="subject"
              onChange={handleSubjectChange}
              value={selectedSubject}
              style={{
                marginLeft: "10px",
                padding: "8px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            >
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
          <div>
            {quizData[selectedSemester][selectedSubject].map((q, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  padding: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>{q.question}</h3>
                {q.options.map((option, i) => (
                  <label
                    key={i}
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      onChange={() => handleOptionChange(index, option)}
                      style={{ marginRight: "10px" }}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}
            <button
              onClick={handleSubmit}
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
        )}

        {/* Score Display */}
        {score !== null && (
          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "bold",
              color: "green",
            }}
          >
            You scored {score} out of{" "}
            {quizData[selectedSemester][selectedSubject].length}!
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Quizzes;
