import React from 'react'

const SignUpForm = (props) => {
    const {userData, setUserData} = props;

    // handle changes============================
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const checked = e.target.checked;
        if(checked){
            setUserData({...userData, [name]: checked})
        }else{
            setUserData({...userData, [name]: value})
        }
    }

    // handle submit======================
    const submitHandler = (e) => {
        e.preventDefault();

        console.log({userData});
    }

    return (
        <form className="form-stack" onSubmit={submitHandler}>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                value={userData.firstName} 
                onChange={handleChange}
                />
                
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                value={userData.lastName} 
                onChange={handleChange}
                />
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                id="password" 
                name="password" 
                value={userData.password}
                onChange={handleChange}
                />
            <div>
                <input 
                    type="checkbox" 
                    id="terms" 
                    name="terms" 
                    checked={userData.terms}
                    onChange={handleChange}
                    />
                <label htmlFor="terms">I accept Terms and Conditons</label>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUpForm


// const SignUpForm = () => {
//     const [nameInput, setNameInput] = useState('');
//     const [emailInput, setEmailInput] = useState('');
//     const [passwordInput, setPasswordInput] = useState('');
//     const [termInput, setTermInput] = useState(false);
    
//     const onSubmitHandler = (e) => {
//         e.preventDefault();

//         const userData = {
//             firstName: nameInput,
//             email: emailInput,
//             password: passwordInput,
//             terms: termInput 
//         }

//         console.log({userData});
//         setNameInput('');
//         setEmailInput('');
//         setPasswordInput('');
//         setTermInput(false);
//     }

//     return (
//         <form className="form-stack" onSubmit={onSubmitHandler}>
//             <label htmlFor="firstName">First Name</label>
//             <input 
//                 type="text" 
//                 id="firstName" 
//                 name="firstName" 
//                 value={nameInput}
//                 onChange={(e) => setNameInput(e.target.value)}/>
//             <label htmlFor="email">Email</label>
//             <input 
//                 type="email" 
//                 id="email" 
//                 name="email" 
//                 value={emailInput}
//                 onChange={(e) => setEmailInput(e.target.value)} />
//             <label htmlFor="password">Password</label>
//             <input 
//                 type="password" 
//                 id="password" 
//                 name="password" 
//                 value={passwordInput}
//                 onChange={(e) => setPasswordInput(e.target.value)} />
//             <div>
//                 <input 
//                     type="checkbox" 
//                     id="terms" 
//                     name="terms"
//                     checked={termInput} 
//                     onChange={(e) => setTermInput(e.target.checked)}/>
//                 <label htmlFor="terms">I accept Terms and Conditons</label>
//             </div>
//             <button type="submit">Sign Up</button>
//         </form>
//     )
// }

// export default SignUpForm
