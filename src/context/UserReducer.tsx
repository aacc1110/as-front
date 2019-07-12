export const UserReducer = (user: any, { type, payload }: any) => {
  switch (type) {
    case 'SET_USER':
      return payload;
    default:
      break;
  }
};
