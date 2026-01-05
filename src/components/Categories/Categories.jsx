import homeImg from "../../assets/images/img1.png";
import groceryImg from "../../assets/images/img2.png";
import spicesImg from "../../assets/images/img3.png";
import category4 from "../../assets/images/img4.png";
import category5 from "../../assets/images/img5.png";
import baby from "../../assets/images/img6.png";
import "./Categories.css";

const categories = [
  { name: "Home & Living", img: homeImg },
  { name: "Grocery", img: groceryImg },
  { name: "Daily Spices", img: spicesImg },
  { name: "Category 4", img: category4 },
  { name: "Category 5", img: category5 },
  { name: "Baby & Kids", img: baby },
];

const Categories = () => {
  return (
    <section className="categories">
      {categories.map((cat) => (
        <div key={cat.name} className="category-card">
          <div className="image-wrapper">
            <img src={cat.img} alt={cat.name} />
          </div>
          <p className="category-title">{cat.name}</p>
        </div>
      ))}
    </section>
  );
};

export default Categories;
