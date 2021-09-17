import React from 'react';
import { StyleSheet, SafeAreaView, Text, Button, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import *    as yup from 'yup';
import { Formik } from 'formik';
const log = require('../assets/log.jpg')
const nee = require('../assets/New.jpg')
import AntDesign from 'react-native-vector-icons/AntDesign'

const loginValidationSchema = yup.object().shape({
    name: yup.string().required('name is required'),
    email: yup.string().email('Please enter valid email').required('Email is required'),
    password: yup.string().min(8, ({ min }) => `password must be al least ${min} characters`).required('password is required')
});






const Login = ({ navigation }) => {

    console.log("LLLLLLLLLLLOOOOOOGGGGGINNNN")
    const name = "Rawan";
    const email = "Rawannradwan@Gmail.com";
    const password = "123456789";

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validateOnMount={true}
            onSubmit={values => console.log(values)}
            validationSchema={loginValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                <View style={{ flex: 1 }}>
                    <ImageBackground
                        source={nee}
                        style={styles.imageBackground}>

                        <SafeAreaView style={{ flex: 1, backgroundColor: 'black', opacity: 0.63 }}>
                            <View style={styles.viewName}>
                                <Text style={styles.styleName}>
                                    Free Books
                                </Text>
                            </View>

                            <View style={styles.viewLabel}>
                                <Text style={styles.styleLabel}> User Name : </Text>
                                <TextInput
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
                                    style={styles.styleText} />
                            </View>
                            {(touched.name && errors.name) && <Text style={styles.error}>{errors.name}</Text>}
                            <View style={styles.viewLabel}>
                                <Text style={styles.styleLabel}>Email : </Text>
                                <TextInput
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    style={styles.styleText} />
                            </View>
                            {(touched.email && errors.email) && <Text style={styles.error}>{errors.email}</Text>}
                            <View style={styles.viewLabel}>
                                <Text style={styles.styleLabel}>Password : </Text>
                                <TextInput
                                secureTextEntry
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    style={styles.styleText}
                                    
                                    />
                                  
                            </View>
                            {(touched.password && errors.password) && <Text style={styles.error}>{errors.password}</Text>}
                            <TouchableOpacity 
                            
                            //disabled={!isValid}
                            onPress={() => {
                                // if(values.name=='Rawan' &&values.email=='Rawannradwan@Gmail.com' && values.password=='123456789' ){
                                // navigation.replace('Home')
                                // }else{
                                //     console.log('no ')
                                //  }
                                navigation.navigate('Home')                                      // navigation.replace('Home')


                            }}
                            style={{ backgroundColor:'#b36225' , borderColor:'#b36225',borderWidth:2,marginHorizontal:20,borderRadius:15,marginTop:10,paddingVertical:10,justifyContent:'flex-end'}}>
                                <Text style={{ fontWeight:'700',fontSize:20,color:'white',marginLeft:150}}>Login</Text>
                             </TouchableOpacity>
                        </SafeAreaView>
                    </ImageBackground>

                </View>
            )}
        </Formik>
    )
}


var styles = StyleSheet.create({

    imageBackground:
    {
        flex: 1,

    },
    viewName: {
        paddingVertical: 20,
        justifyContent: 'center',
        marginVertical: 80,
        marginBottom: 50
    },
    styleName: {
        fontWeight: '700',
        fontSize: 35,
        paddingHorizontal: 100,
        color: '#b36225',
        paddingVertical: 8,

    },
    viewLabel: {
        marginVertical: 2,
        paddingVertical: 4,
        marginHorizontal: 20
    },
    styleLabel: {
        fontSize: 16,
        marginVertical: 1,
        paddingVertical: 2,
        color: 'white',
        paddingHorizontal: 10,
        fontWeight: 'bold'
    },
    styleText: {
        fontWeight:'bold',
        color: 'white',
        fontSize: 18,
        borderColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: 'transparent',
        marginVertical: 7,
        paddingVertical: 10,
        paddingHorizontal: 10,
    
    },
    viewloginBtn: {
        backgroundColor: '#b36225',
        borderRadius: 10,
        marginTop: 30,
        marginHorizontal: 20,
        

    },
    error: {
        fontSize: 16,
        color: 'yellow',
        fontWeight: '300',
        marginTop: 3,
        paddingStart: 30
    }


})

export default Login;
//style={[styles.viewloginBtn,{ backgroundColor : isValid ? '#e5a500'  : '#674b02'}]}