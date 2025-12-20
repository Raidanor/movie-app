import { Client, Databases, ID, Query, TablesDB } from "react-native-appwrite"


// track searches by user
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!
const TABLE_ID = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID!

const client = new Client()
    .setEndpoint("https://nyc.cloud.appwrite.io/v1")
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

const tablesDB = new TablesDB(client)


export const updateSearchCount = async(query: string, movie: Movie) => {
    // check if a record is found of that search has already been stored
    // if a document is found, increment the searchCount variable
    // if no document is found, create a new record in Appwrite database

    try {
        
        const result = await tablesDB.listRows({
            databaseId: DATABASE_ID,
            tableId: TABLE_ID,
            queries: [ Query.equal('searchTerm', [query])]
        })
        console.log("result: ", result)


        // if (result.rows.length == 0){
        //     const existingMovie = result.rows[0]

        //     await database.updateRow({
        //         databaseId: DATABASE_ID,
        //         tableId: TABLE_ID,
        //         rowId: existingMovie.$id,
        //         data: {
        //             count: existingMovie.count + 1,
        //         }
        //     } 
        //     )
        // } else {
        //     await database.createRow({
        //         databaseId: DATABASE_ID,
        //         tableId: TABLE_ID,
        //         rowId: ID.unique(),
        //         data: {
        //             title: movie.title,
        //             searchTerm: query,
        //             movie_id: movie.id,
        //             count: 1,
        //             poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        //         }
        //     } 
        //     )
        // }
    } catch (error) {
        console.log(error)
        throw error
    }


}