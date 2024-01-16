import * as S from './styles';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {  MdCancel, MdEdit } from "react-icons/md";
import { useState } from 'react';

interface DragonListProps {
  id: string;
  name: string;
  onPressDragon(): void;
  onPressDelete(): void;
  onPressEdit(id: string): void;
  onPressSave(editedName: string): void;
  editId: string | null;
}

export function DragonList({ id, name, onPressDragon, onPressDelete, onPressSave, onPressEdit, editId }: DragonListProps) {
  const [editedName, setEditedName] = useState(name);
  const isEditMode = editId === id;

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(event.target.value);
  };

  const handleSave = () => {
    onPressSave(editedName);
  };

  const truncarText = (texto: string, maxChars: number = 22): string => {
    if (texto.length <= maxChars) {
      return texto;
    }
    return texto.substring(0, maxChars) + "...";
  }

  return (
    <S.Container>
      <S.Content>
        {isEditMode ? (
          <>
            <IoIosCheckmarkCircleOutline color='#fff' onClick={handleSave} cursor="pointer" />
            <S.Input value={editedName} onChange={handleNameChange} />
          </>
        ) : (
          <>
            <MdEdit color='#fff' onClick={() => onPressEdit(id)} cursor="pointer"/>
            <S.Item onClick={onPressDragon}>
              <p>{truncarText(name)}</p>
            </S.Item>
          </>
        )}
        <MdCancel color='#fff' onClick={onPressDelete} cursor="pointer"/>
      </S.Content>
      <S.Line/>
    </S.Container>
  );
}
