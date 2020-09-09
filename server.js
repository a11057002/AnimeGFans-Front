const express = require('express')
const fs = require('fs')
const app = express()
const cors = require('cors')
const iconv = require('iconv-lite')

const MongoClient = require('mongodb').MongoClient
const uri =
	'mongodb+srv://andy:andy1234@cluster0.cqw8j.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect()
app.use(cors())
app.get('/', async (req, res) => {
	res.setHeader('Content-Type', 'application/json')
	const collection = client.db('Anime').collection('Video')
    const data = await collection.find({ head: { $exists: true } }).toArray()
	res.json(data)
	// fs.readdir('../../video/', (err, files) => {
	//  end = []
	// 	files.forEach((file) => {
	// 		end.push({ title: file })
	// 	})
	// 	res.json(end)
	// })
})

app.get('/video/:id', async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const collection = client.db('Anime').collection('Video')
    const data = await collection.find({ head:req.params.id }).toArray()
    const video = await collection.find({ parent: data[0]._id }).toArray()
	res.json(video)
	// end = []
	// fs.readFile('../../video/' + req.params.id + '/video.txt', (err, data) => {
	// 	data = iconv.decode(data, 'big5')
	// 	var x = data.split('\r\n')

	// 	x.forEach((file) => {
	// 		end.push({ title: file.split('\t')[0], url: file.split('\t')[1] })
	// 	})
	// 	res.json(end)
	// })
})

app.listen(5567, () => {
	console.log('listen at port 5567')
})
