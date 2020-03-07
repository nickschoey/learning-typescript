import { Response, Request, NextFunction } from 'express';
import { get, controller, use } from './decorators';

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request!');
  next();
}

@controller('/auth')
class LoginController {
  @use(logger)
  @get('/login')
  getLogin(req: Request, res: Response): void {
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
  }
}
