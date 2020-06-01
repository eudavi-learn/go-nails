class UserSerializer {
  constructor(attributes) {
    this.attributes = attributes;
  }

  serialized() {
    const {
      id, name, email, provider,
    } = this.attributes;

    return {
      id, name, email, provider,
    };
  }
}

export default UserSerializer;
