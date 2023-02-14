import { useEffect, useState } from "react"

import { Container, Heading, Skeleton, Stack, Text } from "@chakra-ui/react"

import FormSlider from "./components/FormSlider"

const App = ({}: {}) => {
	const [fixedAcidity, setFixedAcidity] = useState(5)
	const [volatileAcidity, setVolatileAcidity] = useState(0)
	const [citricAcid, setCitricAcid] = useState(0.1)
	const [residualSugar, setResidualSugar] = useState(0)
	const [chlorides, setChlorides] = useState(0)
	const [freeSulfurDioxide, setFreeSulfurDioxide] = useState(0)
	const [totalSulfurDioxide, setTotalSulfurDioxide] = useState(0)
	const [density, setDensity] = useState(0.99)
	const [pH, setPH] = useState(2.8)
	const [sulphates, setSulphates] = useState(0.25)
	const [alcohol, setAlcohol] = useState(8)
	const [quality, setQuality] = useState<"low" | "medium" | "high" | null>(null)

	useEffect(() => {}, [])

	return (
		<Container sx={{ py: 8 }}>
			<Heading size={{ base: "lg", md: "xl" }}>Wine Quality Prediction</Heading>
			<Text sx={{ mt: 2 }}>
				Predict the quality of wine (Low, Medium or High) based on chemical properties of
				the wine!
			</Text>

			<Stack
				sx={{ mt: 6 }}
				spacing={8}>
				<FormSlider
					title="Fixed Acidity"
					min={5}
					max={10}
					value={fixedAcidity}
					setValue={setFixedAcidity}
				/>
				<FormSlider
					title="Volatile Acidity"
					min={0}
					max={0.5}
					decimals={3}
					value={volatileAcidity}
					setValue={setVolatileAcidity}
				/>
				<FormSlider
					title="Citric Acid"
					min={0.1}
					max={0.6}
					decimals={3}
					value={citricAcid}
					setValue={setCitricAcid}
				/>
				<FormSlider
					title="Residual Sugar"
					min={0}
					max={15}
					value={residualSugar}
					setValue={setResidualSugar}
				/>
				<FormSlider
					title="Chlorides"
					min={0}
					max={0.1}
					decimals={4}
					value={chlorides}
					setValue={setChlorides}
				/>
				<FormSlider
					title="Free Sulfur Dioxide"
					min={0}
					max={60}
					value={freeSulfurDioxide}
					setValue={setFreeSulfurDioxide}
				/>
				<FormSlider
					title="Total Sulfur Dioxide"
					min={0}
					max={200}
					value={totalSulfurDioxide}
					setValue={setTotalSulfurDioxide}
				/>
				<FormSlider
					title="Density"
					min={0.99}
					max={1.01}
					decimals={4}
					value={density}
					setValue={setDensity}
				/>
				<FormSlider
					title="pH"
					min={2.8}
					max={3.6}
					decimals={3}
					value={pH}
					setValue={setPH}
				/>
				<FormSlider
					title="Sulphates"
					min={0.25}
					max={0.75}
					decimals={3}
					value={sulphates}
					setValue={setSulphates}
				/>
				<FormSlider
					title="Alcohol"
					min={8}
					max={14}
					value={alcohol}
					setValue={setAlcohol}
				/>
			</Stack>

			{quality ? (
				<Text
					sx={{
						mt: 10,
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
						mt: 10,
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
