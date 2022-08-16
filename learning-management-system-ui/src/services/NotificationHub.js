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
  userId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  try {
    await connection.invoke("AddUser", userId);
  } catch (err) {
    console.log(err);
  }
}
