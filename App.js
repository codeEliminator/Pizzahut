import { StyleSheet, Text, View, SafeAreaView, Modal, TouchableWithoutFeedback, FlatList, TextInput} from 'react-native';
import { CheckBox } from 'react-native-btr';
import mockItemData from './helpers/mockData';
import PizzaCard from './Components/PizzaCard';
import CustomTouchable from './helpers/CustomTouchable';
import React, {useState} from 'react';
import ModalView from './helpers/ModalView';

export default function App() {
  const [text, onChangeText] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [activeSearchBar, setSearchBarVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [isNewFilterActive, setIsNewFilterActive] = useState(false);
  const toggleModal = () => setModalVisible(!modalVisible); 
  const toggleSearchBar = () => setSearchBarVisible(!activeSearchBar)
  const toggleFilterModal = () => setFilterModalVisible(!filterModalVisible);
  const toggleNewFilter = () => setIsNewFilterActive(!isNewFilterActive)
  const applyFilters = () => {
    setFilterModalVisible(false);
  }
  const filteredData = mockItemData
    .filter(item => item.title.toLowerCase().includes(text.toLowerCase()))
    .filter(item => !isNewFilterActive || item.isNew);
  return (
    <SafeAreaView style={styles.safeAreaFlex}>
      <View style={styles.main}>
        <View style={styles.contentSide}>
          <View style={styles.headerContainer}>
            {
              activeSearchBar ? <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder='Search...'
              value={text}
              placeholderTextColor="red" 
            /> :
            null
            }
            <View style={styles.heartContainer}>
              <CustomTouchable onPress={toggleModal}>
                <Text style={styles.heartIcon}>❤️</Text>
              </CustomTouchable>
              {
                modalVisible ? 
                  <ModalView styles={styles} toggleModal={toggleModal} modalVisible={modalVisible} >
                    <CustomTouchable onPress={toggleModal}>
                      <Text style={styles.textModal}>Close Modal</Text>
                    </CustomTouchable>
                  </ModalView> : null
              }
              <CustomTouchable onPress={toggleSearchBar}>
                <Text style={styles.heartIcon}>🔍</Text>
              </CustomTouchable>
            </View>

          </View>
          <CustomTouchable onPress={toggleFilterModal} >
            <Text style={styles.filterModal}>Filter</Text>
          </CustomTouchable>
          <Modal
            transparent={true}
            visible={filterModalVisible}
            onRequestClose={applyFilters}>
            <TouchableWithoutFeedback onPress={applyFilters}>
              <View style={styles.modalOverlay}>
                <View style={styles.modalView} onStartShouldSetResponder={() => true}>
                  <Text>Filter by new</Text>
                  <CheckBox checked={isNewFilterActive} onPress={toggleNewFilter}  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </View>
      <FlatList 
        data={filteredData}
        renderItem={({item}) => (
          <View style={styles.pizzaMargin} >
            <PizzaCard mockItemData={item} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaFlex: {
    flex: 1
  },
  main: {
    height: 65,
    alignItems: 'center'
  },
  contentSide: {
    width: '85%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  heartContainer: {
    marginLeft: 10,
    flexDirection: 'row'
  },
  textModal: {
    fontSize: 30,
    color: 'blue'
  },
  filterModal: {
    fontSize: 17,
    fontStyle: 'italic',
    marginTop: 5,
    marginBottom: 5
  },
  pizzaMargin: {
    marginBottom: 8,
    padding: 5
  },
  input: {
    height: 32,
    backgroundColor: 'lightgray',
    width: 300,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7
  },
  heartIcon: {
    fontSize: 24,
    padding: 2
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end', 
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  modalView: {
    backgroundColor: "white",
    padding: 20,
    alignItems: 'center',
    flex: 0.4,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopRightRadius: 20, 
    borderTopLeftRadius: 20, 
  },
})
