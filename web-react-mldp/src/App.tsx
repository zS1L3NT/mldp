import axios from "axios"
import { useEffect, useState } from "react"

import {
	Container, FormControl, FormLabel, Heading, Select, Skeleton, Stack, Text
} from "@chakra-ui/react"

import FormSlider from "./components/FormSlider"
import debounce from "./utils/debounce"

const App = ({}: {}) => {
	const [type, setType] = useState<"white" | "red">("white")
	const [fixedAcidity, setFixedAcidity] = useState(5)
	const [volatileAcidity, setVolatileAcidity] = useState(0.01)
	const [citricAcid, setCitricAcid] = useState(0.1)
	const [residualSugar, setResidualSugar] = useState(0.1)
	const [chlorides, setChlorides] = useState(0.01)
	const [freeSulfurDioxide, setFreeSulfurDioxide] = useState(1)
	const [totalSulfurDioxide, setTotalSulfurDioxide] = useState(5)
	const [density, setDensity] = useState(0.99)
	const [pH, setPH] = useState(2.8)
	const [sulphates, setSulphates] = useState(0.25)
	const [alcohol, setAlcohol] = useState(8)
	const [quality, setQuality] = useState<"low" | "medium" | "high" | null>(null)

	useEffect(() => {
		debouncedPredictQuality()
	}, [])

	const debouncedPredictQuality = debounce(async () => {
		setQuality(null)

		const host = import.meta.env.PROD ? "" : "http://127.0.0.1:5000"
		const response = await axios.post(`${host}/api/predict`, {
			type,
			fixed_acidity: fixedAcidity,
			volatile_acidity: volatileAcidity,
			citric_acid: citricAcid,
			residual_sugar: residualSugar,
			// chlorides,
			free_sulfur_dioxide: freeSulfurDioxide,
			// total_sulfur_dioxide: totalSulfurDioxide,
			density,
			pH,
			sulphates,
			alcohol
		})

		if (["low", "medium", "high"].includes(response.data.quality)) {
			setQuality(response.data.quality)
		}
	}, 500)

	return (
		<Container sx={{ py: 8 }}>
			<Heading size={{ base: "lg", md: "xl" }}>Wine Quality Prediction</Heading>
			<Text sx={{ mt: 2 }}>
				Predict the quality of wine (Low, Medium or High) based on chemical properties of
				the wine!
			</Text>

			<Stack
				sx={{ mt: 6 }}
				spacing={10}>
				<FormControl>
					<FormLabel>Wine Color</FormLabel>
					<Select
						value={type}
						onChange={e => setType(e.target.value as "white" | "red")}
						focusBorderColor="yellow.500">
						<option value="white">White</option>
						<option value="red">Red</option>
					</Select>
				</FormControl>
				<FormSlider
					title="Fixed Acidity"
					min={5}
					mid={7.5}
					max={10}
					value={fixedAcidity}
					setValue={setFixedAcidity}
					debouncePredictQuality={debouncedPredictQuality}
				/>
				<FormSlider
					title="Volatile Acidity"
					min={0.01}
					mid={0.25}
					max={0.5}
					decimals={3}
					value={volatileAcidity}
					setValue={setVolatileAcidity}
					debouncePredictQuality={debouncedPredictQuality}
				/>
				<FormSlider
					title="Citric Acid"
					min={0.1}
					mid={0.35}
					max={0.6}
					decimals={3}
					value={citricAcid}
					setValue={setCitricAcid}
					debouncePredictQuality={debouncedPredictQuality}
				/>
				<FormSlider
					title="Residual Sugar"
					min={0.1}
					mid={7.5}
					max={15}
					value={residualSugar}
					setValue={setResidualSugar}
					debouncePredictQuality={debouncedPredictQuality}
				/>
				<FormSlider
					title="Chlorides"
					min={0.01}
					mid={0.05}
					max={0.1}
					decimals={4}
					value={chlorides}
					setValue={setChlorides}
					debouncePredictQuality={debouncedPredictQuality}
					disabled
				/>
				<FormSlider
					title="Free Sulfur Dioxide"
					min={1}
					mid={30}
					max={60}
					value={freeSulfurDioxide}
					setValue={setFreeSulfurDioxide}
					debouncePredictQuality={debouncedPredictQuality}
				/>
				<FormSlider
					title="Total Sulfur Dioxide"
					min={5}
					mid={100}
					max={200}
					decimals={1}
					value={totalSulfurDioxide}
					setValue={setTotalSulfurDioxide}
					debouncePredictQuality={debouncedPredictQuality}
					disabled
				/>
				<FormSlider
					title="Density"
					min={0.99}
					mid={1}
					max={1.01}
					decimals={4}
					value={density}
					setValue={setDensity}
					debouncePredictQuality={debouncedPredictQuality}
				/>
				<FormSlider
					title="pH"
					min={2.8}
					mid={3.2}
					max={3.6}
					decimals={3}
					value={pH}
					setValue={setPH}
					debouncePredictQuality={debouncedPredictQuality}
				/>
				<FormSlider
					title="Sulphates"
					min={0.25}
					mid={0.5}
					max={0.75}
					decimals={3}
					value={sulphates}
					setValue={setSulphates}
					debouncePredictQuality={debouncedPredictQuality}
				/>
				<FormSlider
					title="Alcohol"
					min={8}
					mid={11}
					max={14}
					value={alcohol}
					setValue={setAlcohol}
					debouncePredictQuality={debouncedPredictQuality}
				/>
			</Stack>

			{quality ? (
				<Text
					sx={{
						mt: 12,
						mx: "auto",
						px: 4,
						py: 2,
						w: 36,
						borderRadius: 5,
						bg:
							quality === "high"
								? "green.200"
								: quality === "low"
								? "red.200"
								: "yellow.200",
						fontWeight: 700,
						fontSize: "2xl",
						textAlign: "center"
					}}>
					{quality?.toUpperCase()}
				</Text>
			) : (
				<Skeleton
					sx={{
						mt: 12,
						mx: "auto",
						px: 4,
						py: 2,
						w: "144px",
						h: "52px",
						borderRadius: 5
					}}
				/>
			)}
		</Container>
	)
}

export default App
