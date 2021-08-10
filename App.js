import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, TextInput, Pressable } from "react-native";
import CheckBox from '@react-native-community/checkbox';

let initialList = [
    {
        title: "Main dishes",
        data: ["Pizza", "Burger", "Risotto"],
        key: "123"
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"],
        key: "456"
    },
];

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <CheckBox/>
    </View>
);

/**
 * https://www.robinwieruch.de/react-list-key
 * 'initialList' without 'key' would not work, since array index would be used by default
 */
const App = () => {
    const [list, setList] = useState(initialList);

    const onPressFunction = () => {
        setList([{
            ...list[0], 
            data: list[0].data.slice().reverse()
        }, list[1]]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={onPressFunction}>
                <Text>Reverse List</Text>
            </Pressable>
            <SectionList
                sections={list}
                /**
                * 'item + index' would not work, 
                checked checkbox would not be checked anymore, since it was checked for different key
                * neither default array index would work, the checked checkbox would not move
                */
                keyExtractor={(item) => item}
                renderItem={({item}) => <Item title={item}/>}
                renderSectionHeader={({section: {title}}) => (
                    <View>
                        <Text style={styles.header}>{title}</Text>
                    </View>
                )}
            />
        </SafeAreaView>);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});

export default App;
