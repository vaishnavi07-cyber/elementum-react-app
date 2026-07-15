import Underline from "../ui/Underline";
import CirclePhoto from "../ui/CirclePhoto";
import "./Hero.css";

const FACES = [
  { src: "https://randomuser.me/api/portraits/men/32.jpg", size: 108, offset: 34 },
  { src: "https://randomuser.me/api/portraits/men/54.jpg", size: 92, offset: -10 },
  { src: "https://randomuser.me/api/portraits/men/76.jpg", size: 128, offset: 0 },
  { src: "https://randomuser.me/api/portraits/men/45.jpg", size: 108, offset: 46 },
  { src: "https://randomuser.me/api/portraits/men/22.jpg", size: 120, offset: 6 },
  { src: "https://randomuser.me/api/portraits/men/61.jpg", size: 110, offset: 44 },
  { src: "https://randomuser.me/api/portraits/men/83.jpg", size: 122, offset: -8 },
  { src: "https://randomuser.me/api/portraits/men/29.jpg", size: 118, offset: 40 },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <p className="hero__pointer">
          <span className="hero__pointer-icon" aria-hidden="true">👆</span>
          <span className="hero__badge">Technical BaBa</span>
        </p>

        <h1 className="hero__heading">
          The <Underline>thinkers</Underline> and doers were{" "}
          <span className="hl-coral">changing</span> the{" "}
          <span className="hl-mint">status</span> Quo with
        </h1>

        <p className="hero__lede">
          We are a team of strategists, designers communicators, researchers. Togeather,
          we belive that progress only hghappens when you refuse to play things safe.
        </p>

        <div className="hero__faces" role="presentation">
          {FACES.map((face, i) => (
            <CirclePhoto
              key={i}
              src={face.src}
              alt=""
              size={face.size}
              className="hero__face"
              style={{ transform: `translateY(${face.offset}px)` }}
            />
          ))}
        </div>
      </div>

      <svg className="hero__deco hero__deco--waves" viewBox="0 0 120 260" aria-hidden="true">
        <path d="M10 0 C60 40, -10 90, 40 130 C90 170, 10 210, 60 260" stroke="#ef6152" strokeWidth="2" fill="none" />
        <path d="M0 10 C50 50, -20 100, 30 140 C80 180, 0 220, 50 270" stroke="#14151a" strokeWidth="2" fill="none" />
      </svg>

      <svg className="hero__deco hero__deco--blob" viewBox="0 0 90 110" aria-hidden="true">
        <path
          d="M45 2C70 2 88 30 88 58C88 90 66 108 40 108C15 108 2 82 2 54C2 26 20 2 45 2Z"
          fill="var(--color-purple)"
        />
      </svg>
    </section>
  );
}
