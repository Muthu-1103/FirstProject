import { IconButton } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'
import {Instagram,LinkedIn,WhatsApp} from "@material-ui/icons"
import './contact.css'
const Contacts = () => {
  return (
    <Element className='contacts' id='contacts'>
        <h1>Contact</h1>
    <div className='contactcont'>
      <p>
        Email:<span>smuthukumarasamy97@gmail.com</span>
      </p>
      <p>
        GitHub:<span>Muthu-1103 </span>
      </p>
      <div className='contact_icon'>
        <a href="https://www.linkedin.com/in/muthukumarasamy-s-10b9b5237/">
            <IconButton>
                <LinkedIn />
            </IconButton>
        </a>
        <a href="www.instagram.com">
            <IconButton>
                <Instagram />
            </IconButton>
            <a href="www.whatsapp.com">
            <IconButton>
                <WhatsApp />
            </IconButton>
        </a>
        </a>
      </div>
    </div>
    </Element>
  )
}

export default Contacts
