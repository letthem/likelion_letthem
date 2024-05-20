import axios from "axios";
function App() {
  axios
    .post("https://reqres.in/api/login", {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return <div>Axios 실습</div>;
}
export default App;
