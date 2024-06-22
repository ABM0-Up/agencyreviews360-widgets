import Rating from "react-rating";

const CarouselItem = ({ domain, review, canViewScores }) => {
  return (
    <div className="flex flex-col bg-slate dark:bg-black dark:text-white p-4 rounded-lg border border-slate dark:border-white">
      <div className="flex items-center gap-3">
        <div className="flex gap-3 items-center w-fit h-10 bg-white  dark:bg-black dark:text-white rounded-lg border border-grayStroke dark:border-white px-2">
          <img
            src={`${domain}/storage/logos/${review.source.toLowerCase()}.png`}
            alt={review.source}
            className={"w-6 h-6 rounded-full"}
          />
          <span>{review.source}</span>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          alt={review.customer_fullname || "Customer"}
          src={
            review.customer_avatar ||
            "https://ui-avatars.com/api/?name=Happy%20Customer&color=7F9CF5&background=EBF4FF"
          }
        />
        <span>{review.customer_fullname || "Happy Customer"}</span>
      </div>

      <div className={"mt-3 flex items-center gap-4 "}>
        {canViewScores && (
          <Rating
            initialRating={review.rating}
            readonly={true}
            emptySymbol={
              <svg
                className={"w-6 h-6"}
                viewBox="0 0 47 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.7046 16.514C46.56 16.0883 46.2939 15.7142 45.9391 15.4379C45.5844 15.1616 45.1564 14.9953 44.7082 14.9594L31.5958 13.9177L25.9217 1.35905C25.741 0.954557 25.447 0.611004 25.0754 0.369849C24.7037 0.128694 24.2702 0.000243489 23.8271 3.45825e-07C23.384 -0.000242798 22.9504 0.127732 22.5784 0.368479C22.2065 0.609226 21.9122 0.952456 21.7311 1.35675L16.0569 13.9177L2.94454 14.9594C2.50399 14.9943 2.08282 15.1554 1.73141 15.4234C1.38001 15.6913 1.11326 16.0548 0.963067 16.4704C0.812877 16.886 0.785609 17.336 0.884526 17.7667C0.983443 18.1974 1.20436 18.5904 1.52084 18.8988L11.2108 28.3437L7.78377 43.1813C7.67971 43.6304 7.71306 44.1005 7.8795 44.5304C8.04593 44.9603 8.33776 45.3303 8.71712 45.5924C9.09648 45.8544 9.54586 45.9964 10.0069 45.9999C10.468 46.0034 10.9195 45.8683 11.3028 45.6121L23.8264 37.2642L36.3499 45.6121C36.7417 45.8722 37.2037 46.0061 37.6739 45.9957C38.1441 45.9854 38.5998 45.8314 38.9798 45.5544C39.3598 45.2774 39.6458 44.8907 39.7994 44.4463C39.953 44.0019 39.9669 43.5211 39.8391 43.0686L35.6323 28.3506L46.0652 18.9632C46.7483 18.3469 46.999 17.3856 46.7046 16.514Z"
                  fill="#DFDFDF"
                />
              </svg>
            }
            fullSymbol={
              <svg
                className={"w-6 h-6"}
                viewBox="0 0 47 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.0064 16.514C45.8618 16.0883 45.5957 15.7142 45.2409 15.4379C44.8861 15.1616 44.4582 14.9953 44.0099 14.9594L30.8976 13.9177L25.2234 1.35905C25.0427 0.954557 24.7488 0.611004 24.3771 0.369849C24.0055 0.128694 23.5719 0.000243489 23.1289 3.45825e-07C22.6858 -0.000242798 22.2521 0.127732 21.8802 0.368479C21.5083 0.609226 21.214 0.952456 21.0328 1.35675L15.3587 13.9177L2.2463 14.9594C1.80575 14.9943 1.38457 15.1554 1.03317 15.4234C0.681769 15.6913 0.415016 16.0548 0.264825 16.4704C0.114635 16.886 0.0873668 17.336 0.186284 17.7667C0.285201 18.1974 0.506114 18.5904 0.822594 18.8988L10.5125 28.3437L7.08553 43.1813C6.98147 43.6304 7.01482 44.1005 7.18126 44.5304C7.34769 44.9603 7.63952 45.3303 8.01888 45.5924C8.39824 45.8544 8.84761 45.9964 9.30869 45.9999C9.76976 46.0034 10.2212 45.8683 10.6046 45.6121L23.1281 37.2642L35.6517 45.6121C36.0435 45.8722 36.5055 46.0061 36.9757 45.9957C37.4458 45.9854 37.9015 45.8314 38.2815 45.5544C38.6615 45.2774 38.9476 44.8907 39.1012 44.4463C39.2548 44.0019 39.2686 43.5211 39.1408 43.0686L34.9341 28.3506L45.367 18.9632C46.0501 18.3469 46.3008 17.3856 46.0064 16.514Z"
                  fill="#FFD51A"
                />
              </svg>
            }
          />
        )}
        <span>{new Date(review.created_at).toDateString()}</span>
      </div>

      <p className="my-3 line-clamp-5">{review.comment}</p>
    </div>
  );
};

export default CarouselItem;
