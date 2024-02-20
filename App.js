import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import mockItemData from './helpers/mockData';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.contentContainer}>
            <Image
              style={styles.image}
              source={{ uri: mockItemData.image }}
            />
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>NEW</Text>
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{mockItemData.title}</Text>
                <Text style={styles.heartIcon}>❤️</Text>
              </View>

              <View style={styles.priceContainer}>
                <Text style={styles.newPrice}>New Price</Text>
                <Text style={styles.oldPrice}>Old Price</Text>
              </View>
              <View style={styles.descriptionContainer}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode='tail'
                  style={styles.description}
                >
                  {mockItemData.description}
                </Text>
                <View style={styles.buyContainer}>
                  <Text style={styles.buyText}>Buy</Text>
                  <Image style={styles.buyIcon} source={require('./assets/buylot.png')} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 115,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'purple',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  cardContainer: {
    backgroundColor: '#fde',
    width: '90%',
    height: '90%',
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  contentContainer: {
    height: '80%',
    width: '100%',
    padding: 5,
    flexDirection: 'row',
  },
  image: {
    height: 75,
    width: 100,
    marginRight: 10,
  },
  newBadge: {
    position: 'absolute',
    top: -5,
    left: 85,
    backgroundColor: 'lightgrey',
    borderRadius: 25,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
  newBadgeText: {
    color: 'black',
    fontSize: 10,
  },
  detailsContainer: {
    justifyContent: 'space-between',
    marginLeft: 5
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
  },
  heartIcon: {},
  priceContainer: {
    flexDirection: 'row',
  },
  newPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 15,
  },
  oldPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
  descriptionContainer: {
    flexDirection: 'row',
  },
  description: {
    width: 150,
    marginRight: 20,
  },
  buyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyText: {},
  buyIcon: {
    height: 20,
    width: 20,
    marginLeft: 2,
  },
});
