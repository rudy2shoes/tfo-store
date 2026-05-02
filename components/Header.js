export default function Header() {
  return (
    <header style={{
      padding: "20px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#F7F4EE",
      borderBottom: "1px solid #E8E4DC",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <a href="/" style={{ textDecoration: "none" }}>
        <h1 style={{
          fontSize: "1.5rem",
          fontWeight: "300",
          letterSpacing: "0.15em",
          color: "#1E1E1E"
        }}>TFO</h1>
      </a>
      <nav style={{ display: "flex", gap: "30px" }}>
        <a href="/shop" style={{ fontSize: "0.9rem", letterSpacing: "0.05em", color: "#1E1E1E" }}>Shop</a>
        <a href="/collections/teak-dining-sets" style={{ fontSize: "0.9rem", letterSpacing: "0.05em", color: "#1E1E1E" }}>Dining</a>
        <a href="/collections/teak-lounge-chairs" style={{ fontSize: "0.9rem", letterSpacing: "0.05em", color: "#1E1E1E" }}>Lounge</a>
        <a href="/collections/teak-benches" style={{ fontSize: "0.9rem", letterSpacing: "0.05em", color: "#1E1E1E" }}>Benches</a>
        <a href="/about" style={{ fontSize: "0.9rem", letterSpacing: "0.05em", color: "#1E1E1E" }}>About</a>
        <a href="/contact" style={{
          fontSize: "0.9rem",
          letterSpacing: "0.05em",
          color: "#F7F4EE",
          background: "#1E1E1E",
          padding: "8px 20px",
        }}>Contact</a>
      </nav>
    </header>
  );
}
