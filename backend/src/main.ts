import express from 'express';

const posts = [
    {title: "post 1", text: "post 1 text"},
    {title: "post 2", text: "post 2 text"},
    {title: "post 3", text: "post 3 text"},
    {title: "post 4", text: "post 4 text"},
    {title: "post 5", text: "post 5 text"},
    {title: "post 6", text: "post 6 text"},
    {title: "post 7", text: "post 7 text"},
]

const app = express();
app.use(express.json())
app.get('/ping', (req, res) => {
  res.send({result: "ok"});
});
app.use('/posts', (req, res) => {
    res.send(posts);
})

app.listen(4321, () => {
  console.info('Listening at http://localhost:4321');
});
