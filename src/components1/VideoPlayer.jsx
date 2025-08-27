export default function VideoPlayer() {
  return (
    <div className="w-full max-w-xl mx-auto my-6">
      <video controls className="rounded-xl shadow-lg">
        <source src="/videos/vid1.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
