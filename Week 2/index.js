const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/sum', (req, res) => {
    const { a, b } = req.query;
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Both parameters must be valid numbers' });
    }
    const sum = parseFloat(a) + parseFloat(b);
    res.json({ sum });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
