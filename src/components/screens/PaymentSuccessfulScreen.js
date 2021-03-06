import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';


export default function App({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.site}>
                <Text style={styles.siteText}>www.DONKOMI.com.gh</Text>
            </View>

            <View style={styles.banner}>
                <Text style={styles.bannerText}>PAYMENT SUCCESSFUL</Text>
                <Text style={styles.Us}>
                    Donkomi is Ghana’s largest home grown organized retail chain and caters primarily to the mass & middle class market segments,
                    which today constitute to 80-85% of the population.
                    Donkomi has introduced financial services to become a “ONE STOP SHOP”
                    for all customer needs by driving financial literacy from within its stores.

                    <View>
                        <Text style={styles.thankYou}>THANK YOU FOR SHOPPING WITH US</Text>
                    </View>
                </Text>

                <View>
                    <Image source={require('../../../assets/successfulPurchase.png')} style={styles.image} />
                </View>

            </View>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Navi}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("AddToCart")
                }} style={styles.previous}>
                    <Text style={styles.previousText}>previous</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.naviSmall}></TouchableOpacity>
                <TouchableOpacity style={styles.naviSmall}></TouchableOpacity>
                <TouchableOpacity style={styles.naviBig}></TouchableOpacity>





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
        marginBottom: 15,
    },
    siteText: {
        paddingTop: 10,
        fontSize: 25
    },

    bannerText: {
        alignSelf: "auto",
        fontSize: 30,
        fontWeight: "bold",
        marginHorizontal: 15

    },
    Us: {
        marginHorizontal: 15

    },
    thankYou: {
        marginVertical: 10,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "#e0dd12"

    },

    image: {
        height: 320,
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
        height: 10,
        width: 10,
        borderRadius: 10,
        backgroundColor: "#e6e6e6",
        marginHorizontal: 5,
        justifyContent: "center"

    },


    Navi: {
        flexDirection: "row",
        padding: 50,
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        position: "relative",
        right: 25

    },

    previous: {
        flexDirection: "row",
    },

    previousText: {
        fontSize: 15,
        color: "#cccac4",
        fontWeight: "bold",
        position: "relative",

        right: 80

    },

});
