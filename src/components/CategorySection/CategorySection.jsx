import "./CategorySection.css";

const categories = [
  { name: "Home & Living", icon: "🛋️" },
  { name: "Grocery", icon: "🛒" },
  { name: "Daily Spices", icon: "🌶️" },
  { name: "Household", icon: "🧼" },
  { name: "Personal Care", icon: "✨" },
  { name: "Baby & Kids", icon: "🧸" },
];

export default function CategorySection() {
  return (
    <section className="category-section">
      <div className="section-header">
        <h2>Category</h2>
        <span>View All Categories →</span>
      </div>

      <div className="category-grid">
        {categories.map((cat, i) => (
          <div className="category-card" key={i}>
            <div className="category-icon">{cat.icon}</div>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
