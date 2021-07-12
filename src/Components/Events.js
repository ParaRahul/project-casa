import React, {useEffect} from 'react'
import './css/Events.css'
import Navbar from "./NavBar"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)



export default function Events() {

    useEffect(() => {
        const t1 = gsap.timeline();
        t1.from(".orange", {xPercent: -100})
          .from(".purple", {xPercent: 100})
          .from(".green", {yPercent: -100});


          ScrollTrigger.create({
              animation:t1,
              trigger:'#container',
              start: "top top",
              end: "+=4000", 
              scrub: true,
              pin: true
          })

    })

 
    return (
        <>
        <Navbar color="teal lighten-1" />
        <div className="events">
            <div className="description panel blue">
                <div>
                    <h1>Events</h1>
                    <div className="scroll-down">Scroll down<div className="arrow"></div></div>
                </div>
            </div>
        
            <div id="container">
                <section className="panel red">
                     <div className="row">
                        <div className="col l6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem. Similique consectetur numquam maxime culpa beatae laboriosam et. Laboriosam eligendi architecto dolorum cumque sunt odio quaerat quasi quam quibusdam perspiciatis quo, distinctio esse inventore exercitationem, praesentium obcaecati. Odit magni laboriosam consequuntur fugiat in. Ratione non ea eaque doloribus sequi, possimus, accusantium amet deleniti ab optio aliquam atque quidem earum voluptates pariatur quis architecto aperiam, ullam modi fuga harum dolores! Eius quasi iure esse, rerum aliquam quidem. Ad quisquam dolore eaque iste quas ea veniam laborum laudantium molestiae quibusdam, nulla magni eveniet? Quibusdam, numquam. Eveniet et perspiciatis iure excepturi rem repudiandae?</div>
                        <div className="col l6">Image</div>    
                    </div>
                </section>
                <section className="panel orange">
                    <div className="row">
                        <div className="col l6">Image</div>
                        <div className="col l6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem. Similique consectetur numquam maxime culpa beatae laboriosam et. Laboriosam eligendi architecto dolorum cumque sunt odio quaerat quasi quam quibusdam perspiciatis quo, distinctio esse inventore exercitationem, praesentium obcaecati. Odit magni laboriosam consequuntur fugiat in. Ratione non ea eaque doloribus sequi, possimus, accusantium amet deleniti ab optio aliquam atque quidem earum voluptates pariatur quis architecto aperiam, ullam modi fuga harum dolores! Eius quasi iure esse, rerum aliquam quidem. Ad quisquam dolore eaque iste quas ea veniam laborum laudantium molestiae quibusdam, nulla magni eveniet? Quibusdam, numquam. Eveniet et perspiciatis iure excepturi rem repudiandae?</div>
                    </div>
                </section>
                <section className="panel purple">
                    <div className="row">
                        <div className="col l6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem. Similique consectetur numquam maxime culpa beatae laboriosam et. Laboriosam eligendi architecto dolorum cumque sunt odio quaerat quasi quam quibusdam perspiciatis quo, distinctio esse inventore exercitationem, praesentium obcaecati. Odit magni laboriosam consequuntur fugiat in. Ratione non ea eaque doloribus sequi, possimus, accusantium amet deleniti ab optio aliquam atque quidem earum voluptates pariatur quis architecto aperiam, ullam modi fuga harum dolores! Eius quasi iure esse, rerum aliquam quidem. Ad quisquam dolore eaque iste quas ea veniam laborum laudantium molestiae quibusdam, nulla magni eveniet? Quibusdam, numquam. Eveniet et perspiciatis iure excepturi rem repudiandae?</div>
                        <div className="col l6">Image</div>    
                    </div>
                </section>
                <section className="panel green">
                    <div className="row">
                        <div className="col l6">Image</div>
                        <div className="col l6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatem. Similique consectetur numquam maxime culpa beatae laboriosam et. Laboriosam eligendi architecto dolorum cumque sunt odio quaerat quasi quam quibusdam perspiciatis quo, distinctio esse inventore exercitationem, praesentium obcaecati. Odit magni laboriosam consequuntur fugiat in. Ratione non ea eaque doloribus sequi, possimus, accusantium amet deleniti ab optio aliquam atque quidem earum voluptates pariatur quis architecto aperiam, ullam modi fuga harum dolores! Eius quasi iure esse, rerum aliquam quidem. Ad quisquam dolore eaque iste quas ea veniam laborum laudantium molestiae quibusdam, nulla magni eveniet? Quibusdam, numquam. Eveniet et perspiciatis iure excepturi rem repudiandae?</div>
                    </div>
                </section>
                
            </div>
        
        
        
        
            
          
        </div>
        </>
    )
}
