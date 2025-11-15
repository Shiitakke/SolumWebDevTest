import { useState } from "react";
import { useNavigate } from "react-router";

const Loginpage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputFieldStyle = "w-full h-10 px-2 bg-white border-b rounded-t-md shadow-md mt-2 mb-5";

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
    localStorage.setItem("loggedInUser", email);
    navigate("/dashboard");
  }

  return (
  <> 
  {/* Container for entire form */}
  <div 
    className="w-screen h-screen flex"
  >
    {/* Container for form */}
    <div 
      className="shadow-[0px_0px_10px_grey] w-screen h-screen min-w-60 min-h-70 sm:w-100 sm:h-100 sm:max-h-[95vh] sm:m-auto sm:rounded-4xl sm:shadow-[0px_0px_10px_grey] p-10 bg-stone-100"
    >
      {/* Email field */}
      <div>
        <div>Email:</div>
        <div>
          <input
            className={inputFieldStyle}
            type="text"
            id="emailInput"
            name="emailInput"
            placeholder="Enter email"
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>

      </div>
      {/* Password field */}
      <div>
        <label htmlFor="passowrdInput">Password:</label>
        <input
          className={inputFieldStyle}
          type="password"
          id="passwordInput"
          name="passwordInput"
          placeholder="Enter password"
          onChange={(e) => {setPassword(e.target.value)}}
        />
      </div>
      {/* Login button */}
      <input 
        className="px-[2%] py-[1%] bg-white border-b float-right rounded-t-md shadow-md hover:cursor-pointer hover:shadow-lg hover:bg-stone-200"
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