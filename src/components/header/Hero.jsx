import { memo } from 'react';
import photo from '../../assets/img/carousel_2.jpg';
import { DivCarousel, H1Hero, ImgHero, PHero } from '../style/headerStyle';

const Hero = () => {
    return (
        <DivCarousel id="hero" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <ImgHero src={photo} className="d-block w-100" alt="Concert party"/>
                    <div className="carousel-caption d-block">
                        <H1Hero>All your bands gathered in one place</H1Hero>
                        <PHero>Find the merch of your favorite bands</PHero>
                    </div>
                </div>
            </div>
        </DivCarousel>
    )
}

export default memo(Hero)