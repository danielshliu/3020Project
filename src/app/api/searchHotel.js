
import amadeus from '../lib/amadeus.js';
import clientPromise from '../lib/mongodb.js';

export default async function searchHotelhandler(req, res){
    if(req.method === 'POST'){
        const {destination} = req.body;

        try{
            const client = await clientPromise;
            const db = client.db('WanderSphere');
            const hotelsCollection = db.collection('hotels');

            const hotelOffers = await amadeus.shopping.hotelOffers.get({
                cityCode: destination,
                max: 10,
            });

            const hotelsData = hotelOffers.data.map(hotel => ({
                name: hotel.hotel.name,
                ating: hotel.hotel.rating || "N/A",
                price: hotel.offers[0]?.price.total || 'N/A',
            }));

            await hotelsCollection.insertMany(hotelsData)

            console.log('Hotels Fetched:', hotelsData);

            res.status(200).json({success: true, hotels:hotelsData});


        }catch(error){
            res.status(500).json({ error: error.message});
        }finally{
            await client.close();
        }


    }else{
        res.status(405).json({error: 'Method not allowed'});
    }


    // if(req !== "POST"){
    //     return resizeBy,status(405).json({ error: 'Method not allowed'});
    // }

    // const {cityCode} = req.body;

    
    // try{
        
    //     const city = "YYZ";
    //     const response = await amadeus.shopping.hotelOffers.get({
    //         cityCode: city,
    //     });

    //     const hotels = response.data.slice(0,5).map((hotel) => ({
    //         name: hotel.hotel.name,
    //         rating: hotel.hotel.rating || "N/A",
    //         price: hotel.offers[0]?.price?.total || "N/A",
    //     }));
    
        
    //     console.log('Hotels fetched', hotels);

    //     const client = await clientPromise;
    //     const db = client.db('WanderSphere');
    //     const collection = db.collection('hotels');
    //     const result = await collection.insertMany(hotels);


    //     // response.status(200).json(hotels);

    //     console.log(`${result.insertedCount} hotels added to mongo`)

    // }catch(error){
    //     console.error(error);
    //     // resizeBy.status(500).json({error: 'Failed to fetch flight data'});

    // }

}
