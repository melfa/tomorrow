const moment = require('moment-timezone');
const http = require('http');
const express = require('express');
const config = require('config.json');

express()
    .get('/tomorrow/:year-:month-:day', function (request, response) {
        const year = request.params.year;
        const month = request.params.month;
        const day = request.params.day;

        response.send(
            '<html><style>p { font-size: 30px; font-size: 10vw; position: fixed; top: 30%; left: 50%; transform: translate(-50%, -50%); }</style>' +
            '<body><p>' +
            moment().tz("Europe/Moscow").diff([year, month - 1, day], 'days') + '<br>days' +
            '</p></body></html>'
        );
    })
    .listen(config.port, '127.0.0.1');
