import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    { name: "Monaco Dining Set", price: "$2,499" },
    { name: "Capri Chaise Lounge", price: "$899" },
    { name: "Aspen Club Chair", price: "$1,099" },
    { name: "Hudson 6ft Bench", price: "$799" },
    { name: "Monaco Coffee Table", price: "$599" },
    { name: "Marbella Sectional", price: "$3,999" },
  ];

  return (
    <main>
      <Header />
      <Hero />
      <section className="container">
        <h2 className="section-title">Best Sellers</h2>
        <div className="grid">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>
      <section className="container why-tfo">
        <h2 className="section-title">Why TFO</h2>
        <div className="why-grid">
          <div className="why-item">
            <h3>Grade-A Teak</h3>
            <p>Sustainably sourced, premium Grade-A plantation teak for lasting quality.</p>
          </div>
          <div className="why-item">
            <h3>Weather Resistant</h3>
            <p>Naturally resistant to moisture, insects, and harsh outdoor conditions.</p>
          </div>
          <div className="why-item">
            <h3>Luxury Design</h3>
            <p>Modern, clean-lined designs that elevate any outdoor space.</p>
          </div>
          <div className="why-item">
            <h3>White Glove Delivery</h3>
            <p>Premium delivery service available for a seamless experience.</p>
          </div>
        </div>
      </section>
      <section className="seo-section container">
        <h2>The Gold Standard in Outdoor Furniture</h2>
        <p>
          Teak furniture has long been considered the pinnacle of outdoor living. 
          TFO curates the finest Grade-A teak pieces, from dining sets to chaise lounges,
          crafted for timeless beauty and unmatched durability. Our collections are 
          designed for those who demand the best — luxury homeowners, designers, 
          and Airbnb hosts who want furniture that lasts generations.
        </p>
      </section>
    </main>
  );
}
