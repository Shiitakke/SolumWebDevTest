import { useEffect } from "react";
import { useNavigate } from "react-router";

const IndexPage = () => {
  const navigate = useNavigate();
  // Redirect to either login or dashboard, depending on if someone is logged in
    useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser === null) {
      navigate("/login");
    } else {
      navigate("/dashboard");
    }
  }, [navigate])
}

export default IndexPage;