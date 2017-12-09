
function outputEquation(coeff_first, coeff_second, coeff_third){
  if(coeff_first == 0){
    return "a = 0, уравнение не квадратное";
  }else if(coeff_second == 0){
    return "b = 0, квадратное уравнение: " + coeff_first + "x^2 + " + coeff_third;
  }else if(coeff_third == 0){
    return "c = 0, квадратное уравнение: " + coeff_first + "x^2 + " + coeff_second + "x";
  }else{
    return "квадратное уравнение: " + coeff_first + "x^2 + " + coeff_second + "x + " + coeff_third;
  }
}

function findDiscriminant(coeff_first, coeff_second, coeff_third){
  var COEFF_OF_DISCRIMINANT = 4;
  if(isNaN(+coeff_first) || isNaN(+coeff_second) || isNaN(+coeff_third)){
    return "Неправильный ввод";
  }
  else if(coeff_first == null || coeff_second == null || coeff_third == null || coeff_first == 0){
    return "Нехватает значений";
  }else{
    return Math.pow(coeff_second, 2) - COEFF_OF_DISCRIMINANT * coeff_first * coeff_third;
  }
}
alert(outputEquation(1, 4, 3));
alert("Дискриминант равен " + findDiscriminant(1, 4, 3));
