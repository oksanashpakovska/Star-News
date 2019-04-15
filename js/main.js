window.addEventListener("load", Init);

function Init() {
  console.log("Init");
  var apiKey = "18f1c87e444741aca30db0a569bba999";
 // var category = ["sports", "entertainment",  "science", "technology"];
  var category = ["sports", "entertainment", "science", "business", "technology", "health"];
  var callbackFunction = [
    { news: sportsNews },
    { news: entertainmentNews },
    { news: scienceNews },
    { news: businessNews },
    { news: technologyNews },
    { news: healthNews }
  ];

  for (var i = 0; i < category.length; i++) {
    Request(category[i], apiKey, callbackFunction[i].news);
  }
}

function Request(category, apiKey, callback) {
  var url = `https://newsapi.org/v2/top-headlines?country=ua&category=${category}&apiKey=${apiKey}`;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      var errStatus = xhr.status;
      var errText = xhr.statusText;
      console.log(errStatus + ": " + errText);
    } else {
      var data = JSON.parse(xhr.responseText);
      //console.log(data);
      callback(data);
    }
  };
}

function sportsNews(news) {
  console.log("sportsNews", news.articles);
  var sportElem = document.querySelector("#sport");
  for (var i = 0; i < 5; i ++){
    var h3 = document.createElement('h3');

    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    sportElem.appendChild(h3);
    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    sportElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    sportElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    sportElem.appendChild(author);
    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    sportElem.appendChild(publishedAt);
  }
}

function scienceNews(news) {
  console.log("scienceNews", news.articles);
  var scienceElem = document.querySelector("#science");
  for (var i = 0; i < 5; i++) {
    var h3 = document.createElement('h3');

    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    scienceElem.appendChild(h3);
    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    scienceElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    scienceElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    scienceElem.appendChild(author);
    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    scienceElem.appendChild(publishedAt);
  }
}

function entertainmentNews(news) {
  console.log("entertainmentNews", news.articles);
  var entertainmentElem = document.querySelector("#entertainment");
  for (var i = 0; i < 5; i++) {
    var h3 = document.createElement('h3');

    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    entertainmentElem.appendChild(h3);
    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    entertainmentElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    entertainmentElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    entertainmentElem.appendChild(author);
    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    entertainmentElem.appendChild(publishedAt);
  }
}
function businessNews(news) {
  console.log("businessNews", news.articles);
  var businessElem = document.querySelector("#business");
  for (var i = 0; i < 5; i++) {
    var h3 = document.createElement('h3');

    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    businessElem.appendChild(h3);
    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    businessElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    businessElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    businessElem.appendChild(author);
    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    businessElem.appendChild(publishedAt);
  }
}

function technologyNews(news) {
  console.log("technologyNews", news.articles);
  var technologyElem = document.querySelector("#technology");
  for (var i = 0; i < 5; i++) {
    var h3 = document.createElement('h3');

    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    technologyElem.appendChild(h3);
    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    technologyElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    technologyElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    technologyElem.appendChild(author);
    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    technologyElem.appendChild(publishedAt);
  }
}

function healthNews(news) {
  console.log("healthNews", news.articles);
  var healthElem = document.querySelector("#health");
  for (var i = 0; i < 5; i++) {
    var h3 = document.createElement('h3');

    h3.className = "newsTitle";
    h3.innerHTML = news.articles[i].title;
    healthElem.appendChild(h3);
    var img = document.createElement("img");
    img.setAttribute("src", news.articles[i].urlToImage);
    img.setAttribute("alt", news.articles[i].title);
    img.className = "newsImg"
    healthElem.appendChild(img);

    var desc = document.createElement("p");
    desc.className = "newsArticle";
    desc.innerHTML = news.articles[i].description;
    healthElem.appendChild(desc);

    var author = document.createElement("span");
    author.className = "newsAuthor";
    author.innerHTML = news.articles[i].author;
    healthElem.appendChild(author);
    var publishedAt = document.createElement("span");
    publishedAt.className = "newsPublishedAt";
    publishedAt.innerHTML = news.articles[i].publishedAt;
    healthElem.appendChild(publishedAt);
  }
}

//function entertainmentNews(news) {
    //console.log("entertainmentNews", news);
//}

// function healthNews(news) {
//     console.log("healthNews", news);
// }

// function scienceNews(news) {
//     console.log("scienceNews", news);
// }

// function technologyNews(news) {
//     console.log("technologyNews", news);
// }
