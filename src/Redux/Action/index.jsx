export const createAction = (type, payload, id) => {
  return {
    type,
    payload,
    id: id || null,
  };
};
