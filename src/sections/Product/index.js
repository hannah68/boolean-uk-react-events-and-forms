import { useState } from "react"
import ProductForm from "./components/ProductForm"
import ProductInfo from "./components/ProductInfo"

const ProductSection = () =>{
  const [productData, setProductData] = useState({
    size: "",
    color: "",
    quantity: null,
  })
  return (
    <section className="shadow pad-lg">
      <ProductInfo/>
      <ProductForm productData={productData} setProductData={setProductData}/>
    </section>
  )
}

export default ProductSection