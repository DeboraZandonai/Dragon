import * as S from './styles';
import imageDragonTop from "../../assets/img-1.png"
import imageDragonBottomLeft from "../../assets/img-2.png"
import imageDragonBottomRight from "../../assets/img-3.png"
import { useDetails } from './useDetails';

export function Details() {
 const {selectedDragon, formatDate} = useDetails();

	return (
		<S.Container>
			<S.ContainerDetail>
				<S.ContainerTopImage>
					<S.Line />
					<img src={imageDragonTop} />
					<S.Line />
				</S.ContainerTopImage>
				<S.InputTitle>
					<h1>Nome</h1>
				</S.InputTitle>
				<S.Form>
					<h1>{selectedDragon?.name}</h1>
					<S.ItemForm>
						<div>
							<h6>Data de criação:</h6>
							<p>{formatDate(selectedDragon?.createdAt)}</p>
						</div>
						<S.Line/>
					</S.ItemForm>
					<S.ItemForm>
						<div>
							<h6>Tipo:</h6>
							<p>{selectedDragon?.type}</p>
						</div>
						<S.Line/>
					</S.ItemForm>
					<S.ItemForm>
						<div>
							<h6>História:</h6>
							<p>{selectedDragon?.histories}</p>
						</div>
						<S.Line/>
					</S.ItemForm>
				</S.Form>
				<S.Bottom>
					<img src={imageDragonBottomLeft} />
					<img src={imageDragonTop} />
					<img src={imageDragonBottomRight} />
				</S.Bottom>
			</S.ContainerDetail>
		</S.Container>
	)
}