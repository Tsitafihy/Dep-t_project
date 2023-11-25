//Search method
http://localhost:3000/api/search?value1=some_value1&value2=some_value2, 
router.get('/search', async (req, res) => {
  const { value1, value2 } = req.query;

  try {
    const query = 'SELECT * FROM your_table WHERE column1 = $1 AND column2 = $2';
    const result = await pool.query(query, [value1, value2]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;