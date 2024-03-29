import {StyleSheet} from 'react-native';

import COLORS from '../colors/colors';
import COMMON_VALUES from '../values/commonValues';

const COMMON_STYLES = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        backgroundColor: COLORS['primary-background'],
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    mainText: {
        marginTop: 10
    },
    headerText: {
        color: COLORS['primary'],
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },

    paymentText: {
        color: COLORS['primary'],
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
    },

    registrationForm: {
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: COMMON_VALUES.borderRadius10,
        backgroundColor: COLORS['secondary-background'],
        flexDirection: 'column',
    },

    paymentForm: {
        paddingHorizontal: 20,
        borderRadius: COMMON_VALUES.borderRadius10,
        backgroundColor: COLORS['secondary-background'],
        flexDirection: 'column',
    },


    inputFirst: {
        backgroundColor: COLORS['white'],
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: COMMON_VALUES.borderRadius10,
        marginTop: 20,
        marginBottom: 8
    },

    input: {
        backgroundColor: COLORS['white'],
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: COMMON_VALUES.borderRadius10,
        marginVertical: 8
    },

    selectInput: {
        backgroundColor: COLORS['white'],
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: COMMON_VALUES.borderRadius10,
        marginVertical: 8
    },

    inputLast: {
        backgroundColor: COLORS['white'],
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: COMMON_VALUES.borderRadius10,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20
    },

    addButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 15,
    },


    button: {
        borderRadius: COMMON_VALUES.borderRadius10,
        marginLeft: 10,
    },

    regBtn: {
        paddingVertical: 6,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        marginTop: 20,
        width: '100%',
        marginBottom: 6,
        textAlign: 'center',
    },

    regBtnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },

    headerBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },

    AddFoodBtn: {
        borderRadius: 5,
        marginLeft: 3,
        padding: 2,
        backgroundColor: COLORS['primary'],
        color: COLORS['white'],
    },
    addFoodMainContainer: {
        backgroundColor: COLORS['primary-background'],
        paddingHorizontal: 10,
    },
    headerBarStyles: {
        paddingHorizontal: 2,
    },
    error: {
        color: COLORS.error,
    },
});

export default COMMON_STYLES;
