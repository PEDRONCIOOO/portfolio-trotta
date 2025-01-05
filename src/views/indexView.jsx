import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import IndexPortuguese from '../views/indexPortuguese.jsx';
import AnimatedLayout from '../components/AnimatedLayout';


const IndexView = () => {
    return (
        <Router>
            <Routes>
                  <Route path="/" element={
                  <AnimatedLayout>
                  <Layout />
                  </AnimatedLayout>
                  } />

                <Route path="/pt" element={
                  <AnimatedLayout>
                  <IndexPortuguese />
                  </AnimatedLayout>
                  } />
            </Routes>
        </Router>
    );
};

export default IndexView;
