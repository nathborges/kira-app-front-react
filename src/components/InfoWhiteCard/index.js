import { StyleSheet, View, Text } from "react-native-web";
import { globalStyles } from "../../styles/global";
import { FontAwesome5 } from '@expo/vector-icons';

export default function InfoWhiteCard() {
  return (
    <View style={styles.infoWhiteCard}>
      <FontAwesome5 name="book" size={24} color="#f62559" />
      <Text style={[globalStyles.text, styles.infoText]}>personalize o app para que possamos trazer conteúdos especialmente para você.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoWhiteCard: {
    width: '92%',
    height: '70px',
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '12px',
    paddingRight: '12px',
    marginBottom: '14px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgb(0 0 0 / 20%)',
    borderRadius: '10px',
    flexDirection: "row",
    alignItems: 'center',
    gap: '10px',
    marginTop: '80px'
  },
  infoText: {
    fontSize: '.75rem',
    lineHeight: '18px',
    fontWeight: '700',
    color: '#626162'
  }
})