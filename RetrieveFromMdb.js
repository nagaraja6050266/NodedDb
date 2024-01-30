const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://itzinr:Inr6050266@cluster.luvtjrd.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
async function main() {
    try {
        await client.connect();
        console.log('Connected to the MongoDB cluster');
        const database = client.db('FirstDB');
        const collection = database.collection('FirstCollection');
        const documents = await collection.find({}).toArray();
        console.log('Documents retrieved from MongoDB:');
        console.log(documents);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
        console.log('MongoDB connection closed');
    }
}
main();