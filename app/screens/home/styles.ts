import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end", // Align items to the end
      padding: 10,
      // backgroundColor: '#fff',
      // borderBottomWidth: 1,
      // borderBottomColor: '#ccc',
      marginRight: 20,
    },
    badge: {
      position: "absolute",
      top: 0,
      right: 0,
      backgroundColor: "red",
      borderRadius: 10,
      paddingHorizontal: 6,
      paddingVertical: 2,
      zIndex: 1,
    },
    badgeText: {
      color: "#fff",
      fontSize: 12,
      fontWeight: "bold",
    },
  });

  export default styles