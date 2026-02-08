var day ;
var month ;
alert ("Hola calculare tu signo zodiacal, ingresa informacion con numeros por favor");
month = prompt ("Por favor ingresa Mes");
day = prompt ("Por favor ingresa dia");

if (month == 12) {
    if (day < 22)
    zodiac = "Sagitario";
    else
    zodiac = "Capricornio"
}

else if (month == 1) {
    if (day < 20)
    zodiac = "Capricornio";
    else
    zodiac = "Aquario"
}

else if (month == 2 ){
  if (day < 19)
  zodiac = "Acuario"
  else
  zodiac = "Picis"
}
else if (month == 3 ){
  if (day < 21)
  zodiac = "Picis"
  else
  zodiac = "Aries"
}
else if (month == 4 ){
  if (day < 20)
  zodiac = "Aries"
  else
  zodiac = "Tauro"
}
else if (month == 5 ){
  if (day < 21)
  zodiac = "Tauro"
  else
  zodiac = "Cancer"
}
else if (month == 6 ){
  if (day < 21)
  zodiac = "Tauro"
  else
  zodiac = "Cancer"
}
else if (month == 7 ){
  if (day < 23)
  zodiac = "Cancer"
  else
  zodiac = "Leo"
}
else if (month == 8 ){
  if (day < 23)
  zodiac = "Leo"
  else
  zodiac = "Virgo"
}
else if (month == 9 ){
  if (day < 23)
  zodiac = "Virgo"
  else
  zodiac = "Libra"
}
else if (month == 10 ){
  if (day < 19)
  zodiac = "Libra"
  else
  zodiac = "Escorpion"
}
else if (month == 11 ){
  if (day < 22)
  zodiac = "Escorpion"
  else
  zodiac = "Sagitario"
}
alert ("signo zodiacal es " + zodiac )
