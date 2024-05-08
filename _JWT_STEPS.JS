/**
 * JWT: secure your api
 * ---------------------------------------
 *              CREATE TOKEN
 * --------------------------------------
 * 1. client: after user login send user basic info to create token
 *
 * 2. in the server side: install npm i jsonwebtoken
 * 3. import jsonwebtoken
 * 4. jwt.sign(payload, secret, {expires} )
 * 5. return token to the client side
 *
 * 6. after receiving the token store it either http only cookies or local storage (second best solution)
 *
 * 7. use a general space onAuthStateChange > AuthProvider
 * -------------------------------------
 *              SEND TOKEN TO SERVER
 * ---------------------------------------
 * 1. for sensitive api call ( ) send authorization headers
 *  { authorization: 'Bearer token'}
 *
 * -------------------------------------
 *              VERIFY TOKEN
 * --------------------------------------
 *
 * 1. Create a function called verifyJWT (middleware)
 * 2. this function will have three params: req, res, next
 * 3. First check whether the authorization headers exists
 * 4. if not send 401
 * 5. get the token out of the authorization header
 * 6. call jwt.verify(token, secret, (err, decoded))
 * 7. if err => send 401
 * 8. set decoded to the req object so that we can retrieve it later
 * 9. call the next() to go to the next function
 *
 * -----------------------
 * 1. check wether token has the email that matches with the request email
 *
 */

// require("crypto").randomBytes(64).toString("hex");
/**
 * ---------------------------
 *      MAKE API SECURE
 * ---------------------------
 * The person who should have
 *
 * concept:
 * 1. assign two tokens for each person (access token, refresh token)
 * 2. access token contains: user identification (email, role, etc.). valid for a shorter duration
 * 3. refresh token is used: to recreate an access token that was expired.
 * 4. if refresh is invalid then logout the user
 *
 *
 */

/**
 * 1. jwt --> json web token
 * 2. generate a token by using jwt.sign
 * 3. create api set to cookie. http only, secure, sameSite
 * 4. from client side: axios withCredentials true
 * 5. cors setup origin and credentials: true
 * app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
 *
 */

/**
 * 1. for secure api calls
 * 2. server side: install cookie parser and use it as a middleware
 * 3. req.cookies
 * 4. on the client side: make api call using axios withCredentials: true (or credentials include while using fetch)
 * 5.
 */
