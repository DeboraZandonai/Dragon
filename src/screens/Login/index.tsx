import { Button } from '../../components/button';
import Input from '../../components/input';
import * as S from './styles';
import { useLogin } from './useLogin';

export function Login() {
	const {
		valueEmail,
    valuePassword,
    setValueEmail,
    setValuePassword,
    handleNavigationDragonList,
	} = useLogin();

	return (
		<S.Container>
			<S.Content>
				<Input 
					placeholder='Digite seu e-mail' 
					label='E-mail' value={valueEmail} 
					onChange={(e) => setValueEmail(e.target.value)} 
				/>
				<Input 
					placeholder='Digite sua senha'
					label='Senha' value={valuePassword}
					type='password'
					onChange={(e) => setValuePassword(e.target.value)}
				/>
				<Button variant='fill' onClick={handleNavigationDragonList}>
					Entrar
				</Button>
			</S.Content>
		</S.Container>
	)
}
