#!/usr/bin/env node
'use strict';

const PORT = process.env.PORT || 8080;

app.enable('trust proxy');
app.get('/', authenticate, params, proxy);
app.get('/favicon.ico', (req, res) => res.status(204).end());
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
