import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../src/components/Layout';
import Home from '../src/pages/Home/Home';
import Pricing from '../src/pages/Pricing/Pricing';
import Components from '../src/pages/Components/Components';
import FAQs from '../src/pages/FAQs/FAQs';
import Website from '../src/pages/Website/Website';
import Web from '../src/pages/Web/Web';
import Mobile from '../src/pages/Mobile/Mobile';
import TypographySingle from "./pages/ComponentsSingle/TypographySingle";
import ColorSingle from "./pages/ComponentsSingle/ColorSingle";
import IconographySingle from "./pages/ComponentsSingle/IconographySingle";
import MiscIconsSingle from "./pages/ComponentsSingle/MiscIconsSingle";
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
import FileUploadSingle from "./pages/ComponentsSingle/FileUploadSingle";
import LandingPagesSingle from "./pages/ComponentsSingle/LandingPagesSingle";
import TeamPagesSingle from "./pages/ComponentsSingle/TeamPagesSingle";
import PricingPagesSingle from "./pages/ComponentsSingle/PricingPagesSingle";
import FaqPagesSingle from "./pages/ComponentsSingle/FaqPagesSingle";
import BlogPagesSingle from "./pages/ComponentsSingle/BlogPagesSingle";
import ContactPagesSingle from "./pages/ComponentsSingle/ContactPagesSingle";
import HeaderSingle from "./pages/ComponentsSingle/HeaderSingle";
import BlogSingle from "./pages/ComponentsSingle/BlogSingle";
import TeamsSingle from "./pages/ComponentsSingle/TeamsSingle";
import PricingSingle from "./pages/ComponentsSingle/PricingSingle";
import FeaturesSingle from "./pages/ComponentsSingle/FeaturesSingle";
import IntegrationsSingle from "./pages/ComponentsSingle/IntegrationsSingle";
import FaqSingle from "./pages/ComponentsSingle/FaqSingle";
import TestimonialsSingle from "./pages/ComponentsSingle/TestimonialsSingle";
import LogoCloudSingle from "./pages/ComponentsSingle/LogoCloudSingle";
import StatisticsSingle from "./pages/ComponentsSingle/StatisticsSingle";
import CtaSingle from "./pages/ComponentsSingle/CtaSingle";
import ContactSingle from "./pages/ComponentsSingle/ContactSingle";
import HeaderNavigationSingle from "./pages/ComponentsSingle/HeaderNavigationSingle";
import FootersSingle from "./pages/ComponentsSingle/FootersSingle";
import PageHeaderSingle from "./pages/ComponentsSingle/PageHeaderSingle";
import GridSpacingAndRadiusSingle from "./pages/ComponentsSingle/GridSpacingAndRadiusSingle";
import Licensing from "./pages/Licensing/Licensing";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="components" element={<Components />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="website-templates" element={<Website />} />
          <Route path="web-application" element={<Web />} />
          <Route path="mobile-app" element={<Mobile />} />
          <Route path="licensing" element={<Licensing />} />
          {/* Single Components */}
          <Route path="typography-single" element={<TypographySingle />} />
          <Route path="color-single" element={<ColorSingle />} />
          <Route path="iconography-single" element={<IconographySingle />} />
          <Route path="misc-icons-single" element={<MiscIconsSingle />} />
          <Route path="grid,-spacing-and-radius-single" element={<GridSpacingAndRadiusSingle />} />
          <Route path="effects-single" element={<EffectsSingle />} />
          <Route path="logo-single" element={<LogoSingle />} />
          <Route path="buttons-single" element={<ButtonsSingle />} />
          <Route path="button-groups-single" element={<ButtonGroupsSingle />} />
          <Route path="input-field-single" element={<InputFieldSingle />} />
          <Route path="dropdowns-single" element={<DropdownsSingle />} />
          <Route path="avatars-single" element={<AvatarsSingle />} />
          <Route path="breadcrumbs-single" element={<BreadcrumbsSingle />} />
          <Route path="badges-single" element={<BadgesSingle />} />
          <Route path="checkboxes-&-radios-single" element={<CheckboxesRadiosSingle />} />
          <Route path="checkbox-groups-single" element={<CheckboxGroupsSingle />} />
          <Route path="toggle-single" element={<ToggleSingle />} />
          <Route path="tooltips-single" element={<TooltipsSingle />} />
          <Route path="progress-single" element={<ProgressSingle />} />
          <Route path="carousel-single" element={<CarouselSingle />} />
          <Route path="slider-single" element={<SliderSingle />} />
          <Route path="steps-single" element={<StepsSingle />} />
          <Route path="modal-single" element={<ModalSingle />} />
          <Route path="alert-single" element={<AlertSingle />} />
          <Route path="rating-single" element={<RatingSingle />} />
          <Route path="tags-single" element={<TagsSingle />} />
          <Route path="tabs-single" element={<TabsSingle />} />
          <Route path="timeline-single" element={<TimelineSingle />} />
          <Route path="play-button-single" element={<PlayButtonSingle />} />
          <Route path="pagination-single" element={<PaginationSingle />} />
          <Route path="loading-indicators-single" element={<LoadingIndicatorsSingle />} />
          <Route path="divider-single" element={<DividerSingle />} />
          <Route path="skeleton-single" element={<SkeletonSingle />} />
          <Route path="web-applications-single" element={<WebApplicationsSingle />} />
          <Route path="dashboard-navigation-single" element={<DashboardNavigationSingle />} />
          <Route path="dashboard-header-single" element={<DashboardHeaderSingle />} />
          <Route path="section-header-single" element={<SectionHeaderSingle />} />
          <Route path="tables-single" element={<TablesSingle />} />
          <Route path="charts-&-graphs-single" element={<ChartsGraphsSingle />} />
          <Route path="date-picker-single" element={<DatePickerSingle />} />
          <Route path="notification-single" element={<NotificationSingle />} />
          <Route path="file-upload-single" element={<FileUploadSingle />} />
          <Route path="landing-pages-single" element={<LandingPagesSingle />} />
          <Route path="team-pages-single" element={<TeamPagesSingle />} />
          <Route path="pricing-pages-single" element={<PricingPagesSingle />} />
          <Route path="faq-pages-single" element={<FaqPagesSingle />} />
          <Route path="blog-pages-single" element={<BlogPagesSingle />} />
          <Route path="contact-pages-single" element={<ContactPagesSingle />} />
          <Route path="header-single" element={<HeaderSingle />} />
          <Route path="blog-single" element={<BlogSingle />} />
          <Route path="teams-single" element={<TeamsSingle />} />
          <Route path="pricing-single" element={<PricingSingle />} />
          <Route path="features-single" element={<FeaturesSingle />} />
          <Route path="integrations-single" element={<IntegrationsSingle />} />
          <Route path="faq-single" element={<FaqSingle />} />
          <Route path="testimonials-single" element={<TestimonialsSingle />} />
          <Route path="logo-cloud-single" element={<LogoCloudSingle />} />
          <Route path="statistics-single" element={<StatisticsSingle />} />
          <Route path="cta-single" element={<CtaSingle />} />
          <Route path="contact-single" element={<ContactSingle />} />
          <Route path="header-navigation-single" element={<HeaderNavigationSingle />} />
          <Route path="footers-single" element={<FootersSingle />} />
          <Route path="page-header-single" element={<PageHeaderSingle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}