//Stampare a schermo un messaggio all’interno
//di un h1, utilizzando i data.
var now = new Date();

const myApp = new Vue ({

  el: '#root',
  data: {
     name: 'Pier Luca',
     surname: 'Dussich',
     time: ` ${now.getHours()} e ${now.getMinutes()} minuti` ,
     image: "https://i.pinimg.com/originals/7b/ac/e9/7bace9fefddd0b9d79ba357adadea663.gif"
  }
});


//Aggiungere un’immagine presa anch’essa
//da un data.
