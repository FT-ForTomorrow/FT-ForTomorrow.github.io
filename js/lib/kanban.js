calendar = new Date();
day = calendar.getDay();
month = calendar.getMonth();
date = calendar.getDate();
year = calendar.getYear();
if (year < 100) year = 1900 + year;
if ((month == 11) && (date == 25)) {
   // alert('看板娘祝你圣诞节快乐！\n Merry Christmas! \n ☆*:.｡.o(≧▽≦)o.｡.:*☆');
   document.getElementById('cyx1').src = "/images/kanban/cyx/cyx_Christmas.gif";
}
function cyxRun() {
   document.getElementById('cyx2').style.display = "block"; 
   document.getElementById('cyx1').style.display = "none";
}
function cyxStay() {
   document.getElementById('cyx1').style.display = "block"; 
   document.getElementById('cyx2').style.display = "none";
}