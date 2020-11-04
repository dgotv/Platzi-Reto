const store = require("./store");

function addUser(fullName, jobTitle) {
  if (!(fullName, jobTitle)) {
    return Promise.reject("Invalid name");
  }
  const user = {
    fullName, jobTitle
  };
  return store.add(user);
}

function listUsers() {
  return store.list();
}

module.exports = {
  addUser,
  listUsers,
};
