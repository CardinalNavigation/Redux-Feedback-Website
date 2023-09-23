const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// router.get('/', (req, res) => {
//     pool.query('SELECT * FROM "feedback";').then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('Error GET /feedback', error);
//         res.sendStatus(500);  
//     });
// })

router.post('/', async (req, res) => {
    const client = await pool.connect();

    try {
        const {
            feeling,
            understanding,
            support,
            comments,
            flagged,
            date,
        } = req.body;
        await client.query('BEGIN')
        const orderInsertResults = await client.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged", "date")
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id;`, [feeling, understanding, support, comments, flagged, date]);
        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /feedback', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});

module.exports = router;