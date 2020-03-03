import { Router, Response, Request, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Forbidden');
}

const router = Router();

router.get('/', (req: Request, res: Response): void => {
  const { session } = req;
  if (session && session.loggedIn) {
    res.send(`
    <div>
      <div>You are logged In</div>
      <a href="/logout">Logout</a>
      </div>
      `);
  } else {
    res.send(`
      <div>
        <div>You are not logged in, you rascal</div>
        <a href="/login">login</a>
    </div>
    `);
  }
});

router.get('/login', (req: Request, res: Response): void => {
  res.send(`
  <form method="POST">
    <div>
      <label>Email</label>
      <input name="email"/>
    </div>
    <div>
      <label>Password</label>
      <input name="password" type="password"/>
    </div>
    <button>Submit</button>
  </form>
  `);
});
router.get('/logout', (req: Request, res: Response): void => {
  req.session = undefined;
  res.redirect('/');
});

router.post('/login', (req: RequestWithBody, res: Response): void => {
  const { email, password } = req.body;
  if (email && password && email === 'hi@hi.com' && password === 'pss') {
    //mark as logged in
    req.session = { loggedIn: true };
    //redirect to root route
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/protected', requireAuth, (req: Request, res: Response): void => {
  res.send(`
  <div>Super Duper Secret Wow!</div>
  `);
});

export { router };
