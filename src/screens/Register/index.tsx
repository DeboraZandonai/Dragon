import { Button } from '../../components/button';
import Input from '../../components/input';
import * as S from './styles';
import { useRegister } from './useRegister';

export function Register() {
	const {
		name,
		type,
		historie,
		setName,
		setType,
		setHistorie,
		handleCancel,
    handleCreateNewDragon,
	} = useRegister();

	return (
		<S.Container>
			<S.Content>
				<S.Wrapper>
					<h1>
						Cadastrar dragão
					</h1>
					<S.Line />
					<Input label='Nome' placeholder='Digite o nome' value={name} onChange={(e) => setName(e.target.value)} />
					<Input label='Tipo' placeholder='Digite o tipo' value={type} onChange={(e) => setType(e.target.value)} />
					<Input label='História' placeholder='Digite a história' value={historie} onChange={(e) => setHistorie(e.target.value)} />

					<S.Bottom>
						<Button variant='outline' onClick={handleCancel}>
							Cancelar
						</Button>
						<Button variant='fill' onClick={handleCreateNewDragon}>
							Salvar
						</Button>
					</S.Bottom>
				</S.Wrapper>
			</S.Content>
    </S.Container>
	)
}

