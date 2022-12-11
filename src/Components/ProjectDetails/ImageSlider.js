import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const ImageSlider = ({ image }) => {
    return (
        <div className='lg:w-[60%] mx-auto bg-gradient-to-tr from-purple-600 to-pink-600 p-4'>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={6000}
            >
                {
                    image?.map(img => <div className='object-cover lg:w-36 rounded-lg' data-src={img} />)
                }
            </AutoplaySlider>
        </div>
    );
};

export default ImageSlider;