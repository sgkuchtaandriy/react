import React, { Component } from 'react';

import Slide_1 from '../img/slide-1.jpg';
import Slide_2 from '../img/slide-2.jpg';
import Slide_3 from '../img/slide-3.jpg';
import Slide_4 from '../img/slide-4.jpg';

class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slides: [
                {
                    eachSlide: `url(${Slide_1})`
                },
                {
                    eachSlide: `url(${Slide_2})`
                },
                {
                    eachSlide: `url(${Slide_3})`
                },
                {
                    eachSlide: `url(${Slide_4})`
                }
            ],
            autoplay: false,
            active: 0,
            max: 0
        }
        this.state.max = this.state.slides.length;
        this.untervalBetweenSlides = this.untervalBetweenSlides.bind(this);
        this.toggleAutoPlay = this.toggleAutoPlay.bind(this);
        this.nextOne = this.nextOne.bind(this);
        this.prevOne = this.prevOne.bind(this);
    }
    componentDidMount(){
        this.interval = setInterval(()=> this.intervalBetweenSlides(), 3000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    untervalBetweenSlides(){
        if(this.state.autoplay === true){
            if(this.active.active === this.state.max - 1){
                this.state.active = 0;
            }else{
                this.active++;
            }
            this.setState({
                active: this.state.active
            })
        }
    }
    toggleAutoPlay(){
        this.setState({
            autoplay: !this.state.autoplay
        })
    }
    nextOne(){
        (this.state.active < this.state.max -1)?
            this.setState({
                active: this.state.active++
            }):
            this.setState({
                active: 0
            })
    }
    prevOne(){
        (this.state.active > 0)?
            this.setState({
                active: this.state.active--
            }):
            this.setState({
                active: this.state.max--
            })
    }
    dots(index, event){
        this.setState({
            active:index
        })
    }
    isActive(value){
        if(this.state.active === value){
            return 'active'
        }
    }
    setSliderStyles(){
        const transition = this.state.active * -100/this.state.slides.length
        return {
            width: (this.state.slides.length * 100)+ '%',
            transform: `translateX(${transition}%)`
        }
    }
    renderSlides(){
        const transition = 100/this.state.slides.length + "%"
        return this.state.slides.map((item, index) => (
                <div
                    className='each-slide'
                            key = {index}
                            style = {{backgroundImage: item.eachSlide}}
                >
            ))
    }
}