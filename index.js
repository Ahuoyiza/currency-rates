const express = require('express');
const fetch = require("node-fetch");
const app = express();


app.get('/api/rates', async (request, response) =>
{
    const { base, currency } = request.query;
    const fetchApi = await fetch(`https://api.exchangeratesapi.io/latest?base=${base}&currency=${currency}`)
    const responseJson = await fetchApi.json();
        
    return response.send({ results: responseJson});
});

app.get('/', (request, response) =>
{
    return response.send('Hey there!, Check currency rates')
})


const PORT = process.env.PORT || 5678;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});