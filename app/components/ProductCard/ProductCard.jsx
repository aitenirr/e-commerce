import ProductCardDes from "./ProductCardDes";
import ProductCardMob from "./ProductCardMob";

export default function ProductCard({ product }) {
  return (
    <div>
      <ProductCardMob product={product} />
      <ProductCardDes product={product} />
    </div>
  );
}
