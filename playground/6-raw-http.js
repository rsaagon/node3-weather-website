const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=bc482ed84ad9e73c6110f93606c65e58&query=40,-75&units=f";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
    console.log(chunk);
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
