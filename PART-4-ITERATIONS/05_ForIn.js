//For-In

const lang = {
    js : "javaScript",
    py : "python",
    rb : "rubby",
    swift : "Swift by Apple"
}
for(const key in lang){
    console.log(`Extension is: ${key}`);        //js py rb swift
}



let lang2 = ["java", "python", "rubby", "javaScript", "swift"];
for(const key in lang2){
    console.log(key);          //0 1 2 3 4
}