import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import FadeUpOnView from '../../components/FadeUpOnView';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      question: "Why do I need the Droit UI Design System?",
      answer: "Droit UI Design System streamlines your design process, offering a robust set of components and templates, saving time, and ensuring consistency in your projects. No matter whether you are a solo designer or a team it accelerates your design process by 100x."
    },
    {
      question: "How many components are available?",
      answer: "Droit UI boasts an extensive library of 7000+ components, ensuring versatility in your design projects."
    },
    {
      question: "Are there niche-specific dashboards and templates available?",
      answer: "Absolutely! Droit UI includes sector-specific dashboards and widgets, tailored to diverse needs. We started with 50+ sector-wise templates and we have a plan to cover all popular niche-based templates."
    },
    {
      question: "Can I use Droit UI for free?",
      answer: "Yes, we provide a free tier for you to explore the features of Droit UI."
    },
    {
      question: "Can I use Droit UI Design System with Figma free version?",
      answer: "Yes, of course! Every features and components are usable with Figma free version."
    },
    {
      question: "Can I use the Droit UI Design System for commercial projects?",
      answer: "Yes, Droit UI is perfect for commercial projects, empowering you with professional-grade design elements. To know details, please read our License and Agreement section."
    },
    {
      question: "Is Droit UI Design System available for coding environments?",
      answer: "Currently, Droit UI is available for Figma only."
    },
    {
      question: "Is there a dark mode feature available in the Droit UI Design System?",
      answer: "Yes. All the design system materials of Droit UI feature both light and dark mode."
    },
    {
      question: "What icon sets and fonts are used in Droit UI?",
      answer: "We used open-source fonts and icons in our Droit UI Design System."
    },
    {
      question: "Where can I purchase Droit UI Design System?",
      answer: "You can conveniently purchase Droit UI design system from our exclusive sales partner, LemonSqueezy."
    },
    {
      question: "How will I get access to the Droit UI design system after purchase?",
      answer: "After completing the purchase, you will receive Droit UI design system (figma file) including all the deliverable resources on your purchase email."
    },
    {
      question: "How does the lifetime tier of Droit UI work?",
      answer: "A one-time payment grants you lifetime access to Droit UI and all its future updates according to our confidential roadmap."
    },
    {
      question: "Are there discounts available for students and countries facing economic challenges?",
      answer: "Yes, we offer special discounts for students, learners, and countries facing economic challenges since we value Purchasing Power Parity (PPP) ethics. Contact us with your valid student ID, Driver’s license, and similar docs to check your eligibility. If you are eligible we will send you a special promo code."
    },
    {
      question: "Does Droit UI offer a refund policy for purchases?",
      answer: "Being a digital product, Droit UI does not offer refunds. We suggest you review our product and features well then make the purchase decision. However, if you face any issues while purchasing procedures we will resolve your problems."
    },
    {
      question: "Is there an affiliate program available?",
      answer: "We do not have an affiliate program on our own but you can affiliate our product through our sales partner LemonSqueezy."
    },
    {
      question: "How to use the Droit UI design system?",
      answer: "We recommend “publishing” Droit UI as a library to ensure seamless update sand collaboration. On the other hand, if you want desynchronized editing such as isolating assets and materials and unleashing your creativity then “duplicate” the figma file."
    },
    {
      question: "How to access and update the Droit UI Design System file?",
      answer: "You can find the figma file of Droit UI Design System on the “My Orders” page on LemonSqueezy"
    },
    {
      question: "Where can I find the changelog for updates?",
      answer: "You can find it in the figma file, make sure it is the latest version."
    },
    {
      question: "Where can I contact if I need help or report any issues?",
      answer: "For any kind of support regarding Droit UI, please email us: support@droitlab.com"
    },
    {
      question: "Are there tutorials or guidance available?",
      answer: "Purchasing Droit UI means that you are already a Figma Pro, it is easy to adapt our Droit UI design system for you. In case you look for Figma tutorials, you can study Figma learning resources. However, we have a plan to publish videos to Youtube where we will cover the ins and outs of our design system."
    },
    {
      question: "Are there any community forums or user groups where I can connect with other Droit UI users?",
      answer: "Yes, we have an official group on facebook, which is “Droit UI - Pro Designers’ Community”. Feel free to join there and post your design works, feedback, new ideas, etc also you can connect with professional designers."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Inline styles for the component
  const styles = {
    faqItem: {
      borderBottom: '1px solid #0f172a1a',
      padding: '24px 0',
      cursor: 'pointer'
    },
    faqItemHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    faqQuestion: {
      margin: 0
    },
    faqIcons: {
      display: 'flex',
      gap: '10px'
    },
    faqAnswer: {
      paddingTop: '15px',
      color: '#666',
      lineHeight: '1.6',
      display: 'none'
    },
    faqAnswerActive: {
      display: 'block'
    }
  };

  return (
    <div className='ui-faq-section'>
      <div className='ui-theme-features-contain faq-heading-sec'>
        <FadeUpOnView delay={0.3}>
        <h1 className='ui-theme-features-title'>Frequently Asked Questions</h1>
        </FadeUpOnView>
        <FadeUpOnView delay={0.3}>
        <p className='ui-theme-features-text'>Find questions and answers related to the design system, purchase, updates, and support.</p>
        </FadeUpOnView>
      </div>
      
      <div className='ui-faqs-block'>
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            style={styles.faqItem}
            onClick={() => toggleFAQ(index)}
            className='ui-faqs-block-item'
          >
            <FadeUpOnView delay={0.3}>
            <div style={styles.faqItemHeader} className='ui-faqs-block-item-title-sec'>
              <h2 style={styles.faqQuestion} className='ui-faqs-block-item-title'>{item.question}</h2>
              <div style={styles.faqIcons}>
                {activeIndex !== index ? (
                  <FaPlus className='text-lg'/>
                ) : (
                  <FaMinus className='text-lg'/>
                )}
              </div>
            </div>
            </FadeUpOnView>
            <div 
              style={{
                ...styles.faqAnswer,
                ...(activeIndex === index ? styles.faqAnswerActive : {})
              }}
              className='ui-faqs-block-item-content-sec'
            >
              <FadeUpOnView delay={0.2}>
              <p className='ui-faqs-block-item-text'>{item.answer}</p>
              </FadeUpOnView>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default FAQs;