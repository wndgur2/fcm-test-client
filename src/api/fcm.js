export async function registFCMToken(token) {
  console.log('registing token on server:', token)
  return fetch(`${process.env.REACT_APP_API_URL}/fcm/regist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  })
}

export async function broadcast() {
  return fetch(`${process.env.REACT_APP_API_URL}/fcm/broadcast`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
