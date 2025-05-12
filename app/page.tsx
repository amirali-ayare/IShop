import BestProducts from "@/components/BestProducts";
import BestSeller from "@/components/BestSeller";
import Blogs from "@/components/blogs";
import Brands from "@/components/Brands";
import Gamerspkg from "@/components/Gamerspkg";
import IncreadibleProducts from "@/components/IncreadibleProducts";
import Laptops from "@/components/Laptops";
import Mobiles from "@/components/Mobiles";
import MostSell from "@/components/MostSell";
import NewProducts from "@/components/NewProducts";
import PopularProducts from "@/components/PopularProducts";
import Slider from "@/components/Slider";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <div>
      <Stories />
      <Slider />
      <PopularProducts />
      <NewProducts />
      <BestSeller />
      <Mobiles />
      <MostSell />
      <IncreadibleProducts />
      <BestProducts />
      <Laptops />
      <Gamerspkg />
      <Blogs />
      <Brands />
    </div>
  );
}
