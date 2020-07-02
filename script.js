//array
var numbers = [
    [4,	5,	7,	8,	9,	1,	6,	7,	6,	1,	3,	9,	8,	7,	4],
    [7,	2,	3,	1,	6,	9,	5,	9,	8,	9,	4,	1,	1,	3,	9],
    [7,	9,	5,	6,	9,	6,	7,	3,	4,	3,	3,	9,	9,	7,	2],
    [3,	3,	5,	0,	6,	1,	8,	7,	1,	3,	6,	9,	9,	7,	6]
];
//needle
var needle = [2, 5, 0];

var result = [];

for (var x = 0; x < numbers.length; x++) {//numbers dimensionen durchgehen
    if (numbers[x].includes(needle[0])) {//testen ob in der ersten dimension index 0 von needle vorkommt
        for (var i = 0; i < numbers[x].length; i++) {//dann gehe jede zahl von numbers durch
            i = numbers[x].indexOf(needle[0], i);//nächste position von index 0 von needle
            if (i === -1) {
                break;
            } else {//wenn der erste index von needle an einer stelle gefunden wurde
                //nach rechts
                try {
                    for (let j = 1; j < needle.length; j++) {//testen ob das ganze needle array an dieser stelle vorhanden ist
                        if (needle[j] === numbers[x][i + j]) {
                            if (j + 1 === needle.length) {//wenn der loop bis zum letzten index von needle erfolgreich war
                                result[result.length] = [x, i, "nach rechts"];
                            }
                        } else {
                            break;
                        }
                    }
                } catch (e) {}
                //nach rechts - unten
                try {
                    for (let j = 1; j < needle.length; j++) {//testen ob das ganze needle array an dieser stelle vorhanden ist
                        if (needle[j] === numbers[x + j][i + j]) {
                            if (j + 1 === needle.length) {//wenn der loop bis zum letzten index von needle erfolgreich war
                                result[result.length] = [x, i, "nach rechts - unten"];
                            }
                        } else {
                            break;
                        }
                    }
                } catch (e) {}
                //nach unten
                try {
                    for (let j = 1; j < needle.length; j++) {//testen ob das ganze needle array an dieser stelle vorhanden ist
                        if (needle[j] === numbers[x + j][i]) {
                            if (j + 1 === needle.length) {//wenn der loop bis zum letzten index von needle erfolgreich war
                                result[result.length] = [x, i, "nach unten"];
                            }
                        } else {
                            break;
                        }
                    }
                } catch (e) {}
                //nach unten - links
                try {
                    for (let j = 1; j < needle.length; j++) {//testen ob das ganze needle array an dieser stelle vorhanden ist
                        if (needle[j] === numbers[x + j][i - j]) {
                            if (j + 1 === needle.length) {//wenn der loop bis zum letzten index von needle erfolgreich war
                                result[result.length] = [x, i, "nach links - unten"];
                            }
                        } else {
                            break;
                        }
                    }
                } catch (e) {}
                //nach links
                try {
                    for (let j = 1; j < needle.length; j++) {//testen ob das ganze needle array an dieser stelle vorhanden ist
                        if (needle[j] === numbers[x][i - j]) {
                            if (j + 1 === needle.length) {//wenn der loop bis zum letzten index von needle erfolgreich war
                                result[result.length] = [x, i, "nach links"];
                            }
                        } else {
                            break;
                        }
                    }
                } catch (e) {}
                //nach links - oben
                try {
                    for (let j = 1; j < needle.length; j++) {//testen ob das ganze needle array an dieser stelle vorhanden ist
                        if (needle[j] === numbers[x - j][i - j]) {
                            if (j + 1 === needle.length) {//wenn der loop bis zum letzten index von needle erfolgreich war
                                result[result.length] = [x, i, "nach links - oben"];
                            }
                        } else {
                            break;
                        }
                    }
                } catch (e) {}
                //nach oben
                try {
                    for (let j = 1; j < needle.length; j++) {//testen ob das ganze needle array an dieser stelle vorhanden ist
                        if (needle[j] === numbers[x - j][i]) {
                            if (j + 1 === needle.length) {//wenn der loop bis zum letzten index von needle erfolgreich war
                                result[result.length] = [x, i, "nach oben"];
                            }
                        } else {
                            break;
                        }
                    }
                } catch (e) {}
                //nach oben - rechts
                try {
                    for (let j = 1; j < needle.length; j++) {//testen ob das ganze needle array an dieser stelle vorhanden ist
                        if (needle[j] === numbers[x - j][i + j]) {
                            if (j + 1 === needle.length) {//wenn der loop bis zum letzten index von needle erfolgreich war
                                result[result.length] = [x, i, "nach oben - rechts"];
                            }
                        } else {
                            break;
                        }
                    }
                } catch (e) {}
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', ergebnisAusgabe, false);
function ergebnisAusgabe() {
    for (let x of result) {
        document.getElementById("needle").innerHTML += x + " ";
        console.info(x);
    }
}