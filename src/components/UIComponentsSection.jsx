import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Alert from '../assets/components/Alert.png'
import Avatars from '../assets/components/Avatars.png'
import Badges from '../assets/components/Badges.png'
import Blog from '../assets/components/Blog.png'
import BlogPages from '../assets/components/BlogPages.png'
import Breadcrumbs from '../assets/components/Breadcrumbs.png'
import ButtonGroups from '../assets/components/ButtonGroups.png'
import Buttons from '../assets/components/Buttons.png'
import Carousel from '../assets/components/Carousel.png'
import ChartsGraphs from '../assets/components/Charts&Graphs.png'
import CheckboxGroups from '../assets/components/CheckboxGroups.png'
import CheckboxesRadios from '../assets/components/CheckboxesRadios.png'
import Color from '../assets/components/Color.png'
import ContactPages from '../assets/components/ContactPages.png'
import Contact from '../assets/components/contact.png'
import CTA from '../assets/components/cta.png'
import DashboardHeader from '../assets/components/DashboardHeader.png'
import DashboardNavigation from '../assets/components/DashboardNavigation.png'
import DatePicker from '../assets/components/DatePicker.png'
import Divider from '../assets/components/Divider.png'
import Dropdowns from '../assets/components/Dropdowns.png'
import Effects from '../assets/components/Effects.png'
import FAQs from '../assets/components/faq.png'
import FAQPages from '../assets/components/FAQPages.png'
import Features from '../assets/components/Features.png'
import FileUpload from '../assets/components/FileUpload.png'
import Footers from '../assets/components/footers.png'
import GridSpacingandRadius from '../assets/components/GridSpacingandRadius.png'
import Header from '../assets/components/Header.png'
import HeaderNavigation from '../assets/components/HeaderNavigation.png'
import Iconography from '../assets/components/Iconography.png'
import InputField from '../assets/components/InputField.png'
import Integrations from '../assets/components/Integrations.png'
import LandingPages from '../assets/components/LandingPages.png'
import LoadingIndicators from '../assets/components/LoadingIndicators.png'
import Logo from '../assets/components/Logo.png'
import LogoCloud from '../assets/components/LogoCloud.png'
import MiscIcons from '../assets/components/MiscIcons.png'
import Modal from '../assets/components/Modal.png'
import Notification from '../assets/components/Notification.png'
import Pageheader from '../assets/components/Pageheader.png'
import Pagination from '../assets/components/Pagination.png'
import PlayButton from '../assets/components/PlayButton.png'
import Pricing from '../assets/components/Pricing.png'
import PricingPages from '../assets/components/PricingPages.png'
import Progress from '../assets/components/Progress.png'
import Rating from '../assets/components/Rating.png'
import SectionHeader from '../assets/components/SectionHeader.png'
import Skeleton from '../assets/components/Skeleton.png'
import Slider from '../assets/components/Slider.png'
import Statistics from '../assets/components/Statistics.png'
import Steps from '../assets/components/Steps.png'
import Tables from '../assets/components/Tables.png'
import Tabs from '../assets/components/Tabs.png'
import Tags from '../assets/components/Tags.png'
import TeamPages from '../assets/components/TeamPages.png'
import Teams from '../assets/components/Teams.png'
import Testimonials from '../assets/components/Testimonials.png'
import Timeline from '../assets/components/Timeline.png'
import Toggle from '../assets/components/Toggle.png'
import Tooltips from '../assets/components/Tooltips.png'
import TypographyImage from '../assets/components/Typography.png'
import WebApplications from '../assets/components/WebApplications.png'
import FadeUpOnView from './FadeUpOnView';


const UIComponentsSection = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'All Components' },
    { id: 'tab2', label: 'Foundations' },
    { id: 'tab3', label: 'Web Components' },
    { id: 'tab4', label: 'Web Applications' },
    { id: 'tab5', label: 'Website Examples' },
    { id: 'tab6', label: 'Website Sections' }
  ];

  const components = {
    tab1: [
      { title: 'Typography', text: '48 styles', img: TypographyImage },
      { title: 'Color', text: '176 styles, 353 tokens', img: Color },
      { title: 'Iconography', text: '1300+ Icons', img: Iconography },
      { title: 'Misc Icons', text: '8 components + 1012 variants', img: MiscIcons },
      { title: 'Grid, Spacing and Radius', text: '6 styles + 45 variants', img: GridSpacingandRadius },
      { title: 'Effects', text: '3 effects + 35 styles', img: Effects },
      { title: 'Logo', text: '2 components + 60 variants', img: Logo },
      { title: 'Buttons', text: '4 components, 1142 variants', img: Buttons },
      { title: 'Button Groups', text: '2 components + 402 variants', img: ButtonGroups },
      { title: 'Input Field', text: '2 components + 122 variants', img: InputField },
      { title: 'Dropdowns', text: '7 components + 117 variants', img: Dropdowns },
      { title: 'Avatars', text: '8 components + 332 variants', img: Avatars },
      { title: 'Breadcrumbs', text: '3 components + 249 variants', img: Breadcrumbs },
      { title: 'Badges', text: '2 components + 1440 variants', img: Badges },
      { title: 'Checkboxes & Radios', text: '216 variants', img: CheckboxesRadios },
      { title: 'Checkbox Groups', text: '2 components + 216 variants', img: CheckboxGroups },
      { title: 'Toggle', text: '224 variants', img: Toggle },
      { title: 'Tooltips', text: '62 variants', img: Tooltips },
      { title: 'Progress', text: '2 components + 140 variants', img: Progress },
      { title: 'Carousel', text: '2 components + 40 variants', img: Carousel },
      { title: 'Slider', text: '2 components + 21 variants', img: Slider },
      { title: 'Steps', text: '5 components + 204 variants', img: Steps },
      { title: 'Modal', text: '19 variants', img: Modal },
      { title: 'Alert', text: '60 variants', img: Alert },
      { title: 'Rating', text: '2 components + 15 variants', img: Rating },
      { title: 'Tags', text: '3 components + 110 variants', img: Tags },
      { title: 'Tabs', text: '3 components + 120 variants', img: Tabs },
      { title: 'Timeline', text: '4 components + 32 variants', img: Timeline },
      { title: 'Play Button', text: '4 components + 38 variants', img: PlayButton },
      { title: 'Pagination', text: '5 components + 38 variants', img: Pagination },
      { title: 'Loading Indicators', text: '12 variants', img: LoadingIndicators },
      { title: 'Divider', text: '10 variants', img: Divider },
      { title: 'Skeleton', text: '2 components + 8 variants', img: Skeleton },
      { title: 'Web Applications', text: '20 examples + 43 variants', img: WebApplications },
      { title: 'Dashboard Navigation', text: '9 components + 79 variants', img: DashboardNavigation },
      { title: 'Dashboard Header', text: '2 components + 12 variants', img: DashboardHeader },
      { title: 'Section Header', text: '3 components + 10 variants', img: SectionHeader },
      { title: 'Tables', text: '3 components + 96 variants', img: Tables },
      { title: 'Charts & Graphs', text: '13 components + 421 variants', img: ChartsGraphs },
      { title: 'Date Picker', text: '5 components + 43 variants', img: DatePicker },
      { title: 'Notification', text: '2 components + 9 variants', img: Notification },
      { title: 'File Upload', text: '3 components + 13 variants', img: FileUpload },
      { title: 'Landing Pages', text: '10 Pages', img: LandingPages },
      { title: 'Team Pages', text: '4 Pages', img: TeamPages },
      { title: 'Pricing Pages', text: '4 Pages', img: PricingPages },
      { title: 'FAQ Pages', text: '7 Pages', img: FAQPages },
      { title: 'Blog Pages', text: '6 Pages', img: BlogPages },
      { title: 'Contact Pages', text: '6 Pages', img: ContactPages },
      { title: 'Header', text: '20 variants', img: Header },
      { title: 'Blog', text: '2 components + 27 variants', img: Blog },
      { title: 'Teams', text: '2 components + 27 variants', img: Teams },
      { title: 'Pricing', text: '5 components + 62 variants', img: Pricing },
      { title: 'Features', text: '2 components + 56 variants', img: Features },
      { title: 'Integrations', text: '2 components + 22 variants', img: Integrations },
      { title: 'FAQ', text: '16 variants', img: FAQs },
      { title: 'Testimonials', text: '16 variants', img: Testimonials },
      { title: 'Logo Cloud', text: '20 variants', img: LogoCloud },
      { title: 'Statistics', text: '14 variants', img: Statistics },
      { title: 'CTA', text: '14 variants', img: CTA },
      { title: 'Contact', text: '4 components + 19 variants', img: Contact },
      { title: 'Header Navigation', text: '6 components + 87 variants', img: HeaderNavigation },
      { title: 'Footers', text: '87 variants', img: Footers },
      { title: 'Page Header', text: '4 variants', img: Pageheader },
      // Add more components as needed
    ],
    tab2: [
      { title: 'Typography', text: '48 styles', img: TypographyImage },
      { title: 'Color', text: '176 styles, 353 tokens', img: Color },
      { title: 'Iconography', text: '1300+ Icons', img: Iconography },
      { title: 'Misc Icons', text: '8 components + 1012 variants', img: MiscIcons },
      { title: 'Grid, Spacing and Radius', text: '6 styles + 45 variants', img: GridSpacingandRadius },
      { title: 'Effects', text: '3 effects + 35 styles', img: Effects },
      { title: 'Logo', text: '2 components + 60 variants', img: Logo },
    ],
    // Add data for other tabs similarly
    tab3: [
      { title: 'Buttons', text: '4 components, 1142 variants', img: Buttons },
      { title: 'Button Groups', text: '2 components + 402 variants', img: ButtonGroups },
      { title: 'Input Field', text: '2 components + 122 variants', img: InputField },
      { title: 'Dropdowns', text: '7 components + 117 variants', img: Dropdowns },
      { title: 'Avatars', text: '8 components + 332 variants', img: Avatars },
      { title: 'Breadcrumbs', text: '3 components + 249 variants', img: Breadcrumbs },
      { title: 'Badges', text: '2 components + 1440 variants', img: Badges },
      { title: 'Checkboxes & Radios', text: '216 variants', img: CheckboxesRadios },
      { title: 'Checkbox Groups', text: '2 components + 216 variants', img: CheckboxGroups },
      { title: 'Toggle', text: '224 variants', img: Toggle },
      { title: 'Tooltips', text: '62 variants', img: Tooltips },
      { title: 'Progress', text: '2 components + 140 variants', img: Progress },
      { title: 'Carousel', text: '2 components + 40 variants', img: Carousel },
      { title: 'Slider', text: '2 components + 21 variants', img: Slider },
      { title: 'Steps', text: '5 components + 204 variants', img: Steps },
      { title: 'Modal', text: '19 variants', img: Modal },
      { title: 'Alert', text: '60 variants', img: Alert },
      { title: 'Rating', text: '2 components + 15 variants', img: Rating },
      { title: 'Tags', text: '3 components + 110 variants', img: Tags },
      { title: 'Tabs', text: '3 components + 120 variants', img: Tabs },
      { title: 'Timeline', text: '4 components + 32 variants', img: Timeline },
      { title: 'Play Button', text: '4 components + 38 variants', img: PlayButton },
      { title: 'Pagination', text: '5 components + 38 variants', img: Pagination },
      { title: 'Loading Indicators', text: '12 variants', img: LoadingIndicators },
      { title: 'Divider', text: '10 variants', img: Divider },
      { title: 'Skeleton', text: '2 components + 8 variants', img: Skeleton },
      // Add more components for tab3
    ],
    tab4: [
      { title: 'Web Applications', text: '20 examples + 43 variants', img: WebApplications },
      { title: 'Dashboard Navigation', text: '9 components + 79 variants', img: DashboardNavigation },
      { title: 'Dashboard Header', text: '2 components + 12 variants', img: DashboardHeader },
      { title: 'Section Header', text: '3 components + 10 variants', img: SectionHeader },
      { title: 'Tables', text: '3 components + 96 variants', img: Tables },
      { title: 'Charts & Graphs', text: '13 components + 421 variants', img: ChartsGraphs },
      { title: 'Date Picker', text: '5 components + 43 variants', img: DatePicker },
      { title: 'Notification', text: '2 components + 9 variants', img: Notification },
      { title: 'File Upload', text: '3 components + 13 variants', img: FileUpload },
        // Add more components for tab4
    ],
    tab5: [
      { title: 'Landing Pages', text: '10 Pages', img: LandingPages },
      { title: 'Team Pages', text: '4 Pages', img: TeamPages },
      { title: 'Pricing Pages', text: '4 Pages', img: PricingPages },
      { title: 'FAQ Pages', text: '7 Pages', img: FAQPages },
      { title: 'Blog Pages', text: '6 Pages', img: BlogPages },
      { title: 'Contact Pages', text: '6 Pages', img: ContactPages },
        // Add more components for tab5
    ],
    tab6: [
      { title: 'Header', text: '20 variants', img: Header },
      { title: 'Blog', text: '2 components + 27 variants', img: Blog },
      { title: 'Teams', text: '2 components + 27 variants', img: Teams },
      { title: 'Pricing', text: '5 components + 62 variants', img: Pricing },
      { title: 'Features', text: '2 components + 56 variants', img: Features },
      { title: 'Integrations', text: '2 components + 22 variants', img: Integrations },
      { title: 'FAQ', text: '16 variants', img: FAQs },
      { title: 'Testimonials', text: '16 variants', img: Testimonials },
      { title: 'Logo Cloud', text: '20 variants', img: LogoCloud },
      { title: 'Statistics', text: '14 variants', img: Statistics },
      { title: 'CTA', text: '14 variants', img: CTA },
      { title: 'Contact', text: '4 components + 19 variants', img: Contact },
      { title: 'Header Navigation', text: '6 components + 87 variants', img: HeaderNavigation },
      { title: 'Footers', text: '87 variants', img: Footers },
      { title: 'Page Header', text: '4 variants', img: Pageheader },
        // Add more components for tab6
    ],
    // Continue for other tabs
  };

  return (
    <section className="ui-components-section single-compo-compoents">
      <div className="w-layout-blockcontainer ui-comonents-container container">
        <div className="ui-component-top">
          <FadeUpOnView delay={0.3}>
          <h1 className="ui-component-title">Over <span className="text-span-2">7000+</span> Base Components, Core Elements, and more!</h1>
          </FadeUpOnView>
          <FadeUpOnView delay={0.3}>
          <p className="ui-theme-features-text">The list of Core Elements, Base Components, and more within our design system.</p>
          </FadeUpOnView>
        </div>
        
        <div className="tabs">
          <div className="tabs-menu" role="tablist">
            {tabs.map(tab => (
              <FadeUpOnView delay={0.3}>
              <button
                key={tab.id}
                className={`tab-link-tab-2 ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                
                <div className="text-block-6">
                  {tab.label}
                </div>
              </button>
              </FadeUpOnView>
            ))}
          </div>
          
          <div className="tab-content">
            {tabs.map(tab => (
              <div
                key={tab.id}
                className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
                role="tabpanel"
              >
                <div className={`ui-component-grid grid-${tab.id.replace('tab', '')}-compo`}>
                  {components[tab.id]?.map((component, index) => (
                    
                    <a 
                      key={index} 
                      href={`/${component.title.toLowerCase().replace(/\s+/g, '-')}-single`} 
                      className=""
                    >
                      <FadeUpOnView delay={0.3}>
                      <div className='ui-component-item'>
                      <img
                        loading="lazy"
                        src={component.img}
                        alt={component.title.toLowerCase()}
                        className="ui-item-component-img"
                        srcSet={`${component.img.replace('.png', '-p-500.png')} 500w, ${component.img} 612w`}
                      />
                      <div className="ui-item-component-block">
                        <h1 className="ui-item-component-title">{component.title}</h1>
                        <h2 className="ui-item-component-text">{component.text}</h2>
                      </div>
                      </div>
                      </FadeUpOnView>
                    </a>
                    
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <FadeUpOnView delay={0.3}>
        <div className="ui-hero-btn components-ui-btn">
          <a 
            href="https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=351%3A443&mode=design&t=i1PIjCbK6TFYKnlw-1" 
            className="ui-hero-btn-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              src="https://cdn.prod.website-files.com/652a94d2422fddacbf881a46/65b9e0314a580c4a67b20712_figma-icon.svg" 
              loading="lazy" 
              alt="Figma" 
              className="figma-icon" 
            />
            <div className="text-block-3">Preview in Figma</div>
          </a>
          <a 
            href="https://droitui.lemonsqueezy.com/checkout/buy/64e31ddc-ec61-493d-ad69-a5bfbea60e09" 
            className="ui-hero-btn-2 ui-features-btn-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-block-4">Buy Now</div>
            <div className="ui-hero-btn-icons"><IoIosArrowForward className='text-lg text-white' /></div>
          </a>
        </div>
        </FadeUpOnView>
      </div>
    </section>
  );
};

export default UIComponentsSection;