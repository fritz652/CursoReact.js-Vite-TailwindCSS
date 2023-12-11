import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black"
            onClick={() => context.clouseProductDetail()}
          />
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;
