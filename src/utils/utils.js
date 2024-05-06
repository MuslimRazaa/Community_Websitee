const CurrentDomain = localStorage.getItem("DOMAIN")


const baseUrl = `http://localhost:3000/${CurrentDomain}`;
// const baseUrl = `https://${CurrentDomain}`;

export default baseUrl;