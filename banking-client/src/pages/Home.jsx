import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <h1>Home</h1>
      <p>
        This is a mockup of a basic banking system that imitates transfer of
        money from one account to another. The tech stack used in building this
        project was MERN.
      </p>
      <p>
        Head over to <Link to={"/customers"}>All Customers</Link> to try it out.
      </p>
      <p>
        The main objective behind building this project was to learn and setup a
        remote Mongo database, connect it to a Node server to read
        and modify data and present it on client-side.
      </p>
      <p>
        This is project was a task under Graduate Rotational Internship Program
        by <a href="http://thesparksfoundation.sg/">The Sparks Foundation</a>.
        <br />
      </p>
      <p className="intern-link">
        Apply for internship:{" "}
        <a href="https://internship.thesparksfoundation.info/">
          internship.thesparksfoundation.info
        </a>
      </p>
    </main>
  );
}
