import { StyleSheet, Text, View, SafeAreaView, Modal, TouchableWithoutFeedback, FlatList, TextInput} from 'react-native';

export default function ModalView({styles, toggleModal, modalVisible, children}) {
  return (
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}>
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalOverlay}></View>
        </TouchableWithoutFeedback>  
        <View style={styles.modalView}>
          {children}
        </View>
      </Modal>
  )
}
