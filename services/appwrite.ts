import {Client, Databases, Query} from "react-native-appwrite"


// track searches by user
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!
const TABLE_ID = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID!

const client = new Client()
    .setEndpoint("https://cloud.addwrite.io/v1")
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

const database = new Databases(client)


export const updateSearchCount = async(query: string, movie: Movie) => {

    const result = await database.listDocuments(DATABASE_ID, TABLE_ID, [
        Query.equal('searchTerm', query)
    ])

    // check if a record is found of that search has already been stored
    // if a document is found, increment the searchCount variable
    // if no document is found, create a new record in Appwrite database

    console.log(result)


}