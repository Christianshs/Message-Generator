const messages = [{
    message:'“You can\’t believe everything you hear—but you can repeat it.”',
    by: '- Anonymous -'
}, {
    message:'“A gossip is a person who creates the smoke in which other people assume there\’s fire.”',
    by: '- Dan Bennett -'
}, {
    message:'“The only thing worse than being talked about is not being talked about.”',
    by: '- Oscar Wilde -'
}, {
    message:'“People can\’t drive you crazy if you don\’t give them the keys.”',
    by: '- Bechtle -'
}, {
    message:'“Sometimes you lie in bed at night and you don\’t have a single thing to worry about. That always worries me!”',
    by: '- Charlie Brown -'
}, {
    message:'“Keep your temper. Nobody else wants it.”',
    by: '- Dearborn Independent -'
}, {
    message:'“Never eat more than you can lift.”',
    by: '- Miss Piggy -'
}, {
    message:'“When the waitress asked if I wanted my pizza cut into four or eight slices, I said, \‘Four. I don\’t think I can eat eight.\'”',
    by: '- Yogi Berra -'
}, {
    message:'“I always cook with wine. Sometimes I even add it to the food.”',
    by: '- W.C. Fields -'
}, {
    message:'“Two things are infinite: the universe and human stupidity; and I\’m not sure about the universe.”',
    by: '- Albert Einstein -'
},]

let btn = document.querySelector("#MButton");
let message = document.querySelector(".message");
let by = document.querySelector(".by");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * messages.length);

    message.innerHTML = messages[random].message;

    by.innerHTML = messages[random].by;
})