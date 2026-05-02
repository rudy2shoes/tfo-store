export default function Hero() {
  return (
    <section style={{
      height: "90vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      background: "linear-gradient(135deg, #1E1E1E 0%, #3a2e1e 50%, #B88B5A 100%)",
      padding: "0 80px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "600px",
      }}>
        <p style={{
          fontSize: "0.85rem",
          letterSpacing: "0.2em",
          color: "#B88B5A",
          marginBottom: "20px",
          textTransform: "uppercase",
        }}>
          Grade-A Plantation Teak
        </p>
        <h1 style={{
          fontSize: "3.5rem",
          fontWeight: "300",
          letterSpacing: "-0.02em",
          color: "#F7F4EE",
          lineHeight: "1.1",
          marginBottom: "24px",
        }}>
          Luxury Teak Furniture Designed to Last Generations
        </h1>
        <p style={{
          fontSize: "1.1rem",
          color: "#D6D2CB",
          marginBottom: "40px",
          lineHeight: "1.7",
        }}>
          Premium outdoor furniture crafted from sustainably sourced Grade-A teak for timeless outdoor living.
        </p>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="/shop" style={{
            display: "inline-block",
            padding: "16px 36px",
            background: "#B88B5A",
            color: "#F7F4EE",
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
            textDecoration: "none",
            transition: "background 0.2s",
          }}>
            Shop Collection
          </a>
          <a href="/collections/teak-dining-sets" style={{
            display: "inline-block",
            padding: "16px 36px",
            border: "1px solid #D6D2CB",
            color: "#F7F4EE",
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
            textDecoration: "none",
          }}>
            Explore Dining Sets
          </a>
        </div>
      </div>
    </section>
  );
}
