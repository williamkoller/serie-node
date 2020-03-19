# Node Auth

## Api Rest w/ authentication

Using Bcryptjs

```
UserSchema.pre("save", async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

```

### Using Docker

```
docker pull tutum/mongodb

docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb

```
