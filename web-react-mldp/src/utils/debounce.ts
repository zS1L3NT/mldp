let timeout: number

export default function debounce(func: Function, wait: number) {
	return function (this: any, ...args: any[]) {
		const context = this
		clearTimeout(timeout)
		timeout = setTimeout(() => func.apply(context, args), wait)
	}
}
