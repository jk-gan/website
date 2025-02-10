function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <label>Name:</label>
        <input type="text" id="name" name="name" /><br/><br/>
        <label>Email:</label>
        <input type="email" id="email" name="email" /><br/><br/>
        <label>Password:</label>
        <input type="password" id="password" name="password" /><br/><br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Register;