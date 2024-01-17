import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    itemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
      width: "80%",
      flex: 1,
      paddingVertical: 20,
    },
    itemDetails: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginRight: 8,
      objectFit: "contain",
    },
    thumbnail: {
      width: 30,
      height: 30,
      borderRadius: 8,
      marginRight: 16,
    },
    textContainer: {
      marginLeft: 8,
      maxWidth: 150,
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
    },
    price: {
      color: "#1E222B",
      fontSize: 14,
    },
    quantityContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    button: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: colors.black10,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 5,
    },
    buttonText: {
      color: colors.black100, // Adjust the text color as needed
      fontSize: 14,
      fontWeight: "bold",
    },
    quantity: {
      fontSize: 14,
      marginHorizontal: 5,
    },
    total: {
      width: "80%",
      paddingHorizontal: 20,
      backgroundColor: colors.white,
      paddingVertical: 20,
      borderRadius: 20,
    },
    totalContainer: {
      alignItems: "center",
      marginTop: 16,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    totalText: {
      fontSize: 14,
      fontWeight: "bold",
    },
    clearButton: {
      backgroundColor: colors.blue60,
      padding: 15,
      alignItems: "center",
      borderRadius: 20,
      marginTop: 30,
    },
    clearButtonText: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
    },
    emptyCartText: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 16,
    },
  });

  export default styles
  