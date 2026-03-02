const btn = document.querySelector("#tokenManager");

function setAuthToken(token, expireAt) {
 let obj = {token,expireAt}
 let data = JSON.stringify(obj)
 localStorage.setItem("authToken", data);
}

btn.addEventListener("click", () => {
  let data = prompt("Enter the Auth Token:");
  let expireAt = Date.now() + 60 * 60 * 1000;
  if (!data || !data.trim()) return;
  setAuthToken(data, expireAt);
});
