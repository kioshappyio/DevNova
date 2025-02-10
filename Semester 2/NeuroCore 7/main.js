console.log('oke');


const endpoint = "https://reqres.in/api/users/";

fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: "ayam@gmail.com",
    firstName: "yayam",
  }),
})
.then((result) => result.json())
.then((data) => console.log(data));

// async function hitAPI() {
//   const api = await fetch(endpoint);
//   const { data } = await api.json();
//   console.log(data);
// }

// hitAPI();