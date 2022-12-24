import React, { useEffect, useState } from "react";
import { FlatList } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import SearchBar from "../components/SearchBar";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";


const YELP_API_KEY =
  "ZG0nSs-igb8EtKocoP9tNrs2_Sg2dl3srXWJy4IvUovR5zdfZOuCVMX_HCRUXCt6C8COTZE-qsE2qQFO3uhFQ-yfW1VylZxSw5m49WMs__9X-tRxO7mfqYuSbwKkY3Yx";

const Home = ({ navigation }) => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const getRestaurantsFromYelp =  async () => {
    const yelpUrl =  `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`;
    const apiOptions = {
    headers: {
      Authorization: 'Bearer ${YELP_API_KEY}'
    },
  };
    return fetch(yelpUrl, apiOptions)
    .then((res) => res.json())
    .then((json) => setRestaurantData(json.businesses));
  };


useEffect(() => {
  getRestaurantsFromYelp();
},[]);

	return (
        <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
            <View style={{backgroundColor:"white", padding: 15}}>
               <HeaderTab/>       
               <SearchBar/>
                <Categories/>
                <RestaurantItems restaurantData={restaurantData}/>
                 {/* navigation={restaurantData}/> */}
             </View>
        </SafeAreaView>
    )};

export default Home;

const styles = StyleSheet.create({
   
});
