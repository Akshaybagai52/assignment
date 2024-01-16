import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: 'white',
      borderRadius: 8,
      margin: 10,
      padding: 10,
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 2,
      flexDirection: 'column',
      alignItems: 'center'
    },
    card: {
      // flexDirection: 'row',
      // flexWrap: 'wrap',
      // width: "40%",
      flex: 1
    },
    favoriteIcon: {
      position: 'absolute',
      top: 10,
      left: 10,
    },
    productImage: {
      width: 80,
      height: 80,
      borderRadius: 8,
      marginRight: 10,
      marginTop: 20,
      marginBottom: 10,
      objectFit: 'contain',
    },
    productDetails: {
      flex: 1
    },
    productPrice: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    productDescription: {
      fontSize: 14,
      color: 'gray',
      marginBottom: 20,
    },
    addToCartButton: {
      backgroundColor: 'green',
      borderRadius: 5,
      padding: 5,
      marginTop: 5,
      alignItems: 'center',
      justifyContent: 'center',
      width: 150
    }
  })