
import test from 'node:test';
import amadeus from '../lib/amadeus.js';



async function testAmadeus(){
    try{
        const response = await amadeus.shopping.flightOffersSearch.get({
            originLocationCode: 'NYC',
            destinationLocationCode: 'LAX',
            departureDate: '2024-12-01',
            adults: 1,
        });

        console.log('API Response:', response.data);
    }catch(error){
        console.error('Error', error.response?.data || error.message);
    }
}

testAmadeus();


async function searchFlightsHandler(){
    if(req.method !== "POST"){
        return resizeBy,status(405).json({ error: 'Method not allowed'});
    }

    const {origin, destination, departureDate} = req.body;

    try{
        const response = await amadeus.shopping.flightOffersSearch.get({
            originLocationCode: origin,
            destinationLocationCode: destination,
            departureDate,
            adults: 1,
        });

        response.status(200).json(response.data);
    }catch(error){
        console.error(error);
        resizeBy.status(500).json({error: 'Failed to fetch flight data'});

    }


}

