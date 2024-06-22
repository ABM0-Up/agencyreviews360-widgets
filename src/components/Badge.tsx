import BadgeCard from "./Partials/BadgeCard";

interface Props {
  domain: string;
  reviews: any;
  canLeaveReview: boolean;
  reviewPageLink: string;
}

export const Badge = ({
  domain,
  reviews,
  canLeaveReview,
  reviewPageLink,
}: Props) => {
  return (
    <>
      <div className="absolute p-10 top-full left-0 right-0 bg-white dark:bg-black dark:text-white">
        <div className="mt-8 grid grid-cols-1 md:sidebar-expanded:grid-cols-1 md:grid-cols-2 gap-4 lg:sidebar-expanded:grid-cols-2 lg:grid-cols-3">
          {reviews?.data?.map((review, index) => {
            return (
              <BadgeCard
                key={index}
                domain={domain}
                review={review}
                reviewPageLink={reviewPageLink}
                canLeaveReview={canLeaveReview}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
