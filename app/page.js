import ProductCard from "@/app/components/ProductCard/ProductCard";
import Image from "next/image";
import Photo1 from "@/app/assets/product-cover-5.png";
import Posts from "./(components)/Posts";
import VitaClassic from "@/app/components/VitaClassic/VitaClassic";
import Part from "@/app/components/ Part/ Part";
import Footer from "./components/Footer";
import MainOne from "./components/MainOne";
import MainOneMobile from "./components/MainOneMobile";
import EditorsPick from "./components/EditorsPick/EditorsPick";
import Photo2 from "@/app/assets/product-cover-6.png";
import Photo3 from "@/app/assets/product-cover-7.png";

import Photo4 from "@/app/assets/product-cover-8.png";

import Photo5 from "@/app/assets/product-cover-9.png";

import Photo6 from "@/app/assets/product-cover-10.png";
import Photo7 from "@/app/assets/product-cover-11.png";
import Photo8 from "@/app/assets/product-cover-12.png";

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
    photo: Photo2,
  },
  ,
  {
    id: 3,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo3,
  },
  ,
  {
    id: 4,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo4,
  },
  ,
  {
    id: 5,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo5,
  },
  ,
  {
    id: 6,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo6,
  },
  ,
  {
    id: 7,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo7,
  },
  {
    id: 8,
    title: "Graphic Design",
    category: "English Department",
    price: 16.48,
    discountPrice: 6.48,
    photo: Photo8,
  },
];

export default function Home() {
  return (
    <main>
      <MainOne />
      <MainOneMobile />
      <EditorsPick />

      <section className="tw-mt-[200px] tw-px-9 md:tw-px-36 tw-flex tw-flex-col md:tw-gap-y-8">
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
      <VitaClassic />
      <Part />
      <Posts />
      <Footer />
    </main>
  );
}
