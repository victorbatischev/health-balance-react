import React, { ChangeEvent, useEffect, useState } from "react";
import "./questionnaire.scss";
import { Quiz } from "../../Components/Quiz/Quiz";
import Header from "../../Components/Header/Header";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux-hooks";
import {
  fetchGetQuestionnaire,
  IQuestions,
  questions,
} from "../../Redux/slice/quizSlice";
import { ProgressBar } from "../../Components/Progress-bar/Progress-bar";
import { typesChallenge } from "../../types/enums";
import { useNavigate } from "react-router-dom";
import {
  HEALTH_INDEX_RESULTS_ROUTE,
  HEALTH_INDEX_ROUTE,
} from "../../provider/constants-route";
import TextQuiz from "../../Components/Quiz/TextQuiz";
import { addIndexPageAnswer } from "../../Redux/slice/visitedPagesSlice";
import RadioQuiz from "../../Components/Quiz/RadioQuiz";
import CheckboxQuiz from "../../Components/Quiz/CheckboxQuiz";

export const Questionnaire = () => {
  const dispatch = useAppDispatch();
  const questionsQuiz = useAppSelector(questions);
  const navigation = useNavigate();

  useEffect(() => {
    dispatch(fetchGetQuestionnaire());
  }, []);

  const answers = useAppSelector(
    (state: any) => state.visitedPages.indexPage.answers
  );

  useEffect(() => {
    if (answers.length === questionsQuiz.length) {
      navigation(HEALTH_INDEX_ROUTE);
    }
  }, [answers]);

  const answerHandler = (answer: any) => {
    dispatch(addIndexPageAnswer(answer));
  };

  return (
    <div className="questionnaire-page">
      {questionsQuiz.length > 0 && (
        <div>
          {answers.length < questionsQuiz.length ? (
            <div>
              <Header title={"Анкета"} />
              <div className="questionnaire-page__progress-bar">
                <div className="questionnaire-page__progress-value">
                  {answers.length + 1} / {questionsQuiz.length}
                  <span>Общая информация</span>
                </div>
                <ProgressBar
                  percent={((answers.length + 1) * 100) / questionsQuiz.length}
                  type={typesChallenge.common}
                />
              </div>
              <div className="questionnaire-page__question">
                <div>
                  {answers.length < questionsQuiz.length && (
                    <div>
                      {questionsQuiz[answers.length].answer_type === "2" && (
                        <TextQuiz
                          question={questionsQuiz[answers.length].question}
                          answerHandler={answerHandler}
                        />
                      )}
                      {questionsQuiz[answers.length].answer_type === "1" && (
                        <RadioQuiz
                          question={questionsQuiz[answers.length].question}
                          answerHandler={answerHandler}
                          answers={questionsQuiz[answers.length].answers}
                          id={questionsQuiz[answers.length].id}
                        />
                      )}
                      {questionsQuiz[answers.length].answer_type === "6" && (
                        <CheckboxQuiz
                          question={questionsQuiz[answers.length].question}
                          answerHandler={answerHandler}
                          answers={questionsQuiz[answers.length].answers}
                          id={questionsQuiz[answers.length].id}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>Анкета заполнена</div>
          )}
        </div>
      )}
    </div>
  );
};

/*
export const Questionnaire = () => {
  const dispatch = useAppDispatch();
  const questionsQuiz = useAppSelector(questions);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const [checkedValues, setCheckedValues] = useState<any>();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchGetQuestionnaire());
  }, []);

  console.log("questionsQuiz", questionsQuiz);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value", e.target.value);

    const checked = e.target.checked;
    switch (questionsQuiz[currentQuestion].answer_type) {
      case "1":
        setCheckedValues(e.target.value);
        break;

      case "2":
        setCheckedValues(e.target.value);
        break;

      // case '4':
      //     checked ? setCheckedValues(prev => [...prev, {
      //             response_body: e.target.value
      //         }]) :
      //         setCheckedValues(prev => [...prev.filter(item => item.response_body !== e.target.value)])
      //     break
      default:
        break;
    }
    setDisabledButton(false);
  };

  const nextQuestion = () => {
    if (currentQuestion >= questionsQuiz.length - 1) {
      navigate(HEALTH_INDEX_RESULTS_ROUTE);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setCheckedValues("");
      setDisabledButton(true);
    }
  };

  const showQuestion = (current: number) => {
    const itemQuestion = questionsQuiz[current];
    console.log(checkedValues);

    return (
      itemQuestion && (
        <Quiz
          answer_type={itemQuestion.answer_type}
          answers={itemQuestion.answers}
          id={itemQuestion.id}
          question={itemQuestion.question}
          tag={itemQuestion.tag}
          handleChange={handleChange}
          value={checkedValues}
        />
      )
    );
  };

  return (
    <div className="questionnaire-page">
      <Header title={"Анкета"} />
      <div className="questionnaire-page__question-item item-question">
        <div className="questionnaire-page__progress-bar">
          <div className="questionnaire-page__progress-value">
            {currentQuestion + 1} / {questionsQuiz.length}
            <span>Общая информация</span>
          </div>
          <ProgressBar
            percent={((currentQuestion + 1) * 100) / questionsQuiz.length}
            type={typesChallenge.common}
          />
        </div>
        <div className="questionnaire-page__question">
          {showQuestion(currentQuestion)}
        </div>
        <button
          disabled={disabledButton}
          className={
            disabledButton
              ? "questionnaire-page__button _button-white disabled"
              : "questionnaire-page__button _button-white"
          }
          onClick={nextQuestion}
        >
          Далее
        </button>
      </div>
    </div>
  );
};

*/
