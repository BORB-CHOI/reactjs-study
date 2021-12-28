/* ----------------- 액션 타입 ------------------ */
const CHANGE = "store/CHANGE";
/* ----------------- 액션 생성 함수 ------------------ */

export const changeView = (text) => ({
  type: CHANGE,
});

/* ----------------- 모듈의 초기 상태 ------------------ */
const isFormView = false;

/* ----------------- 리듀서 ------------------ */
const reducer = (state = isFormView, action) => {
  switch (action.type) {
    case CHANGE:
      return !state;
    default:
      return state;
  }
};

export default reducer;
