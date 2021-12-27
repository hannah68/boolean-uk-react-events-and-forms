import React from 'react'

const BookingForm = (props) => {
    const {productData, setProductData} = props;

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const checked = e.target.checked;

        if(name === 'date'){
            setProductData({...productData, [name]: value}) 
        }
        if(name === 'newspaper' || name === 'breakfast'){
            setProductData({...productData, roomServices: {...productData.roomServices, [name] : checked}}) 
        }
        if(name === 'pool' || name === 'facial' || name === 'massage'){
            setProductData({...productData, spaActivities: [...productData.spaActivities, name]}) 
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log({productData});
    }

    return (
        <form className="form-stack" onSubmit={submitHandler}>
            <label htmlFor="date">When will you be arriving?</label>
            <input 
                type="datetime-local" 
                name='date'
                onChange={changeHandler}
                />
            <section>
                <h3>Spa Activities</h3>
                <input 
                    type="checkbox" 
                    id="pool" 
                    name="pool"
                    onChange={changeHandler}
                    />
                <label htmlFor="pool">Soak and Swim</label>
                <input 
                    type="checkbox" 
                    id="facial" 
                    name="facial"
                    onChange={changeHandler}
                    />
                <label htmlFor="facial">Facial</label>
                <input 
                    type="checkbox" 
                    id="massage" 
                    name="massage"
                    onChange={changeHandler}
                    />
                <label htmlFor="massage">Massage</label>
            </section>
            <section>
                <h3>Room Services</h3>
                <input 
                    type="checkbox" 
                    id="newspaper" 
                    name="newspaper"
                    onChange={changeHandler}
                    />
                <label htmlFor="newspaper">Daily Newspaper</label>
                <input 
                    type="checkbox" 
                    id="breakfast" 
                    name="breakfast"
                    onChange={changeHandler}
                    />
                <label htmlFor="breakfast">Breakfast</label>
            </section>
            <button type="submit">Book</button>
        </form>
    )
}

export default BookingForm


// refactoring========================================
// const BookingForm = () => {
//     const [productData, setProductData] = useState({
//         date: "",
//         roomServices: {
//             newspaper: false,
//             breakfast: false
//         },
//         spaActivities: [],
//     });

//     const checkboxes = [
//         {
//             id: 'pool',
//             name: 'pool',
//             label: 'Soak and Swim',
//         },
//         {
//             id: 'facial',
//             name: 'facial',
//             label: 'Facial',
//         },
//         {
//             id: 'massage',
//             name: 'massage',
//             label: 'Massage',
//         }
//     ];

//     const checkboxItems = [
//         {
//             id: 'newspaper',
//             name: 'newspaper',
//             label: 'Daily Newspaper',
//         },
//         {
//             id: 'breakfast',
//             name: 'breakfast',
//             label: 'Breakfast',
//         },
//     ];


//     const handleChange = (e) => {
//         const id = e.target.id;
//         const checked = e.target.checked;
//         const name = e.target.name;
//         const type = e.target.type;
//         const value = e.target.value;

//         if(type === "datetime-local"){
//             setProductData({...productData, date: value})
//         }
//         if(checked){
//             setProductData({...productData, spaActivities: [...productData.spaActivities, name]})
//         }
//         if(checked && id === 'breakfast' || id === 'newspaper'){
//             setProductData({...productData, roomServices: {...productData.roomServices, [name] : checked}})
//         }
//     }

//     const submitFormHandler = (e) => {
//         e.preventDefault();
//         console.log({productData});
//     }

//     return (
//         <form className="form-stack" onSubmit={submitFormHandler}>
//             <label htmlFor="date">When will you be arriving?</label>
//             <input type="datetime-local" onChange={ handleChange}/>
//             <section>
//                 <h3>Spa Activities</h3>
//                 {checkboxes.map((checkbox, index) => {
//                     return <CheckboxesGroup 
//                     checkbox={checkbox} 
//                     setProductData={setProductData} 
//                     productData={productData}
//                     handleChange={handleChange}
//                     key={index}
//                     />
//                 })}
//             </section>
//             <section>
//                 <h3>Room Services</h3>
//                 {checkboxItems.map((checkbox, index) => {
//                     return <CheckboxesGroup 
//                     checkbox={checkbox} 
//                     setProductData={setProductData} 
//                     productData={productData}
//                     handleChange={handleChange}
//                     key={index}
//                     />
//                 })}
//             </section>
//             <button type="submit">Book</button>
//         </form>
//     )
// }

// first way of doing===================================

// const BookingForm = () => {
//     const [productData, setProductData] = useState({
//         date: "",
//         roomServices: {
//             newspaper: false,
//             breakfast: false
//         },
//         spaActivities: [],
//     });

//     const handleChange = (e) => {
//         const name = e.target.name;
//         const id = e.target.id;
//         const checked = e.target.checked;
//         const value = e.target.value;
//         const type = e.target.type;

//         if(type === "datetime-local"){
//             setProductData({...productData, date: value})
//         }
//         if(id === "pool"){
//             setProductData({...productData, spaActivities: [...productData.spaActivities, name]})
//         }
//         if(id === "facial"){
//             setProductData({...productData, spaActivities: [...productData.spaActivities, name]})
//         }
//         if(id === "massage"){
//             setProductData({...productData, spaActivities: [...productData.spaActivities, name]})
//         }
//         if(id === "newspaper"){
//             setProductData({...productData, roomServices: {...productData.roomServices, [name]: checked}})
//         }
//         if(id === "breakfast"){
//             setProductData({...productData, roomServices: {...productData.roomServices, [name]: checked}})
//         }
//         console.log(productData);
//     }
   
//     const submitFormHandler = (e) => {
//         e.preventDefault();
//         console.log({productData});
//     }

    


//     return (
//         <form className="form-stack" onSubmit={submitFormHandler}>
//             <label htmlFor="date">When will you be arriving?</label>
//             <input type="datetime-local" onChange={handleChange}/>
//             <section>
//                 <h3>Spa Activities</h3>
//                 <input
//                     type="checkbox"
//                     id="pool"
//                     name="pool"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="pool">Soak and Swim</label>
//                 <input
//                     type="checkbox"
//                     id="facial"
//                     name="facial"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="facial">Facial</label>
//                 <input
//                     type="checkbox"
//                     id="massage"
//                     name="massage"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="massage">Massage</label>
//             </section>
//             <section>
//                 <h3>Room Services</h3>
//                 <input 
//                     type="checkbox" 
//                     id="newspaper" 
//                     name="newspaper"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="newspaper">Daily Newspaper</label>
//                 <input 
//                     type="checkbox" 
//                     id="breakfast" 
//                     name="breakfast"
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="breakfast">Breakfast</label>
//             </section>
//             <button type="submit">Book</button>
//         </form>
//     )
// }


