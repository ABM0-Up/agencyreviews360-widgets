import { useEffect, useRef, useState } from "react";
import CarouselItem from "./Partials/CarouselItem";
import ProgressBar from "./ProgressBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  domain: string;
  results: any;
  canLeaveReview: boolean;
  canViewScores: boolean;
  reviewPageLink: string;
}

export const Carousel = ({
  domain,
  results,
  canLeaveReview,
  canViewScores,
  reviewPageLink,
}: Props) => {
  const preferences = results?.preferences;
  const [progress, setProgress] = useState(0);
  const [totalSlides] = useState(9);
  const [isInfinite] = useState(false);
  const sliderRef = useRef(null);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(false);

  const slickSettings = {
    dots: false,
    infinite: isInfinite,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: isInfinite,
          dots: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: isInfinite,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: isInfinite,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 564,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: false,
    afterChange: (currentSlide) => {
      const calculatedProgress =
        currentSlide === totalSlides - 1
          ? 100
          : ((currentSlide + 2) / totalSlides) * 100;

      setProgress(calculatedProgress);
      setHasPrev(currentSlide > 0);
      setHasNext(currentSlide < totalSlides - 2);
    },
  };

  useEffect(() => {
    const currentSlide = 0;
    const calculatedProgress =
      currentSlide === totalSlides - 1
        ? 100
        : ((currentSlide + 2) / totalSlides) * 100;

    setProgress(calculatedProgress);
    setHasPrev(false);
    setHasNext(totalSlides > 1);
  }, [totalSlides]);

  const goToPrev = () => {
    if (hasPrev) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (hasNext) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <div className="absolute p-10 top-full left-0 right-0 bg-white dark:bg-black dark:text-white">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={`${domain}/${preferences?.logo}`}
              alt={"Logo"}
              className={"w-6 h-6 rounded-full"}
            />
            <span className="flex flex-col">
              <span className="font-bold">{results.averageRating}</span>
              <span className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9577 5.74401C15.9074 5.59592 15.8149 5.4658 15.6915 5.36971C15.5681 5.27362 15.4192 5.21576 15.2633 5.20328L10.7025 4.84093L8.72887 0.472711C8.66602 0.33202 8.56378 0.212523 8.43451 0.128643C8.30523 0.044763 8.15444 8.4692e-05 8.00033 1.20287e-07C7.84622 -8.44514e-05 7.69537 0.0444284 7.56601 0.128166C7.43664 0.211905 7.33427 0.331289 7.27126 0.471912L5.29765 4.84093L0.736825 5.20328C0.583589 5.21542 0.437094 5.27144 0.314867 5.36465C0.19264 5.45785 0.099856 5.58429 0.0476158 5.72884C-0.00462433 5.87339 -0.0141088 6.02992 0.0202971 6.17972C0.054703 6.32951 0.131542 6.46623 0.241623 6.5735L3.61204 9.85867L2.42004 15.0196C2.38384 15.1758 2.39544 15.3393 2.45333 15.4888C2.51122 15.6384 2.61273 15.7671 2.74468 15.8582C2.87663 15.9494 3.03293 15.9988 3.19331 16C3.35368 16.0012 3.51072 15.9542 3.64404 15.8651L8.00007 12.9615L12.3561 15.8651C12.4924 15.9555 12.6531 16.0021 12.8166 15.9985C12.9801 15.9949 13.1386 15.9414 13.2708 15.845C13.403 15.7487 13.5025 15.6142 13.5559 15.4596C13.6093 15.305 13.6142 15.1378 13.5697 14.9804L12.1065 9.86107L15.7353 6.5959C15.9729 6.38153 16.0601 6.04717 15.9577 5.74401Z"
                    fill="#FFD51A"
                  />
                </svg>
                <span className="text-lightGray">
                  {results.totalReviews} Reviews
                </span>
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={"cursor-pointer"}
              onClick={goToPrev}
            >
              <rect
                x="32.4395"
                y="32.4396"
                width="32.4396"
                height="32.4396"
                rx="8"
                transform="rotate(180 32.4395 32.4396)"
                fill={`${hasPrev ? preferences.hexColor : "#DFDFDF"}`}
              />
              <path
                d="M17.9073 12.0508L17.7139 11.8925L17.9073 12.0508C18.1776 11.7205 18.1429 11.2253 17.8246 10.9395C17.4994 10.6475 17.0077 10.6892 16.7319 11.0262L16.9254 11.1845L16.7319 11.0262L12.5781 16.1031C12.336 16.3989 12.336 16.832 12.5781 17.1278L16.7319 22.2047C17.0077 22.5417 17.4994 22.5833 17.8246 22.2914C18.1429 22.0056 18.1776 21.5103 17.9073 21.1801L14.1727 16.6154L17.9073 12.0508Z"
                fill="white"
                stroke="white"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
            </svg>

            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={"cursor-pointer"}
              onClick={goToNext}
            >
              <rect
                x="0.560547"
                width="32.4396"
                height="32.4396"
                rx="8"
                fill={`${hasNext ? preferences?.hexColor : "#DFDFDF"}`}
              />
              <path
                d="M15.0927 20.3887L15.2861 20.5471L15.0927 20.3887C14.8224 20.719 14.8571 21.2143 15.1754 21.5001C15.5006 21.792 15.9923 21.7504 16.2681 21.4134L16.0746 21.2551L16.2681 21.4134L20.4219 16.3364C20.664 16.0406 20.664 15.6076 20.4219 15.3118L16.2681 10.2349C15.9923 9.89785 15.5006 9.85623 15.1754 10.1482C14.8571 10.434 14.8224 10.9292 15.0927 11.2595L18.8273 15.8241L15.0927 20.3887Z"
                fill="white"
                stroke="white"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="my-6">
          <Slider ref={sliderRef} {...slickSettings}>
            {results?.data?.map((review, index) => {
              return (
                <CarouselItem
                  domain={domain}
                  review={review}
                  canViewScores={canViewScores}
                  key={index}
                />
              );
            })}
          </Slider>

          <div className="mt-10 flex flex-col items-center">
            <ProgressBar value={progress} max={100} preferences={preferences} />

            {canLeaveReview ? (
              <div className="mt-10">
                <a
                  target={"_blank"}
                  href={reviewPageLink}
                  className={
                    "inline-flex items-center justify-center gap-3 px-4 py-3 bg-gray-800 border border-transparent rounded-lg font-medium text-lg text-white hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                  }
                >
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-white dark:fill-black"
                  >
                    <path
                      d="M8.00902 5.23233C9.11734 3.24411 9.6715 2.25 10.5 2.25C11.3285 2.25 11.8827 3.24411 12.991 5.23233L13.2777 5.7467C13.5927 6.31169 13.7501 6.59419 13.9957 6.78058C14.2412 6.96697 14.547 7.03616 15.1586 7.17454L15.7154 7.30052C17.8676 7.78749 18.9437 8.03097 19.1998 8.85426C19.4558 9.67756 18.7222 10.5354 17.2549 12.2512L16.8753 12.6951C16.4584 13.1826 16.2499 13.4264 16.1561 13.728C16.0623 14.0296 16.0939 14.3548 16.1569 15.0054L16.2143 15.5976C16.4361 17.8868 16.547 19.0314 15.8767 19.5402C15.2065 20.049 14.1989 19.5851 12.1838 18.6573L11.6625 18.4172C11.0898 18.1536 10.8035 18.0217 10.5 18.0217C10.1965 18.0217 9.91019 18.1536 9.33755 18.4172L8.81621 18.6573C6.80109 19.5851 5.79353 20.049 5.12325 19.5402C4.45298 19.0314 4.56389 17.8868 4.78572 15.5976L4.84311 15.0054C4.90615 14.3548 4.93767 14.0296 4.84388 13.728C4.75009 13.4264 4.54162 13.1826 4.12468 12.6951L3.74509 12.2512C2.27784 10.5354 1.54422 9.67756 1.80024 8.85426C2.05627 8.03097 3.13237 7.78749 5.28459 7.30053L5.8414 7.17454C6.45299 7.03616 6.75879 6.96697 7.00433 6.78058C7.24986 6.59419 7.40733 6.31169 7.72228 5.7467L8.00902 5.23233Z"
                      fill="current"
                    />
                  </svg>
                  <span>Leave a review</span>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
