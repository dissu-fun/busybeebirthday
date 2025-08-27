const messages = [
  "Happy Birthday! You're a truly special friend.",
  "Thanks for all the memories and laughs.",
  "Hope this little surprise made you smile :)",
];

export default function MessageCards() {
  return (
    <div className="flex flex-col gap-4 items-center">
      {messages.map((msg, i) => (
        <div key={i} className="bg-white p-4 shadow-lg rounded-lg w-3/4 text-center">
          {msg}
        </div>
      ))}
    </div>
  );
}
