import AppRoutes from "./services/routes/routes"

import { ThemeProvider } from 'styled-components';
import Theme from "./styles/theme";

export default function App() {
	return (
		<ThemeProvider theme={Theme}>
			<AppRoutes />
		</ThemeProvider>
	)
}

