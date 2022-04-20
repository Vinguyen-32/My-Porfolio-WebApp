import React, { useEffect } from 'react'


import gsap from 'gsap'

import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Contact.css"

function Contact () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "none" });
  let previousPosition = 0;

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '.contact-container',
      start: "-90% top",
      end: "bottom bottom",
      onUpdate: (self)=>{
        console.log("contact: " + self.progress)
        let contacts = document.getElementById("animated-box");
        let email = document.getElementById("animated-box-email");
        let envelop = document.getElementsByClassName("letter-image")[0];
        if (self.progress > .1){
          contacts.classList.add("move-out");
          contacts.classList.remove("move-in");
          contacts.classList.remove("started");
          email.classList.add("move-out");
          email.classList.remove("move-in");
          email.classList.remove("started");
          envelop.classList.add("active");
        }
        else {
          contacts.classList.add("move-in");
          contacts.classList.remove("move-out");
          email.classList.add("move-in");
          email.classList.remove("move-out");
          envelop.classList.remove("active");
        }
      }
    });
  });

  return (
    <div class="contact-container">
      <div class="letter-image">
        <div class="animated-mail">
          <div class="back-fold"></div>
          <div class="letter">
            <div class="letter-border"></div>
            <div class="letter-title"></div>
            <div class="letter-context"></div>
            <div class="letter-stamp">
              <div class="letter-stamp-inner"></div>
            </div>
          </div>
          <div class="top-fold"></div>
          <div class="body"></div>
          <div class="left-fold"></div>
        </div>
        <div class="shadow"></div>
      </div>
      <div>
        <div id="animated-box" class="started">Phone: (408)-504-9692</div>
        <div id="animated-box-email" class="started">Email: valerierose@gmail.com</div>
      </div>
    </div>
  )
}

export default Contact
