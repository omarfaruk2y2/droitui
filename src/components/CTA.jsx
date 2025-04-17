import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const CTA = () => {
    return (
        <section className="ui-cta-section">
            <div className="w-layout-blockcontainer ui-cta-container container">
                <div className="ui-cta-sec">
                    <div className="ui-cta-text-sec">
                        <h1 className="ui-cta-text-title">Level Up Your Design Workflow</h1>
                        <p className="ui-cta-text-para">Droit UI is the largest UI kit and design system for Figma in the world. Kickstart any project, save thousands of hours</p>
                    </div>
                    <div className="ui-cta-btn-sec">
                        <div className="ui-hero-btn ui-cta-btn">
                            <a href="https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&amp;node-id=351%3A443&amp;mode=design&amp;t=i1PIjCbK6TFYKnlw-1" className="ui-hero-btn-1 w-inline-block">
                                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65b9e0314a580c4a67b20712_figma-icon.svg" loading="lazy" alt="figma icon" className="figma-icon" />
                                <div className="text-block-3">Preview in Figma</div>
                            </a>
                            <a href="https://droitui.lemonsqueezy.com/checkout/buy/64e31ddc-ec61-493d-ad69-a5bfbea60e09" className="ui-hero-btn-2 w-inline-block">
                                <div className="text-block-4">Buy Now</div>
                                <div className="ui-hero-btn-icons"><IoIosArrowForward className='text-lg text-white'/></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA