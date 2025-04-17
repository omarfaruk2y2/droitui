import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Components from "./pages/Components/Components";
import Pricing from "./pages/Pricing/Pricing";
import FAQs from "./pages/FAQs/FAQs";
import Web from "./pages/Web/Web";
import Website from "./pages/Website/Website";
import Mobile from "./pages/Mobile/Mobile";
import Licensing from "./pages/Licensing/Licensing";
import TypographySingle from "./pages/ComponentsSingle/TypographySingle";
import ColorSingle from "./pages/ComponentsSingle/ColorSingle";
import IconographySingle from "./pages/ComponentsSingle/IconographySingle";
import MiscIconsSingle from "./pages/ComponentsSingle/MiscIconsSingle";
import GridSpacingAndRadiusSingle from "./pages/ComponentsSingle/GridSpacingAndRadiusSingle";
import EffectsSingle from "./pages/ComponentsSingle/EffectsSingle";
import LogoSingle from "./pages/ComponentsSingle/LogoSingle";
import ButtonsSingle from "./pages/ComponentsSingle/ButtonsSingle";
import ButtonGroupsSingle from "./pages/ComponentsSingle/ButtonGroupsSingle";
import InputFieldSingle from "./pages/ComponentsSingle/InputFieldSingle";
import DropdownsSingle from "./pages/ComponentsSingle/DropdownsSingle";
import AvatarsSingle from "./pages/ComponentsSingle/AvatarsSingle";
import BreadcrumbsSingle from "./pages/ComponentsSingle/BreadcrumbsSingle";
import BadgesSingle from "./pages/ComponentsSingle/BadgesSingle";
import CheckboxesRadiosSingle from "./pages/ComponentsSingle/CheckboxesRadiosSingle";
import CheckboxGroupsSingle from "./pages/ComponentsSingle/CheckboxGroupsSingle";
import ToggleSingle from "./pages/ComponentsSingle/ToggleSingle";
import TooltipsSingle from "./pages/ComponentsSingle/TooltipsSingle";
import ProgressSingle from "./pages/ComponentsSingle/ProgressSingle";
import CarouselSingle from "./pages/ComponentsSingle/CarouselSingle";
import SliderSingle from "./pages/ComponentsSingle/SliderSingle";
import StepsSingle from "./pages/ComponentsSingle/StepsSingle";
import ModalSingle from "./pages/ComponentsSingle/ModalSingle";
import PageHeaderSingle from "./pages/ComponentsSingle/PageHeaderSingle";
import FootersSingle from "./pages/ComponentsSingle/FootersSingle";
import HeaderNavigationSingle from "./pages/ComponentsSingle/HeaderNavigationSingle";
import ContactSingle from "./pages/ComponentsSingle/ContactSingle";
import CtaSingle from "./pages/ComponentsSingle/CtaSingle";
import StatisticsSingle from "./pages/ComponentsSingle/StatisticsSingle";
import LogoCloudSingle from "./pages/ComponentsSingle/LogoCloudSingle";
import TestimonialsSingle from "./pages/ComponentsSingle/TestimonialsSingle";
import FaqSingle from "./pages/ComponentsSingle/FaqSingle";
import IntegrationsSingle from "./pages/ComponentsSingle/IntegrationsSingle";
import FeaturesSingle from "./pages/ComponentsSingle/FeaturesSingle";
import PricingSingle from "./pages/ComponentsSingle/PricingSingle";
import TeamsSingle from "./pages/ComponentsSingle/TeamsSingle";
import BlogSingle from "./pages/ComponentsSingle/BlogSingle";
import LandingPagesSingle from "./pages/ComponentsSingle/LandingPagesSingle";
import FileUploadSingle from "./pages/ComponentsSingle/FileUploadSingle";
import AlertSingle from "./pages/ComponentsSingle/AlertSingle";
import RatingSingle from "./pages/ComponentsSingle/RatingSingle";
import TagsSingle from "./pages/ComponentsSingle/TagsSingle";
import TabsSingle from "./pages/ComponentsSingle/TabsSingle";
import TimelineSingle from "./pages/ComponentsSingle/TimelineSingle";
import PlayButtonSingle from "./pages/ComponentsSingle/PlayButtonSingle";
import PaginationSingle from "./pages/ComponentsSingle/PaginationSingle";
import LoadingIndicatorsSingle from "./pages/ComponentsSingle/LoadingIndicatorsSingle";
import DividerSingle from "./pages/ComponentsSingle/DividerSingle";
import SkeletonSingle from "./pages/ComponentsSingle/SkeletonSingle";
import WebApplicationsSingle from "./pages/ComponentsSingle/WebApplicationsSingle";
import DashboardNavigationSingle from "./pages/ComponentsSingle/DashboardNavigationSingle";
import DashboardHeaderSingle from "./pages/ComponentsSingle/DashboardHeaderSingle";
import SectionHeaderSingle from "./pages/ComponentsSingle/SectionHeaderSingle";
import TablesSingle from "./pages/ComponentsSingle/TablesSingle";
import ChartsGraphsSingle from "./pages/ComponentsSingle/ChartsGraphsSingle";
import DatePickerSingle from "./pages/ComponentsSingle/DatePickerSingle";
import NotificationSingle from "./pages/ComponentsSingle/NotificationSingle";
import TeamPagesSingle from "./pages/ComponentsSingle/TeamPagesSingle";
import PricingPagesSingle from "./pages/ComponentsSingle/PricingPagesSingle";
import FaqPagesSingle from "./pages/ComponentsSingle/FaqPagesSingle";
import BlogPagesSingle from "./pages/ComponentsSingle/BlogPagesSingle";
import ContactPagesSingle from "./pages/ComponentsSingle/ContactPagesSingle";
import HeaderSingle from "./pages/ComponentsSingle/HeaderSingle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home/> ,
      },
      {
        path: "/components",
        element: <Components/> ,
      },
      {
        path: "/pricing",
        element: <Pricing/> ,
      },
      {
        path: "/faqs",
        element: <FAQs/> ,
      },
      {
        path: "/website-templates",
        element: <Website/> ,
      },
      {
        path: "/web-application",
        element: <Web/> ,
      },
      {
        path: "/mobile-app",
        element: <Mobile/> ,
      },
      {
        path: "/licensing",
        element: <Licensing/> ,
      },
      // Single page
      {
        path: "/typography-single",
        element: <TypographySingle/> ,
      },
      {
        path: "/color-single",
        element: <ColorSingle/> ,
      },
      {
        path: "/iconography-single",
        element: <IconographySingle/> ,
      },
      {
        path: "/misc-icons-single",
        element: <MiscIconsSingle/> ,
      },
      {
        path: "/grid,-spacing-and-radius-single",
        element: <GridSpacingAndRadiusSingle/> ,
      },
      {
        path: "/effects-single",
        element: <EffectsSingle/> ,
      },
      {
        path: "/logo-single",
        element: <LogoSingle/> ,
      },
      {
        path: "/buttons-single",
        element: <ButtonsSingle/> ,
      },
      {
        path: "/button-groups-single",
        element: <ButtonGroupsSingle/> ,
      },
      {
        path: "/input-field-single",
        element: <InputFieldSingle/> ,
      },
      {
        path: "/dropdowns-single",
        element: <DropdownsSingle/> ,
      },
      {
        path: "/avatars-single",
        element: <AvatarsSingle/> ,
      },
      {
        path: "/breadcrumbs-single",
        element: <BreadcrumbsSingle/> ,
      },
      {
        path: "/badges-single",
        element: <BadgesSingle/> ,
      },
      {
        path: "/checkboxes-&-radios-single",
        element: <CheckboxesRadiosSingle/> ,
      },
      {
        path: "/checkbox-groups-single",
        element: <CheckboxGroupsSingle/> ,
      },
      {
        path: "/toggle-single",
        element: <ToggleSingle/> ,
      },
      {
        path: "/tooltips-single",
        element: <TooltipsSingle/> ,
      },
      {
        path: "/progress-single",
        element: <ProgressSingle/> ,
      },
      {
        path: "/carousel-single",
        element: <CarouselSingle/> ,
      },
      {
        path: "/slider-single",
        element: <SliderSingle/> ,
      },
      {
        path: "/steps-single",
        element: <StepsSingle/> ,
      },
      {
        path: "/modal-single",
        element: <ModalSingle/> ,
      },
      {
        path: "/alert-single",
        element: <AlertSingle/> ,
      },
      {
        path: "/rating-single",
        element: <RatingSingle/> ,
      },
      {
        path: "/tags-single",
        element: <TagsSingle/> ,
      },
      {
        path: "/tabs-single",
        element: <TabsSingle/> ,
      },
      {
        path: "/timeline-single",
        element: <TimelineSingle/> ,
      },
      {
        path: "/play-button-single",
        element: <PlayButtonSingle/> ,
      },
      {
        path: "/pagination-single",
        element: <PaginationSingle/> ,
      },
      {
        path: "/loading-indicators-single",
        element: <LoadingIndicatorsSingle/> ,
      },
      {
        path: "/divider-single",
        element: <DividerSingle/> ,
      },
      {
        path: "/skeleton-single",
        element: <SkeletonSingle/> ,
      },
      {
        path: "/web-applications-single",
        element: <WebApplicationsSingle/> ,
      },
      {
        path: "/dashboard-navigation-single",
        element: <DashboardNavigationSingle/> ,
      },
      {
        path: "/dashboard-header-single",
        element: <DashboardHeaderSingle/> ,
      },
      {
        path: "/section-header-single",
        element: <SectionHeaderSingle/> ,
      },
      {
        path: "/tables-single",
        element: <TablesSingle/> ,
      },
      {
        path: "/charts-&-graphs-single",
        element: <ChartsGraphsSingle/> ,
      },
      {
        path: "/date-picker-single",
        element: <DatePickerSingle/> ,
      },
      {
        path: "/notification-single",
        element: <NotificationSingle/> ,
      },
      {
        path: "/file-upload-single",
        element: <FileUploadSingle/> ,
      },
      {
        path: "/landing-pages-single",
        element: <LandingPagesSingle/> ,
      },
      {
        path: "/team-pages-single",
        element: <TeamPagesSingle/> ,
      },
      {
        path: "/pricing-pages-single",
        element: <PricingPagesSingle/> ,
      },
      {
        path: "/faq-pages-single",
        element: <FaqPagesSingle/> ,
      },
      {
        path: "/blog-pages-single",
        element: <BlogPagesSingle/> ,
      },
      {
        path: "/contact-pages-single",
        element: <ContactPagesSingle/> ,
      },
      {
        path: "/header-single",
        element: <HeaderSingle/> ,
      },
      {
        path: "/blog-single",
        element: <BlogSingle/> ,
      },
      {
        path: "/teams-single",
        element: <TeamsSingle/> ,
      },
      {
        path: "/pricing-single",
        element: <PricingSingle/> ,
      },
      {
        path: "/features-single",
        element: <FeaturesSingle/> ,
      },
      {
        path: "/integrations-single",
        element: <IntegrationsSingle/> ,
      },
      {
        path: "/faq-single",
        element: <FaqSingle/> ,
      },
      {
        path: "/testimonials-single",
        element: <TestimonialsSingle/> ,
      },
      {
        path: "/logo-cloud-single",
        element: <LogoCloudSingle/> ,
      },
      {
        path: "/statistics-single",
        element: <StatisticsSingle/> ,
      },
      {
        path: "/cta-single",
        element: <CtaSingle/> ,
      },
      {
        path: "/contact-single",
        element: <ContactSingle/> ,
      },
      {
        path: "/header-navigation-single",
        element: <HeaderNavigationSingle/> ,
      },
      {
        path: "/footers-single",
        element: <FootersSingle/> ,
      },
      {
        path: "/page-header-single",
        element: <PageHeaderSingle/> ,
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);