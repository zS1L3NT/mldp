import axios from "axios"
import { createRoot } from "react-dom/client"

import { ChakraProvider } from "@chakra-ui/react"

import App from "./App"

createRoot(document.getElementById("root") as HTMLElement).render(
	<ChakraProvider>
		<App />
	</ChakraProvider>
)
