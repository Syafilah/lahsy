async function main(){
 /**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
 const uri = "mongodb+srv://NurSyafika:Hermitrecluse2@cluster0.n3zabmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
 const {MongoClient}=require('mongodb');
 const client = new MongoClient(uri);
 try {
 // Connect to the MongoDB cluster
 await client.connect();
 // Make the appropriate DB calls
 await listDatabases(client);
 } catch (e) {
 console.error(e);
 } finally {
 await client.close();
 }
}
main().catch(console.error);

function listDatabases(client: any) {
    throw new Error("Function not implemented.");
}
