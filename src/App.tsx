import { useState, useEffect } from "react";
import { Badge } from "./components/Badge";
import { Carousel } from "./components/Carousel";
import { Feed } from "./components/Feed";
import { Video } from "./components/Video";

interface Props {
  widget: string;
  campaignId: number;
  isDarkMode: boolean;
  canLeaveReview: boolean;
}

function App({ widget, isDarkMode = false, canLeaveReview = false }: Props) {
  const [state] = useState(widget);
  const [darkMode, setDarkMode] = useState(isDarkMode);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode + "");
  }, [darkMode]);

  return (
    <div className="relative max-w-9xl mx-auto">
      {state === "Feed" ? (
        <Feed canLeaveReview={canLeaveReview} />
      ) : state === "Video" ? (
        <Video />
      ) : state === "Badge" ? (
        <Badge canLeaveReview={canLeaveReview} />
      ) : state === "Carousel" ? (
        <Carousel canLeaveReview={canLeaveReview} />
      ) : null}
    </div>
  );
}

export default App;
