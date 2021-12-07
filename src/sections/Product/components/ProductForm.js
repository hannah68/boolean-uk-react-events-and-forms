import React from 'react'
import { useState } from "react"
import ColorSquare from "./ColorSquare"

// one way of doing state==================================
const ProductForm = () => {
    const [updateForm, setUpdateForm] = useState({
        size: "",
        color: "",
        quantity: 0,
    });
    
    const changeInputHandler = (e) => {
        const name = e.target.name;
        const type = e.target.type;
        const id = e.target.id;

        if(type === 'radio' && name === 'size'){
            setUpdateForm({...updateForm, size: e.target.value})
        }
        if(id === 'color'){
            setUpdateForm({...updateForm, color: e.target.value})
        }
        if(name === 'quantity'){
            setUpdateForm({...updateForm, quantity: e.target.value})
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const productData = {
            size : updateForm.size,
            color: updateForm.color,
            quantity: updateForm.quantity
        }
        console.log({productData});
    }
    
    return (
        <form className="form-stack" onSubmit={submitHandler}>
            <label>Size</label>

            <input 
                type="radio" 
                id="size-sm" 
                name="size" 
                value= "small"
                onChange={changeInputHandler}
                />
            <label htmlFor="size-sm">S</label>
            <input 
                type="radio" 
                id="size-md" 
                name="size" 
                value= "medium"
                onChange={changeInputHandler}
                />
            <label htmlFor="size-md">M</label>
            <input 
                type="radio" 
                id="size-lg" 
                name="size" 
                value= "large"
                onChange={changeInputHandler}
                />
            <label htmlFor="size-lg">L</label>
            <label htmlFor="size">Color</label>
            <ColorSquare />

            <select 
                id="color" 
                onChange={changeInputHandler}
            >
                <option value="">Please Select a Color...</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
            <label htmlFor="quantity">Quantity</label>
                <input 
                type="number" 
                id="quantity" 
                name="quantity" 
                onChange={changeInputHandler}
                />
            <button type="submit">Buy</button>
      </form>
    )
}

export default ProductForm



// another way of doing form state====================================

// const ProductForm = () => {
//     const [size, setSize] = useState('');
//     const [color, setColor] = useState('');
//     const [quantity, setQuantity] = useState('');

//     const sizeHandler = (e) => {
//         if(e.target.checked){
//             setSize(e.target.value)
//         }
//     }

//     const submitHandler = (e) => {
//         e.preventDefault();
//         const productData = {
//             size,
//             color,
//             quantity: Number(quantity)
//         }
//         console.log({productData});
//     }
    
//     return (
//         <form className="form-stack" onSubmit={submitHandler}>
//             <label>Size</label>

//             <input 
//                 type="radio" 
//                 id="size-sm" 
//                 name="size" 
//                 value= "small"
//                 checked={size === "small"}
//                 onChange={sizeHandler}
//                 />
//             <label htmlFor="size-sm">S</label>
//             <input 
//                 type="radio" 
//                 id="size-md" 
//                 name="size" 
//                 checked={size === "medium"}
//                 value= "medium"
//                 onChange={sizeHandler}
//                 />
//             <label htmlFor="size-md">M</label>
//             <input 
//                 type="radio" 
//                 id="size-lg" 
//                 name="size" 
//                 checked={size === "large"}
//                 value= "large"
//                 onChange={sizeHandler}
//                 />
//             <label htmlFor="size-lg">L</label>
//             <label htmlFor="size">Color</label>
//             <ColorSquare />

//             <select 
//                 id="color" 
//                 value={color} 
//                 onChange={(e) => setColor(e.target.value)}
//             >
//                 <option value="">Please Select a Color...</option>
//                 <option value="white">White</option>
//                 <option value="black">Black</option>
//                 <option value="red">Red</option>
//                 <option value="blue">Blue</option>
//                 <option value="green">Green</option>
//             </select>
//             <label htmlFor="quantity">Quantity</label>
//                 <input 
//                 type="number" 
//                 id="quantity" 
//                 name="quantity" 
//                 value={quantity}
//                 onChange={(e) => setQuantity(e.target.value)}
//                 />
//             <button type="submit">Buy</button>
//       </form>
//     )
// }

// export default ProductForm