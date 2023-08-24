
const casas = {
    Gryffindor: 0,
    Slytherin: 0,
    Hufflepuff: 0,
    Ravenclaw: 0
  };
  
  function hacerPregunta(pregunta, opciones) {
    const respuesta = prompt(`${pregunta}\n${opciones}`).toLowerCase();
    return respuesta;
  }
  
  const respuesta1 = hacerPregunta("¿Qué cualidad valoras más?", "(a) Valentía\n(b) Ambición\n(c) Lealtad\n(d) Inteligencia");
  const respuesta2 = hacerPregunta(" Si te enfrentaras a un obstáculo difícil, ¿cuál sería tu enfoque para superarlo?:", "(a) Lucharía valientemente hasta superarlo.\n(b)  Analizaría la situación y buscaría la mejor estrategia.\n(c) Buscaría ayuda y apoyo de mis amigos.\n(d)Usaría cualquier medio necesario para superarlo y destacar.");
  const respuesta3 = hacerPregunta("¿Qué actividad disfrutas más?", "(a) Duelos\n(b) Planear estrategias\n(c) Cuidar de otros\n(d) Resolver acertijos");
  const respuesta4 = hacerPregunta("¿Cuál es tu materia favorita?", "(a) Defensa contra las Artes Oscuras\n(b) Pociones\n(c) Herbología\n(d) Adivinación");
  const respuesta5 = hacerPregunta("Elige un color:", "(a) Rojo\n(b) Verde\n(c) Amarillo\n(d) Azul");
  


  
  switch (respuesta1) {
    case 'a':
      casas.Gryffindor++
      break
    case 'b':
      casas.Slytherin++
      break
    case 'c':
      casas.Hufflepuff++
      break
    case 'd':
      casas.Ravenclaw++
      break
  }
  
  switch (respuesta2) {
    case 'a':
      casas.Gryffindor++
      break
    case 'b':
      casas.Ravenclaw++
      
    case 'c':
      casas.Hufflepuff++
      break
    case 'd':
      casas.Slytherin++
      break
  }
  
  switch (respuesta3) {
    case 'a':
      casas.Slytherin++
      break
    case 'b':
      casas.Gryffindor++
      break
    case 'c':
      casas.Hufflepuff++
      break
    case 'd':
      casas.Ravenclaw++
      break
  }
  
  switch (respuesta4) {
    case 'a':
      casas.Gryffindor++
      break
    case 'b':
      casas.Slytherin++
      break
    case 'c':
      casas.Hufflepuff++
      break
    case 'd':
      casas.Ravenclaw++
      break
  }
  
  switch (respuesta5) {
    case 'a':
      casas.Gryffindor++
      break
    case 'b':
      casas.Slytherin++
      break
    case 'c':
      casas.Hufflepuff++
      break
    case 'd':
      casas.Ravenclaw++
      break
  }
  
  // Determinar la casa ganadora
  let casaGanadora = '';
  let maxPuntos = 0;
  
  for (const casa in casas) {
    if (casas[casa] > maxPuntos) {
      casaGanadora = casa;
      maxPuntos = casas[casa];
    }
  }
  
  console.log(` El Sombrero Seleccionador ha decidido que perteneces a la casa ${casaGanadora}.`);
  