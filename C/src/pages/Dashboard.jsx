import { useNavigate } from "react-router"

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  }

  return (
    <>
    <div
      className="flex justify-between w-screen h-[20%] min-h-10 shadow-lg bg-stone-200"
    >
      {/* welcome badge */}
      <div
        className="min-h-full px-2 border-x text-xl/10 text-stone-500"
      >
        Welcome, {localStorage.getItem("loggedInUser")}
      </div>
      {/* logout badge */}
      <div
        className="min-h-full px-2 border-x text-xl/10 text-stone-500 hover:bg-stone-300 hover:cursor-pointer"
        onClick={logout}
      >
        Logout
      </div>
    </div>
    </>
  )
}

export default Dashboard;