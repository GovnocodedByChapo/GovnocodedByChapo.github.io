const sampQuery = require('samp-query')

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let rooms = {}
let vacs = {
    statistics: {
        ['userId']: {
            
        }
    }
}

app.get('/api/msgtrade/get-messages-in-chat', function(req, res) {
    if (!checkRoom(data.room)) {
        return res.status(200).json({
            status: 'error',
            message: 'invalid_room_code'
        })
    } 
    const code = req.query.room;
    res.status(200).json(rooms[code]);
});

app.get('/api/msgtrade/get-rooms', function(req, res) {
    res.send(
        {'list': Object.keys(rooms)}
    );
});

app.post('/api/msgtrade/send-message', (req, res) => {
    const data = req.body;
    if (!checkRoom(data.room)) {
        return res.status(200).json({
            status: 'error',
            message: 'invalid_room_code'
        })
    } 

    if (!data.name || !data.text) {
        return res.status(200).json({
            status: 'error',
            message: 'invalid_name_or_text'
        })
    }

    rooms[data.room].push({
        name: data.name,
        text: data.text
    })
    console.log(rooms)
    return res.status(200),json({
        status: 'ok',
        message: 'successful',
        room: data.room,
        id: rooms[data.room].length,
        first_message: rooms[data.room].length == 1
    });
})

app.get('/api/scripts/vacs/statistics', (req, res) => {
    const data = req.query;
    if (!data.id || data.id.length != 8) {
        return res.status(400).json({
            status: 'error',
            message: 'invalid id'
        })
    }
    vacs.statistics[data.id] = vacs.statistics[data.id]++;
})

const post_assert = (res, body, requiredParams) => {
    for (const field of Object.keys(requiredParams)) {
        if (!body[field]) {
            return res.status(400).json({
                status: 'error',
                message: `field ${field} is required`
            }) 
        }
    }
}

app.post('/contact/send-report', (req, res) => {
    post_assert(res, req.body, ['title', 'text'])
    console.log('message:', title, text)
    // send message in telegram
    return res.status(200).json({
        status: 'ok',
        message: 'message sended'
    })
})

app.get('/api/samp/get-server-info', (req, res) => {
    return res.status(403).json({
        status: 'error',
        message: 'use POST method'
    })
})

app.post('/api/samp/get-server-info', (req, res) => {
    const data = req.body;
    if (!data.ip || !data.port) {
        return res.status(200).json({
            status: 'error',
            message: 'ip_or_port_not_provided'
        })
    }
    sampQuery({host: data.ip, port: +data.port, timeout: data.timeout ?? 1000}, (error, response) => {
        return res.status(error ? 400 : 200).json({
            status: error ? 'error' : 'ok',
            message: error ? error : response
        })
    })
})

const checkRoom = (code) => {
    return (code)
}

app.listen(3000);


