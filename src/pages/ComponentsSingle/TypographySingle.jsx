import React from 'react';
import UIComponentsSection from '../../components/UIComponentsSection';
import { IoIosArrowForward } from "react-icons/io";
import Figma_Icon from '../../assets/figma-icon.svg';

const TypographySingle = () => {
  return (
    <>
    <section class="components-single-section">
      <div class="w-layout-blockcontainer components-single-container container">
        <div class="single-header-section">
          <h1 class="single-compo-title">Color</h1>
          <p class="single-compo-text">Our Color section, a vibrant palette crafted for visual harmony in our design system. Each hue is purposeful, contributing to a cohesive brand identity. Embracing accessibility, we've adhered to WCAG 2.2 guidelines to ensure our colors not only captivate but are inclusive for all users.</p>
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
          <iframe className='figma-preview-single' max-width="1296" width="100%" height="687" src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fj1jhBdnUsYkpiNzcPcR6iu%2FDroit-Design-System-For-Figma%3Ftype%3Ddesign%26node-id%3D14%253A24723%26mode%3Ddesign%26t%3D0Sx9K8WCjTCmMhtx-1" allowfullscreen="">
          </iframe>
        </div>
      </div>
    </section>
    <UIComponentsSection />
    </>
  )
}

export default TypographySingle