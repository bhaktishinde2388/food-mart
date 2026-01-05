import "./NewArrivals.css";

import honeyImg from "../../assets/images/nimg1.jpg";
import spicesImg from "../../assets/images/nimg2.jpg";
import containerImg from "../../assets/images/nimg3.jpg";
import foodImg from "../../assets/images/nimg4.jpg";

const products = [
  {
    img: honeyImg,
    brand: "Amber Jar",
    title: "Honey best nectar you wish to get",
  },
  {
    img: spicesImg,
    brand: "Amber Jar",
    title: "Honey best nectar you wish to get",
  },
  {
    img: containerImg,
    brand: "Amber Jar",
    title: "Honey best nectar you wish to get",
  },
  {
    img: foodImg,
    brand: "Amber Jar",
    title: "Honey best nectar you wish to get",
  },
];

export default function NewArrivals() {
  return (
    <section className="arrival-section">
      <div className="section-header">
        <h2>Newly Arrived Brands</h2>
        <span>View All Categories →</span>
      </div>

      <div className="arrival-grid">
        {products.map((item, index) => (
          <div className="arrival-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="arrival-text">
              <small>{item.brand}</small>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
