import { useLocation } from "react-router-dom";

const useDetails = () => {
  const location = useLocation();
  const { selectedDragon } = location.state || {};

  const formatDate = (dataISO: string): string => {
    const data = new Date(dataISO);
  
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); 
    const ano = data.getFullYear();
  
    return `${dia}/${mes}/${ano}`;
  }

  return {
    selectedDragon,
    formatDate,
  };
};

export { useDetails };