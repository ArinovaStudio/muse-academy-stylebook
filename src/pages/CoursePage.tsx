import { useParams } from "react-router-dom";
import CourseSlug from "@/components/CourseSlug";
import courses from "@/lib/courses";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CoursePage() {
  const { slug } = useParams();

  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return <div className="p-20">Course not found</div>;
  }

  return (
  <>
  <Header />
  <CourseSlug data={course} />
  <Footer />
  </>
  );
}
