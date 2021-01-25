
module.exports.getUsers = async (req, res) => {
  try {
    const users = [];
    return res.send(users);
  } catch (err) {
    console.log("Error in users/index", err)
  }
}