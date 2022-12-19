import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"




export default function App(){
  return(
    <div>
      <Navbar/>
      <Hero />
      
      <Card
      img="./src/images/katie-zaferes.png"
      rating="5.0"
      reviewCount="(6)"
      lcoation="USA"
      text="Life Lessons with Katie Zaferes"
      price="From $136"
      />

      <Card
    img="./src/images/wedding-photography.png"
      rating="5.0"
      reviewCount="(30)"
      lcoation="USA"
      text="Learn wedding photography"
      price="From $125"
      />
      
      <Card
      img="./src/images/mountain-bike.png"
      rating="4.8"
      reviewCount="(2)"
      lcoation="USA"
      text="Group Mountain Biking"
      price="From $50"
      />
      
    </div>
  )
}