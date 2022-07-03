import GradientBanner from '../../components/GradientBanner';
import Header from '../../components/Header';
import InfoWhiteCard from '../../components/InfoWhiteCard';
import '../Home/styles.css'

function Home() {

  return (
    <div className="home">
      <Header />
      <InfoWhiteCard />
      <GradientBanner />
    </div>
  )
}

export default Home

