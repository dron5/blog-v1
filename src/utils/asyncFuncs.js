const registrationRequest = async (data) => {
  alert(`${data.username}\n \
  ${data.email}\n \
  ${data.password}`);
};

export default registrationRequest;

// POST /api/users

// Example request body:

// {
//   "user":{
//     "username": "Jacob",
//     "email": "jake@jake.jake",
//     "password": "jakejake"
//   }
// }

// No authentication required, returns a User

// Required fields: email, username, password
