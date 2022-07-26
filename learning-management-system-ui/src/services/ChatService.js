import * as signalR from "@microsoft/signalr";
import {HubConnectionState} from "@microsoft/signalr";
import {routes} from "../components/Routes";

export default class ChatService {

    static connection = new signalR.HubConnectionBuilder()
        .withUrl(routes.chatApi)
        .configureLogging(signalR.LogLevel.Information)
        .build();

    static async sendMessage(message) {
        if (this.connection === null ||
            this.connection.state !== HubConnectionState.Connected) {
            console.log('No connection');
            return;
        }
        //TODO: Fix date issue
        await this.connection.invoke("MessageHandler", {Sender: message.sender, Text: message.text});
    }

    static async GetChatHistory() {
        if (this.connection === null
            || this.connection.state !== HubConnectionState.Connected) {
            console.log("ERROR");
            return;
        }
        return await this.connection.invoke("GetChatHistory");
    }

    static async Handshake(userId) {
        if (this.connection === null
            || this.connection.state !== HubConnectionState.Connected) {
            console.log("ERROR");
            return;
        }
        await this.connection.invoke("Handshake", userId);
    }

    static async start(userId, addMessage) {
        if(this.connection.state === HubConnectionState.Connected){
            console.log('Trying to reconnect...')
            return;
        }
        await this.initConnection(addMessage);
        try {
            await this.connection.start();
            console.log("SignalR Connected.");
        } catch (err) {
            console.log(err);
            setTimeout(this.start, 5000);
        }
        await this.Handshake(userId);
    }

    static async initConnection(addMessage) {

        // this.connection.onclose(async () => {
        //     await this.start();
        // });

        this.connection.on("ReceiveMessage", message => {
            addMessage(message);
        });

        this.connection.on("Disconnect", async (response)=>{
            console.log(response);
        });

    }
}





