// import React from "react";
// import { View, Text, Image, ScrollView } from "react-native";

// const items = [
//   {
//     image: require("../assets/shopping-bag.png"),
//     text: "Pick-up",
//   },
//   {
//     image: require("../assets/soft-drink.png"),
//     text: "Soft Drinks",
//   },
//   {
//     image: require("../assets/bread.png"),
//     text: "Bakery Items",
//   },
//   {
//     image: require("../assets/fast-food.png"),
//     text: "Fast Foods",
//   },
//   {
//     image: require("../assets/deals.png"),
//     text: "Deals",
//   },
//   {
//     image: require("../assets/coffee.png"),
//     text: "Coffee & Tea",
//   },
//   {
//     image: require("../assets/desserts.png"),
//     text: "Desserts",
//   },
// ];

// export default function Categories() {
//   return (
//     <View
//       style={{
//         marginTop: 5,
//         backgroundColor: "#fff",
//         paddingVertical: 10,
//         paddingLeft: 20,
//       }}
//     >
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {items.map((item, index) => (
//           <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
//             <Image
//               source={item.image}
//               style={{
//                 width: 50,
//                 height: 40,
//                 resizeMode: "contain",
//               }}
//             />
//             <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
//}
import { FlatList, Image, Text, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const list = [
  {
    image: require("../assets/bread.png"),
    text: "bread",
  },
  {
    image: require("../assets/fast-food.png"),
    text: "fast food",
  },
  {
    image: require("../assets/soft-drink.png"),
    text: "soft drink",
  },
  {
    image: require("../assets/bread.png"),
    text: "bread",
  },
  {
    image: require("../assets/fast-food.png"),
    text: "fast food",
  },
  {
    image: require("../assets/soft-drink.png"),
    text: "soft drink",
  },
  {
    image: require("../assets/soft-drink.png"),
    text: "soft drink",
  },
  {
    image: require("../assets/soft-drink.png"),
    text: "soft drink",
  },
];

export default function Categories() {
    return (
        <View
          style={{
          marginTop: 20,
          backgroundColor: "#fff",
          paddingVertical: 10,
          paddingLeft: 20,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((item, index) => {
            return (
                <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
                <Image
                  source={item.image}
                  style={{width: 50, height: 30, resizeMode: "contain" }}
                />
                <Text style={{ fontSize: 13, fontWeight: "900" }}>
                  {item.text}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
  
// const styles = StyleSheet.create({
//   item: {
    
//   }

   
// });
