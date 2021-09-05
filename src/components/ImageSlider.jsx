import React from 'react';
import './css/ImageSlider.scss';
import SliderData from './Json/SliderData.json';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const ImageSlider = () => {
  
  const [slideIndex, setSlideIndex] = React.useState(1);

  React.useEffect(() => {
    if (slideIndex!== SliderData.length+1) {
      setTimeout(() => setSlideIndex(slideIndex+1),2000)
    } else {
      setSlideIndex(1)
    }
  })

  const nextSlide = () => {
    if (slideIndex !== SliderData.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === SliderData.length) {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }    else if (slideIndex === 1) {
      setSlideIndex(SliderData.length)
    }
  }
    const moveIndex = index => {
      setSlideIndex(index)
    } 

    return (
        <div className="slider" style={{ background: "rgba(0,0,0,0.3)" }}>
            {SliderData.map((slide, index) => {
        return (
          <div key={index}
            className={slideIndex === index+1 ? "slide active" : "slide" }>
              <img src={slide.image} alt='traimage' />
              <NavigateBeforeIcon 
                  className="prev" 
                  onClick={prevSlide}/>
              <NavigateNextIcon 
                  className="next"
                  onClick={nextSlide}/>
              <div className="conteiner-dots">
                {Array.from({length:9}).map((item,index) => (
                  <div key={index} onClick={() => moveIndex(index + 1)}
                        className={ slideIndex === index + 1 ? "dot active" : "dot"}>
                        </div>
                ))}
              </div>
          </div>);
            })}

        </div>
    )
}

export default ImageSlider;