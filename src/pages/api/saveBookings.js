import 'dotenv/config';
import clientPromise from "../../app/lib/mongodb";

export default async function handler(req, res) {

    try{
        const client = await clientPromise;
        const db = client.db('WanderSphere');
        const collection = db.collection('user');

        if(req.method === 'POST'){
            const result = await collection.updateOne(
                {},
                {$set: {flight, hotel}},
                {upsert: true}
            )

            res.status(200).json({
                message: "Saved",
                modifiedCount: result.modifiedCount,
                upsertedId: result.upsertedId,
            })
                
        }else if(req.method === 'GET'){
            const userSelection = await collection.findOne();
            res.status(200).json(userSelection || {});
        }else{
            res.status(405).json({ error: "Method not allowed" });
        }  
        
    }catch(error){
        res.status(500).json({ error: "Server error" });
    }


}