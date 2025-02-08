function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Username:</label>
        <input type="text" name="username" /><br /><br />
        <label>Password:</label>
        <input type="password" name="password" /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;