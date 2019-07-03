function get(req, res) {
    res.type('application/json');
    res.sendStatus(404);
}

module.exports = {
    get
};