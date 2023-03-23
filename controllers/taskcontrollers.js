var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

let counter = 0;
localStorage.clear()

const Create = (req, res) => {
    counter++;
    localStorage.setItem(counter,JSON.stringify(req.body));
    res.status(200).json({ success: true});
}

const Delete = (req, res) => {
    console.log(req.params.id);
    localStorage.removeItem(req.params.id);
    res.status(200).json({ success: true})
}

const Save = (req, res) => {
    localStorage.setItem(req.params.id,JSON.stringify(req.body));
    res.status(200).json({ success: true})
}

module.exports = {
    Create,
    Delete,
    Save,
}