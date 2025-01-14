import initializeFCM from './util/notification/initializeFCM'
import { useEffect, useState } from 'react'

function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.')
        initializeFCM().then((token) => {
          setToken(token)
        })
      }
    })
  }, [])

  useEffect(() => {
    console.log(token)
  }, [token])

  const copyToken = () => {
    navigator.clipboard.writeText(token)
  }
  return (
    <div>
      <h1>hello world!</h1>
      <span>{token}</span>
      <button onClick={copyToken}>copy to clipboard</button>
    </div>
  )
}

export default App
