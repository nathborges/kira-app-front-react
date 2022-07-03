import React from "react";
import View from "../../components/View";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import Category from "../../components/Category";
import Article from "../../components/Article";
import Footer from "../../components/Footer";

export default props => {
  return (
    <View>
        <Nav>Conteúdo</Nav>
        <Category/>
        <Search/>
        <View>
        <Article
                title="Calcinha de algodão é melhor mesmo? Veja se os tipos de calcinhas interferem na saúde íntima" 
                date="30 de jun de 2022" 
                img="../../assets/calcinha-03.jpeg" 
                text="Entre as melhores calcinhas está a de algodão, que deixa a ppk respirar e ajuda a manter o equilíbrio da flora vaginal. Entenda melhor." 
                alt="Ilustração de mulheres com roupas íntimas e diferentes corpos"
        />
        </View>
        <Footer />
    </View>
  );
};
