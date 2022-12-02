const emptyWish = (state) => {
    sessionStorage.removeItem('wish');
    state.wish = [];
}

export default emptyWish