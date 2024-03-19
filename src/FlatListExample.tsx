import React from "react";
import {  FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface item {
    id: string;
    nome: string;
    idade: string;
    email: string;

}
    const dados: item[] = [
        {id: "1", nome: "renan", idade: "17", email: "renan123@gmail.com"},
        {id: "2", nome: "rafael", idade: "16", email: "rafel123@gmail.com"},
        {id: "3", nome: "sara", idade: "17", email: "sara123@gmail.com"},
        {id: "4", nome: "renan", idade: "17", email: "renan123@gmail.com"},
        {id: "5", nome: "rafael", idade: "16", email: "rafel123@gmail.com"},
        {id: "6", nome: "sara", idade: "17", email: "sara123@gmail.com"},
        {id: "7", nome: "renan", idade: "17", email: "renan123@gmail.com"},
        {id: "8", nome: "rafael", idade: "16", email: "rafel123@gmail.com"},
        {id: "9", nome: "sara", idade: "17", email: "sara123@gmail.com"},
        {id: "10", nome: "renan", idade: "17", email: "renan123@gmail.com"},
        {id: "12", nome: "rafael", idade: "16", email: "rafel123@gmail.com"},
        {id: "13", nome: "sara", idade: "17", email: "sara123@gmail.com"}
    ];

    const renderItem = ({ item }: { item: item }) => (
        <View style={ styles.item}>
            <TouchableOpacity style={styles.item}>
            <Text>{ item.nome }</Text>
            <Text>{ item.idade }</Text>
            <Text>{ item.email }</Text>
            </TouchableOpacity>
        </View>
    );


function FlatListExample(): React.JSX.Element {
    return (
        <View style={ styles.container}>
            <StatusBar backgroundColor = "green" barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText}>Flat List</Text>

            </View>
            <FlatList
            showsVerticalScrollIndicator= {false}
            data= {dados}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image  source= {require ('./assets/images/home.png')}
                    style={ styles.footerIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image  source= {require ('./assets/images/orders.png')}
                    style={ styles.footerIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image  source= {require ('./assets/images/profile.png')}
                    style={ styles.footerIcon}/>
                </TouchableOpacity>
            </View>
        </View >
        

        );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    item: {
        backgroundColor: 'yellow',
        padding: 20, 
        marginVertical: 8,
        marginHorizontal: 16

    },
    header:{
        backgroundColor: 'green',
        alignItems: 'center',
        paddingVertical: 50
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'

    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10

    },
    footerIcon: {
        width: 30,
        height: 30

    },


});
export default FlatListExample;