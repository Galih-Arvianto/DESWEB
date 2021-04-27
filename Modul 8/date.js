let hari = new Array('senin','selasa','rabu','kamis','jumat','sabtu','minggu');
let bulan = new Array('januari','februari','maret','april','mei','juni','juli'
,'agustus','september','oktober','november','desember');
var t=new Date();
today= t.getDay();
month= t.getMonth();
date= t.getDate();
year= t.getFullYear();
minutes = t.getMinutes();
jam=t.getHours();
secon=t.getSeconds();
hari_ini=hari[today-1];
bln=bulan[month];

document.writeln('<center>');
document.writeln('<H2>');
document.writeln(hari_ini,', ',date,' ',bln,' ',year,'<br>');
document.writeln(jam,':',minutes,':',secon);
document.writeln('</H2>');
