

function handlePixel(imagemData){
  // Acessa os dados de pixels (array unidimensional)
  var pixels = imagemData.data;

  // Percorre cada pixel (cada pixel tem 4 valores: R, G, B, A)
  for (var i = 0; i < pixels.length; i += 4) {
    var red = pixels[i];       // Valor do vermelho (R)
    var green = pixels[i + 1]; // Valor do verde (G)
    var blue = pixels[i + 2];  // Valor do azul (B)
    var alpha = pixels[i + 3]; // Valor da opacidade (A)

    // Exibe os valores RGB no console
    //console.log(`Pixel ${i / 4}: R=${red}, G=${green}, B=${blue}, A=${alpha}`);
  }
  const d2 = new Date();
  console.log(d2.getTime())
}


