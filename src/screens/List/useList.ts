import { useEffect, useMemo, useState } from "react";
import { Dragon, useDeleteDragon, useDragons, useUpdateDragon } from "../../hooks/useDragons";
import { useNavigate } from "react-router-dom";

const useList = () => {
  const navigate = useNavigate();
  const [selectedDragon, setSelectedDragon] = useState<Dragon>();
  const [edit, setEdit] = useState<string | null>(null);
  const { data: dragons } = useDragons();
  const { mutate: deleteDragon } = useDeleteDragon();
  const { mutate: updateDragon } = useUpdateDragon();
  const dragonsSorted = useMemo(() => {
    return dragons
      ? [...dragons].sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }))
      : [];
  }, [dragons]);

  const [filteredDragons, setFilteredDragons] = useState<Dragon[]>([]);

  const handleDragonClick = (dragon: Dragon) => {
    setSelectedDragon(dragon);
    navigate(`/detalhe/${dragon.id}`, { state: { selectedDragon: dragon } });
  };

  const handleSearch = (query: string) => {
    if (query) {
      const filtered = dragonsSorted.filter(dragon =>
        dragon.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredDragons(filtered);
    } else {
      setFilteredDragons(dragonsSorted);
    }
  };

  const handleNavigationToRegister = () => {
    navigate("/cadastrar");
  }

  const handleDeleteDragon = (id: string) => {
    try {
      deleteDragon(id);
    } catch (error) {
      alert("Não foi possível deletar dragão!")
    }
  }

  const handleUpdateDragon = (id: string, editedName: string, type: string, histories: string, createdAt: string) => {
    setEdit(null)
    try {
      updateDragon({ id, name: editedName, type, histories, createdAt });
    } catch (error) {
      alert("Não foi possível atualizar o dragão!");
    }
  };

  const handleEditDragon = (id: string) => {
    setEdit(id);
  }

  useEffect(() => {
    setFilteredDragons(dragonsSorted);
  }, [dragonsSorted]);

  return {
    filteredDragons,
    edit,
    selectedDragon,
    handleDragonClick,
    handleNavigationToRegister,
    handleDeleteDragon,
    handleEditDragon,
    handleSearch,
    handleUpdateDragon,
  };
};

export { useList };