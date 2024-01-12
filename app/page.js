import Image from "next/image";
import foto from "./assets/hero1.png";
import ProductCardMobile from "./components/ProductCard/ProductCardMobile";
import ProductCardDesktop from "./components/ProductCard/ProductCardDesktop";
import ProductCard from "./components/ProductCard/ProductCard";
import Photo1 from "@/app/assets/product-cover-5.png";
import Posts from "./(components)/Posts";
const products = [
  {
    id: 1,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo1,
  },
  {
    id: 2,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo1,
  },
  ,
  {
    id: 3,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo1,
  },
  ,
  {
    id: 4,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo1,
  },
  ,
  {
    id: 5,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo1,
  },
  ,
  {
    id: 6,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo1,
  },
  ,
  {
    id: 7,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo1,
  },
  {
    id: 8,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo1,
  },
];
export default function Home() {
  return (
    <main>
      <Image src={foto} alt="lkjh" className="tw-h-full tw-w-full" />
      <section className="tw-px-9 md:tw-px-36 tw-flex tw-flex-col md:tw-gap-y-8">
        <div className="tw-text-center">
          <p>Featured Products</p>
          <h2>BESTSELLER PRODUCTS</h2>
          <p>Problems trying to resolve the conflict between </p>
        </div>

        <div className="tw-px-10 tw-flex tw-flex-row tw-flex-wrap md:tw-gap-x-8 md:tw-gap-y-20">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
      <Posts />
    </main>
  );
}
