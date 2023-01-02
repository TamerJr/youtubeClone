import axios from "axios";


 const BaseURL="https://youtube-v31.p.rapidapi.com"
const options = {
  params: {maxResults:"50",order:"date",regionCode:"EG"},
  headers: {
    'X-RapidAPI-Key': '1b6b7a6078msh110cf9747436a82p1c2029jsnb3572d52b80f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi=async(url)=>{
   const {data}= await axios.get(`${BaseURL}/${url}`,options);
   return data
}