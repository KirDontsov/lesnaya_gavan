let width;
if (typeof window !== "undefined") {
	window.addEventListener("resize", () => {
		if (typeof window !== "undefined") {
			width = window.innerWidth;
		}
	});
}

const scroll = {
	state: {
		width: width,
		isMobile: false
	},
	reducers: {
		setWidth(state, payload) {
			return {
				...state,
				width: payload
			};
		},
		setIsMobile(state, payload) {
			return {
				...state,
				isMobile: payload
			};
		}
	}
};

export default scroll;
