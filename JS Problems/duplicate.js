 var name = [3, 3, 4, 6, 8, 9, 7, 7, 4, 5];
 var uniqueName = [];

 for (var i = 0; i < name.length; i++) {
     var element = name[i];
     var index = uniqueName.indexOf(element);
     if (index == -1) {
         uniqueName.push(element);
     }
 }
 console.log(element);