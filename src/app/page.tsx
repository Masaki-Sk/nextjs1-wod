import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './globals.css';
import TopMenu from '@/components/TopMenu';
import CenterImage from '@/components/CenterImage';
import Footer from '@/components/Footer';

const Home = () => (
  <main>
    <Container fluid id="footer">
      <TopMenu />
      <CenterImage />
      <Footer />
    </Container>
  </main>
);

export default Home;
