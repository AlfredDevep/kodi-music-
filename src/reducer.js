export const  initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    //Remove after finished developing...
    //token: 'BQC4hIKYqb7xCqUF8qmsyAr2d9o_eB3CLwmUbT5yYGGjT_LkwhgdXRAcppIZt9RIbS_uu_1aPeWqD2bdaFTnT17GFjaXkrZ2CseTJLEGqPPJTGoaeTnHFlIX6GbtlW0BsbH59UpZySrR7Q3WNkee9Iz0xBqHuIyhI-i97ptRnlMGtV2hDGdXXcydxirBrcIbPCJFZ7UyEpLtuzUgimpy',

};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        default:
            return state;
    }
}

export default reducer;