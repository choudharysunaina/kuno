import { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Loader from './components/ui/Loader';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Packages = lazy(() => import('./pages/Packages'));
const Contact = lazy(() => import('./pages/Contact'));
const BeyondSafari = lazy(() => import('./pages/BeyondSafari'));
const KunoCheetahSafariPackage = lazy(() => import('./pages/KunoCheetahSafariPackage'));
const BigCatSafariPackage = lazy(() => import('./pages/BigCatSafariPackage'));
const PhotographyPackage = lazy(() => import('./pages/PhotographyPackage'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/beyond-safari" element={<BeyondSafari />} />  
            <Route path="/package/kuno-cheetah-safari-package" element={<KunoCheetahSafariPackage />} />
            <Route path="/package/big-cat-safari-package" element={<BigCatSafariPackage />} />
            <Route path="/package/photography-package" element={<PhotographyPackage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;