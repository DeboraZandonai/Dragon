import AppRoutes from "./services/routes/routes"

import { ThemeProvider } from 'styled-components';
import Theme from "./styles/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/queryClient";

export default function App() {
	return (
		<ThemeProvider theme={Theme}>
			<QueryClientProvider client={queryClient}>
				<AppRoutes />
			</QueryClientProvider>
		</ThemeProvider>
	)
}

