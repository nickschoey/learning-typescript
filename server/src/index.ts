import express, { Response, Request } from 'express';

const app = express();

app.get('/', (req: Request, res: Response): void => {
  res.send(`
  <div>
    <h1>This works</h1>
  </div>
  `);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
