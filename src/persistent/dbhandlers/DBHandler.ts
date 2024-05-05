import { Collection, Db, Document, MongoClient, WithId } from "mongodb";

const hostName:string = "localhost";
const port:string = "27017";
const url:string = `mongodb://${hostName}:${port}`
const dbName:string = "viva-coffee";

//interface 
export interface AccessCollection{
    connection: MongoClient
    collection: Collection;
    db: Db;
}

export async function accessCollection(collectionName :string) :Promise<AccessCollection> {
    //Connect to MongoDB
    try{
        var connection: MongoClient = await MongoClient.connect(url);
    }catch(error :any){
        throw error;
    }
    
    const db: Db =  connection.db(dbName);

    //Access to collection
    const collection: Collection<Document> = db.collection(collectionName);

     //Return de su dung tiep tung db,collec
    return {connection, db, collection}
}

//Convert document
export function convertDocument<T>(document:WithId<Document>, pattern: T): T{
    const result: any = {}

    //convert document
    // chuyen du lieu tho thanh kieu du lieu ro rang

    for(let fieldName in pattern){ //quet qu tung fied cua pattern
        result[fieldName] = document[fieldName];
    }

    return result;
}

