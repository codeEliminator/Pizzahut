import { StyleSheet, Text, View, SafeAreaView, Modal, TouchableWithoutFeedback, FlatList, TextInput} from 'react-native';

export default function ModalView({styles, toggleModal, modalVisible, children}) {
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}>
      <View style={styles.modalOverlay}>
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.fullScreenTransparentView}>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.modalView}>
          {children}
        </View>

      </View>
     
    </Modal>
  )
}
