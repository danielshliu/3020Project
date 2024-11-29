"use client";


import styles from "./page.module.css";
import{ useState, useEffect} from 'react';
import Navigation from "./nav";



export default function DestinationSelection(props){

    const [origin, setOrigin] = useState("");
    const [date, setDate] = useState("");
    const [people, setPeople] = useState(1);
    const [flights, setFlights] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [savedSelection, setSavedSelection] = useState(null);

    const cityToIATACode = {
        'Cairo': 'CAI',
        'Alexandria': 'HBE',
        'Luxor': 'LXR',
        'Mahé': 'SEZ',
        'Praslin':'PRI',
		'La Digue' : 'PRI',
        'Cape Town': 'CPT',
		'Johannesburg' :'JNB',
		'Durban': 'DUR',
        'Tokyo': 'HND',
		'Kyoto': 'KIX',
		'Osaka': 'ITM',
        'Seoul': 'ICN',
		'Busan': 'PUS',
		'Incheon': 'ICN',
        'Taipei': 'TPE',
		'Kaoshsiung': 'KHH',
		'Taichung': 'RMQ',
        'Rome':'FCO',
		'Milan': 'MXP',
        'Florence': 'FLR',
        'Stockholm': 'ARN',
        'Gothenburg': 'GOT',
        'Malmo': 'MMX',
        'Zurich': 'ZRH',
        'Geneva': 'GVA',
        'Lucerne': 'ZRH',
        'Toronto': 'YYZ',
        'Vancouver': 'YVR',
        'Montreal': 'YUL',
        'Mexico City': 'MEX',
        'Guadalajara': 'GDL',
        'Cancun': 'CUN',
        'New York': 'EWR',
        'Los Angeles': 'LAX',
        'Chicago': 'ORD',
        'Buenos Aires': 'EZE',
        'Córdoba': 'COR',
        'Mendoza': 'MDZ',
        'Rio de Janeiro': 'GIG',
        'São Paulo': 'GRU',
        'Salvador': 'SSA',
        'Santiago': 'SCL',
        'Valparaíso': 'SCL',
        'Puerto Montt': 'PMC',
        'Sydney': 'SYD',
        'Melbourne': 'MEL',
        'Brisbane': 'BNE',
        'Papeete': 'PPT',
        'Moorea': 'MAU',
        'Bora Bora': 'BOB',
        'Auckland': 'AKL',
        'Wellington': 'WLG',
        'Christchurch': 'CHC'
    }

    function getIATAcode(cityName){
        const iataCode = cityToIATACode[cityName];
        if(iataCode){
            return iataCode;
        }else{
            console.log("Not found");
            return null;
        }
    }
   
      

    const destination = getIATAcode(props.city);
   


    const searchFlights = async () => {
        const response = await fetch('./api/searchFlight', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                origin: origin,
                destination: destination,
                departureDate: date,
            }),
        });

    const data = await response.json();
    console.log(destination)
    if (Array.isArray(data.flights)) {
        setFlights(data.flights);
      } else {
        console.error("Flights data is not an array:", flightData.flights);
    }
    console.log(data);
    console.log(flights)
};


    
  // Handle search for flights and hotels
  const handleSearch = async () => {
    try {
      const flightResponse = await fetch('./api/searchFlight', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            origin: 'YVR', 
            destination: 'JFK', 
            date: '2024-12-01', 
        }),
      });

    //   const hotelResponse = await fetch("./api/searchHotel", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ city: destination }),
    //   });

      const flightsData = await flightResponse.json();
    //   const hotelsData = await hotelResponse.json();

      setFlights(flightsData);
    //   setHotels(hotelsData);
    } catch (error) {
      console.error("Error fetching flights or hotels:", error);
    }
  };

  // Handle saving the user's selections
  const handleSaveSelection = async () => {
    try {
      const response = await fetch("./api/saveBookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flight: selectedFlight, hotel: selectedHotel }),
      });

      if (response.ok) {
        alert("Selection saved successfully!");
      } else {
        console.error("Failed to save selection.");
      }
    } catch (error) {
      console.error("Error saving selection:", error);
    }
  };

  // Fetch saved user selection
  const fetchSavedSelection = async () => {
    try {
      const response = await fetch("./api/saveBookings");
      if (response.ok) {
        const data = await response.json();
        setSavedSelection(data);
      }
    } catch (error) {
      console.error("Error fetching saved selection:", error);
    }
  };

  // Fetch the saved selection when the component loads
  useEffect(() => {
    fetchSavedSelection();
  }, []);

   
  
    return(
        <div className={styles.summaryBackground}>
            <Navigation setPage={props.setPage}/>

            <section className={styles.summaryGrid}>
                <div className={styles.leftColumn}>
                {/* <button type="submit" onClick={searchFlights}>Test API </button> */}

                    {/* Flight Booking */}
                    <div className={styles.flightBooking}>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.formGroup}>
            <input
                type="text"
                placeholder="Origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)} 
                className={styles.inputField}
            />
        </div>
        <div className={styles.formGroup}>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)} 
                className={styles.inputField}
            />
        </div>
        <div className={styles.formGroup}>
            <button type="submit" onClick={searchFlights} className={styles.submitButton}>
                Search
            </button>
        </div>
    </form>
        
                        <h2>Flight to: {props.city}</h2>
                        <ul>
                            {flights.map((flight, index) => (
                                <li key={index}>
                                <p>Origin: {flight.origin}</p>
                                <p>Destination: {flight.destination}</p>
                                <p>Price: {flight.price}</p>
                                <p>Flight Time: {flight.flightTime}</p>
                                
                                <button
                                    onClick={() => setSelectedFlight(flight)}
    
                                >
                                    Select Flight
                                </button>
                                </li>
                            ))}
                        </ul>
                        {/* <p>
                            Flight information goes here.
                        </p> */}
                        <button className={styles.confirmButton}>Confirm</button>
                    </div>

                    {/* Hotel Booking */}
                    <div className={styles.hotelBooking}>
                        <h2>Hotels At:</h2>
                        <p>
                            Hotel information goes here.
                        </p>
                        <button className={styles.confirmButton}>Confirm</button>
                    </div>
                </div>

                <div className={styles.rightColumn}>

                    {/* Payment */}
                    <div className={styles.paymentMethod}>
                        <h2>Payment</h2>
                        <div className={styles.paymentMethodInputs}>
                            <label htmlFor="cardHolder">Cardholder Name</label>
                            <input
                                type="text"
                                id="cardHolder"
                                name="cardHolder"
                                placeholder="Enter your name"
                            />

                            <label htmlFor="cardNumber">Card Number</label>
                            <input
                                type="number"
                                id="cardNumber"
                                name="cardNumber"
                                placeholder="Enter your card number"
                            />

                            <label htmlFor="expiryDate">Expiry Date</label>
                            <input
                                type="text"
                                id="expiryDate"
                                name="expiryDate"
                                placeholder="MM/YY"
                            />

                            <label htmlFor="cvv">CVV</label>
                            <input
                                type="password"
                                id="cvv"
                                name="cvv"
                                placeholder="Enter CVV"
                            />
                        </div>
                    </div>

                    {/* Summary */}
                    <div className={styles.summaryInformation}>
                        <h2>Summary</h2>
                        <p>
                            This section will include final information regarding flights to destination and available residencies.
                        </p>
                    </div>

                    {/* Payment Confirmation */}
                    <div className={styles.confirmationDesicion}>
                        <h2>Total</h2>
                        <p>
                            Your cost of the trip combined with taxes and other fees will be: $__CAD.
                        </p>
                        <button className={styles.confirmButton}>Confirm</button>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className={styles.footer}>
                <p>© 2024 WanderSphere. All rights reserved.</p>
            </footer>

        </div>

      
    );
}