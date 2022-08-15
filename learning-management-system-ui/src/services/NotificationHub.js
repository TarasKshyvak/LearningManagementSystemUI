import { HubConnectionBuilder } from "@microsoft/signalr";
import { string } from "yup";
import { routes } from "../components/Routes";

export const connection = new HubConnectionBuilder()
  .withUrl(routes.notificationHub)
  .build();

export async function start() {
  if (connection.state === "Disconnected") {
    try {
      // await connection.start();
      // console.log("SignalR Connected.");
    } catch (err) {
      console.log(err);
    }
  }
}

export async function sendUserId(userId) {
  userId = "fcb2e2f1-c550-4b81-30aa-08da479acca2";
  try {
    await connection.invoke("AddUser", userId);
  } catch (err) {
    // console.log(err);
  }
}
