import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../services/AuthContext";

const useLogin = () => {
  const navigate = useNavigate();
  const { isLoggedIn, login } = useContext(AuthContext);
  const [valueEmail, setValueEmail ] = useState("");
  const [valuePassword, setValuePassword ] = useState("");
  const [error, setError] = useState('');

  const handleNavigationDragonList = () => {
    if (valueEmail === 'teste@gmail.com' && valuePassword === 'testedragon') {
      setError('');
      login();
    } else {
      setError('Incorrect email or password.');
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/lista');
    }
  }, [isLoggedIn, navigate]);
  

  return {
    valueEmail,
    valuePassword,
    error,
    setValueEmail,
    setValuePassword,
    handleNavigationDragonList,
  };
};

export { useLogin };
