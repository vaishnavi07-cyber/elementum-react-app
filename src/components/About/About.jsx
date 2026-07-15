import Underline from "../ui/Underline";
import ReadMore from "../ui/ReadMore";
import CirclePhoto from "../ui/CirclePhoto";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="studio">
      <div className="container about__inner">
        <svg className="about__connector" viewBox="0 0 1200 900" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M980 260 C 1120 340, 1120 430, 900 470 C 640 520, 260 470, 190 560 C 140 620, 220 660, 330 680"
            stroke="#ef6152"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>

        <div className="about__row">
          <div className="about__text">
            <h2 className="about__heading hl-box">
              Tomorrow should <br /> be better than <span className="hl-mint">today</span>
            </h2>
            <p className="about__copy">
              We are a team of strategists, designers communicators, researchers.
              Togeather, we belive that progress only happens when you refuse to play
              things safe.
            </p>
            <ReadMore>Read more</ReadMore>
          </div>

          <div className="about__media">
            <span className="about__shape about__shape--square" aria-hidden="true" />
            <CirclePhoto
              size={340}
              src="https://picsum.photos/seed/elementum-meeting/700/700"
              alt="Two colleagues shaking hands after a meeting"
              badge="Kumkum Chakrabarty"
            />
          </div>
        </div>

        <div className="about__row about__row--reverse">
          <div className="about__media">
            <span className="about__shape about__shape--triangle" aria-hidden="true" />
            <CirclePhoto
              size={300}
              src="https://picsum.photos/seed/elementum-laptop/700/700"
              alt="Two colleagues reviewing work together at a laptop"
            />
          </div>

          <div className="about__text">
            <h2 className="about__heading">
              <span className="hl-mint">See</span> how we can <br /> help you{" "}
              <Underline>progress</Underline>
            </h2>
            <p className="about__copy">
              We add a layer of fearless insights and action that allows change makers
              to accelerate their progress in areas such as brand, design digital, comms
              and social research.
            </p>
            <ReadMore>Read more</ReadMore>
          </div>
        </div>
      </div>
    </section>
  );
}
