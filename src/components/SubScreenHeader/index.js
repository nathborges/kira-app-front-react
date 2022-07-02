import { StyleSheet, View, Text, Image} from "react-native-web";
import SideMenu from "../../assets/icons/SideMenu";
import { FontAwesome5 } from '@expo/vector-icons';
import kiraLogo from '../../assets/kiraLogo.png';

export default function SubScreenHeader() {
    return (
        <View style={styles.subScreenHeader}>
            <View style={styles.row}>
                <FontAwesome5 name="chevron-left" size={24} color="#626162" />
                <View style={[styles.row, { gap: '10px' }]}>
                    <Image source={kiraLogo} style={{ width: 60, height: 60 }} />
                    <div>
                        <Text style={styles.botTitle}>Chama a kira</Text><br />
                        <Text style={styles.status}>online</Text>
                    </div>
                </View>
                <SideMenu style={styles.menu} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    subScreenHeader: {
        paddingTop: '10px',
        paddingBottom: '16px',
        paddingLeft: '16px',
        paddingRight: '16px',
        zIndex: 1024,
        backgroundColor: '#fff',
        height: "80px",
        width: '100%',
        boxShadow: '0 4px 10px rgb(0 0 0 / 20%)',
        borderBottomLeft: '10px',
        borderBottomRight: '10px',
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menu: {
        alignSelf: 'center',
        fill: '#626162'
    },
    botTitle: {
        fontFamily: 'kira-bold',
        fontWeight: 700,
        lineHeight: '24px',
        color: '#4F4F4F',
        fontSize: '18px'
    },
    status: {
        fontFamily: 'kira-light',
        color: '#fe20c3',
        Weight: 300,
        fontSize: '14px',
        lineHeight: '15.54px',
    }
})