import { Divider } from '@mui/material'
import React from 'react'
import EventCard from './EventCard'
import '../styles.css';

const CulturalEvents = () => {
    return (
        <div className='mainPageCulturalEvents'>
            <h2 className="title-h2" >Культурные <span className='gradientText'>мероприятия</span></h2>
            <h3 className="title-h3" >Важные события</h3>
            {/* <Carusel></Carusel> */}
            <Divider classes={{root:'mydivider'}}/>
            <EventCard/>
        
        </div>
    )
}

export default CulturalEvents