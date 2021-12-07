// import { useState } from "react"
import ColorSquare from "./components/ColorSquare"

function ProductSection() {
  return (
    <section className="shadow pad-lg">
      <h2>Awesome T-Shirt</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        tristique neque a magna pharetra, et tempus ex fringilla. Sed
        venenatis leo eget neque.
      </p>
      <form className="form-stack">
        <label>Size</label>
        <input type="radio" id="size-sm" name="size" value="small" />
        <label htmlFor="size-sm">S</label>
        <input type="radio" id="size-md" name="size" value="medium" />
        <label htmlFor="size-md">M</label>
        <input type="radio" id="size-lg" name="size" value="large" />
        <label htmlFor="size-lg">L</label>
        <label htmlFor="size">Color</label>
        <ColorSquare />
        <select id="size">
          <option value="">Please Select a Color...</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <label htmlFor="quantity">Quantity</label>
        <input type="number" id="quantity" name="quantity" />
        <button type="submit">Buy</button>
      </form>
    </section>
  )
}

export default ProductSection
