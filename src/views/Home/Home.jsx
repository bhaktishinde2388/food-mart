import Categories from "../../components/Categories/Categories.jsx";
import CategorySection from "../../components/CategorySection/CategorySection.jsx";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel.jsx";
import NewArrivals from "../../components/NewArrivals/NewArrivals.jsx";
import ProductGrid from "../../components/ProductGrid.jsx";

const Home = () => {
  return (
    <>
      <Categories />
      <HeroCarousel/>
<CategorySection/>
<NewArrivals/>
      <ProductGrid />
    </>
  );
};

export default Home;
