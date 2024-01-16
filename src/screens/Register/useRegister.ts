import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateDragon } from "../../hooks/useDragons";

const useRegister = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
	const [type, setType] = useState("");
	const [historie, setHistorie] = useState("");
  const { mutate: createDragon } = useCreateDragon();

  const currentDateTime = new Date().toISOString();

  const handleCancel = () => {
    navigate("/lista");
  }

  const handleCreateNewDragon = () => {
    try {
      createDragon({name, type, histories: historie, createdAt: currentDateTime})
      navigate("/lista");
    } catch (error) {
      alert("Não foi possível criar um novo dragão!")
    }
  }

  return {
    name,
    type,
    historie,
    setName,
    setType,
    setHistorie,
    handleCancel,
    handleCreateNewDragon,
  };
};

export { useRegister };