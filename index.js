const express = require('express')
const app = express()
const options = {
	etag: false,
	lastModified: true,
}

var port = process.env.PORT || 3000
app.use(express.static('./cuttle-angular-ai', options))

app.get('/', (req, res) => {
	res.render('index.html');
});

app.listen(port, () => console.log("lifted app; listening on port " + port));