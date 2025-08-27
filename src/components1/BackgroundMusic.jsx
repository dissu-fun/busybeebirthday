export default function BackgroundMusic() {
  return (
    <audio autoPlay loop className="hidden">
      <source src="/music/happy_birthday.mp3" type="audio/mp3" />
    </audio>
  );
}
