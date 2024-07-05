import axios from "axios";


const token = process.env.NEXT_PUBLIC_TOKEN;
const apiUrl = '';

const headers = {
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json'
};


const getUserSubscription=(pageNumber)=> axios.get(apiUrl+pageNumber, { headers })

const getAllSubscription=(url)=>axios.get(apiUrl,{ headers })

export default{
    getUserSubscription,
    getAllSubscription
}