import LessonContent from "@/components/LessonContent";

interface LessonPageProps {
  params: {
    lesson: string;
  };
}

export default function LessonPage({ params }: LessonPageProps) {
  const title = params.lesson.replace(/-/g, " ");

  return <LessonContent title={title} />;
}
