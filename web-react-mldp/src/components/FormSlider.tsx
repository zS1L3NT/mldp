import { Dispatch, SetStateAction } from "react"

import {
	Box, FormControl, FormLabel, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack
} from "@chakra-ui/react"

const FormSlider = ({
	title,
	min,
	max,
	decimals = 2,
	value,
	setValue
}: {
	title: string
	min: number
	max: number
	decimals?: number
	value: number
	setValue: Dispatch<SetStateAction<number>>
}) => {
	return (
		<FormControl>
			<FormLabel>{title}</FormLabel>
			<Box sx={{ px: 4 }}>
				<Slider
					sx={{
						w: "full",
						mt: 4
					}}
					aria-label={title}
					value={value}
					onChange={setValue}
					step={1 / Math.pow(10, decimals)}
					min={min}
					max={max}>
					<SliderMark
						sx={{ mt: -8, ml: -3 }}
						value={value}>
						{value.toFixed(decimals)}
					</SliderMark>
					<SliderMark
						sx={{ mt: 2, ml: -2 }}
						value={min}>
						{min}
					</SliderMark>
					<SliderMark
						sx={{ mt: 2, ml: -2 }}
						value={(max - min) / 2 + min}>
						{(max - min) / 2 + min}
					</SliderMark>
					<SliderMark
						sx={{ mt: 2, ml: -2 }}
						value={max}>
						{max}
					</SliderMark>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb />
				</Slider>
			</Box>
		</FormControl>
	)
}

export default FormSlider
