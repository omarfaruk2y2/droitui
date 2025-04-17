import { Helmet } from "react-helmet";
import Figma_Icon from '../../assets/figma-icon.svg'
import Palette from '../../assets/Palette.svg'
import DiamondsFour from '../../assets/DiamondsFour.svg'
import Fire from '../../assets/Fire.svg'
import Feather from '../../assets/Feather.svg'
import { IoIosArrowForward } from "react-icons/io";
// import './Home.css'
import VideoPlayer from '../../components/VideoPlayer';
import Features from '../../components/Features'
import Pricing from '../../components/Pricing'
import FAQsComponents from '../../components/FAQsComponents'
import ComparisonSlider from '../../components/ImageComparisonSlider'
import ImageSlider from '../../components/ImageSlider'
import Counter from '../../components/Counter'


const Home = () => {
  return (
    <>
     <Helmet>
        <title>Droitui - The </title>
        <meta name="description" content="This is the description of my page." />
      </Helmet>
    <div className="home-page">
      {/* Top section */}
      <div className="container">
        <div className="ui-hero-container-text">
          <div className="ui-hero-contain">
            <div className="ui-hero-top">
              <div className="text-block-2">Droit UI - Version 1.0</div>
            </div>
            <div className="ui-hero-content">
              <h1 className="ui-hero-title">Explore Design Excellence With the Droit Design System</h1>
              <p className="ui-hero-text">Adopted by 100+ users, Droit UI is a Highly Customizable Figma Design System with over 7,000 UI Components, Specifically Designed to Streamline the Workflow of Creative Professionals, Agencies, Startups, and SaaS Businesses.</p>
            </div>
            <div className="ui-hero-btn ui-hero-btn22">
              <a href="https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&amp;node-id=351%3A443&amp;mode=design&amp;t=i1PIjCbK6TFYKnlw-1" className="ui-hero-btn-1 w-inline-block">
                <img src={Figma_Icon} alt="Droitui" />
                <div className="text-block-3">Preview in Figma</div>
              </a>
              <a href="https://droitui.lemonsqueezy.com/checkout/buy/64e31ddc-ec61-493d-ad69-a5bfbea60e09" className="ui-hero-btn-2 hero-ui-btn-view w-inline-block">
                <div className="text-block-4">Buy Now</div>
                <div className="ui-hero-btn-icons"><IoIosArrowForward className='font-bold text-lg text-white' /></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section */}
      <div className='video-top-sec'>
        <div className='video-section'>
          <div className='container'>
            <div className='ui-hero-img'>
              <div className=''>
                <VideoPlayer />
              </div>
            </div>
            <div className="ui-hero-bottom-sec">

              <h2 className="ui-hero-bottom-title">Turn Your Vision into <strong>Visually Stunning Designs</strong></h2>
              <p className="ui-hero-bottom-text">Starting with Droit UI, the most advanced Figma UI kit, to seamlessly integrate Auto Layout 5.0, variables, smart variants, and WCAG accessibility into your Creative project.</p>
              <div className="ui-hero-features-items">
                <div className="ui-hero-items first-item-fun">
                  <div className="div-block-7">
                    <img src={Palette} loading="lazy" alt="" class="image-14" />
                    <Counter target={7120} suffix="+" />
                    <h1 class="ui-hero-item-title">Components &amp; Variants</h1>
                    <p class="ui-hero-item-text">Huge Customizable components collection to supercharge your Design.</p>
                  </div>
                </div>
                <div class="ui-hero-items second-item">
                  <div class="div-block-3" >
                  </div>
                  <div class="div-block-4">
                    <img src={DiamondsFour} loading="lazy" alt="" class="image-14" />
                    <Counter target={1125} suffix="+" />
                    <h1 class="ui-hero-item-title">Asset Collections</h1>
                    <p class="ui-hero-item-text">Every asset a developer needs to start building a creative app or Website.</p>
                  </div>
                </div>
                <div class="ui-hero-items third-item">
                  <div class="fun-fact-br-2" >
                  </div>
                  <div class="div-block-5">
                    <img src={Fire} loading="lazy" alt="" class="image-14" />
                    <Counter target={675} suffix="+" />
                    <h1 class="ui-hero-item-title">Global Styles + Variables</h1>
                    <p class="ui-hero-item-text">This UI System enables you to define theme-aware styles for any Element.</p>
                  </div>
                </div>
                <div class="ui-hero-items last-item-fun">
                  <div class="fun-fact-br-3"></div>
                  <div class="div-block-6">
                    <img src={Feather} loading="lazy" alt="" class="image-14" />
                    <Counter target={365} suffix="+" />
                    <h1 class="ui-hero-item-title">Widget &amp; Section</h1>
                    <p class="ui-hero-item-text">Droit UI thought of everything you need, so stay focused on your Work.</p>
                  </div>
                </div>
              </div>
              <div className='pb-4'>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <Features />
      {/* Theme Features */}
      <section class="ui-theme-features-section">
        <div class="w-layout-blockcontainer ui-theme-features-container container">
          <div class="ui-theme-features-contain">
            <h2 class="ui-theme-features-title">Switch between two themes in one file with just one click.</h2>
            <p class="ui-theme-features-text">Quickly switch between light and dark themes within your project using Figma's Variables feature for easy adaptation of your design environment.</p>
          </div>
          <div class="ui-theme-features-compare">
            <ComparisonSlider />
          </div>
          <div class="ui-theme-features-contain-2">
            <div class="ui-theme-features-contain-4">
              <h2 class="ui-theme-features-title-2">The Most Powerful &amp; ultimate UI kit and design system for Figma</h2>
              <p class="ui-theme-features-text-2">Droit UI offers meticulously crafted components, responsive layouts, and effortless typography choices, empowering you to effortlessly create stunning interfaces. Whether you're an experienced designer or just starting, Droit UI is your ultimate tool for exceptional designs in record time.</p>
            </div>
            <div class="ui-theme-features-asset">
              <div class="ui-theme-features-asset-card _1st-card">
                <h1 class="ui-theme-asset-title">Tokens &amp; Variables</h1>
                <p class="ui-theme-asset-text">Enhance your workflow and achieve consistency with Color Tokens integrated into Variables.</p>
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65cd9f7c4c9d616b65ebb588_Image%20(2).png" alt="Tokens &amp; Variables" loading="lazy" />
              </div>
              <div class="ui-theme-features-asset-card _2st-card">
                <h1 class="ui-theme-asset-title">Asset Library</h1>
                <p class="ui-theme-asset-text">Explore an extensive asset library with 1200+ items, including brand logos and placeholder logos.</p>
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65cd9f7b2f8a25117bcf3f5f_Image%20(3).png" alt="Asset Library" loading="lazy" />
              </div>
            </div>
            <div class="ui-theme-features-asset">
              <div class="ui-theme-features-asset-card _3rd-card">
                <h1 class="ui-theme-asset-title">Over 2500 Icons</h1>
                <p class="ui-theme-asset-text">Phosphor Icon set containing 2500+ icons in both Line &amp; Filled styles.</p>
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65cd9f7bf390161c4138e6d2_Group%201000008316.png" alt="Over 2500 Icons" loading="lazy" />
              </div>
              <div class="ui-theme-features-asset-card _4th-card">
                <h1 class="ui-theme-asset-title">Local Styles</h1>
                <p class="ui-theme-asset-text">Design system essentials including Effect Styles, Text Styles, and much more.</p>
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65cd9f7b5c3e81f593403da9_Image%20(4).png" alt="Local Styles" loading="lazy" />
              </div>
              <div class="ui-theme-features-asset-card _5th-card">
                <h1 class="ui-theme-asset-title">Real-use Examples</h1>
                <p class="ui-theme-asset-text">You will find real-use examples and see how to use them the best.</p>
                <img class="image-17" src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65cd9f7b39e2ff220004dcc6_Image%20(5).png" alt="Real-Use Examples" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ideal Section */}
      <section class="ui-ideal-section">
        <div class="w-layout-blockcontainer ui-ideal-container container">
          <div class="ui-ideal-block">
            <div class="ui-theme-features-contain">
              <h2 class="ui-theme-features-title">Not just for creative individuals, but also for businesses.</h2>
              <p class="ui-theme-features-text">Droit UI is not only the ultimate design system for individuals, but also SaaS businesses, creative design agencies, and startups seeking to foster creativity throughout the project design-development process.</p>
            </div>
            <div class="ui-ideal-item-block">
              <div class="ui-ideal-item">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65d201268848a6206ee10aae_Icon%2011.svg" loading="lazy" alt="" />
                <h1 class="heading-3">Design Teams</h1>
                <p class="paragraph-6">Achieve the next-gen consistency and design with speed using our integrative, shared library of Droit UI.</p>
              </div>
              <div class="ui-ideal-item">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65d1ffb281d76eb43368ad68_Icon%20(2).svg" loading="lazy" alt="" />
                <h1 class="heading-3">Freelancers</h1>
                <p class="paragraph-6">Boost project quality and turnaround time, expanding your clientele and income with our efficient design solutions.</p>
              </div>
              <div class="ui-ideal-item">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65d1ffb167fb60ee8f7b7f13_Icon%20(4).svg" loading="lazy" alt="" />
                <h1 class="heading-3">Startups</h1>
                <p class="paragraph-6">Turbocharge your creative process with our comprehensive component library. Kickstart your design and prototyping phase.</p>
              </div>
              <div class="ui-ideal-item"><img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65d1ffb2960ab49fbb9fc645_Icon%20(5).svg" loading="lazy" alt="" />
                <h1 class="heading-3">Agencies</h1>
                <p class="paragraph-6">Harmonize your team's efforts with a unified design library. Streamline your workflow for greater efficiency.</p>
              </div>
              <div class="ui-ideal-item"><img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65d1ffb1d9336e770ec577dc_Icon%20(6).svg" loading="lazy" alt="" />
                <h1 class="heading-3">Enterprises</h1>
                <p class="paragraph-6">Empower large-scale projects with ease, ensuring brand coherence and cross-team collaboration with Droit UI.</p>
              </div>
              <div class="ui-ideal-item">
                <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65d1ffb1b62184f9a4318c24_Icon%20(3).svg" loading="lazy" alt="" />
                <h1 class="heading-3">Students</h1>
                <p class="paragraph-6">Play with professional design system construction and Become Figma proficient with our Droit UI kit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Multi Slider */}

      <ImageSlider />
      {/* Component Section */}
      <section class="ui-component-section">
        <div class="w-layout-blockcontainer ui-component-container container">
          <div class="ui-component-top">
            <h1 class="ui-component-title">Over <span class="text-span-4">7000+</span> Web Components Variants, Web Examples and more!</h1>
            <p class="ui-theme-features-text">A collection of all the Foundations, Components, Web Applications, Website Sections &amp; Examples we’ve provided.</p>
          </div>
          <div class="ui-component-grid">
            <a href="/typography-single" class="ui-component-item w-inline-block">
              <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c9b54fb980349c04188921_component-51.png" loading="lazy" alt="Typography" class="ui-item-component-img" />
              <div class="ui-item-component-block">
                <h1 class="ui-item-component-title">Typography</h1>
                <h1 class="ui-item-component-text">48 styles</h1>
              </div>
            </a>
            <a href="/color-single" class="ui-component-item w-inline-block">
              <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c9b54f07587d8672ed76d5_component-52.png" loading="lazy" alt="Color palette for website" class="ui-item-component-img" />
              <div class="ui-item-component-block">
                <h1 class="ui-item-component-title">Color</h1>
                <h1 class="ui-item-component-text">176 styles, 353 tokens</h1>
              </div>
            </a>
            <a href="/iconography-single" class="ui-component-item w-inline-block">
              <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c9b54fbeedf24f0e3be033_component-53.png" loading="lazy" alt="Iconography" class="ui-item-component-img" />
              <div class="ui-item-component-block">
                <h1 class="ui-item-component-title">Iconography</h1>
                <h1 class="ui-item-component-text">1300+ Icons</h1>
              </div>
            </a>
            <a href="/misc-icons-single" class="ui-component-item w-inline-block"><img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c9b54f28fb43ddfa3787af_component-54.png" loading="lazy" alt="Misc Icons" class="ui-item-component-img" />
              <div class="ui-item-component-block">
                <h1 class="ui-item-component-title">Misc Icons</h1>
                <h1 class="ui-item-component-text">8 components + 1012 variants</h1>
              </div>
            </a>
            <a href="/grid-spacing-and-radius-single" class="ui-component-item w-inline-block">
              <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c9b5505c1f5d9eff92e5a9_component-55.png" loading="lazy" alt="Grid, Spacing and Radius" class="ui-item-component-img" />
              <div class="ui-item-component-block">
                <h1 class="ui-item-component-title">Grid, Spacing and Radius</h1>
                <h1 class="ui-item-component-text">6 styles + 45 variants</h1>
              </div>
            </a>
            <a href="/effects-single" class="ui-component-item w-inline-block">
              <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c9b5516a04bc152dbf214b_component-56.png" loading="lazy" alt="Design Effects" class="ui-item-component-img" />
              <div class="ui-item-component-block">
                <h1 class="ui-item-component-title">Effects</h1>
                <h1 class="ui-item-component-text">3 effects + 35 styles</h1>
              </div>
            </a>
            <a href="/logo-single" class="ui-component-item w-inline-block">
              <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c9b551c00e955573ff6f35_component-57.png" loading="lazy" alt="Multiple Logo" class="ui-item-component-img" />
              <div class="ui-item-component-block">
                <h1 class="ui-item-component-title">Logo</h1>
                <h1 class="ui-item-component-text">2 components + 60 variants</h1>
              </div>
            </a>
            <a href="/buttons-single" class="ui-component-item w-inline-block"><img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c9b551a77aaff719a1c72c_component-58.png" loading="lazy" alt="Buttons styles" class="ui-item-component-img" />
              <div class="ui-item-component-block">
                <h1 class="ui-item-component-title">Buttons</h1>
                <h1 class="ui-item-component-text">4 components, 1142 variants</h1>
              </div>
            </a>
            <a href="/button-groups-single" class="ui-component-item w-inline-block"><img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c9b5525d82498967033653_component-59.png" loading="lazy" alt="" class="ui-item-component-img" />
              <div class="ui-item-component-block">
                <h1 class="ui-item-component-title">Button Groups</h1>
                <h1 class="ui-item-component-text">2 components + 402 variants</h1>
              </div>
            </a>
            <a href="/input-field-single" class="ui-component-item w-inline-block">
              <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c9b55323ab16435fd5318e_component-60.png" loading="lazy" alt="input field" class="ui-item-component-img" />
              <div class="ui-item-component-block">
                <h1 class="ui-item-component-title">Input Field</h1>
                <h1 class="ui-item-component-text">2 components + 122 variants</h1>
              </div>
            </a>
            <a href="/dropdowns-single" class="ui-component-item w-inline-block">
              <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c9b55399b85adaaaa7019f_component-61.png" loading="lazy" alt="dropdowns" class="ui-item-component-img" />
              <div class="ui-item-component-block">
                <h1 class="ui-item-component-title">Dropdowns</h1>
                <h1 class="ui-item-component-text">7 components + 117 variants</h1>
              </div>
            </a>
            <a href="/avatars-single" class="ui-component-item w-inline-block">
              <img src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65c9ae6bc5972aab1c716280_component-48.png" loading="lazy" alt="avatars" class="ui-item-component-img" />
              <div class="ui-item-component-block">
                <h1 class="ui-item-component-title">Avatars</h1>
                <h1 class="ui-item-component-text">8 components + 332 variants</h1>
              </div>
            </a>
          </div>
          <div class="ui-faq-bottom">
            <a href="/components" class="ui-all-faq-btn w-inline-block">
              <div class="ui-all-faq-text">View All Components</div>
              <div class="ui-faq-btn-icon"><IoIosArrowForward /></div>
            </a>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section class="ui-pricing-section">
        <div class="w-layout-blockcontainer ui-pricing-container container">
          <Pricing />
          <FAQsComponents />
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;