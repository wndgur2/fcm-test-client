import { QueryClient, useQuery } from '@tanstack/react-query'
import { setToken } from './util/notification/initializeFCM'
import { useEffect } from 'react'
import { broadcast, registFCMToken } from './api/fcm'

function App() {
  const queryClient = new QueryClient()

  const query = useQuery({
    queryKey: ['fcmToken'],
    queryFn: setToken,
  })

  useEffect(() => {
    if (!query.data) return
    registFCMToken(query.data).then((res) => {
      console.log('res:', res)
    })
  }, [query.data])

  return (
    <div>
      <h1>Hello android!</h1>
      <p>{query.data}</p>
      <button onClick={broadcast}>BROADCAST</button>
    </div>
  )
}

export default App
