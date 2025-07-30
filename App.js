import Slider from "@react-native-community/slider"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/lockzilla.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>
        20 caracteres
      </Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="white"
        />

      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Gerar Senha
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    marginBottom: 60
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#BDBDBD",
    borderRadius: 8,
    padding: 8
  },
  button: {
    backgroundColor: "#fff",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  }
})