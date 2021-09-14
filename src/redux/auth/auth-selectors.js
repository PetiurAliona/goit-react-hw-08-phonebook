// export const getUsername = (state) => state.auth.userData.name

export const authErrorSelector = (state) => state.auth.error
export const authTokenSelector = (state) => state.auth.user.token
export const authUserNameSelector = (state) => state.auth.user.name
export const authUserEmailSelector = (state) => state.auth.user.email
export const authIsLoadingSelector = (state) => state.auth.user.isLoading
