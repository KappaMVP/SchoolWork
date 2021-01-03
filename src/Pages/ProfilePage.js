import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {profilePageData as pageData} from '../data.source';
import Styles from '../Styles/ProfilePage.style';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [
        {
          id: 1,
          name: '嫩煎魚排佐鮮蔬',
          price: 350,
          url:
            'https://live.staticflickr.com/65535/49983611666_f329a3c368_b.jpg',
          like: '1',
        },
        {
          id: 2,
          name: '鮮蝦河粉',
          price: 280,
          url:
            'https://live.staticflickr.com/65535/49997526092_91d7cf0963_b.jpg',
          like: '3',
        },
        {
          id: 3,
          name: '清炒番茄義大利麵',
          price: 180,
          url:
            'https://live.staticflickr.com/65535/49997272991_42d8072cf7_b.jpg',
          like: '2',
        },
        {
          id: 4,
          name: '九層塔沙拉',
          price: 120,
          url: 'https://i.imgur.com/Yg1t5sW.jpg',
        },
        {
          id: 5,
          name: '123',
          price: 120,
          url:
            'https://live.staticflickr.com/65535/49983613426_29e5108012_b.jpg',
          like: '1',
        },
        {
          id: 6,
          name: '457',
          price: 120,
          url:
            'https://live.staticflickr.com/65535/49983090718_71cfa75cfe_b.jpg',
          like: '2',
        },
        {
          id: 7,
          name: '789',
          price: 120,
          url:
            'https://live.staticflickr.com/65535/49983612971_a103f0385e_b.jpg',
          like: '3',
        },
      ],
      m: [
        {
          id: 1999,
          name: 'Jacky',
          price: 'Your Instagram Top Nine is ready!',
          url:
            'https://live.staticflickr.com/65535/50025256748_e67b905aa3_b.jpg',
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  render() {
    const unlikemeals = this.state.meals.filter((meal) => meal.like === '1');
    const likemeals = this.state.meals.filter((meal) => meal.like === '2');
    const verylikemeals = this.state.meals.filter((meal) => meal.like === '3');
    return (
      <View style={Styles.page}>
        <View>
          <Image style={styles.image1} source={{uri: this.state.m[0].url}} />
          <Text style={styles.id}>{this.state.m[0].id}</Text>
          <Text style={styles.mealName}>{this.state.m[0].name}</Text>
          <Text style={styles.mealPrice}>{this.state.m[0].price}</Text>
        </View>
        <ScrollableTabView>
          <View key="page1" title="a">
            <ScrollView>
              {unlikemeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
              ))}
            </ScrollView>
          </View>
          <View key="page2" title="b">
            {likemeals.map((meal) => (
              <MealItem key={meal.id} meal={meal} />
            ))}
          </View>
          <View key="page2" title="c">
            {verylikemeals.map((meal) => (
              <MealItem key={meal.id} meal={meal} />
            ))}
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

function MealItem(props) {
  return (
    <View style={styles.mealItem}>
      <Image style={styles.image} source={{uri: props.meal.url}} />
      <View style={styles.mealContent}>
        <Text style={styles.mealName}>{props.meal.name}</Text>
        <Text style={styles.mealPrice}>${props.meal.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  id: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 2, // 文字上下留白
  },
  mealList: {
    flex: 1,
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  image: {
    width: 410,
    height: 275,
  },
  image1: {
    width: 150,
    height: 150,
    textAlign: 'center',
    paddingVertical: 2, // 文字上下留白
  },
  mealContent: {
    marginLeft: 10,
  },
  mealName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingVertical: 2, // 文字上下留白
  },
  mealPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ProfilePage;
