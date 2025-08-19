import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
// import All Documentation Pages
import {
  WebApi,
  TwilioSetup,
  SocialLogin,
  ServerConfig,
  Sentryintro,
  SentryError,
  Rider,
  Restaurant,
  PushNotification,
  PreEquistic,
  PaymentGateway,
  PatchNotes,
  Nodemail,
  Nodejs,
  Introduction,
  HighLevelArchitecture,
  Github,
  Faq,
  DeployWeb,
  DeployMobile,
  DeployAdmin,
  Database,
  FirebaseSetup,
  ConfigCondinary,
  Customer,
  BackendServer,
  BackendAPi,
  AmplitudeIntro,
  AmplitudeIntegration,
  Map,
  License,
  OvervieApi,
  Admin,
} from "./DocumentationPages/DocumentationIndex";
// import  Privacy, Terms & conditions
import {
  Blink,
  Deonde,
  GloriaFood,
  Orderingco,
  Shipday,
  SpotNeats,
  Yelo,
  Zeew,
  PrivacyPolicy,
  TermsCondition,
} from "./CompareComponent/AllPages";
// import Navbar Pages
import { Blog, Documentation, Features, ContactUs } from "./Pages/Pageindex";
//import Usecase & Case Studies Pages
import {
  BeautyService,
  BorkuDelievery,
  CourierDelievery,
  DocumentDelievery,
  EasyEats,
  FlowerDelievery,
  FoodBeverage,
  GiftDelievery,
  Grocery,
  Laundary,
  LiquorDelievery,
  MedicineDelievery,
  Milk,
  RoadSide,
  YallaDelievery,
  Vivifiyed,
  StylizeNow,
  SnapDelievery,
} from "./SidebarPages/Sidepages";

// App Function
function App() {
  const Applayout = () => (
    <>
      <Outlet />
    </>
  );

  const navroute = createBrowserRouter([
    {
      path: "/yalladelievery",
      element: <YallaDelievery />,
    },
    {
      path: "/vivyied",
      element: <Vivifiyed />,
    },
    {
      path: "/beautyService",
      element: <BeautyService />,
    },
    {
      path: "/stylizenow",
      element: <StylizeNow />,
    },
    {
      path: "/snapdelievery",
      element: <SnapDelievery />,
    },
    {
      path: "/borkuDelievery",
      element: <BorkuDelievery />,
    },
    {
      path: "/Courierdelievery",
      element: <CourierDelievery />,
    },
    {
      path: "/documentDelievery",
      element: <DocumentDelievery />,
    },
    {
      path: "/easyEats",
      element: <EasyEats />,
    },
    {
      path: "/flowerdelivery",
      element: <FlowerDelievery />,
    },
    {
      path: "/fooddelievery",
      element: <FoodBeverage />,
    },
    {
      path: "/giftdelievery",
      element: <GiftDelievery />,
    },
    {
      path: "/laundrydelievery",
      element: <Laundary />,
    },
    {
      path: "/groceryDelievery",
      element: <Grocery />,
    },
    {
      path: "/liquorDelievery",
      element: <LiquorDelievery />,
    },
    {
      path: "/milkDelievery",
      element: <Milk />,
    },
    {
      path: "/roadSide",
      element: <RoadSide />,
    },
    {
      path: "/medicinedelievery",
      element: <MedicineDelievery />,
    },
    { path: "/blink", element: <Blink /> },
    { path: "/deonde", element: <Deonde /> },
    { path: "/gloriaFood", element: <GloriaFood /> },
    { path: "/orderingco", element: <Orderingco /> },
    { path: "/shipday", element: <Shipday /> },
    { path: "/spotNeats", element: <SpotNeats /> },
    { path: "/yelo", element: <Yelo /> },
    { path: "/zeew", element: <Zeew /> },
    { path: "/Policy", element: <PrivacyPolicy /> },
    { path: "/termsCondition", element: <TermsCondition /> },

    {
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Navbar />,
        },

        {
          path: "/blogs",
          element: <Blog />,
        },

        {
          path: "/documentation",
          element: <Documentation />,
          children: [
            { index: true, element: <Introduction /> },
            { path: "WebApi", element: <WebApi /> },
            { path: "TwilioSetup", element: <TwilioSetup /> },
            { path: "SocialLogin", element: <SocialLogin /> },
            { path: "ServerConfig", element: <ServerConfig /> },
            { path: "Sentryintro", element: <Sentryintro /> },
            { path: "SentryError", element: <SentryError /> },
            { path: "Rider", element: <Rider /> },
            { path: "Restaurant", element: <Restaurant /> },
            { path: "PushNotification", element: <PushNotification /> },
            { path: "PreEquistic", element: <PreEquistic /> },
            { path: "PaymentGateway", element: <PaymentGateway /> },
            { path: "PatchNotes", element: <PatchNotes /> },
            { path: "Nodemail", element: <Nodemail /> },
            { path: "Nodejs", element: <Nodejs /> },
            {
              path: "HighLevelArchitecture",
              element: <HighLevelArchitecture />,
            },
            { path: "Github", element: <Github /> },
            { path: "Faq", element: <Faq /> },
            { path: "DeployWeb", element: <DeployWeb /> },
            { path: "DeployMobile", element: <DeployMobile /> },
            { path: "DeployAdmin", element: <DeployAdmin /> },
            { path: "Database", element: <Database /> },
            { path: "FirebaseSetup", element: <FirebaseSetup /> },
            { path: "ConfigCondinary", element: <ConfigCondinary /> },
            { path: "Customer", element: <Customer /> },
            { path: "BackendServer", element: <BackendServer /> },
            { path: "BackendAPi", element: <BackendAPi /> },
            { path: "AmplitudeIntro", element: <AmplitudeIntro /> },
            { path: "AmplitudeIntegration", element: <AmplitudeIntegration /> },
            { path: "Map", element: <Map /> },
            { path: "License", element: <License /> },
            { path: "OvervieApi", element: <OvervieApi /> },
            { path: "Admin", element: <Admin /> },
            { path: "*", element: <Introduction /> }, // Fallback route
          ],
        },
        {
          path: "/features",
          element: <Features />,
        },

        {
          path: "*",
          element: <Navbar />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={navroute} />
    </>
  );
}

export default App;
