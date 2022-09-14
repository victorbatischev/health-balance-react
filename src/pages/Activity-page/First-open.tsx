import { useState } from "react";
import { useSelector } from "react-redux";
import { A11y, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollPicker } from "../../Components/Scroll-picker/Scroll-picker";

import { getItemsStep } from "../../utils/common-functions";
import { useAppDispatch } from "../../utils/hooks/redux-hooks";
import { SlideNextButton } from "../Start-pages/StartPage";

import stepsImage from "../../assets/image/instructions_step.png";
import purposeImage from "../../assets/image/board_purepos.png";
import iconChat from "../../assets/image/icon_chat.svg";
import { setVisitedActivityPage } from "../../Redux/slice/visitedPagesSlice";

const FirstOpen = () => {
  const dispatch = useAppDispatch();

  const startValueWeight = 1000;
  const endValueWeight = 10000;

  const itemsStep = getItemsStep(startValueWeight, endValueWeight);

  const [step, setStep] = useState<string>(
    (startValueWeight + endValueWeight) / 2 + ""
  );
  const [countFruits, setCountFruits] = useState<number>(0);

  const changeStep = (value: string) => setStep(value);

  const addCountFruits = () => setCountFruits((prev) => prev + 1);
  const decreaseCountFruits = () => {
    if (countFruits > 0) {
      setCountFruits((prev) => prev - 1);
    }
  };

  const visitCount = useSelector(
    (state: any) => state.visitedPages.trackerPage.visitCount
  );

  const setVisitedTrackerPageHandler = () => {
    if (visitCount === 0) {
      dispatch(setVisitedActivityPage(visitCount + 1));
    }
  };

  return (
    <Swiper
      modules={[Pagination, A11y]}
      className={"preview__swiper"}
      style={{ height: "100vh" }}
      slidesPerView={1}
      pagination={{ clickable: true }}
      spaceBetween={50}
    >
      <SwiperSlide>
        <div className="tracker__body">
          <div className="tracker__title tracker__title_start title-35">
            Здравствуйте, <br /> Усейн!
          </div>
          <div className="tracker__text">
            Это приложение созданно для тех кто хочет большего! Вы с нами?
          </div>
        </div>
        <SlideNextButton
          title={"Я в деле!"}
          customClass={"tracker__button _button-dark"}
        />
        <div className={"circle-gradient circle-gradient_blue"} />
      </SwiperSlide>
      <SwiperSlide>
        <div className="tracker__body">
          <div
            style={{ marginTop: "90px" }}
            className="tracker__title tracker__title_start title-35"
          >
            Просто!
          </div>
          <div className="tracker__text">
            Поднять свою активность просто! Ставьте комфортную ежедневную цель.
            Больше активности - больше награда
          </div>
          <div className="tracker__weight">
            <ScrollPicker
              onChange={changeStep}
              items={itemsStep}
              value={step}
            />
          </div>
          <div className="tracker__recommendation small-text">
            Можно изменить в любой момент
          </div>
        </div>
        <SlideNextButton
          title={"Просто!"}
          customClass={"tracker__button _button-dark"}
        />
        <div className={"circle-gradient circle-gradient_blue"} />
      </SwiperSlide>

      <SwiperSlide>
        <div className="tracker__body">
          <div
            style={{ marginTop: "180px" }}
            className="tracker__title tracker__title_start title-35"
          >
            Вместе!
          </div>
          <div className="tracker__text">
            Учавствуйте во всероссийских челленджах. Объединяйтесь с коллегами,
            занимайте почетные места!
          </div>
        </div>
        <SlideNextButton
          title={"Дальше"}
          customClass={"tracker__button _button-dark"}
        />
        <div className={"circle-gradient circle-gradient_blue"} />
      </SwiperSlide>
      <SwiperSlide>
        <div className="tracker__body">
          <div
            style={{ marginTop: "45px", marginBottom: "7px" }}
            className="tracker__title tracker__title_start title-35"
          >
            Следите
          </div>
          <div>За текущими шагами</div>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <img src={stepsImage} alt="" />
          </div>
          <div style={{ marginBottom: "-25px" }}>Выполнением цели</div>
          <div>
            <img src={purposeImage} alt="" />
          </div>
        </div>
        <SlideNextButton
          title={"Дальше"}
          customClass={"tracker__button _button-dark"}
        />
        <div className={"circle-gradient circle-gradient_blue"} />
      </SwiperSlide>
      <SwiperSlide>
        <div className="tracker__body">
          <div
            style={{ marginTop: "180px", marginBottom: "25px" }}
            className="tracker__title tracker__title_start title-35"
          >
            Вопросы?
          </div>
          <div className="tracker__text" style={{ maxWidth: "none" }}>
            По любым вопросам пишите нам в чат{" "}
          </div>
          <div style={{ marginTop: "10px" }} className="tracker__text">
            Это чат <img style={{ marginLeft: "5px" }} src={iconChat} alt="" />{" "}
          </div>
        </div>
        <div
          onClick={setVisitedTrackerPageHandler}
          className={"preview__button _button-dark"}
        >
          Enjoy
        </div>
        <div className={"circle-gradient circle-gradient_blue"} />
      </SwiperSlide>
    </Swiper>
  );
};

export default FirstOpen;
