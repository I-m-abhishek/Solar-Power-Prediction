import { connectToDatabase } from "../mongodbconnect/route";
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
       const db = await connectToDatabase();
       const collection = await db.collection('subscriber');
       const subscriber_email  = await request.json();

       const result = await collection.insertOne({subscriber_email});
      if(result.acknowledged) {
        return NextResponse.json({
          success: true,  subscriber_email
        });
      }
      else return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  } catch (error) {
    
    return NextResponse.json({
      success: false,
      error: 'Oops! It seems there was an internal server error. Please try again later.',
    });  }
}
