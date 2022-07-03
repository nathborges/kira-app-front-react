import CardContent from '../../components/CardContent';
import GradientBanner from '../../components/GradientBanner';
import Header from '../../components/Header';
import HomeContainer from '../../components/HomeContainer';
import InfoWhiteCard from '../../components/InfoWhiteCard';
import '../Home/styles.css'
import { faBook, faShoppingCart, faComment, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import IntimusFooter from '../../components/IntimusFooter';
import Footer from '../../components/Footer';

function Home() {

  return (
    <div className="home">
      <Header />
      <InfoWhiteCard />
      <HomeContainer />
      <GradientBanner />
      <div className='home-content'>
        <CardContent iconTitle={faBook} iconLink={faPlusCircle} title="conteúdo" desc="uma variedade de conteúdos sobre autoconhecimento" descLink="meus assuntos de interesse" />
        <CardContent iconTitle={faShoppingCart} iconLink={faShoppingCart} title="shopping" desc="em nosso shopping você encontra produtos especiais. além disso, você também pode criar seus kits personalizados" descLink="visite agora!" />
        <CardContent iconTitle={faComment} iconLink={faComment} title="chama a kira" desc="dúvidas sobre saúde íntima? chama a Kira! aqui você encontra dúvidas já respondidas por ginecologistas" descLink="conheça mais" />
      </div>
      <IntimusFooter />
      <Footer />
    </div>
  )
}

export default Home

