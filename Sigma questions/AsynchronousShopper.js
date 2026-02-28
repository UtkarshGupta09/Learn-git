async function placeOrder() {
  const randomDelay = Math.floor(Math.random() * 7) + 1;
  const confirmOrder = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Confirm Order");
    }, 1000 * randomDelay);
  });

  let confirmMessage = await confirmOrder;
  return confirmMessage;
}
placeOrder().then((res) => {
  console.log(res);
});
