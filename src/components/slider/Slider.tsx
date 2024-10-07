import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../styles/slider.css';
import {S} from './Slider_Styles';

type SlidePropsType = {
    text: string,
    userName: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            {/*<S.Name>@{props.userName}</S.Name>*/}
        </S.Slide>
    )
}

const items = [
    <Slide userName={"ivan ivanov"} text={"We are a software company that provides innovative solutions for businesses. Our team of experts is dedicated to delivering high-quality products that meet your needs. Explore our website to learn more about our services."}/>,
    ];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel mouseTracking items={items}/>
    </S.Slider>
);


