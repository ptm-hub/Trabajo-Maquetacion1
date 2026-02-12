import courses from "../../data/courses";
import CourseCard from "../../components/course-card/CourseCard";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <h1>Welcome to EduMarketing</h1>

      <div className="courses-container">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            image={course.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
