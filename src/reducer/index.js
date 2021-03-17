// import {
//   CLICK_NAV1,
//   CLICK_NAV2,
//   CLICK_NAV3,
//   CLICK_NAV4,
//   CLICK_NAV5,
// } from '../constants/index';

// const initialAppState = {
//   nav1: false,
//   nav2: false,
//   nav3: false,
//   nav4: false,
//   nav5: false,
// };
// const appReducer = (state, action) => {
//   switch (action.type) {
//     case CLICK_NAV1: {
//       const nav1state = !state.nav1;
//       return {
//         ...state,
//         nav1: nav1state,
//         nav2: false,
//         nav3: false,
//         nav4: false,
//         nav5: false,
//       };
//     }
//     case CLICK_NAV2: {
//       const nav2state = !state.nav2;
//       return {
//         ...state,
//         nav1: false,
//         nav2: nav2state,
//         nav3: false,
//         nav4: false,
//         nav5: false,
//       };
//     }
//     case CLICK_NAV3: {
//       const nav3state = !state.nav3;
//       return {
//         ...state,
//         nav1: false,
//         nav2: false,
//         nav3: nav3state,
//         nav4: false,
//         nav5: false,
//       };
//     }
//     case CLICK_NAV4: {
//       const nav4state = !state.nav4;
//       return {
//         ...state,
//         nav1: false,
//         nav2: false,
//         nav3: false,
//         nav4: nav4state,
//         nav5: false,
//       };
//     }
//     case CLICK_NAV5: {
//       const nav5state = !state.nav5;
//       return {
//         ...state,
//         nav1: false,
//         nav2: false,
//         nav3: false,
//         nav4: false,
//         nav5: nav5state,
//       };
//     }
//   }
// };

// export { initialAppState, appReducer };
