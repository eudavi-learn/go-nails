import User from '../models/User';

import UserSerializer from '../serializers/UserSerializer';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const user = await User.create(req.body);

    return res.json(new UserSerializer(user).serialized());
  }
}

export default new UserController();
