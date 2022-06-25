// import fetch from "node-fetch";

const download = document.getElementById("download");
const link = document.getElementById("url");


function fetchRes(){
    let url = link.value;

  fetch(url)  //fetching the file
    .then((res) => res.blob()) //returning the response of fetch as a blob
    .then((file) => {
      //creating the url of the object URL.createObjectURL() will create the url of passed object
      let tempUrl = URL.createObjectURL(file);
      let aTag = document.createElement('a');
      aTag.href = tempUrl;  //giving tempUrl as the href to a tag
      aTag.download = "fileName"; //giving the name to the file that downloads in this case te name of the file will we filename
      document.body.appendChild(aTag);//adding aTag to body
      aTag.click(); //clicking the aTag virtually
      aTag.remove();  //removing the aTag after file downloaded
    });
}

download.addEventListener("click", fetchRes);

