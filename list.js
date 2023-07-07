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

const addList = () => {
  const url = BACKEND_URL + "/user";
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const load = {
    name: name,
    age: age
  }
  axios
    .post(url,load)
    .then((res) => {
      const users = res.data.data;
      clearList();
      users.map((user) => {
        const li = document.createElement('li');
        li.innerHTML = `${user.name} ${user.age}`
        document.getElementById("user_list").appendChild(li)
      })
    })
    .catch((err) => {
      console.log("err",err)
    })

}