const GrabText = async (file) => {
    let textfile = await fetch(file);
    let abouttext = await textfile.text();
    let textarrayindex = 0;
    const textarray = new Array(aboutpictures.length);
    for (j = 0; j < textarray.length; j++) {
      textarray[j] = [];
    }
    console.log(textarray);
    var compiledtexts = [];
    while (textarrayindex < aboutpictures.length) {
      for (i = 0; i < abouttext.length; i++) {
        if (abouttext[i] == "@") {
          compiledtexts.push(String(textarray[textarrayindex].join("")));
          console.log(compiledtexts[textarrayindex]);
          textarrayindex++;
          console.log(textarrayindex);
          continue;
        }
  
        textarray[textarrayindex].push(String(abouttext[i]));
        console.log(textarray[textarrayindex]);
      }
    }
    localStorage.setItem("AboutMe", JSON.stringify(compiledtexts));
    console.log(JSON.parse(localStorage.getItem("AboutMe")));
    return JSON.parse(localStorage.getItem("AboutMe"));
}

export default GrabText;