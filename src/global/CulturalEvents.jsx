import { Box, Divider } from '@mui/material'
import React from 'react'
import EventCard from './EventCard'
import logo from '../img/logo.svg';
import Carousel from "react-slick";

const CulturalEvents = () => {
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                className={className}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
            />
        );
    }
    return (
        <div className='mainPageCulturalEvents'>
            <h2 className="title-h2" >Культурные <span className='gradientText'>мероприятия</span></h2>
            <h3 className="title-h3" >Важные события</h3>

            <Divider classes={{ root: 'mydivider' }} />
            <div className='carouselWrapper'
            // display='flex' justifyContent='center' marginTop='50px' maxWidth='1000px'
            >
                <Carousel width='1200px'
                    // dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={2}
                    slidesToScroll={1}
                    className={"center"}
                    // fade={true}
                    display='true'
                    // width={1000}
                    centerMode={true}
                    centerPadding={"0px"}
                    nextArrow={<SampleNextArrow />}
                    prevArrow={<SamplePrevArrow />}
                >
                    <EventCard />

                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </Carousel>
            </div>
        </div >
    )
}


export default CulturalEvents

