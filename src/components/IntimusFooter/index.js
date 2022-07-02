import { StyleSheet, View, Text } from "react-native-web";
import IntimusLogo from "../../assets/icons/IntimusLogo.js";

export default function IntimusFooter() {

    return (
        <View style={styles.intimusFooter}>
            <Text style={styles.intimusFooterText}>criado por</Text>
            <IntimusLogo style={{ marginTop: '10px' }} />
            <Text style={styles.intimusFooterText}>o contéudo oferecido por Kira não substitui uma consulta médica</Text><br />
        </View>
    );
}

const styles = StyleSheet.create({
    intimusFooter: {
        paddingTop: '8px',
        paddingBottom: '16px',
        paddingLeft: '16px',
        paddingRight: '16px',
        zIndex: 1024,
        backgroundColor: '#ecf1f4',
        height: "140px",
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    intimusFooterText: {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '32px',
        height: '16px',
        color: '#626162',
        marginBottom: '8px',
    }
})