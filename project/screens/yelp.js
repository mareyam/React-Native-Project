import axios from "axios";

export default axios.create({
baseURL: "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego",
headers:
{
Authorization: "Bearer ZG0nSs-igb8EtKocoP9tNrs2_Sg2dl3srXWJy4IvUovR5zdfZOuCVMX_HCRUXCt6C8COTZE-qsE2qQFO3uhFQ-yfW1VylZxSw5m49WMs__9X-tRxO7mfqYuSbwKkY3Yx"	
},
});