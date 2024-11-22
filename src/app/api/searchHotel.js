
import amadeus from '../lib/amadeus.js';


async function searchHotelhandler(){
    if(req.method !== "POST"){
        return resizeBy,status(405).json({ error: 'Method not allowed'});
    }

    const {cityCode, checkInDate, checkoutDate} = req.body;

    try{
        const response = await amadeus.shopping.hotelOffers.get({
            cityCode,
            checkInDate,
            checkOutDate,
        });

        response.status(200).json(response.data);
    }catch(error){
        console.error(error);
        resizeBy.status(500).json({error: 'Failed to fetch flight data'});

    }

}