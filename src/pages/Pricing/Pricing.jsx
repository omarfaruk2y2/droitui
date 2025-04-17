import React from 'react';
import FadeUpOnView from '../../components/FadeUpOnView';

const Pricing = () => {
    return (
        <div className='pricing-page'>
            <div class="ui-pricing-containe">
                <div class="ui-theme-features-contain">
                    <FadeUpOnView delay={0.3}>
                    <h1 class="ui-theme-features-title">Budget-friendly Pricing Alternatives</h1>
                    </FadeUpOnView>
                    <FadeUpOnView delay={0.3}>
                    <p class="ui-theme-features-text">One-time payment grants you lifetime access and continuous updates, with unlimited projects.</p>
                    </FadeUpOnView>
                </div>
            </div>
            <div class="ui-price-sec container">
                <FadeUpOnView delay={0.3}>
                <div class="ui-price-item">
                    <div class="ui-price-item-price">$59</div>
                    <div class="ui-price-item-price price_delete">$129</div>
                    <FadeUpOnView delay={0.3}>
                    <h1 class="ui-price-item-title">
                        <strong>Solopreneur Pro</strong>
                    </h1>
                    </FadeUpOnView>
                    <FadeUpOnView delay={0.3}>
                    <p class="ui-price-item-text">Single user. Suitable for solo designers, developers, freelancers or a solopreneur.</p>
                    </FadeUpOnView>
                    <FadeUpOnView delay={0.3}>
                    <div class="ui-pricing-btn-sec">
                        <a href="https://droitui.lemonsqueezy.com/checkout/buy/64e31ddc-ec61-493d-ad69-a5bfbea60e09" class="ui-pricing-btn-1 w-inline-block">
                            <div class="ui-pricing-btn-text-1">Get <strong>Solopreneur Pro</strong></div>
                        </a>
                        <a href="https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&amp;node-id=351%3A443&amp;mode=design&amp;t=i1PIjCbK6TFYKnlw-1" class="ui-pricing-btn-2 w-inline-block">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65b9e0314a580c4a67b20712_figma-icon.svg" loading="lazy" alt="Icon of Figma" />
                            <div class="ui-pricing-btn-text-2">Preview in Figma</div>
                        </a>
                    </div>
                    </FadeUpOnView>
                    {/* <div class="pricing-btn-popular hide">
                        <div class="pricing-popolar-text">Most Popular</div>
                    </div> */}
                    <div class="ui-pricing-btn-list">
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Single user license</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">7000+ components and variants</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">1300+ icons and logos</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">270+ global styles</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">100+ ready templates</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Figma tokens with variables</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Auto Layout 5.0</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Component properties</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Exclusive components</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Use in unlimited projects</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Use in commercial &amp; personal projects</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Dark mode variables</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Useable with free Figma plan</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Free lifetime updates</div>
                        </div>
                        </FadeUpOnView>
                    </div>
                </div>
                </FadeUpOnView>
                <FadeUpOnView delay={0.3}>
                <div class="ui-price-item">
                    <div class="ui-price-item-price">$199</div>
                    <div class="ui-price-item-price price_delete">$599</div>
                    <FadeUpOnView delay={0.3}>
                    <h1 class="ui-price-item-title"><strong>Team Pro</strong></h1>
                    </FadeUpOnView>
                    <FadeUpOnView delay={0.3}>
                    <p class="ui-price-item-text">Upto 10 users. Perfect for startups, design teams, studios, agencies.</p>
                    </FadeUpOnView>
                    <FadeUpOnView delay={0.3}>
                    <div class="ui-pricing-btn-sec">
                        <a href="https://droitui.lemonsqueezy.com/checkout/buy/6266a1d4-5982-4fef-a7c0-9fd874f49805" class="ui-pricing-btn-1 pricing-btn-two w-inline-block">
                            <div class="ui-pricing-btn-text-1">Get Team Pro</div>
                        </a>
                        <a href="https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&amp;node-id=351%3A443&amp;mode=design&amp;t=i1PIjCbK6TFYKnlw-1" class="ui-pricing-btn-2 w-inline-block">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65b9e0314a580c4a67b20712_figma-icon.svg" loading="lazy" alt="Icon of Figma" />
                            <div class="ui-pricing-btn-text-2">Preview in Figma</div>
                        </a>
                    </div>
                    </FadeUpOnView>
                    <div class="ui-pricing-btn-list">
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">10 user license</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">7000+ components and variants</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">1300+ icons and logos</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">270+ global styles</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">100+ ready templates</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Figma tokens with variables</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Auto Layout 5.0</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Component properties</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Exclusive components</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Use in unlimited projects</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Use in commercial &amp; personal projects</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Dark mode variables</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Useable with free Figma plan</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Free lifetime updates</div>
                        </div>
                        </FadeUpOnView>
                    </div>
                </div>
                </FadeUpOnView>
                <FadeUpOnView delay={0.3}>
                <div class="ui-price-item">
                    <div class="ui-price-item-price">$299</div>
                    <div class="ui-price-item-price price_delete">$999</div>
                    <FadeUpOnView delay={0.3}>
                    <h1 class="ui-price-item-title"><strong>Agency Pro</strong></h1>
                    </FadeUpOnView>
                    <FadeUpOnView delay={0.3}>
                    <p class="ui-price-item-text">Upto 30 users. Best for large product design teams, agencies, saas, eCommerce.</p>
                    </FadeUpOnView>
                    <FadeUpOnView delay={0.3}>
                    <div class="ui-pricing-btn-sec">
                        <a href="https://droitui.lemonsqueezy.com/checkout/buy/0ff13bfd-658f-492f-b845-e8684561fae0" class="ui-pricing-btn-1 pricing-btn-3 w-inline-block">
                            <div class="ui-pricing-btn-text-1">Get Agency Pro</div>
                        </a>
                        <a href="https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&amp;node-id=351%3A443&amp;mode=design&amp;t=i1PIjCbK6TFYKnlw-1" class="ui-pricing-btn-2 w-inline-block">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65b9e0314a580c4a67b20712_figma-icon.svg" loading="lazy" alt="Icon of Figma" />
                            <div class="ui-pricing-btn-text-2">Preview in Figma</div>
                        </a>
                    </div>
                    </FadeUpOnView>
                    <div class="ui-pricing-btn-list">
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">30 user license</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">7000+ components and variants</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">1300+ icons and logos</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">270+ global styles</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">100+ ready templates</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Figma tokens with variables</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Auto Layout 5.0</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Component properties</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Exclusive components</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Use in unlimited projects</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Use in commercial &amp; personal projects</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Dark mode variables</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Useable with free Figma plan</div>
                        </div>
                        </FadeUpOnView>
                        <FadeUpOnView delay={0.3}>
                        <div class="ui-pricing-btn-list-item">
                            <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65bb5ec7fbc298adf2767eeb_Check.svg" loading="lazy" alt="Check mark to present this feature is presented." class="ui-pricing-btn-list-item-icon" />
                            <div class="ui-pricing-btn-list-item-text">Free lifetime updates</div>
                        </div>
                        </FadeUpOnView>
                    </div>
                </div>
                </FadeUpOnView>
            </div>
        </div>
    )
}

export default Pricing