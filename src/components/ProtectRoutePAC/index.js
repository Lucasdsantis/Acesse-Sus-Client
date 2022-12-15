import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedRoutePAC(props) {
  const { component: Component } = props;
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");

  const parsedUser = JSON.parse(loggedInUser || '""');

  useEffect(() => {
    console.log(parsedUser);
    if (parsedUser.user.role !== "PAC") {
      navigate("/");
    }
  }, []);

  return <Component />;
}
