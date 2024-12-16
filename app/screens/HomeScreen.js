import { View, Text, StyleSheet, Button } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text> Bienvenido a mi aplicaion, soy Bryan 🐱‍🐉</Text>
      <Text>
        El trabajo duro vence al talento cuando el talento no se esta
        esforzando.
      </Text>

      <View style={styles.botones}>
        <View style={styles.boton1}>
          <Button
            title="CONTACTS"
            color="#368354"
            onPress={() => {
              navigation.navigate("CallNumber");
            }}
          />
        </View>

        <Button
          title="PRODUCTOS"
          color="#368354"
          onPress={() => {
            navigation.navigate("ProductNavigation");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#afdec1",
    alignItems: "center",
    justifyContent: "center",
  },
  botones: {
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
    padding: 10,
  },
  boton1: {
    marginRight: 60,
  },
});
