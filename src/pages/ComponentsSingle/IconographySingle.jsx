import React from 'react'
import UIComponentsSection from '../../components/UIComponentsSection';
import { IoIosArrowForward } from "react-icons/io";
import Figma_Icon from '../../assets/figma-icon.svg';

const IconographySingle = () => {
  return (
    <>
    <section class="components-single-section">
      <div class="w-layout-blockcontainer components-single-container container">
        <div class="single-header-section">
          <h1 class="single-compo-title"></h1>
          <p class="single-compo-text"></p>
        </div>
        <div class="ui-hero-btn ui-features-btn single-compo-btn">
          <a href="https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&amp;node-id=351%3A443&amp;mode=design&amp;t=i1PIjCbK6TFYKnlw-1" class="ui-hero-btn-1 w-inline-block">
            <img src={Figma_Icon} loading="lazy" alt="Icon of Figma" class="figma-icon" />
            <div class="text-block-3">Preview in Figma</div>
          </a>
          <a href="https://droitui.lemonsqueezy.com/checkout/buy/64e31ddc-ec61-493d-ad69-a5bfbea60e09" class="ui-hero-btn-2 ui-features-btn-2 w-inline-block">
            <div class="text-block-4">Buy Now</div>
            <div class="ui-hero-btn-icons"><IoIosArrowForward className='text-lg text-white'/></div>
          </a>
        </div>
        <div class="html-embed-2 w-embed w-iframe">
          <iframe className='figma-preview-single' max-width="1296" width="100%" height="687" src="" allowfullscreen="">
          </iframe>
        </div>
      </div>
    </section>
    <UIComponentsSection />
    </>
  )
}

export default IconographySingle