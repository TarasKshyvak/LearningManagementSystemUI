import { HubConnectionBuilder } from "@microsoft/signalr";
import { string } from "yup";
import { routes } from "../components/Routes";

const connection = new HubConnectionBuilder()
  .withUrl(routes.notificationHub)
  .build();

async function start() {
    console.log('asdasdadsasdadsasdasdadasdsgfghfghfghfh');
  if (connection.state === "Disconnected") {
    try {
      await connection.start();
      console.log("SignalR Connected.");
    } catch (err) {
      console.log(err);
    }
  }
}

export default function getMessages(setMessages) {
  start();
  console.log("шо за хуйня1");
  connection.on("Click", (messages) => {
    setMessages(messages);
    console.log("шо за хуйня2");

  });
}
