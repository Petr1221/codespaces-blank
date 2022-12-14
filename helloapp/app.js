const express = require("express");
 
const app = express();
app.get("/", function(request, response){
    let name = process.argv[2];
    let age = process.argv[3];
    response.send("<h1>Главная страница</h1><br>Список литературы</br><br>&#8226&nbspПушкин А. - Евгений Онегин</br><br>&#8226&nbspГоголь Н. - Мертвые души</br><br>&#8226&nbspОстровский А. - Гроза</br><br>&#8226&nbspГончаров И. - Обломов</br><br>&#8226&nbspДостоевский Ф. - Преступление и наказание</br><p>"+ name+","+ age+"</p>");
});
app.listen(3000);

let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];
 
console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("name: " + name);
console.log("age: " + age);