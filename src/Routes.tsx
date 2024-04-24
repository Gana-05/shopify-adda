import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const VideoLibrary = React.lazy(() => import("pages/VideoLibrary"));
const PricingEngine = React.lazy(() => import("pages/PricingEngine"));
const SmartCategorisation = React.lazy(
  () => import("pages/SmartCategorisation"),
);
const ProductRecommendationEngine = React.lazy(
  () => import("pages/ProductRecommendationEngine"),
);
const GoogleLogin = React.lazy(() => import("pages/GoogleLogin"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/googlelogin" element={<GoogleLogin />} />
          <Route
            path="/productrecommendationengine"
            element={<ProductRecommendationEngine />}
          />
          <Route
            path="/smartcategorisation"
            element={<SmartCategorisation />}
          />
          <Route path="/pricingengine" element={<PricingEngine />} />
          <Route path="/videolibrary" element={<VideoLibrary />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
