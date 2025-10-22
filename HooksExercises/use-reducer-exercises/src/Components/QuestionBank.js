import React, { useReducer, useEffect } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// ---------------------
// 1️⃣ Trạng thái khởi tạo
// ---------------------
const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  feedback: "", // ✅ phản hồi đúng/sai
  score: 0,
  showScore: false,
  timeLeft: 10, // ✅ 10s cho mỗi câu
  highScore: localStorage.getItem("highScore")
    ? parseInt(localStorage.getItem("highScore"))
    : 0,
};

// ---------------------
// 2️⃣ Reducer xử lý hành động
// ---------------------
function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION": {
      const selected = action.payload;
      const correctAnswer = state.questions[state.currentQuestion].answer;
      const isCorrect = selected === correctAnswer;
      return {
        ...state,
        selectedOption: selected,
        feedback: isCorrect
          ? "correct"
          : `incorrect|${correctAnswer}`, // dùng ký hiệu | để tách thông báo
      };
    }

    case "NEXT_QUESTION": {
      const isCorrect =
        state.selectedOption ===
        state.questions[state.currentQuestion].answer;

      const nextIndex = state.currentQuestion + 1;
      const newScore = isCorrect ? state.score + 1 : state.score;

      const isQuizFinished = nextIndex === state.questions.length;

      // Nếu hoàn thành quiz, cập nhật high score
      let updatedHighScore = state.highScore;
      if (isQuizFinished && newScore > state.highScore) {
        localStorage.setItem("highScore", newScore);
        updatedHighScore = newScore;
      }

      return {
        ...state,
        score: newScore,
        currentQuestion: nextIndex,
        selectedOption: "",
        feedback: "",
        showScore: isQuizFinished,
        timeLeft: 10, // reset đồng hồ
        highScore: updatedHighScore,
      };
    }

    case "TICK":
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      };

    case "TIME_OUT": {
      const correctAnswer = state.questions[state.currentQuestion].answer;
      return {
        ...state,
        feedback: `incorrect|${correctAnswer}`,
        selectedOption: "",
      };
    }

    case "RESTART_QUIZ":
      return {
        ...initialState,
        highScore: state.highScore, // giữ lại điểm cao nhất
      };

    default:
      return state;
  }
}

// ---------------------
// 3️⃣ Component chính
// ---------------------
function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const {
    questions,
    currentQuestion,
    selectedOption,
    feedback,
    score,
    showScore,
    timeLeft,
    highScore,
  } = state;

  const currentQ = questions[currentQuestion];

  // ---------------------
  // ⏱ useEffect cho đồng hồ
  // ---------------------
  useEffect(() => {
    if (showScore || feedback.startsWith("incorrect")) return;

    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        dispatch({ type: "TICK" });
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      dispatch({ type: "TIME_OUT" });
    }
  }, [timeLeft, showScore, feedback]);

  // ---------------------
  // Xử lý chọn đáp án
  // ---------------------
  const handleOptionSelect = (option) => {
    if (!feedback) dispatch({ type: "SELECT_OPTION", payload: option });
  };

  // ---------------------
  // Xử lý Next / Finish
  // ---------------------
  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  // ---------------------
  // Xử lý Restart
  // ---------------------
  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  // ---------------------
  // JSX
  // ---------------------
  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-lg">
        {showScore ? (
          <div className="text-center">
            <h2>
              🎯 Your Score: {score} / {questions.length}
            </h2>
            <h4 className="mt-3 text-success">
              🏆 High Score: {highScore}
            </h4>
            <Button variant="primary" onClick={handleRestartQuiz} className="mt-3">
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            {/* Tiến trình làm bài */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>
                Question {currentQuestion + 1}/{questions.length}
              </h5>
              <h5
                style={{
                  color: timeLeft <= 5 ? "red" : "black",
                }}
              >
                ⏱ {timeLeft}s
              </h5>
            </div>

            <ProgressBar
              now={((currentQuestion + 1) / questions.length) * 100}
              className="mb-3"
              variant="info"
            />

            <h4>{currentQ.question}</h4>
            <div className="mt-3">
              {currentQ.options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option
                      ? "success"
                      : "outline-secondary"
                  }
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                  disabled={!!feedback}
                >
                  {option}
                </Button>
              ))}
            </div>

            {/* Phản hồi đúng/sai */}
            {feedback && (
              <div className="mt-3 text-center">
                {feedback.startsWith("correct") ? (
                  <p className="text-success fw-bold">
                    <FaCheckCircle /> Correct! 🎉
                  </p>
                ) : (
                  <p className="text-danger fw-bold">
                    <FaTimesCircle /> Incorrect! The correct answer is{" "}
                    <span className="text-dark">
                      {feedback.split("|")[1]}
                    </span>
                  </p>
                )}
              </div>
            )}

            <Button
              variant="primary"
              className="mt-3"
              disabled={!feedback}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;