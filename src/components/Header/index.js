import "components/Header/Logo.css";
import { UserContext } from "context/UserContext";
import { useContext } from "react";
import { Link } from "wouter";
import { CgLogIn } from "react-icons/cg";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className="wrapper">
      <Link className="logo" to="/">
        NeedGifs
      </Link>
      <div>
        {user !== null ? (
          <Link to="/login">
            <p>Logout</p>
          </Link>
        ) : (
          <Link to="/login">
            <CgLogIn />
          </Link>
        )}
      </div>
    </div>
  );
}
