import React from "react"
import Contact from "./Contact"
import whiskersonImg from './images/mr-whiskerson.png'
import fluffyImg from './images/fluffykins.png'
import felixImg from './images/felix.png'
import pumpkinImg from './images/pumpkin.png'

export default function App(){
  return (
    <div className="contacts">
            <Contact 
              img={whiskersonImg} 
              name='Mr. Whiskerson'
              phone='(212) 555-1234' 
              mail='mr.whiskaz@catnap.meow'
            />
            <Contact 
              img={fluffyImg}
              name='luffykins'
              phone='(212) 555-2345'
              mail='fluff@me.com'
            />
            <Contact 
              img={felixImg}
              name='Felix'
              phone='(212) 555-4567'
              mail='thecat@hotmail.com'
            />
            <Contact 
              img={pumpkinImg}
              name='Pumpkin'
              phone='(0800) CAT KING'
              mail='pumpkin@scrimba.com'
            />
      </div>
  )
}