import React from 'react';
import { ScrollView, SafeAreaView, Image, StyleSheet, Button, Text, FlatList, View, TouchableOpacity, TouchableOpacityBase, TextInput } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import loadBooks from '../network/BookApiService';
//MaterialCommunityIcons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react/cjs/react.development';
import { shadow, style, zIndex } from 'styled-system';

let  searchArr=[];
const t=1;
var a;
const AllBook = ({ navigation }) => {
var lol=[]
    var [index, setIndex] = useState(1);

    const [arrEbook, setArrEBook] = useState([])
    const [arrAbook, setArrABook] = useState([])

    const [loadings, setLoadings] = useState([]);
    const [BookName,setBookName] = useState('')
    
    const [Saved,setSaved]=useState([])
    const Add=(item)=>{
    setSaved(oldArray => [...oldArray, item])
    console.log(Saved)
       }


    const Item = ({  title,item ,author,date,detail,price,rating,url}) => (
                <TouchableOpacity
                    
                    onPress={() => {
        
                        navigation.navigate('Details', { item }, {
                            Saved: Saved,
                            Add: Add,
                          })
        
                    }}
                    style={{  flex: 1,  marginVertical: 2,paddingVertical:5,alignItems:'center' }}
                >
        
                    <Image 
                    
                    style={{
            
                        width: 170,
                        height: 230,
                        backgroundColor: 'pink',
                        borderRadius: 15,
                        shadowColor: '#000',
                        shadowRadius: 1,
                        shadowOpacity: 0.8,
                        shadowOffset: { width: 0, height: 1 }
        
                    }}
                        source={{uri:url}} />
        
                </TouchableOpacity>
        
        
          );

          const renderItem = ({ item }) => (
            <Item item={item} title={item.title}  author={item.author} date={item.date} detail={item.detail} price={item.price} rating={item.rating} url={item.url}/>
          );
        


//    function handle(){
//        var __FOUND;
//     searchArr=arrAbook
//     for(var i=0; i<searchArr.length; i++) {
//         if(searchArr[i].title == BookName) {
//             __FOUND = i;
//             setIndex(__FOUND);
//             a=__FOUND;
//             break;
//         }
        
//     }
//     console.log(searchArr[__FOUND])

//    console.log(BookName)
//    loadBooks().then(function (response) {
//     return response.data;

// }).then(function (data) {
//     searchArr=data
//     var __FOUND = -1;
//     for(var i=0; i<searchArr.length; i++) {
//         if(searchArr[i].title == BookName) {
//             __FOUND = i;
//             setIndex(2);
//             temp=searchArr[__FOUND];
//             break;
//         }
        
//     }
   
//    console.log(temp)
//     console.log(searchArr[__FOUND].url)
//     console.log(index)
// }).catch(function (error) {
//     console.error(error);
// });
//    }





    return (
       

        <View style={{
            flex: 1,
            paddingHorizontal:6
        }}>

            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                paddingHorizontal: 25,
                marginBottom: 18, paddingTop: 50
            }}>
                <TouchableOpacity 
                onPress={()=>{navigation.navigate('Login'), {
                    Saved: Saved,

                  }
                console.log(Saved);
                
                }
                
                
                }
                style={{ paddingVertical: 4 }} >
                    <MaterialCommunityIcons name='logout-variant' style={{
                        fontSize: 30, color: 'black',
                        marginTop: 10
                    }} />
                </TouchableOpacity>
                
                <TouchableOpacity  
                style={{ flex:1, paddingVertical: 2,justifyContent:'space-between',flexDirection:'row'}}>
                    <TextInput 
                    value={BookName}
                    onChangeText={(pre)=>{setBookName(pre)}}
                    
                     placeholder="Enter name of book  "
                      style={{ paddingTop:7 ,flex:1,paddingHorizontal:60,fontSize:18}}>
                    </TextInput>
                    <TouchableOpacity 
                  onPress={()=>{
                      console.log(BookName)
                 // {arrAbook.filter(item=>item.title==BookName).map((item) =>(<Text style={{backgroundColor:'red',flex:1}}>BookName</Text>))}
                 arrEbook.map((item) => {
                    if(item.title === BookName){
                        lol.push(item)
                        console.log("item",lol)
                        console.log( "name",item.title)
                       
                        
                    }
                   
                }
                 )}}> 
                    <AntDesign  name='search1' style={{
                        fontSize: 25, color: 'black',paddingVertical:13
                        
                    }} /> 
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#dbd5d5', marginHorizontal: 18, height: 60, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 7, paddingVertical: 5, borderRadius: 5, marginVertical: 5 }}>
                <TouchableOpacity

                    style={{
                        paddingTop: 3,
                        width: 165,
                        backgroundColor: index == 0 ? 'white' : '#dbd5d5',
                        borderRadius: 5,
                        shadowColor: '#000',
                        shadowRadius: 1,
                        shadowOpacity: 0.8,
                        shadowOffset: { width: 0, height: 1 }
                    }}>
                    <Button
                        onPress={() => {
                            console.log("dddddddd")
                             
                            if (index != 0) {
                                if (!loadings.includes(0)) {
                                    setIndex(0)
                                    setLoadings([...loadings, 0])
                                }
                                setTimeout(() => {

                                    loadBooks().then(function (response) {
                                        return response.data;

                                    }).then(function (data) {
                                        setLoadings(loadings.filter(i => i != 0))
                                        setArrABook(data);
                                        setIndex(0)

                                    }).catch(function (error) {
                                        console.error(error);
                                    });
                                }, 0);


                            }

                        }}
                        
                        title="Audio Book    "
                        color="#b36225" /></TouchableOpacity>



                <TouchableOpacity style={{
                        paddingTop: 3,
                        backgroundColor: 'pink',
                        width: 165,
                        backgroundColor: index == 1 ? 'white' : '#dbd5d5',
                        borderRadius: 5,
                        shadowColor: '#000',
                        shadowRadius: 1,
                        shadowOpacity: 0.8,
                        shadowOffset: { width: 0, height: 1 }
                    }}>
                    <Button
                        title="EBook Book"
                        color="#b36225"
                        onPress={() => {

                            if (index != 1) {
                                if (!loadings.includes(1)) {
                                    setIndex(1)
                                    setLoadings([...loadings, 1])
                                }
                                setTimeout(() => {

                                    loadBooks().then(function (response) {
                                        return response.data;

                                    }).then(function (data) {
                                        setLoadings(loadings.filter(i => i != 1))
                                        setArrEBook(data);
                                        setIndex(1)

                                    }).catch(function (error) {
                                        console.error(error);
                                    });
                                }, 0);

                            }




                        }} />
                </TouchableOpacity>

            </View>


            <View style={styles.Cont}>
                {index == 0 ?
                    loadings.includes(0) ?
                        <TouchableOpacity style={{ flex: 1, backgroundColor: 'gray', paddingLeft: 200, paddingTop: 80 }}><AntDesign name="loading1" style={{ fontSize: 30 }} /></TouchableOpacity> :
                        <FlatList
                            data={arrAbook}
                            renderItem={renderItem}
                            numColumns={2}
                            keyExtractor={(item, index) => index}
                        />

                    :
                    loadings.includes(1) ?
                        <TouchableOpacity style={{ flex: 1, backgroundColor: 'gray', paddingLeft: 200, paddingTop: 80 }}><AntDesign name="loading1" style={{ fontSize: 30 }} /></TouchableOpacity> :
                        <FlatList
                            data={arrEbook}
                            renderItem={renderItem}
                            numColumns={2}
                            keyExtractor={(item, index) => index}
                        />
                }
{/* {lol.map((item)=>{ return <Text>{item.title}</Text>})} */}
             
            </View>






        </View>
    )
}




var styles = StyleSheet.create({
    Cont: {
        flex: 1,
        marginTop:13,
    
    }





});
export default AllBook;
