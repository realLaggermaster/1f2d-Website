fetch("./data/data.json")
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(data => {

        // News
        if (data.news) {
            document.getElementById("news-header").textContent = "News - " + data.news[0].date;
            document.getElementById("news-message").textContent = data.news[0].message;
        }

        // Change log
        if (data.changelog) {
            document.getElementById("change-log-header").textContent = "Change log - " + data.changelog[0].date;
            document.getElementById("change-log-message").textContent = data.changelog[0].message;
        }

        // Community videos
        if (data.videos.lastupdated) {
            document.getElementById("videos-date").textContent = "Last listed " + data.videos.lastupdated.date;
        }

        // Website last updated
        if (data.lastupdated) {
            document.getElementById("website-last-updated").textContent = "Website last updated " + data.lastupdated.date;
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });