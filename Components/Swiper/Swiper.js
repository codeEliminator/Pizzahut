import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, Image, Share, TouchableOpacity, StyleSheet, Text } from 'react-native';

const images = {
  '1': {source: require('../../assets/1.jpeg'), shareLink: 'https://glovoapp.com/ua/ru/' },
  '2': {source: require('../../assets/2.jpeg'), shareLink: 'https://deliveroo.co.uk/' },
  '3': {source: require('../../assets/3.jpg'), shareLink: 'https://glovoapp.com/ua/ru/' },
};

const onShare = async (shareLink) => {
  try {
    await Share.share({
      message: `Check this out: ${shareLink}`,
    });
  } catch (error) {
    alert(error.message);
  }
};

export default function Swiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const autoScrollTimer = useRef(null);

  const renderPagination = () => (
    <View style={styles.pagination}>
      {Object.keys(images).map((index) => (
        <View
          key={index}
          style={[styles.dot, activeIndex === parseInt(index) ? styles.activeDot : styles.inactiveDot]}
        />
      ))}
    </View>
  );

  const startAutoScroll = () => {
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
    }
    autoScrollTimer.current = setInterval(() => {
      let nextIndex = activeIndex === Object.keys(images).length ? 0 : activeIndex;
      flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
      setActiveIndex(nextIndex);
    }, 3000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollTimer.current) {
        clearInterval(autoScrollTimer.current);
      }
    };
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={Object.keys(images)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => onShare(images[item].shareLink)}
            onTouchStart={() => {
              if (autoScrollTimer.current) {
                clearInterval(autoScrollTimer.current);
              }
            }}
            onTouchEnd={startAutoScroll}
          >
            <Image source={images[item].source} style={styles.image} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        onViewableItemsChanged={({ viewableItems }) => {
          if (viewableItems.length > 0) {
            const firstVisibleItemIndex = viewableItems[0].index + 1;
            setActiveIndex(firstVisibleItemIndex);
          }
        }}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      />
      {renderPagination()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 400,
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '100%',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
  inactiveDot: {
    backgroundColor: 'gray',
  },
});
