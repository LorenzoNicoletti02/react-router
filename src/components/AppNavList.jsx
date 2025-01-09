import { Link, NavLink } from "react-router-dom";

function AppNavList() {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/ChiSiamo"}>Chi Siamo</NavLink>
      <NavLink to={"/ListaPost"}>Lista Post</NavLink>
    </nav>
  );
}

export default AppNavList;
