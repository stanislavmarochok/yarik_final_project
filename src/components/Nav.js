import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

export default function NavigationBar () {
  const props = {
    items: [
      {
        text: 'Home',
        link: '/home'
      },
      {
        text: 'Add ad',
        link: '/add-ad'
      }
    ],
    logo: {
      text: 'buy-house.com'
    },
    style: {
      barStyles: {
        background: '#444'
      },
      sidebarStyles: {
        background: '#222',
        buttonColor: 'white'
      }
    }
  }
  return (
    <div className="home">
    	<Navbar {...props}/>
    </div>
  )
}