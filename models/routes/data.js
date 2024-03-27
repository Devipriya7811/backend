
//auth
app.post('/save-data', (req, res) => {
    const newData = new DataModel({
        data: req.body.data
    });

    newData.save()
        .then(savedData => {
            console.log('Data saved:', savedData);
            res.status(200).send('Data saved successfully');
        })
        .catch(err => {
            console.error('Error saving data:', err);
            res.status(500).send('Error saving data');
        });
});