fetch("./book.json")
  .then(Response => {
    return Response.json();
  })
  .then(data => {
    appendData(data);
  })
  .catch(err => {
    console.log(err);
  });
function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.books.length; i++) {
    var div = document.createElement("div");
    div.innerHTML =
      "books : " +
      data.books[i].isbn + "<br/>" +
      " Title :" +
      data.books[i].title + "<br/>" +
      " subtitle :" +
      data.books[i].subtitle + "<br/>" +
      "author :" +
      data.books[i].author + "<br/>" +
      "published : " +
      data.books[i].published + "<br/>" +
      " publisher :" +
      data.books[i].publisher + "<br/>" +
      "pages :" +
      data.books[i].pages + "<br/>" +
      " websites :" +
      data.books[i].website + "<br/>" + "<br/>" ;
    mainContainer.appendChild(div);
  }
}
