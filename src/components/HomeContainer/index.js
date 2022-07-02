import { StyleSheet, View, Text, Pressable } from "react-native-web";
import { globalStyles } from "../../styles/global";
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeContainer() {
  return (
    <LinearGradient
      style={styles.homeContainer}
      start={{ x: 500, y: 100 }}
      end={{ x: 10, y: 500 }}
      colors={['#eb1a29', '#ff00bc']}>
      <View style={styles.homeTitle}>
        <FontAwesome5 name="calendar-alt" size={24} color="#fff" />
        <Text style={[globalStyles.text, styles.homeTitle]}>calendário menstrual</Text>
      </View>
      <View style={styles.infoTextContainer}>
        <Text style={[globalStyles.text, styles.infoText]}>insira os dados do seu ciclo menstrual</Text>
        <Text style={[globalStyles.text, styles.infoText]}>para acompanhar todos os detalhes!</Text>
        <Pressable style={styles.calendarButton} onPress={() => alert('teste')}>
          <Text style={styles.calendarButtonText}>criar meu calendário</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    width: '92%',
    height: '175px',
    boxShadow: '4px 4px 8px rgb(0 0 0 / 25%), -8px -4px 8px 4px #fff',
    borderTopLeftRadius: '32px',
    borderBottomRightRadius: '32px',
    padding: '20px',
    marginTop: '10px'
  },
  homeTitle: {
    flexDirection: "row",
    gap: '20px',
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: '16px',
    color: '#fff',
    paddingTop: '5px'
  },
  infoTextContainer: {
    paddingTop: '10px',
    flexDirection: "column",
    alignItems: 'center',
  },
  infoText: {
    fontFamily: 'kotex-bold',
    fontSize: '.865rem',
    color: '#fff',
    fontWeight: 300,
    lineHeight: '20px',
    width: '100%',
  },
  calendarButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: '32px',
    boxShadow: '0 4px 4px #00000040',
    border: 'none',
    fontWeight: 700,
    lineHeight: '2rem',
    height: "35px",
    width: '100%',
    padding: '0',
    maxWidth: '18.75rem',
    margin: '0 auto',
    backgroundColor: '#ffF',
    marginTop: '20px',
    color: '#f6a6c8'
  },
  calendarButtonText: {
    color: '#f70a81'
  }
})