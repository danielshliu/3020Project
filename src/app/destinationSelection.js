"use client";


import styles from "./page.module.css";
import { useState } from 'react';
import Navigation from "./nav";


// export async function getServerSideStuff(){
//     const res = await fetch('http://localhost:3001/api/saveBooking');
//     const data = await res.join();
//     return{
//         userProps:{
//             users:data.users,
//         },
//     };

// }


export default function DestinationSelection(props){

    const [origin, setOrigin] = useState('');
    const [date, setDate] = useState('');
    

    const [flights, setFlights] = useState([]);
    const [hotels, setHotel] = useState([]);

    const destination = props.city;


    
    const handleSearch = async(e) => {
        e.preventDefault();

        const flightResponse = await fetch('./api/searchFlights', {
            method : 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                origin, 
                destination,
                departureDate: date
            }),
        });

        const hotelResposne = await fetch('./api/searchHotels', {
            method : 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                city: destination
            })
            
        });


        
        const flightData = await flightResponse.json();
        const hotelData = await hotelResposne.json();

        setFlights(flightData.flights);
        setHotel(hotelData.hotels);
       

    };

  
    return(
        <div className={styles.cityBackground}>
          <Navigation setPage={props.setPage}/>


            <h1>Flights for: {props.city}</h1>
        
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Origin"
                    value = {origin}
                    onChange={(e) => setOrigin(e.target.value)} 
                />   
               
                <input
                    type="date"
                    value = {date}
                    onChange={(e) => setDate(e.target.value)} 
                />   

                <button type="submit" onClick={handleSearch}>Search </button>

                
            </form>



            <h2>Availalbe Flights</h2>

            <ul>
                {flights.map((flight, index) => (
                    <li key={index}>
                        {flight.price} CAD |{flight.origin} | {flight.destination}

                    </li>
                ))}
            </ul>

            <h2>Availalbe Hotels</h2>
            <footer className = {styles.footer}>
                <p>© 2024 WanderSphere. All rights reserved.</p>
            </footer>
        </div>
    );
}