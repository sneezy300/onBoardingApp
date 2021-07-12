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

            <View>
                <Text style={styles.bannerText}>ADD TO CART</Text>
                <Text style={styles.Us}>
                    Donkomi is Ghana’s largest home grown organized retail chain and caters primarily to the mass & middle class market segments,
                    which today constitute to 80-85% of the population.
                    Donkomi has introduced financial services to become a “ONE STOP SHOP”
                    for all customer needs by driving financial literacy from within its stores,
                    HAPPY SHOPPING
                </Text>

                <View>
                    <Image source={require('../../../assets/addtocart.png')} style={styles.image} />
                </View>

            </View>
            <View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("PaymentSuccessful")
                }} style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Navi}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("onlineShopping")
                }} style={styles.previous}>
                    <Text style={styles.previousText}>previous</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.naviSmall}></TouchableOpacity>
                <TouchableOpacity style={styles.naviBig}></TouchableOpacity>
                <TouchableOpacity style={styles.naviSmall}></TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("PaymentSuccessful")
                }} style={styles.skip}>
                    <Text style={styles.skipText}>skip</Text>
                </TouchableOpacity>






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
        marginBottom: 10,

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
        right: 25,
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

    skip: {
        flexDirection: "row",

    },

    skipText: {
        fontSize: 15,
        color: "#cccac4",
        fontWeight: "bold",
        position: "relative",
        left: 100


    },

});
