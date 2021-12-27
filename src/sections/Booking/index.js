import { useState } from "react"
import BookingForm from "./components/BookingForm"

function BookingSection() {
  const [productData, setProductData] = useState({
    date: "",
    roomServices: {
      newspaper: false,
      breakfast: false
    },
    spaActivities: [ ],
  })
  return (
    <section className="shadow pad-lg">
      <h2>Booking Form</h2>
      <BookingForm productData={productData} setProductData={setProductData}/>
    </section>
  )
}

export default BookingSection