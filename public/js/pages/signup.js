window.handleSignup = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await register(email, password);
  } catch (err) {
    alert(err.message);
  }
};