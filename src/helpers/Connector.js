export const logIn = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: username,
            password: password,
          })
        })
        resolve(resp.json())
    } catch(err) {
      reject(err)
    }
  })
}