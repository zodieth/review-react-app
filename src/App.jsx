import "./App.css";
import Nav from "./assets/components/Nav";
import Reviews from "./assets/components/Reviews";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1 className="maintitle">
        Here is what our alumni say about freeCodeCamp:
      </h1>
      <Reviews
        name="Shawn Wang"
        country="Singapore"
        job="Amazon"
        cargo="Software Engineer"
        quote={`It's scary to change careers. I only gained confidence that I could
        code by working through the hundreds of hours of free lessons on
        freeCodeCamp. Within a year I had a six-figure job as a Software
        Engineer. freeCodeCamp changed my life.`}
        image="Shawn"
      />
      <Reviews
        name="Sarah Chima"
        country="Nigeria"
        job="ChatDesk"
        cargo="Software Engineer"
        quote="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        image="Sarah"
      />
      <Reviews
        name="Emma Bostian"
        country="Sweden"
        job="Spotify"
        cargo="Software Engineer"
        quote="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        image="Emma"
      />
    </div>
  );
}

export default App;
