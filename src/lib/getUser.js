"use server";
import excuteQuery from "./db";

export async function getFarmerFromDb(username) {
  const user = await excuteQuery({
    query: "SELECT * FROM farmer WHERE farmer_username = ?",
    values: [username],
  });
  // console.log(user);
  return JSON.parse(JSON.stringify(user[0]));
}

export async function getBuyerFromDb(username) {
  const user = await excuteQuery({
    query: "SELECT * FROM buyer WHERE buyer_username = ?",
    values: [username],
  });
  // console.log(user);
  return JSON.parse(JSON.stringify(user[0]));
}
