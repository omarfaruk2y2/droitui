import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import FadeUpOnView from './FadeUpOnView';

const FAQsComponents = () => {
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
        
        <div className='ui-faq-bottom'>
          <FadeUpOnView delay={0.3}>
            <a href="/faqs" className='ui-all-faq-btn w-inline-block'>
                <span className='ui-all-faq-text'>See All FAQs</span>
                <span className='ui-faq-btn-icon'> <IoIosArrowForward className='text-lg'/> </span>
            </a>
          </FadeUpOnView >
        </div>
        
      </div>
    </div>
  );
};

export default FAQsComponents;