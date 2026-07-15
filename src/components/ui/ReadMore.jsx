import "./ReadMore.css";

export default function ReadMore({ href = "#", children = "Read more" }) {
  return (
    <a className="read-more" href={href}>
      <span>{children}</span>
      <svg width="34" height="10" viewBox="0 0 34 10" fill="none" aria-hidden="true">
        <path d="M0 5H32M32 5L27 1M32 5L27 9" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </a>
  );
}
