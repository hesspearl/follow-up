import {
  POST_FROM_PAGE_01,
  POST_FROM_PAGE_02,
  EDIT,
  CLEAN,
} from "../actions/format";

const initialState = {
  format: {},
  edit: {},
};

export default format = (state = initialState, action) => {
  switch (action.type) {
    case POST_FROM_PAGE_01:
      const page01 = action.value;

      return {
        ...state,
        format: { ...page01 },
      };

    case POST_FROM_PAGE_02:
      const page02 = action.value;

      return {
        ...state,
        format: { ...state.format, ...page02 },
      };

    case EDIT:
      const edit = action.value;
      // console.log(edit)
      return {
        ...state,
        edit: { ...edit },
      };

    case CLEAN:
      return {
        format: {},
        edit: {},
      };
  }

  return state;
};
