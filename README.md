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
