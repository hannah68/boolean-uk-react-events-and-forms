import { useState } from "react"
import SignUpForm from "./components/SignUpForm"

function SignUpSection() {
  const [userData, setUserData] = useState({
    firstName: "",
    email: "",
    password: "",
    terms: false
  });

  return (
    <section className="shadow pad-lg">
      <h2>Sign Up</h2>
      <SignUpForm setUserData={setUserData} userData={userData}/>
    </section>
  )
}

export default SignUpSection
