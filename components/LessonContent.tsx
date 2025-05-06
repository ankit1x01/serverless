interface LessonContentProps {
  title: string;
}

export default function LessonContent({ title }: LessonContentProps) {
  return (
    <div className="p-8 bg-gradient-to-br from-pink-500 to-yellow-400 shadow-2xl rounded-lg border-4 border-solid border-black">
      <h1 className="text-3xl font-extrabold text-black mb-6 uppercase tracking-widest text-center">
        {title}
      </h1>
      <p className="text-white text-lg font-medium">
        This is the content for <strong>{title}</strong>. You can fetch lesson data here.
      </p>
      <div className="mt-6 p-4 bg-black text-white text-center rounded-xl shadow-md">
        <p className="italic text-sm">More content coming soon...</p>
      </div>
    </div>
  );
}
