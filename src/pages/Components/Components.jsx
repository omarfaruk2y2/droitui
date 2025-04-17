import React from 'react'
import { Helmet } from "react-helmet";
import UIComponentsSection from '../../components/UIComponentsSection';

const Components = () => {
  return (
    <>
        <Helmet>
          <title>Droit UI - Exclusive Design System Components</title>
          <meta name="description" content="Explore Droit UI, The Next Gen Design System for Figma, packed with 7000+ components, widgets, dashboards, and plenty of ready-to-use templates that boost your design workflow by 100x." />
        </Helmet>
        <UIComponentsSection />
    </>
  )
}

export default Components