let subject  = ["him","I","they","us","Vuyisa","Ayabonga","Mihlali","Bongani","she","her"];
let verb = ["walks","reads","likes","dances","eats","jumps","talks","loves","hates"];
let object = ["spagheti","books","writing code","my girlfriend","playing playstation","calling my aunt"];
let prepositional = ["on mondays","during the night","after Raw","on saturday","in the evening","for my friends",
"because of my mom","while I am asleep","during office hours"];

let simple = {
    sub: subject,
    ver: verb,
    obj: object,
    pre: prepositional
};

function generateSimple(obj){
    let form = Math.floor(Math.random() * 3) + 1;
    let lensub = obj.sub.length;
    let lenver = obj.ver.length;
    let lenobj = obj.obj.length;
    let lenpre = obj.pre.length;
    let object = obj.sub[Math.floor(Math.random() * lensub)]
    let sentence = "";
    switch(form){
        case 1:
            sentence = object[0].toUpperCase() + object.substring(1) + " " + obj.ver[Math.floor(Math.random() * lenver)] + ".";
            break;
        case 2:
            sentence = object[0].toUpperCase() + object.substring(1) + " " + obj.ver[Math.floor(Math.random() * lenver)] + " "
            + obj.obj[Math.floor(Math.random() * lenobj)] + ".";
            break;
        default:
            sentence = object[0].toUpperCase() + object.substring(1) + " " + obj.ver[Math.floor(Math.random() * lenver)] + " "
            + obj.obj[Math.floor(Math.random() * lenobj)] + " " +  obj.pre[Math.floor(Math.random() * lenpre)]  + ".";
            break;
    }
    return sentence;
}

console.log(generateSimple(simple));