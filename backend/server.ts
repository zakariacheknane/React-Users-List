import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const PORT = 3001;
const cors = require("cors");
app.use(cors());
app.get('/users', async (req: Request, res: Response) => {
    try {
        // Fetch user data from 'https://dummyjson.com/users'
        const { data } = await axios.get('https://dummyjson.com/users');
        const users = data.users; 
         // Filter users based on the search term
        const searchTerm = req.query.search;
        const filteredUsers = searchTerm ? users.filter((user: any) => user.firstName.includes(searchTerm)) : users;
        // Respond with the filtered users
        res.json(filteredUsers);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export { app };