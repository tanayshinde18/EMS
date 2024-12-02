import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Header from "./components/other/Header";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
 
  // const Authdata = useContext(AuthContext)
const[userData,setUserData]=useContext(AuthContext)
   
// localStorage.clear()
 const [loggedInUserData, setloggedInUserData]=useState(null);


 setLocalStorage();
  getLocalStorage();

 useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
  

  if(loggedInUser){
   const userData = JSON.parse(loggedInUser)
   setUser(userData.role)
   setloggedInUserData(userData.data)

  }

 },[])
  
  

  const handleLogin = (email, password) => {
    if (email=='admin@me.com' && password=='123'){
    //(Authdata &&
    //   userData.admin.find(
    //     (e) => e.email == email && e.password == password)) {
      // console.log("this is admin")
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (
      userData){
        const employee=
      userData.find(
        (e) => e.email == email && e.password == password
      )
      if(employee){
        setUser("employee")
        setloggedInUserData(employee)
        // console.log("this is user");
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))

      }
     
      
    } else {
      alert("invalid creds");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user && user == "admin" ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser}  data={loggedInUserData} />:null)}
    </>
  );
};

export default App;
