
import axios from 'react-native-axios';

const apikey = "9a525c9f57msh8db71f4e654153ap1291d8jsn0b996b332d57";

export default  loadBooks= () =>{

    const options = {
        method: 'GET',
        url: 'https://mocki.io/v1/1e082a43-e874-4fb8-be21-979532e1720a',
        headers: {
          'Accept': 'application/json',

          'Content-Type': 'application/json',
          'x-rapidapi-host': 'book4.p.rapidapi.com'
        }
      };
      
     return  axios.request(options);
} 

