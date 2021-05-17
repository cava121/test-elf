let initialState = {
  loading: true,
  albums: [],
  photos: [],
  users: [],
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        albums: action.payload.albums,
        users: action.payload.users,
        photos: action.payload.photos,
        loading: false,
      };
    default:
      return state;
  }
};
