"use client";


import styles from "./page.module.css";
import { useState } from 'react';

export async function getServerSideStuff(){
    const res = await fetch('http://localhost:3001/api/saveBooking');
    const data = await res.join();
    return{
        props:{
            users:data.users,
        },
    };

}


export default function destinationSelection({ users }){

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [flights, setFlights] = useState([]);

    const handleSearch = async() => {
        try{
            const response = await fetch('./api/searchFlights', {
                method : 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({origin, destination, departureDate: date})
            });

            const data = await response.json();

            if (data.success){
                setFlights(data.flights);
            }else{
                console.error(data.error)
            }

        }catch{
            console.error('Error fetching flights');
        }
    };

    return(
        <div>
            <h1>Search Flights</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Origin"
                    value = {origin}
                    onChange={(e) => setOrigin(e.target.value)} 
                />   
                <input
                    type="text"
                    placeholder="Destination"
                    value = {destination}
                    onChange={(e) => setDestination(e.target.value)} 
                />   
                <input
                    type="date"
                    placeholder={date}
                    value = {origin}
                    onChange={(e) => setDate(e.target.value)} 
                />   

                <button onClick={handleSearch}></button>

                
            </form>



            <h2>Availalbe Flights</h2>

            <ul>
                {users.map((user) => (
                    <li key={user._id}>{user.name}</li>
                ))}
            </ul>


        </div>
    );

}