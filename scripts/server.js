const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let rooms = {}

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



const checkRoom = (code) => {
    return (code)
}

app.listen(3000);