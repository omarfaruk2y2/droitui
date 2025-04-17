import { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";

// Landing
import Landing1 from "../../assets/Landing/Image.png"
import Landing2 from "../../assets/Landing/Image-1.png"
import Landing3 from "../../assets/Landing/Image-2.png"
import Landing4 from "../../assets/Landing/Image-3.png"
import Landing5 from "../../assets/Landing/Image-4.png"
import Landing6 from "../../assets/Landing/Image-5.png"
import Landing7 from "../../assets/Landing/Image-6.png"
import Landing8 from "../../assets/Landing/Image-7.png"
import Landing9 from "../../assets/Landing/Image-8.png"
import Landing10 from "../../assets/Landing/Image-9.png"
import Landing11 from "../../assets/Landing/Image-10.png"
import Landing12 from "../../assets/Landing/Image-11.png"
import Landing13 from "../../assets/Landing/Image-12.png"
import Landing14 from "../../assets/Landing/Image-13.png"
import Landing15 from "../../assets/Landing/Image-14.png"
import Landing16 from "../../assets/Landing/Image-15.png"
import Landing17 from "../../assets/Landing/Image-16.png"
import Landing18 from "../../assets/Landing/Image-17.png"
import Landing19 from "../../assets/Landing/Image-18.png"
import Landing20 from "../../assets/Landing/Image-19.png"

// Team
import Team1 from "../../assets/Team/Image.png"
import Team2 from "../../assets/Team/Image-1.png"
import Team3 from "../../assets/Team/Image-2.png"
import Team4 from "../../assets/Team/Image-3.png"
import Team5 from "../../assets/Team/Image-4.png"
import Team6 from "../../assets/Team/Image-5.png"
import Team7 from "../../assets/Team/Image-6.png"
import Team8 from "../../assets/Team/Image-7.png"

// Pricing
import Pricing1 from "../../assets/Pricing/Image.png"
import Pricing2 from "../../assets/Pricing/Image-1.png"
import Pricing3 from "../../assets/Pricing/Image-2.png"
import Pricing4 from "../../assets/Pricing/Image-3.png"
import Pricing5 from "../../assets/Pricing/Image-4.png"
import Pricing6 from "../../assets/Pricing/Image-5.png"
import Pricing7 from "../../assets/Pricing/Image-6.png"
import Pricing8 from "../../assets/Pricing/Image-7.png"

// FAQs
import FAQs1 from "../../assets/FAQs/Image.png"
import FAQs2 from "../../assets/FAQs/Image-1.png"
import FAQs3 from "../../assets/FAQs/Image-2.png"
import FAQs4 from "../../assets/FAQs/Image-3.png"
import FAQs5 from "../../assets/FAQs/Image-4.png"
import FAQs6 from "../../assets/FAQs/Image-5.png"
import FAQs7 from "../../assets/FAQs/Image-6.png"
import FAQs8 from "../../assets/FAQs/Image-7.png"
import FAQs9 from "../../assets/FAQs/Image-8.png"
import FAQs10 from "../../assets/FAQs/Image-9.png"
import FAQs11 from "../../assets/FAQs/Image-10.png"
import FAQs12 from "../../assets/FAQs/Image-11.png"
import FAQs13 from "../../assets/FAQs/Image-12.png"
import FAQs14 from "../../assets/FAQs/Image-13.png"

// Blog
import Blog1 from "../../assets/Blog/Image.png"
import Blog2 from "../../assets/Blog/Image-1.png"
import Blog3 from "../../assets/Blog/Image-2.png"
import Blog4 from "../../assets/Blog/Image-3.png"
import Blog5 from "../../assets/Blog/Image-4.png"
import Blog6 from "../../assets/Blog/Image-5.png"
import Blog7 from "../../assets/Blog/Image-6.png"
import Blog8 from "../../assets/Blog/Image-7.png"
import Blog9 from "../../assets/Blog/Image-8.png"
import Blog10 from "../../assets/Blog/Image-9.png"
import Blog11 from "../../assets/Blog/Image-10.png"
import Blog12 from "../../assets/Blog/Image-11.png"

// Contact
import Contact1 from "../../assets/Contact/Image.png"
import Contact2 from "../../assets/Contact/Image-1.png"
import Contact3 from "../../assets/Contact/Image-2.png"
import Contact4 from "../../assets/Contact/Image-3.png"
import Contact5 from "../../assets/Contact/Image-4.png"
import Contact6 from "../../assets/Contact/Image-5.png"
import Contact7 from "../../assets/Contact/Image-6.png"
import Contact8 from "../../assets/Contact/Image-7.png"
import Contact9 from "../../assets/Contact/Image-8.png"
import Contact10 from "../../assets/Contact/Image-9.png"
import Contact11 from "../../assets/Contact/Image-10.png"
import Contact12 from "../../assets/Contact/Image-11.png"

const Website = () => {
  const [activeTab, setActiveTab] = useState('landing');

  const tabs = [
    { id: 'landing', label: 'Landing Pages' },
    { id: 'team', label: 'Team Pages' },
    { id: 'pricing', label: 'Pricing Pages' },
    { id: 'faq', label: 'FAQ Pages' },
    { id: 'blog', label: 'Blog Pages' },
    { id: 'contact', label: 'Contact Pages' },
  ];

  // Sample data for each tab
  const tabData = {
    landing: [
      { id: 1, title: 'Landing Page 1', version: 'Light Version', image: Landing1, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6527-46236&mode=design&t=AWZGFtKlC05SPpxi-0' },
      { id: 2, title: 'Landing Page 1', version: 'Dark Version', image: Landing2, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6606-65122&mode=design' },
      { id: 3, title: 'Landing Page 2', version: 'Light Version', image: Landing3, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6527-58668&mode=design&t=g9sFGtsB4nzPc4c1-0' },
      { id: 4, title: 'Landing Page 2', version: 'Dark Version', image: Landing4, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6606-65140&mode=design' },
      { id: 5, title: 'Landing Page 3', version: 'Light Version', image: Landing5, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6527-67179&mode=design' },
      { id: 6, title: 'Landing Page 3', version: 'Dark Version', image: Landing6, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6606-65158&mode=design' },
      { id: 7, title: 'Landing Page 4', version: 'Light Version', image: Landing7, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6527-75613&mode=design' },
      { id: 8, title: 'Landing Page 4', version: 'Dark Version', image: Landing8, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6606-65174&mode=design&t=HIAzVbb5lZTtRRax-0' },
      { id: 9, title: 'Landing Page 5', version: 'Light Version', image: Landing9, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6566-38353&mode=design&t=hcMOl97NJkxg0hsJ-0' },
      { id: 10, title: 'Landing Page 5', version: 'Dark Version', image: Landing10, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6606-65188&mode=design&t=CavUhBTqv2DUx8fI-0' },
      { id: 11, title: 'Landing Page 6', version: 'Light Version', image: Landing11, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6566-50383&mode=design&t=9Rm3XzsCeR42FtgK-0' },
      { id: 12, title: 'Landing Page 6', version: 'Dark Version', image: Landing12, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6606-65206&mode=design&t=2DdUtHyGE6KX7Fsr-0' },
      { id: 13, title: 'Landing Page 7', version: 'Light Version', image: Landing13, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6570-59130&mode=design&t=1b0O5YgoHhQIFuPl-0' },
      { id: 14, title: 'Landing Page 7', version: 'Dark Version', image: Landing14, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6606-65226&mode=design&t=jrlvFbzVb0gUcc9I-0' },
      { id: 15, title: 'Landing Page 8', version: 'Light Version', image: Landing15, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6570-89714&mode=design&t=PBblrRrq9PIbFTPR-0' },
      { id: 16, title: 'Landing Page 8', version: 'Dark Version', image: Landing16, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6606-65242&mode=design&t=clP3YbV6kPWOBf4O-0' },
      { id: 17, title: 'Landing Page 9', version: 'Light Version', image: Landing17, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6570-94536&mode=design&t=KThOZuOJntDTfpjx-0' },
      { id: 18, title: 'Landing Page 9', version: 'Dark Version', image: Landing18, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6606-65262&mode=design&t=dtaYotnfolxbPEbi-0' },
      { id: 19, title: 'Landing Page 10', version: 'Light Version', image: Landing19, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6570-99415&mode=design&t=tCAfNQMUDKI8HhL3-0' },
      { id: 20, title: 'Landing Page 10', version: 'Dark Version', image: Landing20, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6606-65280&mode=design&t=JYI872j8rOMm46sf-0' },
      // Add more landing page items as needed
    ],
    team: [
      { id: 1, title: 'Team Page 1', version: 'Light Version', image: Team1, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6725-90623&mode=design&t=FtqZtKHzfwyGWJkw-0' },
      { id: 2, title: 'Team Page 1', version: 'Dark Version', image: Team2, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6725-90629&mode=design&t=WhnC9GALACSL6nBR-0' },
      { id: 3, title: 'Team Page 1', version: 'Light Version', image: Team3, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6725-90623&mode=design&t=FtqZtKHzfwyGWJkw-0' },
      { id: 4, title: 'Team Page 1', version: 'Dark Version', image: Team4, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6725-90629&mode=design&t=WhnC9GALACSL6nBR-0' },
      { id: 5, title: 'Team Page 1', version: 'Light Version', image: Team5, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6725-90623&mode=design&t=FtqZtKHzfwyGWJkw-0' },
      { id: 6, title: 'Team Page 1', version: 'Dark Version', image: Team6, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6725-90629&mode=design&t=WhnC9GALACSL6nBR-0' },
      { id: 7, title: 'Team Page 1', version: 'Light Version', image: Team7, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6725-90623&mode=design&t=FtqZtKHzfwyGWJkw-0' },
      { id: 8, title: 'Team Page 1', version: 'Dark Version', image: Team8, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6725-90629&mode=design&t=WhnC9GALACSL6nBR-0' },
      // Add more team page items as needed
    ],
    pricing: [
      { id: 1, title: 'Pricing Page 1', version: 'Light Version', image: Pricing1, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6726-130602&mode=design&t=W8tKhjcXUqLfmu5H-0' },
      { id: 2, title: 'Pricing Page 1', version: 'Dark Version', image: Pricing2, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6726-130607&mode=design&t=leGbeyhk8uxRAONL-0' },
      { id: 3, title: 'Pricing Page 2', version: 'Light Version', image: Pricing3, link: '' },
      { id: 4, title: 'Pricing Page 2', version: 'Dark Version', image: Pricing4, link: '' },
      { id: 5, title: 'Pricing Page 3', version: 'Light Version', image: Pricing5, link: '' },
      { id: 6, title: 'Pricing Page 3', version: 'Dark Version', image: Pricing6, link: '' },
      { id: 7, title: 'Pricing Page 4', version: 'Light Version', image: Pricing7, link: '' },
      { id: 8, title: 'Pricing Page 4', version: 'Dark Version', image: Pricing8, link: '' },
      // Add more pricing page items as needed
    ],
    faq: [
      { id: 1, title: 'FAQ Page 1', version: 'Light Version', image: FAQs1, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6725-109227&mode=design&t=XlpaiujIap6TC427-0' },
      { id: 2, title: 'FAQ Page 1', version: 'Dark Version', image: FAQs2, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6725-109232&mode=design&t=FMr3UW6sNWaKFGy1-0' },

      { id: 3, title: 'FAQ Page 2', version: 'Light Version', image: FAQs3, link: '' },
      { id: 4, title: 'FAQ Page 2', version: 'Dark Version', image: FAQs4, link: '' },
      { id: 5, title: 'FAQ Page 3', version: 'Light Version', image: FAQs5, link: '' },
      { id: 6, title: 'FAQ Page 3', version: 'Dark Version', image: FAQs6, link: '' },
      { id: 7, title: 'FAQ Page 4', version: 'Light Version', image: FAQs7, link: '' },
      { id: 8, title: 'FAQ Page 4', version: 'Dark Version', image: FAQs8, link: '' },
      { id: 9, title: 'FAQ Page 5', version: 'Light Version', image: FAQs9, link: '' },
      { id: 10, title: 'FAQ Page 5', version: 'Dark Version', image: FAQs10, link: '' },
      { id: 11, title: 'FAQ Page 6', version: 'Light Version', image: FAQs11, link: '' },
      { id: 12, title: 'FAQ Page 6', version: 'Dark Version', image: FAQs12, link: '' },
      // Add more FAQ page items as needed
    ],
    blog: [
      { id: 1, title: 'Blog Page 1', version: 'Light Version', image: Blog1, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6725-124956&mode=design&t=qxaijWCfC5jxcN6A-0' },
      { id: 2, title: 'Blog Page 1', version: 'Dark Version', image: Blog2, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6752-86690&mode=design&t=hkkC6AJhkm11B1yV-0' },

      { id: 3, title: 'Blog Page 2', version: 'Light Version', image: Blog3, link: '' },
      { id: 4, title: 'Blog Page 2', version: 'Dark Version', image: Blog4, link: '' },
      { id: 5, title: 'Blog Page 3', version: 'Light Version', image: Blog5, link: '' },
      { id: 6, title: 'Blog Page 3', version: 'Dark Version', image: Blog6, link: '' },
      { id: 7, title: 'Blog Page 4', version: 'Light Version', image: Blog7, link: '' },
      { id: 8, title: 'Blog Page 4', version: 'Dark Version', image: Blog8, link: '' },
      { id: 9, title: 'Blog Single 1', version: 'Light Version', image: Blog9, link: '' },
      { id: 10, title: 'Blog Single 1', version: 'Dark Version', image: Blog10, link: '' },
      { id: 11, title: 'Blog Single 2', version: 'Light Version', image: Blog11, link: '' },
      { id: 12, title: 'Blog Single 2', version: 'Dark Version', image: Blog12, link: '' },
      // Add more blog page items as needed
    ],
    contact: [
      { id: 1, title: 'Contact Page 1', version: 'Light Version', image: Contact1, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6648-63836&mode=design&t=6OuzHC5d7qPeViuK-0' },
      { id: 2, title: 'Contact Page 1', version: 'Dark Version', image: Contact2, link: 'https://www.figma.com/file/j1jhBdnUsYkpiNzcPcR6iu/Droit-UI-For-Figma?type=design&node-id=6659-48877&mode=design&t=8vbYYhG0ZkTG9oWn-0' },

      { id: 3, title: 'Contact Page 2', version: 'Light Version', image: Contact3, link: '' },
      { id: 4, title: 'Contact Page 2', version: 'Dark Version', image: Contact4, link: '' },
      { id: 5, title: 'Contact Page 3', version: 'Light Version', image: Contact5, link: '' },
      { id: 6, title: 'Contact Page 3', version: 'Dark Version', image: Contact6, link: '' },
      { id: 7, title: 'Contact Page 4', version: 'Light Version', image: Contact7, link: '' },
      { id: 8, title: 'Contact Page 4', version: 'Dark Version', image: Contact8, link: '' },
      { id: 9, title: 'Contact Page 5', version: 'Light Version', image: Contact9, link: '' },
      { id: 10, title: 'Contact Page 5', version: 'Dark Version', image: Contact10, link: '' },
      { id: 11, title: 'Contact Page 6', version: 'Light Version', image: Contact11, link: '' },
      { id: 12, title: 'Contact Page 6', version: 'Dark Version', image: Contact12, link: '' },
      // Add more contact page items as needed
    ],
  };

  return (
    <section className="inner-page-landing-section">
      <div className="w-layout-blockcontainer inner-page-landing-container container">
        <div className="inner-page-landing-heading-sec">
          <h1 className="inner-page-landing-heading">
            <span className="text-span-7">Large Collection</span> of Landing Pages, Team Pages, Pricing Pages and more..
          </h1>
          <p className="inner-page-landing-sub-head">
            A collection of all the Landing, Team, FAQ, Pricing, Blog, Contact Pages we've provided.
          </p>
        </div>
        
        <div className="inner-page-landing-tab-sec">
          <div className="tabs-2 w-tabs">
            <div className="tabs-menu-2 w-tab-menu" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-link-tab-2-2 w-inline-block w-tab-link ${activeTab === tab.id ? 'w--current' : ''}`}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="text-block-7">{tab.label}</div>
                </button>
              ))}
            </div>
            
            <div className="tabs-content w-tab-content">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`w-tab-pane ${activeTab === tab.id ? 'w--tab-active' : ''}`}
                  role="tabpanel"
                  style={{ 
                    display: activeTab === tab.id ? 'block' : 'none',
                    transition: 'all, opacity 300ms',
                    opacity: activeTab === tab.id ? 1 : 0
                  }}
                >
                  <div className={`w-layout-grid grid tab${tabs.findIndex(t => t.id === tab.id) + 1}-grid`}>
                    {tabData[tab.id].map((item) => (
                      <div key={item.id} className="inner-page-tab-item">
                        <div className="tab-item-img-sec">
                          <img
                            src={item.image}
                            alt={`${tab.label.toLowerCase()} page`}
                            loading="lazy"
                            className="tab-item-img"
                          />
                        </div>
                        <div className="tab-item-text-sec">
                          <div className="tab-item-text-title-sec">
                            <a href={item.link} className="link-5">{item.title}</a>
                            <h2 className="version-text">{item.version}</h2>
                          </div>
                          <a
                            href={item.link}
                            className="tab-item-btn w-inline-block"
                            style={{
                              borderColor: 'rgb(203, 213, 225)',
                              backgroundColor: 'rgb(255, 255, 255)'
                            }}
                          >
                            <GoArrowUpRight className='text-2xl' />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Website;