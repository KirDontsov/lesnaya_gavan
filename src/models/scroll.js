const scroll = {
  state: {
    width: window.innerWidth,
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
