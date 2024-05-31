import ProductCategories from "../components/home/ProductCategories";
import ProductHero from "../components/home/ProductHero";
import ProductHowItWorks from "../components/home/ProductHowItWorks";


export default function HomePage() {
  return (
    <>
      <ProductHero/>
      <ProductCategories/>
      <ProductHowItWorks />
    </>
  );
}
