import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODV_URI;
let cached = (global as any).mongoose || { conn: null, promise: null} ;

export const connectToDatabase=async () => {
    if(cached.conn) return cached.conn;
    
    if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI,
                { dbName: 'Cluster0',
                  bufferCommands: false,
                }) // if not functioning properly check the database name in mongodb.com

                cached.conn = await cached.promise;
                return cached.conn;
            }


            