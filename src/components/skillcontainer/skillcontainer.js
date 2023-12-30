import React from 'react'
import { Element } from 'react-scroll'
import skillImg from "../../assets/skillimg.png"
import './skillcontainer.css'
import LinearProgress from '@material-ui/core/LinearProgress'
const Skillcontainer = () => {
  return (
    <Element className='skillcontainer' id='skills'>
    <div className='skillcontainer_img'>
    <img src={skillImg} alt="Skills"></img> 
    </div>
    <div className='skillcontainer_text'>
        <h2>SKILLS</h2>
        <div className='skill_skset'>
            <h5>C,C++</h5>
            <div className='skillcont_slider skillcont_slider1'>
                <LinearProgress variant='determinate' value={85}/>
            </div>
        </div>
        <div className='skill_skset'>
            <h5>Python</h5>
            <div className='skillcont_slider skillcont_slider2'>
                <LinearProgress variant='determinate' value={95}/>
            </div>
        </div>
        <div className='skill_skset'>
            <h5>Java</h5>
            <div className='skillcont_slider skillcont_slider6'>
                <LinearProgress variant='determinate' value={75}/>
            </div>
        </div>
        <div className='skill_skset'>
            <h5>Flutter</h5>
            <div className='skillcont_slider skillcont_slider3'>
                <LinearProgress variant='determinate' value={50}/>
            </div>
        </div>
        <div className='skill_skset'>
            <h5>React</h5>
            <div className='skillcont_slider skillcont_slider4'>
                <LinearProgress variant='determinate' value={60}/>
            </div>
        </div>
        <div className='skill_skset'>
            <h5>AWS</h5>
            <div className='skillcont_slider skillcont_slider5'>
                <LinearProgress variant='determinate' value={75}/>
            </div>
        </div>
    </div>
    </Element>
  )
}

export default Skillcontainer
