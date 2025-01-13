function App() {
  requestNotificationPermission()
  return (
    <div>
      <h1>hello world!</h1>
    </div>
  )
}

export default App

const requestNotificationPermission = () => {
  console.log('Requesting notification')
  Notification.requestPermission()
    .then((result) => {
      if (result === 'granted') {
        console.log('Notification permission granted.')
      } else {
        console.warn('Notification permission denied.')
      }
    })
    .catch((error) => console.error('Error requesting notification permission:', error))
}
