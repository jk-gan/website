function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username:</label><br/>
        <input type="text" id="username" name="username" /><br/><br/>
        <label htmlFor="password">Password:</label><br/>
        <input type="password" id="password" name="password" /><br/><br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default LoginPage;