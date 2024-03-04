import BadgeCard from "./Partials/BadgeCard";

interface Props {
  canLeaveReview: boolean;
}

export const Badge = ({ canLeaveReview }: Props) => {
  return (
    <>
      <div className="absolute p-10 top-full left-0 right-0 bg-white dark:bg-black dark:text-white">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
          <BadgeCard hasFooter={canLeaveReview} />
          <BadgeCard hasFooter={canLeaveReview} />
          <BadgeCard hasFooter={canLeaveReview} />
          <BadgeCard hasFooter={canLeaveReview} />
          <BadgeCard hasFooter={canLeaveReview} />
        </div>
      </div>
    </>
  );
};
