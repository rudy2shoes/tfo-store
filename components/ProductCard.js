export default function ProductCard({ name, price, description }) {
  return (
    <div style={{
      background: "#FFFFFF",
      borderRadius: "2px",
      overflow: "hidden",
      transition: "transform 0.2s, box-shadow 0.2s",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
    }}
    >
      {/* Product Image Placeholder */}
      <div style={{
        height: "260px",
        background: "linear-gradient(135deg, #D6D2CB 0%, #B88B5A20 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}>
        <span style={{
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          color: "#888",
          textTransform: "uppercase",
        }}>
          Teak Furniture
        </span>
        <div style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          background: "#B88B5A",
          color: "#fff",
          fontSize: "0.7rem",
          padding: "4px 8px",
          letterSpacing: "0.05em",
        }}>
          Grade-A Teak
        </div>
      </div>
      
      {/* Product Info */}
      <div style={{ padding: "20px" }}>
        <h3 style={{
          fontSize: "1rem",
          fontWeight: "400",
          color: "#1E1E1E",
          marginBottom: "6px",
          letterSpacing: "-0.01em",
        }}>
          {name}
        </h3>
        {description && (
          <p style={{
            fontSize: "0.85rem",
            color: "#888",
            marginBottom: "12px",
            lineHeight: "1.5",
          }}>
            {description}
          </p>
        )}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <span style={{
            fontSize: "1.1rem",
            fontWeight: "500",
            color: "#1E1E1E",
          }}>
            {price}
          </span>
          <a href="#" style={{
            fontSize: "0.8rem",
            color: "#B88B5A",
            letterSpacing: "0.05em",
            textDecoration: "none",
            borderBottom: "1px solid #B88B5A",
            paddingBottom: "2px",
          }}>
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
