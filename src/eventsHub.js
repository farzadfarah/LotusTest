import * as signalR from "@microsoft/signalr";

const apiBaseUrl = import.meta.env.VITE_APP_BASEURL;
const connection = new signalR.HubConnectionBuilder()
  .configureLogging(signalR.LogLevel.Information)
  .withUrl(apiBaseUrl + "notify", {
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets,
  })
  .build();

connection
  .start()
  .then(function () {
    connection.invoke("register");
  })
  .catch(function (err) {
    return console.error(err?.toString());
  });

connection.on("BroadcastMessage", () => {});

connection.on("BroadcastError", (data) => {});

export default {
  connection,
};
