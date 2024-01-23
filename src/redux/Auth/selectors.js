export const getUser = state => state.auth.user.name;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const isRefreshing = state => state.auth.isFetchingCurrentUser;
