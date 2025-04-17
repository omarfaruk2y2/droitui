import React from 'react'
import UIComponentsSection from '../../components/UIComponentsSection';
import { IoIosArrowForward } from "react-icons/io";
import Figma_Icon from '../../assets/figma-icon.svg';

const AlertSingle = () => {
  return (
    <>
    <section class="components-single-section">
      <div class="w-layout-blockcontainer components-single-container container">
        <div class="single-header-section">
          <h1 class="single-compo-title">Alert</h1>
          <p class="single-compo-text">Alerts are concise and attention-grabbing notifications. Styled for consistency, they ensure a clear & user-friendly way to communicate important information or updates enhancing the user experience.</p>
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
          <iframe className='figma-preview-single' max-width="1296" width="100%" height="687" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fj1jhBdnUsYkpiNzcPcR6iu%2FDroit-Design-System-For-Figma%3Ftype%3Ddesign%26node-id%3D4%253A11135%26mode%3Ddesign%26t%3D39uWfTS2fQ3MJEqV-1" allowfullscreen="">
          </iframe>
        </div>
      </div>
    </section>
    <UIComponentsSection />
    </>
  )
}

export default AlertSingle