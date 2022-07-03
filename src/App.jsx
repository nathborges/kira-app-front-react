import React from 'react'
import Header from './Header'
import Footer from './components/Footer';
import Routes from '../routes/Routes';

export default props => {
  return(
    <View>    
      <Header />
      <Routes />
      <Footer />
    </View>

  )
}
