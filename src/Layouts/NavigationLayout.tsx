import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function NavigationLayout() {
  return (
    <>
    <Navigation/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}
