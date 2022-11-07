import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <header className="header">
      <Link to="/">GoalSetter</Link>
      {user.user ? (
        <li>
          <button className="btn" onClick={onLogout}>
            <FaSignOutAlt />
            Logout
          </button>
        </li>
      ) : (
        <ul>
          <li>
            <Link to="/login">
              <FaSignInAlt />
              Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              <FaUser />
              Register
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
