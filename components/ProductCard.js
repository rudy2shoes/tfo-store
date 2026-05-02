export default function ProductCard({ name, price, tag, image }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <span>{image}</span>
      </div>
      <div className="product-info">
        <p>{tag}</p>
        <h3>{name}</h3>
        <div className="product-bottom">
          <span>{price}</span>
          <button>View</button>
        </div>
      </div>
    </div>
  );
}
