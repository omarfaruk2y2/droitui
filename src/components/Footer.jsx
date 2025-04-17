import CTA from "./CTA";
import './Style.css';
import Logo from '../assets/Logo.svg';
import FadeUpOnView from "./FadeUpOnView";

const Footer = () => {
  return (
    <>
      <CTA />
      <section class="ui-footer-section">
        <div class="w-layout-blockcontainer ui-footer-container container">
          <div class="ui-footer-block">
            <div class="ui-footer-grid">
              <div class="ui-footer-logo">
                <FadeUpOnView delay={0.3}>
                <img src={Logo} loading="lazy" />
                </FadeUpOnView>
                <FadeUpOnView delay={0.3}>
                <p class="paragraph-7">Spark up your creativity to the next level in no time with Droit UI Figma Design System. Undoubtedly one of the best Figma design systems in the history.</p>
                </FadeUpOnView>
                <FadeUpOnView delay={0.3}>
                <div class="ui-footer-text-social">
                  <a href="https://dribbble.com/droitlab" class="ui-social-link w-inline-block">
                  <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65ce0e9fdece1b7df4207f21_social-02.svg" loading="lazy" alt="dribbble" class="social-link-icon"/>
                  </a>
                  <a href="https://www.behance.net/droitlab_team" class="ui-social-link w-inline-block">
                  <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65ce0e9fa7b46f2becd2511a_social-03.svg" loading="lazy" alt="behance" class="social-link-icon"/>
                  </a>
                  <a href="https://www.linkedin.com/company/droitlab" class="ui-social-link w-inline-block">
                  <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65ce0e9c8031a118eb0a4c98_social-04.svg" loading="lazy" alt="linkedin" class="social-link-icon"/>
                  </a>
                  <a href="https://www.facebook.com/DroitLab/" class="ui-social-link w-inline-block">
                  <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65ce0e9c64e6540aa314fdd5_social-05.svg" loading="lazy" alt="facebook" class="social-link-icon"/>
                  </a>
                  <a href="https://twitter.com/droitlab" class="ui-social-link w-inline-block">
                  <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65ce0e9c3f9a43da76f3741f_social-06.svg" loading="lazy" alt="twitter" class="social-link-icon"/>
                  </a>


                </div>
                </FadeUpOnView>
              </div>
              <div class="ui-footer-nav-block">
                <FadeUpOnView delay={0.3}>
                <h1 class="ui-footer-nav-title">Droit UI</h1>
                </FadeUpOnView>
                <div class="ui-footer-nav-lists">
                  <FadeUpOnView delay={0.3}>
                  <a href="/" aria-current="page" class="ui-footer-nav-item-list w-inline-block w--current">
                    <div class="ui-footer-nav-text">Home</div>
                    <div class="underline-nav-footer">
                    </div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="https://droitui.lemonsqueezy.com/checkout/buy/64e31ddc-ec61-493d-ad69-a5bfbea60e09" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Buy Droit UI</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/pricing" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text" >Pricing</div>
                    <div class="underline-nav-footer" ></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="#" class="ui-footer-nav-item-list hide w-inline-block">
                    <div class="ui-footer-nav-text">Changelog</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/components" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Components</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/website-templates" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Templates</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/faqs" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">FAQs</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="https://droitui.lemonsqueezy.com/affiliates" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Affiliate (Earn 40%)</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/licensing" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Licensing</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="https://www.droitlab.com/" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">DroitLab Agency</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                </div>
              </div>
              <div class="ui-footer-nav-block">
                <FadeUpOnView delay={0.3}>
                <h1 class="ui-footer-nav-title">Foundations</h1>
                </FadeUpOnView>
                <div class="ui-footer-nav-lists">
                  <FadeUpOnView delay={0.3}>
                  <a href="/typography-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Typography</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/color-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Color</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/iconography-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Iconography</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/misc-icons-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Misc Icons</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/grid-spacing-and-radius-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Grid &amp; Spacing</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/effects-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Effects</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/logo-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Logos</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                </div>
              </div>
              <div class="ui-footer-nav-block">
                <FadeUpOnView delay={0.3}>
                <h1 class="ui-footer-nav-title">Components</h1>
                </FadeUpOnView>
                <div class="ui-footer-nav-lists">
                  <FadeUpOnView delay={0.3}>
                  <a href="/buttons-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Buttons</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/button-groups-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Button Groups</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/input-field-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Input Field</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/dropdowns-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Dropdowns</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/avatars-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Avatars</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/breadcrumbs-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Breadcrumbs</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/badges-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Badges</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/checkboxes-radios-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Checkboxes &amp; Radios</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/checkbox-groups-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Checkbox Groups</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/toggle-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Toggle</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                </div>
              </div>
              <div class="ui-footer-nav-block">
                <FadeUpOnView delay={0.3}>
                <h1 class="ui-footer-nav-title">Components</h1>
                </FadeUpOnView>
                <div class="ui-footer-nav-lists">
                  <FadeUpOnView delay={0.3}>
                  <a href="/progress-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Progress</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/slider-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Slider</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/steps-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Steps</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/modal-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Modal</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/alert-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Alert</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/rating-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Rating</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/tags-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Tags</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/timeline-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Timeline</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/play-button-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Play Button</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/pagination-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Pagination</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                  <FadeUpOnView delay={0.3}>
                  <a href="/divider-single" class="ui-footer-nav-item-list w-inline-block">
                    <div class="ui-footer-nav-text">Divider</div>
                    <div class="underline-nav-footer"></div>
                  </a>
                  </FadeUpOnView>
                </div>
              </div>
            </div>
            <div class="ui-footer-bottom-sec">
              <div class="ui-footer-text-content">
                <FadeUpOnView delay={0.3}>
                <h1 class="ui-footer-copyright">© {new Date().getFullYear()} Droit UI, a product of DroitLab. All rights reserved.</h1>
                </FadeUpOnView>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;