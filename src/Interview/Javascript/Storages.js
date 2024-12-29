// COOKIES VS LOCAL STORAGE VS SESSION STORAGE

// LOCAL STORAGE

// localStorage.clear();
// localStorage.setItem("key1", "value1");
// const value2 = {
//   a: 2,
//   b: 10,
// };
// localStorage.setItem("key2", JSON.stringify(value2));

// console.log(localStorage.getItem("key1"));
// console.log(JSON.parse(localStorage.getItem("key2")));

// -----------------------------------------------------------------------------

// SESSION STORAGE

// sessionStorage.clear();
// sessionStorage.setItem("key1", "value1");
// const val2 = {
//   a: 2,
//   b: 10,
// };
// sessionStorage.setItem("key2", JSON.stringify(val2));

// console.log(sessionStorage.getItem("key1"));
// console.log(JSON.parse(sessionStorage.getItem("key2")));

// -----------------------------------------------------------------------------

// COOKIES

// document.cookie = "name=Kylie";
// document.cookie =
//   "lastName=Smith; expires=" + new Date(9999, 0, 1).toUTCString();

// console.log(document.cookie);

// -----------------------------------------------------------------------------

/* 
Q.) where to store tokens? App state or cookies or local storage or session storage, give reasons for your answer
Ans.) Cookies

Explanation - App State (In-memory): Store short-lived session data like access tokens. It’s secure but not persistent across page reloads.

Cookies: Store long-term session data (e.g., refresh tokens) with the HttpOnly, Secure, and SameSite flags to protect against XSS and CSRF. cookies are also sent with every network request

Local Storage: Store non-sensitive, persistent data (e.g., settings, user preferences). Avoid storing sensitive information like tokens due to vulnerability to XSS.

Session Storage: Store temporary session data that should only persist during the current browser session.

Use cookies for security (for sensitive tokens) and App state for short-term data management.

*/
