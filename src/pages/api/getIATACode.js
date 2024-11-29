
import amadeus from '../../app/lib/amadeus.js';

export default async function getIATAcode(cityName) {
    try {
        const response = await amadeus.referenceData.locations.get({
          keyword: cityName,
          subType: 'CITY',
        });
    
        const airportCode = response.data[0]?.iataCode; // Get the IATA code for the city
        console.log('IATA code:', airportCode);
        return airportCode;
      } catch (error) {
        console.error('Error fetching IATA code:', error);
        return null;
      }
}