
  /* JavaScript Sync vs Async + Callback + Promise + Async/Await
  Event Loop + Microtask + Macrotask – 
*/

console.log("=== START ===");

/* =======================
   1 Synchronous Code
   ======================= */
//  Sync code line by line execute hota hai (blocking)
console.log("1. Sync Start");

function syncTask() {
  console.log("2. Sync Task Running");
}

syncTask();
console.log("3. Sync End");

/* =======================
   Asynchronous Code (setTimeout)
   ======================= */
// ➤ Async code background me jata hai, baad me execute hota hai

console.log("\n4. Async Start");

setTimeout(() => {
  console.log("6. Async Task (setTimeout)");
}, 0);

console.log("5. Async End");

/* =======================
    Callback Function
   ======================= */
//  Callback ek function hota hai jo dusre function ko pass karte hain

function getDataCallback(name, callback) {
  console.log("\n7. Getting data for:", name);

  setTimeout(() => {
    callback(`8. Data received for ${name}`);
  }, 1000);
}

getDataCallback("Sumit", function (result) {
  console.log(result);
});

/* =======================
    Promise
   ======================= */
// ➤ Promise future value ko represent karta hai
// ➤ States: pending → fulfilled / rejected

function getDataPromise() {
  return new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
      if (success) {
        resolve("\n9. Promise Resolved: Data mil gaya");
      } else {
        reject("Promise Rejected: Error aa gaya");
      }
    }, 1500);
  });
}

getDataPromise()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/* =======================
   Async / Await
   ======================= */
// ➤ Async function Promise return karta hai
// ➤ Await promise ke resolve hone ka wait karta hai

async function getDataAsyncAwait() {
  console.log("\n10. Async/Await Start");

  try {
    const result = await getDataPromise(); // yahan wait hoga
    console.log("11.", result);
  } catch (error) {
    console.log("Error:", error);
  }

  console.log("12. Async/Await End");
}

getDataAsyncAwait();

/* =======================
    Event Loop, Microtask, Macrotask
   ======================= */
// ➤ Promise.then → Microtask Queue
// ➤ setTimeout → Macrotask Queue

console.log("\n13. Event Loop Demo Start");

setTimeout(() => {
  console.log("16. setTimeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("15. Promise.then (Microtask)");
});

console.log("14. Event Loop Demo End");

/* =======================
   Real Life Example: API Simulation
   ======================= */

function fakeAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("\n17. API Data Loaded Successfully 🚀");
    }, 2000);
  });
}

async function loadData() {
  console.log("18. Loading Data...");

  const data = await fakeAPI();
  console.log(data);

  console.log("19. Data Show on UI");
}

loadData();

/* =======================
   END
   ======================= */
console.log("\n=== END ===");
