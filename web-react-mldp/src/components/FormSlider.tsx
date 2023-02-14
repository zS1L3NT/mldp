import { Dispatch, SetStateAction } from "react"

import {
	Box, FormControl, FormLabel, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack
} from "@chakra-ui/react"

const FormSlider = ({
	title,
	min,
	mid,
	max,
	decimals = 2,
	value,
	setValue,
	disabled = false
}: {
	title: string
	min: number
	mid: number
	max: number
	decimals?: number
	value: number
	setValue: Dispatch<SetStateAction<number>>
	disabled?: boolean
}) => {
	return (
		<FormControl>
			<FormLabel sx={{ opacity: disabled ? 0.6 : 1 }}>{title}</FormLabel>
			<Box sx={{ px: 4 }}>
				<Slider
					sx={{
						w: "full",
						mt: 4
					}}
					aria-label={title}
					value={value}
					onChange={setValue}
					step={Math.pow(0.1, decimals)}
					min={min}
					max={max}
					colorScheme="yellow"
					isDisabled={disabled}>
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
						value={mid}>
						{mid}
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
