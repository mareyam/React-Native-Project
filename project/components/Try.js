import React from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const Try = () => {
    componentDidMount() {
        const apiKey = 'ZG0nSs-igb8EtKocoP9tNrs2_Sg2dl3srXWJy4IvUovR5zdfZOuCVMX_HCRUXCt6C8COTZE-qsE2qQFO3uhFQ-yfW1VylZxSw5m49WMs__9X-tRxO7mfqYuSbwKkY3Yx';
        fetch('https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego', {
          headers: {
            'Authorization': `Bearer ${apiKey}`
          }
        })
          .then(response => response.json())
          .then((data) => {
            this.setState({ data });
          });
      }
    
    return (
        <View>
          <FlatList 
              data={data} renderItem={({item}) => {
                  <View>
                      console.log(item)
                      <Image source={{uri: item.image}} />
                      <Text>{data.rating}</Text>
                  </View>
              }}
          />
        </View>
      );
}
export default Try;

// class Try extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null
//     };
//   }

//   componentDidMount() {
//     const apiKey = 'ZG0nSs-igb8EtKocoP9tNrs2_Sg2dl3srXWJy4IvUovR5zdfZOuCVMX_HCRUXCt6C8COTZE-qsE2qQFO3uhFQ-yfW1VylZxSw5m49WMs__9X-tRxO7mfqYuSbwKkY3Yx';
//     fetch('https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego', {
//       headers: {
//         'Authorization': `Bearer ${apiKey}`
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         this.setState({ data });
//       });
//   }

//   render() {
//     const { data } = this.state;
//     if (!data) {
//       return (
//         <View>
//           <Text>Loading data...</Text>
//         </View>
//       );
//     }
//     return (
//       <View>
//         <FlatList 
//             data={data} renderItem={({item}) => {
//                 <View>
//                     console.log(item)
//                     <Image source={{uri: item.image}} />
//                     <Text>{data.rating}</Text>
//                 </View>
//             }}
//         />
//       </View>
//     );
//   }
// }

// export default Try;