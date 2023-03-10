const url = "https://jsonplaceholder.typicode.com/posts";

async function fetchAsyncTodos() {
  console.log("Started....");
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  let text = "";
  for (let i = 0; i < 10; i++) {
    // userIdT = userId.toggle("1");
    text += `
  <div class="g_1"><a>UseId: ${data[i].userId}<br>ID: ${data[i].id}</br> ${data[i].body}</a></div>`;
  }
  document.getElementById("ulist").innerHTML = text;
}

fetchAsyncTodos();

// console.log(filter((data) => userId === 1));

// const dcopy = JSON.parse(JSON.stringify(url));
// console.log(dcopy);
