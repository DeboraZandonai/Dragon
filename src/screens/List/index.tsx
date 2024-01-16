import { Button } from '../../components/button';
import { DragonList } from '../../components/dragonList';
import imageDragon from "../../assets/img-2.png"
import * as S from './styles';
import { useList } from './useList';
import Search from '../../components/search';

export function List() {
	const {
		filteredDragons,
		edit,
		handleSearch,
    handleDragonClick,
		handleNavigationToRegister,
		handleDeleteDragon,
		handleEditDragon,
    handleUpdateDragon,
	} = useList();

	return (
		<S.Container>
			<S.Content>
				<S.Top>
					<img src={imageDragon} />
					<S.ContainerTitle>
						<p>Lista de dragões</p>
					</S.ContainerTitle>
					<Button variant='outline' onClick={handleNavigationToRegister}>
						Cadastrar
					</Button>
				</S.Top>
				<S.Line />
				<Search onSearch={handleSearch}/>
				<S.Grid>
				{filteredDragons?.map(dragon => (
					<DragonList 
						key={dragon.id}
						id={dragon.id}
						name={dragon.name}
						onPressDragon={() => handleDragonClick(dragon)} 
						onPressDelete={() => handleDeleteDragon(dragon.id)}
						onPressEdit={handleEditDragon}
						onPressSave={(editedName) => handleUpdateDragon(dragon.id, editedName, dragon.type, dragon.histories, dragon.createdAt)}
						editId={edit}
					/>
				))}
				</S.Grid>
			</S.Content>
    </S.Container>
	)
}
