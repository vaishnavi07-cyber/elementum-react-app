import "./CirclePhoto.css";

export default function CirclePhoto({ src, alt, size = 120, badge, style, className = "" }) {
  return (
    <div className={`circle-photo ${className}`} style={{ width: size, height: size, ...style }}>
      <img src={src} alt={alt} loading="lazy" />
      {badge && <span className="circle-photo__badge">{badge}</span>}
    </div>
  );
}
