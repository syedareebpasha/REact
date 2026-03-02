import React from 'react'
import Navbar from './Layout/Navbar'
import Hero from './Layout/Hero'
import TopDestination from './Layout/Top-destination'
import LatestStories from './Layout/Latest-Stories'
import Trekkershighlight from './Layout/Trekkers-highlight'
import Form from './Layout/Form'
import Footer from './Layout/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    <TopDestination />
    <LatestStories />
<Trekkershighlight />
<Form/>
<Footer/>
    </div>
  )
}

export default App
