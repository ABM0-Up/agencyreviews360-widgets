import CarouselItem from "./Partials/CarouselItem";
import PrimaryButton from "./PrimaryButton";

interface Props {
  canLeaveReview: boolean;
}

export const Feed = ({ canLeaveReview }: Props) => {
  return (
    <>
      <div className="absolute p-10 top-full left-0 right-0 bg-white dark:bg-black dark:text-white">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-full bg-green"></span>
            <span className="flex flex-col">
              <span className="font-bold">4.8</span>
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
                <span className="text-lightGray">22 Reviews</span>
              </span>
            </span>
          </div>
        </div>

        <div className="my-10">
          {canLeaveReview ? (
            <div className="flex justify-center">
              <PrimaryButton
                icon={
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
                }
                disabled={false}
                processing={false}
                className={""}
                iconorder={undefined}
                onClick={undefined}
              >
                Leave a review
              </PrimaryButton>
            </div>
          ) : null}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
          </div>

          <div className="flex justify-center">
            <PrimaryButton
              className="px-6 py-2 font-semibold border border-darkGray rounded-lg"
              disabled={false}
              processing={false}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 fill-white dark:fill-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              }
              iconorder={undefined}
              onClick={undefined}
            >
              Show more
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};
