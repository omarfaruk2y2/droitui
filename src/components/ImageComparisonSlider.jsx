import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import ImageSliderOne from '../assets/image-slider-1.webp';
import ImageSliderTwo from '../assets/image-slider-2.webp';

export default function ImageComparisonSlider() {
  return (
    <div style={{ width: '100%', height: '100%', flexGrow: 1 }}>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={ImageSliderOne}
            alt="Image one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={ImageSliderTwo}
            alt="Image two"
            style={{
              backgroundColor: 'white',
              backgroundImage: `
            linear-gradient(45deg, #ccc 25%, transparent 25%),
            linear-gradient(-45deg, #ccc 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #ccc 75%),
            linear-gradient(-45deg, transparent 75%, #ccc 75%)`,
              backgroundSize: `20px 20px`,
              backgroundPosition: `0 0, 0 10px, 10px -10px, -10px 0px`,
            }}
          />
        }
        style={{ width: '100%', height: '50%' }}
      />
    </div>
  );
}
