import Credentials from "next-auth/providers/credentials"
import { getBuyerFromDb } from "./lib/getUser";
import { getFarmerFromDb } from "./lib/getUser";
export default {
  providers: [

    Credentials({
      authorize: async (credentials) => {

          let user = null;

          const { username, password, value } = credentials;


          if (value === "Buyer") {
            user = await getBuyerFromDb(username);
          }

          if (value === "Farmer") {
            user = await getFarmerFromDb(username);
          }
             
          let User = null;
          if(value === "Buyer"){

             User = {
             name: user.buyer_name,
             email: user.buyer_email,
             value: value,
            }
          }
          if(value === "Farmer"){

            User = {
            name: user.farmer_name,
            email: user.farmer_email,
            value: value,
           }
         }
          // return user object with the their profile data
          return User;
        } 
    })
  ],
} 