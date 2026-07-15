import Underline from "../ui/Underline";
import "./Offer.css";

const ITEMS = [
  {
    label: "Office of multiple interest content",
    title: "Colaborative & partnership",
  },
  {
    label: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    label: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
    thumbnail: "https://picsum.photos/seed/elementum-collage/120/120",
  },
];

function Arrow() {
  return (
    <svg width="46" height="14" viewBox="0 0 46 14" fill="none" aria-hidden="true">
      <path d="M0 7H44M44 7L38 1M44 7L38 13" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Offer() {
  return (
    <section className="offer" id="services">
      <div className="container">
        <div className="offer__head">
          <h2 className="offer__heading">
            What we <span className="hl-mint">can</span> <br />
            <Underline>offer</Underline> you!
          </h2>
          <svg className="offer__squiggle" viewBox="0 0 300 120" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M2 118 C 60 118, 40 20, 120 20 C 200 20, 220 80, 298 4"
              stroke="#ef6152"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
        </div>

        <ul className="offer__list">
          {ITEMS.map((item) => (
            <li className="offer__row" key={item.title}>
              <span className="offer__label">{item.label}</span>
              <span className="offer__title">
                {item.thumbnail ? (
                  <>
                    Piloting digital{" "}
                    <img className="offer__thumb" src={item.thumbnail} alt="" />
                    confidence
                  </>
                ) : (
                  item.title
                )}
              </span>
              <span className="offer__arrow">
                <Arrow />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
