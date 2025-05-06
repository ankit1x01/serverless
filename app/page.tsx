export default function HomePage() {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg shadow-2xl border-4 border-solid border-black">
      <h1 className="text-4xl font-extrabold text-black mb-6 uppercase tracking-widest text-center">
        Welcome to AWS Lambda Course
      </h1>
      <p className="text-white text-lg font-medium text-center">
        Select a lesson from the sidebar to begin.
      </p>
      <div className="mt-6 p-4 bg-black text-white text-center rounded-xl shadow-md">
        <p className="italic text-sm">Your journey into AWS Lambda starts here!</p>
      </div>
    </div>
  );
}
