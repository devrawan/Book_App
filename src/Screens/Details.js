import React ,{useState} from 'react';
import { Image, SafeAreaView ,Text,View,TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
const logg = require('../assets/imgB.jpg');
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Rating, AirbnbRating } from 'react-native-ratings';

const WATER_IMAGE = require('../assets/star.jpg')
const Details =({navigation , route} )=>{
    const [saved, setSaved] = useState(false);
    const[liked,setLiked] =useState(false)
    const book = route.params.item;
    console.log(book);
    const { Saved, Add } = route.params;

function ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }
    function handlesaved() {
        setSaved(!saved)
       { ()=> Add(book);}
       
      }
      function handleLike(){
          setLiked(()=>!liked)
      }

    return(
        <View style={{
            flex: 1,
        }}>
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                paddingHorizontal: 19,
                marginBottom: 18, paddingTop: 50
            }}>
                <TouchableOpacity 
                onPress={()=>{ navigation.goBack()}}
                style={{ paddingVertical: 4 }} >
                    <AntDesign name='left' style={{
                        fontSize: 28, color: 'black',
                        marginTop: 8
                    }} />
                </TouchableOpacity>
                
                <TouchableOpacity style={{ paddingVertical: 4 }}>
                    <FontAwesome5 name='ellipsis-h' style={{
                        fontSize: 28, color: 'black',
                        marginTop: 10,
                        fontWeight:'bold'
                    }} />
                </TouchableOpacity>
            </View>
<ScrollView>
<View style={{  paddingHorizontal:20,justifyContent:'center',paddingVertical:5}}>
    <Text style={{fontSize:18,marginVertical:5,color:'#b36225',fontWeight:'bold'}}> Title:{book.title}. </Text>
    <Text style={{fontSize:18,marginVertical:5,fontWeight:'300',color:'#000'}}> {book.detail} </Text>

    <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={{color:'gray',fontWeight:'bold',marginVertical:10}}> Author :  {book.author}</Text>
    <Text style={{color:'#817e7b' ,fontWeight:'bold',marginVertical:10}}> {book.date}  </Text>
    </View>
    
</View>
<View style={{backgroundColor:'#e3e3e3',height:230,marginLeft:25,borderTopLeftRadius:40,borderBottomLeftRadius:40,marginTop:2}}>

    <Image source={{uri:book.url}} style={{backgroundColor:'pink' , flex:1,marginLeft:40,borderTopLeftRadius:40,borderBottomLeftRadius:40 }}>
        
    </Image>
</View>


<View style={{marginVertical:2,paddingHorizontal:10,marginLeft:10}}>

    <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:10,paddingTop:2}}>
  <AirbnbRating
  showRating={false}
  count={5}
  reviews={["Bad", "OK", "Good", "Very Good","woow"]}
  defaultRating={0}
  size={20}
  style={{marginLeft:5,backgroundColor:'black'}}
 
/>

 
    <View style={{flexDirection:'row'}}> 
    <TouchableOpacity onPress={handleLike} >
<Ionicons name={ liked?'heart':'heart-outline' } 
style={{ fontSize: 30,marginLeft:5 ,paddingTop:1  ,color:liked?'red':'black'
}}></Ionicons>

</TouchableOpacity>  
<TouchableOpacity onPress={handlesaved} >
<Ionicons name={saved ? "bookmark" : "bookmark-outline"} 
style={{ fontSize: 28 ,marginHorizontal:1,paddingVertical:2}}></Ionicons>

</TouchableOpacity>  


</View>
   
   </View>


     <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:5}}>
    <Text style={{fontSize:16,color:'#817e7b',paddingVertical:6}}> {book.rating*44} ratings on google play  </Text>
    <Text style={{fontSize:16,color:'#817e7b',paddingVertical:6}}>  {liked ? `   ${book.rating +1} ` : `  ${book.rating}`} likes </Text>
   
    </View>
    
</View>


<View style={{flex:1,paddingVertical:6,paddingHorizontal:20}}>
    <Text style={{fontSize:17,color:'#000'}}>{book.detail} + {book.detail}+  {book.detail}+ Simply read more....</Text>
</View>
</ScrollView>
            </View>



    )
}

export default Details ;

{/* <View>
<AirbnbRating />


</View> */}