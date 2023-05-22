import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (_, res: Response) => {
  return res.json({
    message:
      'Hi, professor! This would be a Node API with TypeScript. Please, gimme a 10!!!',
  });
});

app.listen(port, () => {
  console.log(`Server listening on ${port} ✨`);
});
