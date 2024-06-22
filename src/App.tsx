import axios from "axios";
import { useEffect, useState } from "react";
import { Badge } from "./components/Badge";
import { Carousel } from "./components/Carousel";
import { Feed } from "./components/Feed";
import { Video } from "./components/Video";

interface Props {
  domain: string;
  widget: string;
  campaignId: number;
  isDarkMode: boolean;
  canLeaveReview: boolean;
  canViewScores: boolean;
}

function App({
  domain,
  campaignId,
  widget,
  isDarkMode = false,
  canLeaveReview = false,
  canViewScores = false,
}: Props) {
  const [reviews, setReviews] = useState([]);
  const [reviewsStats, setReviewsStats] = useState([]);
  const [state] = useState(widget);
  const [darkMode, setDarkMode] = useState(isDarkMode);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode + "");
  }, [darkMode]);

  useEffect(() => {
    axios
      .get(`${domain}/reviews/${campaignId}`)
      .then((res) => {
        setReviews(res.data);
        setProcessing(false);
      })
      .catch((error) => {
        console.log(error);
        setProcessing(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${domain}/badge/reviews/${campaignId}`)
      .then((res) => {
        setReviewsStats(res.data);
        setProcessing(false);
      })
      .catch((error) => {
        console.log(error);
        setProcessing(false);
      });
  }, []);

  return (
    <div className="relative max-w-9xl mx-auto">
      {processing ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          {state === "Feed" ? (
            <Feed
              results={reviews}
              setResults={setReviews}
              canLeaveReview={canLeaveReview}
              canViewScores={canViewScores}
              reviewPageLink={reviews?.reviewLink?.full_review_page_url}
              currentTeamId={campaignId}
              domain={domain}
            />
          ) : state === "Video" ? (
            <Video />
          ) : state === "Badge" ? (
            <Badge
              reviews={reviewsStats}
              canLeaveReview={canLeaveReview}
              reviewPageLink={reviewsStats?.reviewLink?.full_review_page_url}
            />
          ) : state === "Carousel" ? (
            <Carousel
              results={reviews}
              canLeaveReview={canLeaveReview}
              canViewScores={canViewScores}
              reviewPageLink={reviews?.reviewLink?.full_review_page_url}
            />
          ) : null}
        </>
      )}
    </div>
  );
}

export default App;
