import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

const products = [
  { name: "Monaco 7-Piece Teak Dining Set", price: "$2,499", tag: "Best Seller", image: "Dining Collection" },
  { name: "Capri Adjustable Teak Chaise", price: "$899", tag: "Poolside Luxury", image: "Chaise Lounge" },
  { name: "Aspen Teak Club Chair", price: "$1,099", tag: "Deep Seating", image: "Lounge Chair" }
];

const categories = [
  "Dining Sets", "Chaise Lounges", "Lounge Seating", "Benches", "Sectionals", "Care & Covers"
];

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section className="section intro">
        <p className="eyebrow">Grade-A Teak Outdoor Furniture</p>
        <h2>Outdoor living, elevated for every season.</h2>
        <p>
          TFO curates premium teak furniture designed for luxury patios, poolside spaces, garden retreats, and timeless outdoor entertaining.
        </p>
      </section>
      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Shop by Category</p>
          <h2>Built around how you live outside.</h2>
        </div>
        <div className="category-grid">
          {categories.map((cat) => (
            <div className="category-card" key={cat}>
              <span>{cat}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="section dark">
        <p className="eyebrow light">Why Teak</p>
        <h2>Crafted for decades, not seasons.</h2>
        <div className="benefits">
          <div>
            <h3>Weather Resistant</h3>
            <p>Teak naturally resists moisture, insects, rot, and outdoor wear.</p>
          </div>
          <div>
            <h3>Luxury Finish</h3>
            <p>Warm golden tones age beautifully into a refined silver-gray patina.</p>
          </div>
          <div>
            <h3>Low Maintenance</h3>
            <p>Leave it natural or preserve the original tone with simple seasonal care.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Featured Collection</p>
          <h2>Best-selling teak pieces.</h2>
        </div>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>
      <section className="section split">
        <div>
          <p className="eyebrow">The TFO Standard</p>
          <h2>Quiet luxury for the outdoors.</h2>
        </div>
        <p>
          From teak dining sets to chaise lounges and sectionals, every piece is selected for strength, proportion, material quality, and timeless curb appeal.
        </p>
      </section>
      <section className="cta">
        <p className="eyebrow light">Launch Offer</p>
        <h2>Design your outdoor space with furniture that lasts.</h2>
        <button>Shop Teak Furniture</button>
      </section>
    </main>
  );
}
