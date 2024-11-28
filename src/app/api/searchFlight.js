
import amadeus from '../lib/amadeus.js';
import clientPromise from '../lib/mongodb.js';

async function testAmadeus(req, res){
    try{
        
        const origin = 'NYC';
        const destination = 'LAX';
        const date = '2024-12-01';

    

        const response = await amadeus.shopping.flightOffersSearch.get({
            originLocationCode: origin,
            destinationLocationCode: destination,
            departureDate: date,
            adults: 1, // Number of passengers
            currencyCode: 'CAD', // Price in CAD
            max: 20,
        });

    

        const flights = response.data.map((offer) => {
            const itinerary = offer.itineraries[0]; 
            const firstSegment = itinerary.segments[0]; 

            return{
                origin: firstSegment.departure.iataCode,
                destination: firstSegment.arrival.iataCode,
                price: offer.price.total,
                currency: offer.price.currency,
                flightTime: itinerary.duration, // e.g., "PT5H30M"
                stops: itinerary.segments.length - 1,
                departureTime: firstSegment.departure.at, 
            }
        });

        console.log('Flights fetched:', flights);

        const client = await clientPromise;
        const db = client.db('WanderSphere');
        const collection = db.collection('flights');
        const result = await collection.insertMany(flights);

        console.log(`${result.insertedCount} flights added to mongo`)

    }catch(error){
        console.error('Error', error.response?.data || error.message);
    }
}



async function deleteAllFlight() {
    try {
      const client = await clientPromise;
      const db = client.db('WanderSphere');
    
      await db.collection('flights').drop();
  
      console.log("The 'flights' collection has been dropped.");
    } catch (error) {
      console.error('Error dropping the flights collection:', error);
    }
  }
  


export default async function searchFlightsHandler(req, res){
    if(req.method === "POST"){
        
        const {origin, destination, departureDate} = req.body;

        try{
            const client = await clientPromise;
            const db = client.db('WanderSphere');
            const collection = db.collection('flights');
            
            const flightOffers = await amadeus.shopping.flightOffersSearch.get({
                originLocationCode: origin,
                destinationLocationCode: destination,
                departureDate,
                adults: 1,
                max: 10,
            });
            
            const flightsData = flightOffers.data.map(flight => ({
            
                origin,
                destination,
                price: offer.price.total,
                currency: offer.price.currency,
                duration: flight.itineraries[0].duration,
                // flightTime: itineraries[0].duration, // e.g., "PT5H30M"
                stops: flight.itineraries[0].segments.length - 1,
                departureTime: flight.itineraries[0].segments[0].departure.at, 
                
            }));
            
            await collection.insertMany(flights);

            console.log('Flights fetched:', flightsData);
            
            
            res.status(200).json({flights: flightsData})
            
            
        }catch(error){

            res.status(500).json({error: 'Failed to fetch flight data'});
            
        }finally{
            await client.close();
        }
        
    }else{
        res.status(405).json({error: 'method not allowed'})
    }
}

