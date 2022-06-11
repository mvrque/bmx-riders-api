const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());

const BMXriders = {
    'anthony perrin':{
        'birthName': 'Anthony Perrin',
        'age': 28,
        'style': 'Street',
        'sponsors': ['KinkBmx', 'TheCutBmx', 'Vans', 'PlantsBasically', 'Mariejade'],
        'birthLocation': 'Tarare, France',
        'instagram': 'https://www.instagram.com/anthonyperrin__/',
        'imageUrl': 'https://www.fise.fr/sites/default/files/styles/rider_picture/public/resources/images/---20190528152245.jpg?itok=CHKhfBwD'
    },
    'alex kennedy':{
        'birthName': 'Alex Kennedy',
        'age': 32,
        'style': 'Street',
        'sponsors': ['Cult Crew', 'Eclat', 'Nyishar Organic Health Products'],
        'birthLocation': 'Croydon, United Kingdom',
        'instagram': 'https://www.instagram.com/a369k/',
        'imageUrl': 'https://session-admin.session.ee/wp-content/uploads/2019/11/Alex_Kennedy-1-683x1024.jpg'
    },
    'boyd hilder':{
        'birthName': 'Boyd Hilder',
        'age': 26,
        'style': 'Park',
        'sponsors': ['Federal Bikes', 'Odyssey', 'Vans', 'LuxBMX', 'S1 Helmets'],
        'birthLocation': 'Gold Coast, Australia',
        'instagram': 'https://www.instagram.com/boydhilder/',
        'imageUrl': 'https://session.ee/2019/wp-content/uploads/2018/12/Boyd-Hilder-683x1024.png'
    },
    'martti lainevool':{
        'birthName': 'Martti Lainevool',
        'age': 22,
        'style': 'Street',
        'sponsors': ['Stress BMX', 'ParBMX', 'Vans', 'FTL', 'ELINARTTATTOO'],
        'birthLocation': 'Tartu, Estonia',
        'instagram': 'https://www.instagram.com/marttilainevool/',
        'imageUrl': 'https://session.ee/2019/wp-content/uploads/2016/04/Martti_Lainevool-1-683x1024.jpg'
    },
    'garrett reynolds':{
        'birthName': 'Garrett Reynolds',
        'age': 31,
        'style': 'Street',
        'sponsors': ['Red Bull', 'FiendBMX', 'CinemaBMX', 'Deadlinecrew', 'The Trip Apparel', 'Cluutshow'],
        'birthLocation': 'Toms River, New Jersey',
        'instagram': 'https://www.instagram.com/reynoldsfiend/',
        'imageUrl': 'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/07/25/e9e58146-209c-44e3-a630-c0df2d478d01/garrett-reynolds-summer-x-games-2018'
    },
    'courage adams':{
        'birthName': 'Courage Adams',
        'age': 26,
        'style': 'Street',
        'sponsors': ['Red Bull', 'Fly Bikes', 'Vans', 'Animal Bikes'],
        'birthLocation': 'Pamplona, Spain',
        'instagram': 'https://www.instagram.com/courageadams/',
        'imageUrl': 'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2022/5/1/gf9f50upmm6fwlzisvhb/courage-adams-portrait'
    },
    'billy perry':{
        'birthName': 'Billy Perry',
        'age': 26,
        'sponsors': ['Red Bull', 'Fly Bikes', 'Vans', 'Animal Bikes'],
        'birthLocation': 'Pamplona, Spain',
        'instagram': 'https://www.instagram.com/billyperry631/',
        'imageUrl': 'https://i.ytimg.com/vi/7qbi4NPb1yk/maxresdefault.jpg'
    },

    'unknown':{
        'birthName': 'unknown',
        'age': 'unkown',
        'sponsors': 'unknown',
        'birthLocation': 'unknown',
        'instagram': 'unknown'
    }
}

//respond with html home page
app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
});

//get all riders
app.get('/api', (require, response) => {
    response.json(BMXriders)
})

//get a rider by his/her name
app.get('/api/:riderName', (request, response) => {
    const ridersName = request.params.riderName.toLowerCase();
    if(BMXriders[ridersName]){
        response.json(BMXriders[ridersName])
    }else{
        response.json(BMXriders['unknown'])
    }
    // response.json(BMXriders)
})

app.listen(process.env.PORT || PORT , () =>{
    console.log('Your server is running. Go catch it!')
})
