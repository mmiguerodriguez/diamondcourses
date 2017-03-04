import replaceNewLineInCards from './../../utils/client/replaceNewLineInCards';

const ImportanciaDeComerLessonRaw = [
  {
    type: 'content',
    title: 'Importancia de comer',
    text: 'Siete años de nuestra vida los pasamos comiendo; es la tercer actividad que más hacemos después de dormir y trabajar. Una buena alimentación es clave para una vida feliz, sana y prolongada.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/cabbage.png',
    text: 'La gente que se alimenta con lo que se podría llamar una dieta occidental (muchos alimentos procesados, azúcares o grasas) tiende a tener altos índices de enfermedades cardiovasculares, diabetes, obesidad y cáncer.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/cauliflower.png',
    text: 'Un estudio hecho por British Medical Journal muestra que gente con una mala alimentación, modificando moderadamente su dieta, logró reducir en un 90% sus probabilidades de tener diabetes tipo 2 y en un 70% las de sufrir cáncer de colon.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/corn.png',
    text: 'Una alimentación saludable y sana te permite, sin mucho esfuerzo, vivir más y mejores años, combatir la depresión y el estrés, incrementar la autoestima, mejorar el aspecto físico y muchas cosas más.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/grain.png',
    text: 'Durante este curso vas a ver como distinguir comidas naturales de las que no lo son, qué tipos de comida son las mejores para una dieta sana y qué es lo óptimo para hacer cuando nos sentamos a la mesa y comemos.',
  },
  {
    type: 'finish',
    imageUrl: '/images/courses/food/strawberry.png',
    text: 'Todos estos beneficios están a tu alcance! Con este curso vas a tener las mejores recomendaciones para mejorar tu alimentación, lo que va a mejorar ampliamente tu vida.',
    nextUrl: '/course/Alimentación',
  },
];
const ImportanciaDeComerLesson = replaceNewLineInCards(ImportanciaDeComerLessonRaw);

const QueComerLessonRaw = [
  {
    type: 'content',
    title: 'Qué comer',
    text: 'En esta sección vamos a aprender cómo distinguir comidas naturales (frutas, verduras, carnes) de las comidas altamente procesadas que hoy en día ocupan los supermercados.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/asparagus.png',
    text: 'No comas nada que tu abuela no reconozca como comida. Las comidas altamente procesadas, nuevas de esta época, contienen químicos que podrían llegar a ser dañinos. Un ejemplo serían las salchichas o los malvaviscos.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/grapes.png',
    text: 'Evita productos que contengan ingredientes que una persona ordinaria no guardaría en su despensa. Sulfato de amonio? Diglicéridos etoxilados? Si no los usas para cocinar, por qué dejar que otros los usen?',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/salad.png',
    text: 'Evita productos que contengan más de cinco ingredientes. El número puede ser más o menos, pero mientras más tiene, el producto es más procesado.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/carrot.png',
    text: 'Comé productos que eventualmente se vayan a pudrir. Para que la comida pueda durar mucho, se remueven nutrientes importantes y se agregan otras sustancias. La comida natural está viva, y entonces se va a pudrir.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/banana.png',
    text: 'Comé productos que estén hechos con ingredientes que te puedas imaginar en la naturaleza. Así vas a dejar todos los químicos fuera de tu dieta.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/broccoli.png',
    text: 'Si viene de una planta, comelo; si fue hecho en una “planta”, no. Comé productos que estén hechos por humanos. En general los alimentos procesados industrialmente contienen mucha sal, grasas y azúcares así como conservantes y colorantes.',
  },
  {
    type: 'multiple-choice',
    question: 'Qué es más sano para comer en el desayuno?',
    options: [
      {
        content: 'Cereales de colores',
        message: 'Para conseguir esos colores, seguro que hubo muchos químicos en el camino',
      },
      {
        content: 'Galletitas con chispas de chocolate',
        message: 'Las galletitas en general son productos muy procesados',
      },
      {
        content: 'Bananas',
        message: 'Muy bien! Las frutas y verduras son una buena opción para desayunar',
        correct: true,
      },
    ],
  },
  {
    type: 'multiple-choice',
    question: 'Encontrás un producto en el supermercado y dice que tiene más de 10 ingredientes. Comerlo sería la opción más sana?',
    options: [
      {
        content: 'Si',
        message: 'Mientras más ingredientes tiene, el producto es más procesado y menos sano.',
      },
      {
        content: 'No',
        message: 'Muy bien! Por la cantidad de ingredientes que tiene, es preferible no comerlo.',
        correct: true,
      },
    ],
  },
  {
    type: 'multiple-choice',
    question: 'En un restaurante te sirven un plato que usaron más de 10 ingedientes para cocinarlo. Comerlo será sano?',
    options: [
      {
        content: 'Si',
        message: 'Muy bien! No hay ningún problema con preparar una receta de 10 ingredientes.',
        correct: true,
      },
      {
        content: 'No',
        message: 'Si vos lo cocinas, no hay problema en la cantidad de ingredientes',
      },
    ],
  },
  {
    type: 'finish',
    imageUrl: '/images/courses/food/pineapple.png',
    title: 'Felicitaciones!',
    text: 'Ya sabés distinguir lo que realmente es comida de lo que no. En la próxima lección vas a ver qué tipos de comida son los mejores.',
  },
  {
    type: 'feedback',
    title: 'Ayudanos!',
    text: 'Que te pareció está lección? Decinos todas las sugerencias o comentarios que tengas!',
    nextUrl: '/course/Alimentación',
  },
];
const QueComerLesson = replaceNewLineInCards(QueComerLessonRaw);

const TiposDeComidaLessonRaw = [
  {
    type: 'content',
    title: 'Tipos de comida',
    text: 'De la lección anterior aprendimos a distinguir qué es comida y qué no, la clave más simple para una dieta sana. Dentro de la comida, hay una diversidad muy amplia. Durante esta lección vamos a ver los diferentes tipos.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/salad-1.png',
    text: 'Comé mayormente plantas, especialmente hojas. Científicos de Harvard aseguran que son realmente buenas para tu dieta y que reducen el riesgo de morirse por la mayoría de las enfermedades occidentales.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/pot-1.png',
    text: 'El agua donde cocinás los vegetales es rica en vitaminas y en otros nutrientes de las verduras. La podés agregar a las salsas o usar para hacer sopa.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/pepper.png',
    text: 'Comé platos que tengan diversos colores. Los colores reflejan los diferentes antioxidantes fitoquímicos, que, según la Universidad Nacional de México, ayudan a prevenir enfermedades crónicas, cada uno de una forma diferente.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/fish.png',
    text: 'Comé animales que a su vez comieron bien. La dieta de los animales influye muchísimo en la calidad nutricional. En la producción industrial en cadena, le dan de comer a los animales a un precio muy bajo sin importarles la calidad de los alimentos.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/salt.png',
    text: 'Ponele sal y azúcar a la comida vos mismo. De esta forma, lo vas a dejar a tu gusto, y vas a ver que consumís una cantidad menor del azúcar y la sal que consumías antes.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/bread-1.png',
    text: 'Mientras más blanco el pan, menos saludable es. Mucha glucosa es una bomba que causa problemas en el metabolismo de la insulina. Los estudios dicen que la gente que evita las harinas suele estar más sana y vivir más años.',
  },
  {
    type: 'multiple-choice',
    question: 'Cuál sería la ensalada más sano para comer?',
    options: [
      {
        content: 'Ensalada de zapallo y zanahoria',
        message: 'La ensalada podría ser más sana si tuviera hojas y más colores.',
      },
      {
        content: 'Ensalada de espinaca, tomate, zapallo, zanahoria y lechuga',
        message: 'Muy bien! La ensalada tiene hojas y diversos colores',
        correct: true,
      },
      {
        content: 'Ensalada de tomate',
        message: 'La ensalada podría ser más sana si tuviera hojas y más colores.',
      },
    ],
  },
  {
    type: 'multiple-choice',
    question: 'En un restaurante, el mozo te pregunta si querés que el plato venga con sal desde la cocina. Que sería lo más saludable para responderle?',
    options: [
      {
        content: 'Si, que venga con sal',
        message: 'Si empezás a ponerle sal a tus propios platos, lo dejás a tu gusto y vas a consumir menos que antes!',
      },
      {
        content: 'No, que venga para que yo le ponga sal',
        message: 'Muy bien! Ahora lo vas a poder dejar a tu gusto y consumir menos sal.',
        correct: true,
      },
    ],
  },
  {
    type: 'finish',
    imageUrl: '/images/courses/food/raspberry.png',
    title: 'Muy bien!',
    text: 'Finalizaste la lección de tipos de comida! Ahora ya podés distinguir qué tipos de comida son las mejores y los más saludables.',
    nextUrl: '/course/Alimentación',
  },
];
const TiposDeComidaLesson = replaceNewLineInCards(TiposDeComidaLessonRaw);

const ComoComerLessonRaw = [
  {
    type: 'content',
    title: 'Como comer',
    text: 'En la lección anterior vimos que tipos de comida son los más sanos. Ahora vamos a ver algunos tips para tener en cuenta a la hora de sentarse en la mesa y comer.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/bowl-1.png',
    text: 'Pará de comer antes de llenarte. El organismo tarda 20 minutos en darse cuenta que está saciado. Si seguimos comiendo hasta sentirnos llenos, ya va a ser tarde.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/food.png',
    text: 'Comé cuando tengas hambre, no cuando estés aburrido. Muchas veces nos encontramos comiendo buscando diversión. La comida es un entretenimiento que nos termina costando muy caro.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/cutlery.png',
    text: 'Comé despacio. No solo para que sepas cuando tenés que parar, si comés lo suficientemente despacio para saborear los alimentos, vas a necesitar menos cantidad para sentirte saciado.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/toast.png',
    text: '“Desayuná como un rey, almorzá como un príncipe, cená como un mendigo”. En el desayuno debemos recibir la energía para todo el día. Mientras que durante la noche la digestión tarda más en efectuarse y comer mucho nos puede producir sobrepeso y acidez.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/beans.png',
    text: 'Comé siempre sentado en una mesa. Si comemos mientras trabajamos o vemos la televisión, comemos mecánicamente, y en consecuencia vamos a comer muchísimo más de lo que realmente necesitamos.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/dishes.png',
    text: 'Intentá no comer solo. La gente con tendencia a comer más de la cuenta se limita cuando está comiendo acompañado. También, si compartimos la mesa, solemos comer más despacio.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/kitchen.png',
    text: 'Cocinate a vos mismo. Hacerte tus propias comidas te hace ser más consciente de lo que estás ingiriendo. En cambio, si dejas que otros cocinen por vos, estás perdiendo control de lo que comés.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/food/ice-cream-3.png',
    text: 'Rompé las reglas de vez en cuando. Obsesionarse con las reglas no es bueno para la felicidad y salud de nadie. Las reglas están para ayudarte, va a haber algunos días que van a ser la excepción, pero lo importante es la práctica diaria.',
  },
  {
    type: 'multiple-choice',
    question: 'Cuál sería la mejor situación para una comida sana?',
    options: [
      {
        content: 'Comer solo, viendo televisión',
        message: 'Si comemos con la televisión, vamos a comer mecánicamente e ingerir más de lo que necesitamos',
      },
      {
        content: 'Comer solo terminando un trabajo en la computadora',
        message: 'Si comemos trabajando, vamos a comer mecánicamente e ingerir más de lo que necesitamos',
      },
      {
        content: 'Comer en familia en la mesa del comedor',
        message: 'Muy bien! Comer en familia es bueno para tener en cuenta lo que estamos comiendo',
        correct: true,
      },
      {
        content: 'Comer en familia viendo televisión',
        message: 'Si comemos con la televisión, vamos a comer mecánicamente e ingerir más de lo que necesitamos',
      },
    ],
  },
  {
    type: 'multiple-choice',
    question: 'En qué momento del día es mejor comer asado?',
    options: [
      {
        content: 'Almuerzo',
        message: 'Muy bien! Las comidas pesadas y abundantes es mejor hacerlas durante el almuerzo',
        correct: true,
      },
      {
        content: 'Cena',
        message: 'Las comidas pesadas y abundantes es mejor hacerlas durante el almuerzo',
      },
      {
        content: 'No importa el momento del día',
        message: 'Las comidas pesadas y abundantes es mejor hacerlas durante el almuerzo',
      },
    ],
  },
  {
    type: 'finish',
    imageUrl: '/images/courses/food/avocado.png',
    title: 'Felicitaciones',
    text: 'Terminaste el curso de alimentación! Ahora podés comer de una forma mucho más consciente y sabia, para tener una dieta mucho más saludable.',
  },
  {
    type: 'feedback',
    title: 'Ayudanos!',
    text: 'Qué te pareció el curso? Tu comentario nos es de gran ayuda!',
    nextUrl: '/',
  },
];
const ComoComerLesson = replaceNewLineInCards(ComoComerLessonRaw);

export { ImportanciaDeComerLesson, QueComerLesson, TiposDeComidaLesson, ComoComerLesson };
