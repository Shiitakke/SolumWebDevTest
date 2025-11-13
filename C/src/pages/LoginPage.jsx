import { useState } from "react";
import { redirect, useNavigate } from "react-router";

const Loginpage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputFieldStyle = "m-5 bg-white border-b rounded-t-md shadow-md";

  const attemptLogin = (email, password) => {
    if (email.length === 0) {
      alert("No email entered");
      return;
    }
    // Regex is fancy, we look ahead for all the requirements, 
    // and then tack on a normal regex afterwards to test for length
    // may be worth swapping to regular length testing to make this more manageable
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!$%^&*()_+|~\-=`\{\}\[\]:\";'<>?,.])[a-zA-Z0-9!$%^&*()_+|~\-=`\{\}\[\]:\";'<>?,.]{8,16}$/
    if (!passwordRegex.test(password)) {
      alert("Invalid password format");
      return;
    }
    // LocalStorage is initialised in App.jsx
    const userList = JSON.parse(localStorage.getItem("users"));
    const user = userList.find((user) => user["email"] === email);
    if (user === undefined) {
      alert("Invalid email");
      return;
    }
    if (user["password"] !== password) {
      alert("Incorrect password");
      return;
    }
    // Everything correct, redirect to dashboard
    navigate("/dashboard");
  }

  return (
  <> 
  {/* Container for entire form */}
  <div className="w-120 h-140 m-auto relative top-50">
    {/* Container for form */}
    <div className="w-auto h-full p-[10%] bg-stone-100 rounded-4xl shadow-[0px_0px_10px_grey]">
      {/* Email field */}
      <div>
        <label htmlFor="emailInput">Email:</label>
        <input
          className={inputFieldStyle}
          type="text"
          id="emailInput"
          name="emailInput"
          onChange={(e) => {setEmail(e.target.value)}}
        />
      </div>
      {/* Password field */}
      <div>
        <label htmlFor="passowrdInput">Password:</label>
        <input
          className={inputFieldStyle}
          type="password"
          id="passwordInput"
          name="passwordInput"
          onChange={(e) => {setPassword(e.target.value)}}
        />        
      </div>
      {/* Login button */}
      <input 
        className="px-[2%] py-[1%] bg-white float-right rounded-md shadow-md hover:cursor-pointer hover:shadow-lg hover:bg-stone-200"
        type="submit"
        name="loginButton"
        value="Login"
        onClick={() => {attemptLogin(email, password)}}
      />
    </div>
  </div>
  </>
  )
}


export default Loginpage;