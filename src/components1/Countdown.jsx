import { useEffect, useState } from "react";

export default function Countdown({ targetDate, onFinish }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date();
      const diff = new Date(targetDate) - now;

      if (diff <= 0) {
        clearInterval(countdown);
        setTimeLeft("🎉 It's Time!");
        if (onFinish) onFinish();
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(countdown);
  }, [targetDate, onFinish]);

  return (
    <div className="text-2xl text-center font-mono text-pink-600">
      {timeLeft}
    </div>
  );
}
