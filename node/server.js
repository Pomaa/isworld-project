const express = require('express');
const bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var cors = require('cors');


const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())


const database = {
	users: [
		{
			id: '123',
			firstName: 'John',
			lastName: 'Doe',
			email: 'john@gmail.com',
			password: 'cookies',
			entries: 0,
			joined: new Date()
		},

		{
			id: '124',
			firstName: 'Sally',
			lastName: 'Moe',
			email: 'sally@gmail.com',
			password: 'bananas',
			entries: 0,
			joined: new Date()
		}

	],
	login: [
		{
			id:'987',
			hash: '',
			email: 'john@gmail.com'
		}



		]
}

app.get('/', (req, res)=> {
	res.send(database.users);
})

app.post('/login', (req, res)=> {
	if(req.body.email === database.users[0].email &&
		req.body.password === database.users[0].password){
		res.json('success');
	}else{
		res.status(400).json('error loggin in');
	}
})

app.post('/signup', (req, res)=>{
	const{ email, firstName, lastName, password } =req.body;
	

	database.users.push({
			id: '125',
			firstname: firstName,
			lastname: lastName,
			email: email,
			password: password,
			entries: 0,
			joined: new Date()	
	})

	res.json(database.users[database.users.length-1]);
})


app.get('/profile/:id', (req, res)=>{
const{id} = req.params;

database.users.forEach(user =>{
	let found = false;
	if(user.id === id){
		found = true;
		return res.json(user);
	}

})
if(!found){
	res.status(404).json('user not found');
}

})



/*

bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash);
    });
});

// Load hash from your password DB.
bcrypt.compare("B4c0/\/", hash, function(err, res) {
    // res === true
});
bcrypt.compare("not_bacon", hash, function(err, res) {
    // res === false
});
 
// As of bcryptjs 2.4.0, compare returns a promise if callback is omitted:
bcrypt.compare("B4c0/\/", hash).then((res) => {
    // res === true
});
*/








app.listen(3000, () => {

	console.log('app is running on port 3000')
})