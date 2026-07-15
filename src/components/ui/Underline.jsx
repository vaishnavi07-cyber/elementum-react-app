// Small hand-drawn style underline used to accent a word inside a heading.
export default function Underline({ children, color = "var(--color-mustard)", thick = false }) {
  return (
    <span className="hl-underline">
      {children}
      <svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true">
        {thick ? (
          <>
            <path d="M2 14 C 60 6, 140 6, 198 12" stroke={color} strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M4 18 C 60 11, 140 10, 196 17" stroke={color} strokeWidth="3.5" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <path d="M2 12 C 60 4, 140 4, 198 10" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
        )}
      </svg>
    </span>
  );
}
