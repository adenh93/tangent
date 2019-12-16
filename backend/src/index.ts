import server from "./server";

const port = process.env.PORT;

server.start({ port }, () => console.log(`Server is running on port ${port}`));
