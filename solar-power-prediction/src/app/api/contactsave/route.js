// Import necessary modules
import { connectToDatabase } from '../mongodbconnect/route';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Connect to the database
    const db = await connectToDatabase();
    // Access the 'Contact Details' collection
    const collection = db.collection('Contact_Details');
    // Destructure data from the request body
    const { first_name, last_name, company, email, phone_number, message } = await request.json();
    console.log("details: " ,first_name, last_name, company, email, phone_number, message)
    // console.log({ first_name, last_name, company, email, phone_number, message });

    // Save data to the 'Contact Details' collection
    const result = await collection.insertOne({
      first_name,
      last_name,
      company,
      email,
      phone_number,
      message,
    });
    // Return a success response
    let msg= "Thanks for getting in touch! We'll be in contact with you shortly."
    console.log("result",result, )
    if(!result.acknowledged){
        return NextResponse.json({
              success: false,
              error: 'Oops! It seems there was an internal server error while submitting your message. Please try again later.',
            });
            }
    return NextResponse.json({
      success: true,
      message: {msg}
    });
  } catch (error) {
    console.error(error);
    // Return an error response
    return NextResponse.json({
      success: false,
      error: 'Oops! It seems there was an internal server error while submitting your message. Please try again later.',
    });
  }
}
