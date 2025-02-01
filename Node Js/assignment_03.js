const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(5);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  if (usernameResponse.success || passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword
  );
  return signature;
}

function verifyJwt(token) {
  let ans = true;

  try {
    jwt.verify(token, jwtPassword);
  } catch (e) {
    ans = false;
  }
  return ans;
}

const ans = verifyJwt("vikash");
console.log(ans);

function decodeJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}

console.log(
  decodeJwt(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmlrYXNoIiwiYWNjb3VudE51bWJlciI6IjEyMzMyMSIsImlhdCI6NjU1Nzc1NjU2NDZ9.w5l-8PPungIvMSULkHXrsX7-5RIJl0fJ6TNr6bgnLik"
  )
);
