const BACKEND_URL = 'http://localhost:8080/api';

const clearList = () => {
  let el = document.getElementById("user_list");
  while(el.hasChildNodes()) {
    el.removeChild(el.lastChild);
  }
}

const getList = () => {
  console.log('get list');
  const url = BACKEND_URL + "/users";

  axios
  .get(url)
  .then((res) => {
    const raw = res.data;
    console.log("raw data",raw)
    const users = res.data.data;
    console.log("users", users);
    clearList();
    users.map((user) => {
      const li = document.createElement("li");
      li.innerHTML = `${user.name} ${user.age}`;
      document.getElementById("user_list").appendChild(li);
    })
    if (users.length === 0 ) alert('no users in the list');
  })
  .catch((err) => {console.log("err",err)})
}

const deleteList = () => {
  const url = BACKEND_URL +"/delete";
  axios
    .delete(url)
    .then((res) => {
      const msg = res.data.msg;
      console.log("msg", msg);
      clearList();
      const li = document.createElement("li");
      li.innerHTML = msg;
      document.getElementById("user_list").appendChild(li);
    })
    .catch((err) => {
      console.log("err",err)
    })

}

const postUser = () => {
  const url = BACKEND_URL + "/user";
  const nameValue = document.getElementById("name").value;
  const ageValue = document.getElementById("age").value;
  if (!nameValue || !ageValue) return;
  const load = {
    name: nameValue,
    age: ageValue
  }
  axios
    .post(url,load)
    .then((res) => {
      const updatedList = res.data.data;
      clearList();
      updatedList.map((user) => {
        const li = document.createElement('li');
        li.innerHTML = `${user.name} ${user.age}`
        document.getElementById("user_list").appendChild(li)
      })
    })
    .catch((err) => {
      console.log("err",err)
    })
  document.getElementById("name").value = ""
  document.getElementById("age").value = ""

}