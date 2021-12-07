// import { useState } from "react"

function BookingSection() {
  return (
    <section className="shadow pad-lg">
      <h2>Booking Form</h2>
      <form className="form-stack">
        <label htmlFor="date">When will you be arriving?</label>
        <input type="datetime-local" />
        <section>
          <h3>Spa Activities</h3>
          <input type="checkbox" id="pool" name="pool" />
          <label htmlFor="pool">Soak and Swim</label>
          <input type="checkbox" id="facial" name="facial" />
          <label htmlFor="facial">Facial</label>
          <input type="checkbox" id="massage" name="massage" />
          <label htmlFor="massage">Massage</label>
        </section>
        <section>
          <h3>Room Services</h3>
          <input type="checkbox" id="newspaper" name="newspaper" />
          <label htmlFor="newspaper">Daily Newspaper</label>
          <input type="checkbox" id="breakfast" name="breakfast" />
          <label htmlFor="breakfast">Breakfast</label>
        </section>
        <button type="submit">Book</button>
      </form>
    </section>
  )
}

export default BookingSection
