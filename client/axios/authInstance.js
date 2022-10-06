import axios from "axios";

console.log(process.env.NEXT_PUBLIC_API_URL)

const authInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}user`,
});
export default authInstance;
