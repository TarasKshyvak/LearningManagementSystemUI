import { HubConnectionBuilder } from "@microsoft/signalr";
import { string } from "yup";
import { routes } from "../components/Routes";

export const connection = new HubConnectionBuilder()
  .withUrl(routes.notificationHub)
  .build();

export async function start() {
  if (connection.state === "Disconnected") {
    try {
      await connection.start();
      console.log("SignalR Connected.");
    } catch (err) {
      console.log(err);
    }
  }
}

export async function sendUserId(userId) {
  userId = "98854292-8a02-4975-b444-08da5dbe0af7";
  try {
    await connection.invoke("AddUser", userId);
  } catch (err) {
    console.log(err);
  }
}
