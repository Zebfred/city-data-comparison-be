const router = require('express').Router();
const axios = require('axios');

const token = 'p4qIBpVGeKPzmtJRAraHRIECiSNqRtn3YIMyLdeigKNlfZMbZsXpgbJGT6FRR15wl90efU1cxFIYQvrUOz9MDv6qoCnpDVGF7R6JDmSmwGOiW32kOkvJnfOpmHFhXnYx'

const config = {
    headers: {
        Authorization: 'Bearer ' + token  
    }
}

router.get('/restaurant/:latitude/:longitude', async (req, res) => {
    const info = await req.params

    axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${info.latitude}&longitude=${info.longitude}&categories=restaurants`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/events/:latitude/:longitude', async (req, res) => {
    const info = await req.params
    const time = Math.floor(Date.now() / 1000)

    axios.get(`https://api.yelp.com/v3/events?latitude=${info.latitude}&longitude=${info.longitude}&limit=20&start_date=${time}`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/categories/musicvenues/:latitude/:longitude', async (req, res) => {
    const info = await req.params

    axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${info.latitude}&longitude=${info.longitude}&limit=20&categories=musicvenues`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/categories/coffee/:latitude/:longitude', async (req, res) => {
    const info = await req.params

    axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${info.latitude}&longitude=${info.longitude}&limit=20&categories=coffee`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/categories/tours/:latitude/:longitude', async (req, res) => {
    const info = await req.params

    axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${info.latitude}&longitude=${info.longitude}&limit=20&categories=tours`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/categories/museums/:latitude/:longitude', async (req, res) => {
    const info = await req.params

    axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${info.latitude}&longitude=${info.longitude}&limit=20&categories=museums`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/categories/theater/:latitude/:longitude', async (req, res) => {
    const info = await req.params

    axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${info.latitude}&longitude=${info.longitude}&limit=20&categories=theater`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/categories/sportsteams/:latitude/:longitude', async (req, res) => {
    const info = await req.params

    axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${info.latitude}&longitude=${info.longitude}&limit=20&categories=sportsteams`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/categories/parks/:latitude/:longitude', async (req, res) => {
    const info = await req.params

    axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${info.latitude}&longitude=${info.longitude}&limit=20&categories=parks`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/categories/active/:latitude/:longitude', async (req, res) => {
    const info = await req.params

    axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${info.latitude}&longitude=${info.longitude}&limit=20&categories=active`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/categories/social_clubs/:latitude/:longitude', async (req, res) => {
    const info = await req.params

    axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${info.latitude}&longitude=${info.longitude}&limit=20&categories=social_clubs`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/categories/fashion/:latitude/:longitude', async (req, res) => {
    const info = await req.params

    axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${info.latitude}&longitude=${info.longitude}&limit=20&categories=fashion`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/categories/furniture/:latitude/:longitude', async (req, res) => {
    const info = await req.params

    axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${info.latitude}&longitude=${info.longitude}&limit=20&categories=furniture`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/categories/hardware/:latitude/:longitude', async (req, res) => {
    const info = await req.params

    axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${info.latitude}&longitude=${info.longitude}&limit=20&categories=hardware`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/categories/hotels/:latitude/:longitude', async (req, res) => {
    const info = await req.params

    axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${info.latitude}&longitude=${info.longitude}&limit=20&categories=hotels`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/categories/publicservicesgovt/:latitude/:longitude', async (req, res) => {
    const info = await req.params

    axios.get(`https://api.yelp.com/v3/businesses/search?latitude=${info.latitude}&longitude=${info.longitude}&limit=20&categories=publicservicesgovt`, config)
        .then(response => {
            // console.log(response.data)
            res.status(200).json(response.data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router