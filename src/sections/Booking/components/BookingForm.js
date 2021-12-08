import React from 'react'
import { useState } from "react"

const BookingForm = () => {
    const [productData, setProductData] = useState({
        date: "",
        roomServices: {
            newspaper: false,
            breakfast: false
        },
        spaActivities: [],
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const id = e.target.id;
        const checked = e.target.checked;
        const value = e.target.value;
        const type = e.target.type;

        if(type === "datetime-local"){
            setProductData({...productData, date: value})
        }
        if(id === "pool"){
            setProductData({...productData, spaActivities: [...productData.spaActivities, name]})
        }
        if(id === "facial"){
            setProductData({...productData, spaActivities: [...productData.spaActivities, name]})
        }
        if(id === "massage"){
            setProductData({...productData, spaActivities: [...productData.spaActivities, name]})
        }
        if(id === "newspaper"){
            setProductData({...productData, roomServices: {...productData.roomServices, [name]: checked}})
        }
        if(id === "breakfast"){
            setProductData({...productData, roomServices: {...productData.roomServices, [name]: checked}})
        }
        console.log(productData);
    }
   
    const submitFormHandler = (e) => {
        e.preventDefault();
        console.log({productData});
    }

    


    return (
        <form className="form-stack" onSubmit={submitFormHandler}>
            <label htmlFor="date">When will you be arriving?</label>
            <input type="datetime-local" onChange={handleChange}/>
            <section>
                <h3>Spa Activities</h3>
                <input
                    type="checkbox"
                    id="pool"
                    name="pool"
                    onChange={handleChange}
                />
                <label htmlFor="pool">Soak and Swim</label>
                <input
                    type="checkbox"
                    id="facial"
                    name="facial"
                    onChange={handleChange}
                />
                <label htmlFor="facial">Facial</label>
                <input
                    type="checkbox"
                    id="massage"
                    name="massage"
                    onChange={handleChange}
                />
                <label htmlFor="massage">Massage</label>
            </section>
            <section>
                <h3>Room Services</h3>
                <input 
                    type="checkbox" 
                    id="newspaper" 
                    name="newspaper"
                    onChange={handleChange}
                />
                <label htmlFor="newspaper">Daily Newspaper</label>
                <input 
                    type="checkbox" 
                    id="breakfast" 
                    name="breakfast"
                    onChange={handleChange}
                />
                <label htmlFor="breakfast">Breakfast</label>
            </section>
            <button type="submit">Book</button>
        </form>
    )
}

export default BookingForm
