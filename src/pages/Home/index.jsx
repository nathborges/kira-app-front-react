import GradientBanner from '../../components/GradientBanner';
import Header from '../../components/Header';
import HomeContainer from '../../components/HomeContainer';
import InfoWhiteCard from '../../components/InfoWhiteCard';
import '../Home/styles.css'

function Home() {

  return (
    <div className="home">
      <Header />
      <InfoWhiteCard />
      <HomeContainer />
      <GradientBanner />
    </div>
  )
}

export default Home

