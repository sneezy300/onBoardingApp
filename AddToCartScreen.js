import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';


export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.site}>
                <Text style={styles.siteText}>www.DONKOMI.com.gh</Text>
            </View>

            <View style={styles.banner}>
                <Text style={styles.bannerText}>ADD TO CART</Text>
                <Text style={styles.Us}>
                    Donkomi is Ghana’s largest home grown organized retail chain and caters primarily to the mass & middle class market segments,
                    which today constitute to 80-85% of the population.
                    Donkomi has introduced financial services to become a “ONE STOP SHOP”
                    for all customer needs by driving financial literacy from within its stores,
                    HAPPY SHOPPING
                </Text>

                <View>
                    <Image source={require('./assets/addtocart.png')} style={styles.image} />
                </View>

            </View>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Navi}>
                <TouchableOpacity style={styles.naviSmall}></TouchableOpacity>
                <TouchableOpacity style={styles.naviBig}></TouchableOpacity>
                <TouchableOpacity style={styles.naviSmall}></TouchableOpacity>


            </View>



        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    site: {
        marginTop: 10,
        marginBottom: 20,
    },
    siteText: {
        paddingTop: 10,
        fontSize: 25
    },

    banner: {
        marginTop: 10
    },

    bannerText: {
        alignSelf: "auto",
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 15,
        marginHorizontal: 15

    },
    Us: {
        marginHorizontal: 15

    },
    image: {
        height: 350,
        width: 350,
        alignSelf: "center"
    },

    button: {
        backgroundColor: "#4d2f75",
        width: 120,
        height: 50,
        borderRadius: 50,
        shadowOpacity: 0.9,


    },
    buttonText: {
        alignSelf: "center",
        padding: 15,
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        shadowColor: 20


    },
    naviBig: {
        height: 15,
        width: 40,
        borderRadius: 20,
        alignSelf: "center",
        backgroundColor: "#4d2f75",





    },
    naviSmall: {
        height: 15,
        width: 15,
        borderRadius: 10,
        backgroundColor: "#e6e6e6",



    },


    Navi: {
        flexDirection: "row",
        padding: 50,
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",









    }

});
