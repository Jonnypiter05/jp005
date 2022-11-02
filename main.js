menuListArray = ["Pizza Vegetariana","Pizza de mussarela","Pizza de frango com catupiri","Pizza de calabresa","Pizza portuguesa"
                    ];

function getMenu(){
var htmldata=" ";
menuListArray.sort()
for(var i=0;i<menuListArray.lenght;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtags='<img id="img1" src="images/pizzaImg.png"/>'
menuListArray.sort();
for(var i=0;i<menuListArray.lenght;++){
    htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}