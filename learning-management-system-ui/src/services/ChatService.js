
const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7285/chat")
    .configureLogging(signalR.LogLevel.Information)
    .build();

async function start() {
    try {
        await connection.start();
        console.log("SignalR Connected.");
    } catch (err) {
        console.log(err);
        setTimeout(start, 5000);
    }
};

async function ReceiveMessage(){
    connection.on("Send", m=>{
        console.log(m);
    })
}

connection.onclose(async () => {
    await start();
});
export {start, ReceiveMessage};