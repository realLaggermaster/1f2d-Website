// fetch("./data/server_news.json")
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//     })
//     .then(news => {
//         document.getElementById("news-header").textContent = "News - " + news.Date;
//         document.getElementById("news-message").textContent = news.message;
//     })
//     .catch(error => {
//         document.getElementById("news-header").textContent = "News - " + "(could not get date)";
//         document.getElementById("news-message").textContent = "Could not get news";
//         console.error(error);
//     });