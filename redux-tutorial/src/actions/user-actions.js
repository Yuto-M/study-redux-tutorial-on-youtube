import $ from "jquery";
export const UPDATE_USER = 'users:updateUser';
export const SHOW_ERROR = 'users:showERROR';

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser,
        }
    };
}

export function showError() {
    return {
        type: SHOW_ERROR,
        payload: {
            user: 'ERROR!!',
        }
    };
}

export function apiRequest() {
  return (dispatch, getState) => {
    $.ajax({
      url: "http://localhost:3000/example.json",
      success(response) {
        console.log("success");
        console.log(response);
      },
      error() {
        console.log("error");
        dispatch(showError());
      }
    });
  };
}