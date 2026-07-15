import Underline from "../ui/Underline";
import CirclePhoto from "../ui/CirclePhoto";
import "./Testimonials.css";

const LEFT_FACES = [
  { src: "https://randomuser.me/api/portraits/men/15.jpg", size: 64, top: "2%", left: "18%" },
  { src: "https://randomuser.me/api/portraits/men/41.jpg", size: 52, top: "32%", left: "0%" },
  { src: "https://randomuser.me/api/portraits/men/68.jpg", size: 96, top: "34%", left: "24%" },
  { src: "https://randomuser.me/api/portraits/women/12.jpg", size: 56, top: "78%", left: "2%" },
];

const RIGHT_FACES = [
  { src: "https://randomuser.me/api/portraits/men/23.jpg", size: 58, top: "0%", left: "8%" },
  { src: "https://randomuser.me/api/portraits/women/36.jpg", size: 48, top: "18%", left: "78%" },
  { src: "https://randomuser.me/api/portraits/men/50.jpg", size: 88, top: "8%", left: "62%" },
  { src: "https://randomuser.me/api/portraits/men/77.jpg", size: 60, top: "44%", left: "20%" },
  { src: "https://randomuser.me/api/portraits/men/8.jpg", size: 104, top: "58%", left: "58%" },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        {/* <div className="testimonials__meta">
          <span className="testimonials__meta-label">Delta faucet content, social, digital</span>
          <h3 className="testimonials__meta-title">Piloting digital confidence</h3>
          <svg width="46" height="14" viewBox="0 0 46 14" fill="none" aria-hidden="true">
            <path d="M0 7H44M44 7L38 1M44 7L38 13" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </div> */}

        <div className="testimonials__stage">
          <div className="testimonials__cluster testimonials__cluster--left">
            {LEFT_FACES.map((f, i) => (
              <CirclePhoto key={i} src={f.src} alt="" size={f.size} style={{ top: f.top, left: f.left }} />
            ))}
          </div>

          <div className="testimonials__center">
            <h2 className="testimonials__heading">
              <span className="hl-mint">What</span> our customer <br /> says{" "}
              <Underline>About Us</Underline>
            </h2>

            <blockquote className="testimonials__quote">
              <span className="testimonials__quote-mark" aria-hidden="true">“</span>
              Elementum delivered the site within the timeline as they requested. In the
              end, the client found a 50% increase in traffic within days since its
              launch. They also had an impressive ability to use technologies that the
              company hasn't used, which have also proved to be easy to use and
              reliable.
              <span className="testimonials__quote-mark testimonials__quote-mark--end" aria-hidden="true">
                ”
              </span>
            </blockquote>
          </div>

          <div className="testimonials__cluster testimonials__cluster--right">
            {RIGHT_FACES.map((f, i) => (
              <CirclePhoto key={i} src={f.src} alt="" size={f.size} style={{ top: f.top, left: f.left }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
