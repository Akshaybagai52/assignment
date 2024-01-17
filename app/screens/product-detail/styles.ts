import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16
    },
    swiperContainer: {
        height: 200,
        marginBottom: 16
    },
    image: {
        flex: 1,
        borderRadius: 8
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 8
    },
    discount: {
        fontSize: 16,
        color: 'green'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buyNowButton: {
        flex: 1,
        backgroundColor: 'blue',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
        marginRight: 8
    },
    addToCartButton: {
        flex: 1,
        backgroundColor: 'green',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles