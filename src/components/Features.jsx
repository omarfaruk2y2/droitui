import React from 'react'
import { IoMdCheckmark, IoIosArrowForward } from "react-icons/io";
import Figma_Icon from '../assets/figma-icon.svg'
import Features_one from '../assets/features-img-1-p-800.webp'
import Features_two from '../assets/features-img-2-p-1080.webp'
import Features_three from '../assets/features-img-3-p-1080.webp'
import Features_four from '../assets/features-img-4-p-1080.webp'

const Features = () => {
    return (
        <section className="ui-features-section">
            <div className="w-layout-blockcontainer ui-features-container container">
                <div className="ui-features-item-list-bock _1st-features-reverse">
                    <div className="ui-features-items-content">
                        <h1 className="ui-features-item-subtitle">Variants, Variables and Auto Layout 5.0</h1>
                        <h2 className="ui-features-item-title">Accelerate your workflow and minimize your execution time.</h2>
                        <p className="ui-features-item-text">Unlock your creativity effortlessly with Droit UI – A system for quick, beautiful, and cohesive design projects in less time. It provides a wide range of ready-to-use components, allowing you to create stunning UI and websites with ease. Save time, maintain consistency, and focus on bringing your creative vision to life.</p>
                        <div className="ui-features-list-section">
                            <div className="ui-features-item-list-sec">
                                <div className="ui-features-item-list">
                                    <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                                    <div className="ui-features-list-text">100% Auto layout components</div>
                                </div>
                                <div className="ui-features-item-list">
                                <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                                    <div className="ui-features-list-text">WCAG 2.1 compliant</div>
                                    </div>
                                    </div>
                                    <div className="ui-features-item-list-sec">
                                        <div className="ui-features-item-list">
                                        <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                                        <div className="ui-features-list-text">Useful page examples</div>
                                    </div>
                                <div className="ui-features-item-list">
                                <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                                    <div className="ui-features-list-text">Swap out sections in seconds</div>
                                </div>
                            </div>
                        </div>
                        <div className="ui-hero-btn ui-features-btn">
                            <a href="https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&amp;node-id=351%3A443&amp;mode=design&amp;t=i1PIjCbK6TFYKnlw-1" className="ui-hero-btn-1 w-inline-block">
                            <img src={Figma_Icon} loading="lazy" alt="Icon of Figma" className="figma-icon" />
                                <div className="text-block-3">Preview in Figma</div>
                            </a>
                            <a href="https://droitui.lemonsqueezy.com/checkout/buy/64e31ddc-ec61-493d-ad69-a5bfbea60e09" className="ui-hero-btn-2 ui-features-btn-2 w-inline-block">
                            <div className="text-block-4">Buy Now</div>
                            <div className="ui-hero-btn-icons">
                                <IoIosArrowForward className='font-bold text-lg text-white' />
                            </div>
                            </a>
                        </div>
                    </div>
                    <div className="ui-features-items-img">
                        <img src={Features_one} loading="lazy" alt="Accelerate your workflow and minimize your execution time." className="image-15" />
                    </div>
                </div>
            </div>
            <div className="w-layout-blockcontainer ui-features-container container">
                <div className="ui-features-item-list-bock">
                    <div className="ui-features-items-img">
                        <img src={Features_two} loading="lazy" alt="Transforming Objects with Instant Color Changes" />
                    </div>
                    <div className="ui-features-items-content">
                        <h1 className="ui-features-item-subtitle">Global Styles + Variables</h1>
                        <h2 className="ui-features-item-title">Transforming Objects with Instant Color Changes</h2>
                        <p className="ui-features-item-text">Droit UI unleashes your design capabilities with over 600+ advanced color schemes, typography, and effects. Need to update styles globally? Easily implement them across your project with a simple click—design smarter, not harder.</p>
                        <div className="ui-features-list-section">
                            <div className="ui-features-item-list-sec">
                                <div className="ui-features-item-list">
                                <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                                    <div className="ui-features-list-text">Smart &amp; extensive typography</div>
                                </div>
                                <div className="ui-features-item-list">
                                <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                                    <div className="ui-features-list-text">Practical color system</div>
                                </div>
                            </div>
                            <div className="ui-features-item-list-sec"><div className="ui-features-item-list">
                            <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                                <div className="ui-features-list-text">Avatar image styles</div>
                            </div>
                                <div className="ui-features-item-list">
                                <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                                    <div className="ui-features-list-text">Useful shadow &amp; blur effect</div>
                                </div>
                            </div>
                        </div>
                        <div className="ui-hero-btn ui-features-btn">
                            <a href="https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&amp;node-id=351%3A443&amp;mode=design&amp;t=i1PIjCbK6TFYKnlw-1" className="ui-hero-btn-1 w-inline-block">
                            <img src={Figma_Icon} loading="lazy" alt="Icon of Figma" className="figma-icon" />
                                <div className="text-block-3">Preview in Figma</div>
                            </a>
                            <a href="https://droitui.lemonsqueezy.com/checkout/buy/64e31ddc-ec61-493d-ad69-a5bfbea60e09" className="ui-hero-btn-2 ui-features-btn-2 w-inline-block">
                                <div className="text-block-4">Buy Now</div>
                                <div className="ui-hero-btn-icons">
                                <IoIosArrowForward className='font-bold text-lg text-white' />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-layout-blockcontainer ui-features-container container">
                <div className="ui-features-item-list-bock _1st-features-reverse">
                    <div className="ui-features-items-content">
                        <h1 className="ui-features-item-subtitle">Example Pages</h1>
                        <h2 className="ui-features-item-title">Revolutionizing Design Intelligence for 10x Impact</h2>
                        <p className="ui-features-item-text">Elevate beyond the ordinary with components crafted for perfection, harnessing Auto Layout 5.0, intelligent variants, and Figma's advanced variable attributes. Engineered for accessibility, our toolkit empowers you to effortlessly transform designs with quick variant swaps, setting a new standard for design simplicity and brilliance.</p>
                        <div className="ui-features-list-section"><div className="ui-features-item-list-sec"><div className="ui-features-item-list">
                        <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                            <div className="ui-features-list-text">Desktop and mobile examples</div>
                            </div>
                            <div className="ui-features-item-list">
                            <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                                <div className="ui-features-list-text">Useful website examples</div>
                                </div>
                                </div>
                                <div className="ui-features-item-list-sec">
                                    <div className="ui-features-item-list">
                                    <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                                    <div className="ui-features-list-text">Dashboards, settings and more</div>
                                    </div>
                                    <div className="ui-features-item-list">
                                    <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                                    <div className="ui-features-list-text">Hover and click interactions</div>
                                    </div>
                                    </div>
                                    </div>
                        <div className="ui-hero-btn ui-features-btn">
                            <a href="https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&amp;node-id=351%3A443&amp;mode=design&amp;t=i1PIjCbK6TFYKnlw-1" className="ui-hero-btn-1 w-inline-block">
                            <img src={Figma_Icon} loading="lazy" alt="Icon of Figma" className="figma-icon" />
                                <div className="text-block-3">Preview in Figma</div>
                            </a>
                            <a href="https://droitui.lemonsqueezy.com/checkout/buy/64e31ddc-ec61-493d-ad69-a5bfbea60e09" className="ui-hero-btn-2 ui-features-btn-2 w-inline-block">
                                <div className="text-block-4">Buy Now</div>
                                <div className="ui-hero-btn-icons">
                                <IoIosArrowForward className='font-bold text-lg text-white' />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="ui-features-items-img">
                        <img src={Features_three} loading="lazy" alt="Revolutionizing Design Intelligence for 10x Impact" />
                    </div>
                </div>
            </div>
            <div className="w-layout-blockcontainer ui-features-container container">
                <div className="ui-features-item-list-bock">
                    <div className="ui-features-items-img">
                        <img src={Features_four} loading="lazy" alt="Extensive Collection of Pre-designed Templates" />
                    </div>
                    <div className="ui-features-items-content">
                        <h1 className="ui-features-item-subtitle">Design Faster</h1>
                        <h2 className="ui-features-item-title">Extensive Collection of Pre-designed Templates</h2>
                        <p className="ui-features-item-text">Our library is packed with pre-designed web and dashboard templates covering the most popular niches. Easily shuffle sections and variants to customize and create, bringing your digital masterpieces to life swiftly, all while maintaining a professional edge that typically takes weeks to refine.</p>
                        <div className="ui-features-list-section">
                            <div className="ui-features-item-list-sec">
                                <div className="ui-features-item-list">
                                <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                                    <div className="ui-features-list-text">2,000+ icons and logos</div>
                                </div>
                                <div className="ui-features-item-list">
                                <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                                    <div className="ui-features-list-text">Logos, avatars and more</div>
                                </div>
                            </div>
                            <div className="ui-features-item-list-sec">
                                <div className="ui-features-item-list">
                                <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                                    <div className="ui-features-list-text">Tips and notes included</div>
                                </div>
                                <div className="ui-features-item-list">
                                <IoMdCheckmark className='text-xl text-[#1d4ed8]'/>
                                    <div className="ui-features-list-text">Free updates always growing</div>
                                </div>
                            </div>
                        </div>
                        <div className="ui-hero-btn ui-features-btn">
                            <a href="https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&amp;node-id=351%3A443&amp;mode=design&amp;t=i1PIjCbK6TFYKnlw-1" className="ui-hero-btn-1 w-inline-block">
                            <img src={Figma_Icon} loading="lazy" alt="Icon of Figma" className="figma-icon" />
                                <div className="text-block-3">Preview in Figma</div>
                            </a>
                            <a href="https://droitui.lemonsqueezy.com/checkout/buy/64e31ddc-ec61-493d-ad69-a5bfbea60e09" className="ui-hero-btn-2 ui-features-btn-2 w-inline-block">
                                <div className="text-block-4">Buy Now</div>
                                <div className="ui-hero-btn-icons">
                                <IoIosArrowForward className='font-bold text-lg text-white' />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features