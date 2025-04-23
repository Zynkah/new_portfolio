import "./App.css";
import DefaultSection from "./components/DefaultSection";

function App() {
  return (
    <>
      <h1>ZYNKS NEW PORTFOLIO</h1>
      <div className="SectionWrapper">
        <section aria-label="bio">
          <DefaultSection
            title="Bio"
            description="A brief introduction about me"
            footer="Updated 2024"
          />
        </section>
        <section aria-label="projects">
          <DefaultSection
            title="Projects"
            description="My awesome projects"
            footer="Check them out!"
          />
        </section>
        <section aria-label="work experience">
          <DefaultSection
            title="Work Experience"
            description="Where I've worked"
            footer="See my history"
          />
        </section>
        <section aria-label="contact">
          <DefaultSection
            title="Contact"
            description="Get in touch!"
            footer="Let's connect"
          />
        </section>
      </div>
    </>
  );
}

export default App;
