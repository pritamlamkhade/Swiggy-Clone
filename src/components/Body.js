import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Public from "../routes/Public";
import Private from "../routes/Private";

const Body = () => {
  const user = useSelector((store) => store.user);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(user ? true : false);
  }, [user]);

  return !isAuthenticated ? <Public /> : <Private />;
};

export default Body;
