function buttonHandler() {
    // document.getElementById("content").innerHTML="Thank you";
    // document.getElementById("content").style.display="none";

    // var cars={"Saab","Volvo","BMW"};
    // document.getElementById("menubar").innerText=cars[0];

    //  var asd=undefined;
    //  alert(typeof asd);

    //console.log(add(5,3));

    //var person ={name:"Bottyán Tamás",age:24,iq:200};
    // alert(person.name)

    /*var str ="apple, banana, kiwi";
    var res = str.slice(7);
    document.getElementById("banner").innerHTML= res;
    */

    // var date=new Date();
    //  alert(date.getFullYear()+"."+date.getMonth()+"."+date.getUTCDay());

    /*  try{
          alllert("asd");
      }catch (e) {
          document.getElementById("content").innerText = e.message;
      }

      var piNear=1;
      for (let i = 1; i <1000 ; i++) {
          piNear = piNear*( ((2*i)/((2*i)-1)) * ((2*i)/((2*i)+1)) );
      }
      alert(piNear*2);

      var piNear2=1;
      for (let i = 1; i <10000 ; i++) {
          piNear2 = piNear2*(((2*i)/((2*i)-1))*((2*i)/((2*i)+1)));
      }
      alert(piNear2*2);


      var leibniz = 1;
      for (let i = 1; i <10000 ; i++) {
      var asd = Math.pow(-1,i);
          leibniz+=asd/((2*i)+1);
      }
      document.getElementById("banner").innerHTML=leibniz*4;



      var leibniz2 = 1;
      for (let i = 1; i <1000 ; i++) {
          leibniz2=leibniz2*(((-1)^i)/((2*i)+1));
      }
      document.getElementById("content").innerHTML=leibniz2;
  */
}

function add(x,y) {
    return x+y;
}

$(document).ready(function () {
    $("#content").load("lorem.html");

    $.each($('.menuButton'),function (mbIndex, mbValue) {


      $(mbValue).click(function (event) {
          event.preventDefault();
          if (($(this).find('a').attr("href")) != "index.html"){
              $('#content').load($(this).find('a').attr("href"));
         } else
         {open("index.html","_self")}
      })
    })});

function openAuthors() {
    $.getJSON('authors', function (data) {
        var table = $('<table></table>');
        table.append('<tr><th>Name</th><th>Nationality</th><th>Birthdate</th>');

        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var nameCell = $('<td  onclick="openBooks(' + "'"+value.name+ "'" +')">' + value.name+ '</td>');
            var nationalCell = $('<td>'+value.nationality+'</td>');
            var birthDateCell = $('<td>'+value.birthDate+'</td>');
            row.append(nameCell);
            row.append(nationalCell);
            row.append(birthDateCell);
            table.append(row);
        })


        $("#content").html(table);
    })
}


