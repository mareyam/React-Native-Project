import { useState } from "react";
import { FlatList } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HeaderTab() {
    const [activeTab, setActiveTab] = useState("Delivery")
	return (
	<View style={{flexDirection: "row", alignItems: "center"}}>
        <HeaderButton text="Delivery" btnColor="white" textColor= "black" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <HeaderButton text="Pickup" btnColor="white" textColor= "black" activeTab={activeTab} setActiveTab={setActiveTab}/>      
    </View>);}


const HeaderButton = (props) => (
    <View>
        <TouchableOpacity style={{  backgroundColor: props.activeTab === props.text ? "black" : "white",

        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius:30}}
        onPress={() => props.setActiveTab(props.text)}>
              <Text style={{color: props.activeTab == props.text? "white": "black"}}>{props.text}</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
  

   
});
