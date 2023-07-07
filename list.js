const BACKEND_URL = 'http://localhost:8080';

const clearList = () => {
  let el = document.getElementById("user_list");
  while(el.hasChildNodes()) {
    el.removeChild(el.lastChild);
  }
}

const getList = () => {
  console.log('get list');
  const url = BACKEND_URL + "/api/users";

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
  const url = BACKEND_URL +"/api/delete";
  axios
    .delete(url)
    .then((res) => {
      const msg = res.data.msg;
      console.log("msg", msg);
      const li = document.createElement("li");
      li.innerHTML = msg;
      document.getElementById("user_list").appendChild(li);
    })
    .catch((err) => {
      console.log("err",err)
    })

}