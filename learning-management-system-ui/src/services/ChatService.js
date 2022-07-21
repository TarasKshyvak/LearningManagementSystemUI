import * as signalR from "@microsoft/signalr";
import {HubConnectionState} from "@microsoft/signalr";
import {routes} from "../components/Routes";
import {useDispatch} from "react-redux";
import {addMessage} from "../store/chatSlice";


export default class ChatService {

    static connection = null;

    static async sendMessage(message, addMessage) {
        if (this.connection === null ||
            this.connection.state !== HubConnectionState.Connected) {
            console.log('No connection');
            return;
        }
        console.log(message);
        //TODO: Fix date issue
        await this.connection.invoke("MessageHandler", {Sender: message.sender, Text: message.text});
        // addMessage(message);
    }

    static async GetChatHistory() {
        if (this.connection === null
            || this.connection.state !== HubConnectionState.Connected) {
            console.log("ERROR");
            return;
        }
        return await this.connection.invoke("GetChatHistory");
    }

    static async Handshake() {
        if (this.connection === null
            || this.connection.state !== HubConnectionState.Connected) {
            console.log("ERROR");
            return;
        }
        await this.connection.invoke("Handshake", "fcb2e2f1-c550-4b81-30aa-08da479acca2");
    }

    static async start(addMessage) {
        await this.initConnection(addMessage);
        try {
            await this.connection.start();
            console.log("SignalR Connected.");
        } catch (err) {
            console.log(err);
            setTimeout(this.start, 5000);
        }
    }

    static async initConnection(addMessage) {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(routes.chatApi)
            .configureLogging(signalR.LogLevel.Information)
            .build();

        this.connection.onclose(async () => {
            await this.start();
        });

        this.connection.on("ReceiveMessage", message => {
            console.log(message);
            addMessage(message);
        });
    }
}





