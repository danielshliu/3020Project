import 'dotenv/config';
import clientPromise from "../lib/mongodb";

export default async function handler(req, res) {
    if(req.method != 'POST'){
        return res.status(405).json({error: 'method not allowed'})
    }

    const bookingData = req.body;


    try{
        const client = await clientPromise;
        const db = client.db('Wandersphere');

        const result = await db.collection('user').insert(bookingData)

        res.status(200).json({success: true, bookingID: result.inserttedId});


    }catch(error){
        console.error(error);
        res.statu(500).json({error: "failed to book savings"});
    }



}