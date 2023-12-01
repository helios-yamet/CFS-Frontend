import axios from "../axiosConfig";

export const SignIn = (params) => (dispatch) => {
  axios
    .post("/user/signin", params)
    .then((response) => {
      if (response.data.result) {
        dispatch({ type: "Login", payload: response.data.result });
        dispatch({ type: "Company", payload: response.data.data });
      } else alert(response.data.data);
    })
    .catch((error) => console.log(error));
};

export const SignUp = (params) => (dispatch) => {
  axios
    .post("/user/signup", params)
    .then((response) => {
      if (response.data.result) {
        dispatch({ type: "Login", payload: response.data.result });
        dispatch({ type: "Company", payload: response.data.data });
      } else alert(response.data.data);
    })
    .catch((error) => console.log(error));
};

export const exists = (params, callback) => {
  axios
    .post("/company/exists", { company: params })
    .then((response) => {
      callback(response.data.data);
    })
    .catch((error) => console.log(error));
};
