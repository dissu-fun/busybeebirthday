
import { useState } from "react";

import Countdown from "./components1/Countdown";
import VideoPlayer from "./components1/VideoPlayer";
import MemoryCarousel from "./components1/MemoryCarousel";
import MessageCards from "./components1/MessageCards";
import BackgroundMusic from "./components1/BackgroundMusic";

function App() {
  const [isBirthday, setIsBirthday] = useState(false);

  // Set your birthday date/time here
 const birthday = "2025-08-29T12:40:00+03:00";

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 p-4">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-4">
        🎂 Birthday Surprise 🎉
      </h1>

      {!isBirthday ? (
        <Countdown targetDate={birthday} onFinish={() => setIsBirthday(true)} />
      ) : (
        <>
          <VideoPlayer />
          <MemoryCarousel />
          <MessageCards />
          <BackgroundMusic />
        </>
      )}
    </div>
  );
}

export default App;

