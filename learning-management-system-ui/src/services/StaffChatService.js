import { HubConnectionBuilder, HubConnectionState } from "@microsoft/signalr";
import {routes} from "../components/Routes";

export default class StaffChatService {
    static connection = new HubConnectionBuilder()
        .withUrl(routes.staffChat)
        .withAutomaticReconnect()
        .build();

    static async establish(userId) {
        if(this.connection.state === HubConnectionState.Connected) {
            return;
        }
        try {
            await this.connection.start();
        } catch (err) {
            console.log("Connection error", err);
            setTimeout(this.establish, 5000);
        }
        await this.handshake(userId);
        return this.connection.state === HubConnectionState.Connected;
    }

    static async handshake(userId) {
        if (this.connection === null
            || this.connection.state !== HubConnectionState.Connected) {
            console.log("ERROR");
            return;
        }
        await this.connection.invoke("Handshake", userId);
    }
    
    static async getChatHistory() {
        return await this.connection.invoke("GetChatHistory");
    }

    static async sendMessage(message) {
        if (this.connection === null ||
            this.connection.state !== HubConnectionState.Connected) {
            console.log('No connection');
            return;
        }
        
        await this.connection.invoke("MessageHandler", {Sender: message.sender,
            Text: message.text});
    }

    static async subscribe(addMessage){
        this.connection.on("ReceiveMessage", message => {
            addMessage({message});
            console.log('"on" is working', message);
        });
    }
}