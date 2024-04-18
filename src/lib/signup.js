"use server";

import excuteQuery from "./db";

export async function signUp(
  Email,
  Username,
  password,
  Address,
  MobileNo,
  Name,
  value
) {
  if (value === "Buyer") {
    await excuteQuery({
      query:
        "INSERT INTO buyer (buyer_email,buyer_username,buyer_password,buyer_address,buyer_mobile,buyer_name) VALUES (?,?,?,?,?,?)",
      values: [Email, Username, password, Address, MobileNo, Name],
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (value === "Farmer") {
    await excuteQuery({
      query:
        "INSERT INTO farmer (farmer_email,farmer_username,farmer_password,farmer_address,farmer_mobile,farmer_name) VALUES (?,?,?,?,?,?)",
      values: [Email, Username, password, Address, MobileNo, Name],
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
