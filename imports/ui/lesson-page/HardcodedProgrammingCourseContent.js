import replaceNewLineInCards from './../../utils/client/replaceNewLineInCards';

const IntroduccionLessonRaw = [
  {
    type: 'content',
    imageUrl: '/images/courses/programming/code-window.png',
    title: 'Empecemos!',
    text: 'Hoy en día, todo es programable. Desde donde estás viendo esto, hasta algunos relojes. Además, por cada persona en el mundo hay siete dispositivos tecnológicos. Cuando termines de leer esta tarjeta deslizala a un costado.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/car.png',
    text: 'Con la programación se pueden hacer cosas que hace unos años nadie pensaba, como autos que se manejen solos, viajar a Marte o hablar por WhatsApp.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/joystick.png',
    text: 'Hacer estas cosas está a tu alcance, con un poco de práctica, vas a poder hacer los juegos, páginas o aplicaciones que usas todos los días.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/todo-list.png',
    text: 'La programación es lo que se viene. Sabías que para el 2020 va a haber un millón de puestos de trabajo sin cubrir de programación? Además, los trabajos de programación son de los mejores pagos.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/code-pc.png',
    title: 'Funcionamiento de las compus',
    text: `Ahora que ya sabés lo bueno de la programación, adentrémonos en lo técnico: Cómo funcionan las computadoras?
Las computadoras son torpes, lo único que saben hacer es seguir instrucciones.`,
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/robot.png',
    text: 'Se las puede pensar como un robot al que hay que darle instrucciones específicas para hacer cosas, como por ejemplo, moverse para adelante, girar o saltar.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/steps.png',
    text: 'En cualquier cosa que hacemos, seguimos una serie de pasos. Si tenemos que poner la mesa, primero vamos a la cocina, abrimos el cajón, agarramos los utensilios, vamos a la mesa y ponemos las cosas donde vayan. ',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/binary.png',
    text: 'A esta serie de pasos le decimos **algoritmo**. Ahora vamos a hacer nuestro propio algoritmo.',
  },
  {
    type: 'order',
    question: 'Ordená las instrucciones como deberían ir para hacer un licuado de frutillas',
    options: [
      {
        content: 'Meter las frutillas en la licuadora',
        correctPosition: 2,
      },
      {
        content: 'Lavar las frutillas',
        correctPosition: 1,
      },
      {
        content: 'Disfrutar el licuado',
        correctPosition: 5,
      },
      {
        content: 'Servir licuado en el vaso',
        correctPosition: 4,
      },
      {
        content: 'Licuar',
        correctPosition: 3,
      },
    ],
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/google.png',
    text: 'Ahora que ya conocemos qué son los algoritmos, podemos explicar las cosas más fácilmente, como por ejemplo, el funcionamiento de las búsquedas en Google.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/ranking.png',
    text: 'Supongamos que una persona entra a Google y realiza una búsqueda. Google busca en su base de datos resultados de páginas que coincidan con la búsqueda y hace un ranking con las más destacadas.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/code-doc.png',
    text: 'Después de hacer el ranking, seleccioná los primeros diez resultados y finalmente se los muestra al usuario.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/languages.png',
    title: 'Lenguajes y algoritmos',
    text: 'Pero, cómo hacemos para que la computadora entienda un algoritmo? Tenemos que hablarle en uno de los muchos lenguajes que ella entiende.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/write-code.png',
    text: 'Se le dice escribir código a usar cualquiera de estos lenguajes para comunicarse con la computadora.',
  },
  {
    type: 'finish',
    imageUrl: '/images/courses/programming/tick.png',
    title: 'Felicitaciones!',
    text: 'Terminaste la lección de introducción a la programación! En la próxima lección vamos a ver los primeros conceptos de cómo escribir código.',
  },
  {
    type: 'feedback',
    title: 'Ayudanos!',
    text: 'Necesitamos tu ayuda! Decinos todas las sugerencias o comentarios que tengas!',
    nextUrl: '/course/Programación',
  },
];
const IntroduccionLesson = replaceNewLineInCards(IntroduccionLessonRaw);

const PrimerosConceptosLessonRaw = [
  {
    type: 'content',
    imageUrl: '/images/courses/programming/people-thinking.png',
    text: 'Antes de ponernos a escribir código, es muy importante saber qué queremos y cómo lo vamos a hacer.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/code-window-2.png',
    text: 'El primer paso es pensar el algoritmo y escribir cómo funciona con nuestras palabras. Esto se llama pseudocódigo, lo vamos a usar para aprender conceptos de programación antes de escribir código.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/pendrive.png',
    title: 'Variables',
    text: 'Una variable es un pedazo de memoria en el que guardamos cosas, como números, letras, palabras y más. Las variables tienen un nombre y un valor.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/video.png',
    text: 'Cuándo vamos a necesitar una variable? Por ejemplo, cuando estamos viendo un video en YouTube, tenemos que guardar en qué minuto estamos. Esto lo guardaríamos en una variable numérica.',
  },
  {
    type: 'content',
    text: `Por ejemplo, si queremos hacer un programa para sumar 2 números, las acciones son:
* Pedirle al usuario el primer número, y guardar lo que ingresó en la variable \`\`\`numero1\`\`\`
* Pedirle al usuario el segundo número, y guardar lo que ingresó en la variable \`\`\`numero2\`\`\`
* Mostrarle al usuario \`\`\`numero1 + numero2\`\`\``,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/tag.png',
    text: 'Siempre es importante poner nombres expresivos a las variables. Si alguien la ve por primera vez, tiene que entender exactamente para qué sirve, y qué guarda. Por ejemplo ```a```, ```que```, ```variable``` y ```cosa``` no son buenos nombres!',
  },
  {
    type: 'multiple-choice',
    question: 'Qué es una variable?',
    options: [
      {
        content: 'Una serie de pasos que sirven para cumplir un objetivo',
        message: 'Esa es la definición de algoritmo, no de variable!',
      },
      {
        content: 'Un nombre que se le da a la memoria de la computadora',
        message: 'Las variables son pedazos de la memoria, no la memoria en si.',
      },
      {
        content: 'Una parte de la memoria que podemos usar para guardar valores',
        message: 'Bien! Esa era la opción correcta',
        correct: true,
      },
    ],
  },
  {
    type: 'multiple-choice',
    question: 'Cómo llamarías una variable que guarda la cantidad de veces que aparece una palabra en un texto?',
    options: [
      {
        content: 'cantidadApariciones',
        message: 'Bien! Es un nombre corto y claro.',
        correct: true,
      },
      {
        content: 'vecesQueApareceLaPalabra',
        message: 'Mal. El nombre es demasiado largo!',
      },
      {
        content: 'numero',
        message: 'Mal. Número de qué? Quién sabe',
      },
    ],
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/decision.png',
    title: 'If y else',
    text: 'Llegó la hora de tomar decisiones. Más precisamente, en el flujo del programa. Usamos una estructura condicional cuando queremos que ocurra una acción si una condición es verdadera y otra acción si es falsa.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/key.png',
    text: 'Supongamos que queremos guardar un secreto con contraseña. Si el usuario pone bien la contraseña, le mostramos el secreto. Si no, le mostramos un mensaje de error.',
  },
  {
    type: 'content',
    text: `Como todos los lenguajes de programación están en inglés, las palabras clave son \`\`\`if\`\`\` y \`\`\`else\`\`\`.
* Pedirle al usuario la contraseña y guardarla en \`\`\`contraseñaIngresada\`\`\`
* \`\`\`if contraseñaIngresada\`\`\` es igual a \`\`\`"12345678"\`\`\`
  * mostrarle al usuario el secreto
* \`\`\`else\`\`\`
  * mostrarle al usuario el mensaje de error
`,
  },
  {
    type: 'multiple-choice',
    question: `Cuál es el valor de la variable \`\`\`resultado\`\`\` al final del código?
\`\`\`
variable resultado = 0
variable x = 7
if x > 10
  resultado = 1
else if x < 8
  resultado = 2
else
  resultado = 3
\`\`\``,
    options: [
      {
        content: '1',
        message: 'X es 7, y 7 no es mayor a 10.',
      },
      {
        content: '2',
        correct: true,
      },
      {
        content: '3',
        message: 'X es 7, y 7 es menor que 8, entonces resultado va a ser 2.',
      },
    ],
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/help.png',
    title: 'Loops',
    text: 'Avanzando un poco más, cómo podríamos hacer para sumar los números del 1 al 100? Para esto están las estructuras repetitivas.',
  },
  {
    type: 'content',
    text: `La estructura repetitiva que vamos a ver se llama \`\`\`for\`\`\`. El for se divide en cuatro partes, al principio de todo inicializamos una variable. Supongamos que esa variable la llamamos \`\`\`pasoActual\`\`\` y el valor inicial que le damos es 1.
1. \`\`\`pasoActual = 1\`\`\``,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/loop.png',
    text: 'El segundo paso del for es una condición, por ejemplo que ```pasoActual``` sea menor a 100. Si esa condición se cumple, es decir que es verdadera, podemos seguir con el tercer paso del for.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/plus.png',
    text: 'La tercer parte del for es la acción que queremos hacer en cada paso. En este caso queremos hacer la suma de 1 hasta 100, así que la acción sería sumar a la variable ```sumaTotal``` el valor de la variable ```pasoActual```.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/finish.png',
    text: 'En el caso de que pasoActual no sea menor que 100, entonces el for se termina.',
  },
  {
    type: 'content',
    text: `Por último, la cuarta parte es hacer que la variable \`\`\`pasoActual\`\`\` recorra todos los valores entre 1 y 100. Esto lo hacemos sumándole 1 y volviendo ejecutar el paso 2, generando un loop o ciclo.
* pasoActual = 1
* if pasoActual < 100
  * sumaTotal es igual a sumaTotal más el pasoActual
  * sumar 1 a pasoActual y volver al 2)
* terminó el for`,
  },
  {
    type: 'content',
    text: `Veamos otro ejemplo
\`\`\`
for desde 1 hasta 100 guardando el valor en pasoActual
  If pasoActual es igual a 99
    saludar al usuario
\`\`\`
En este ejemplo, el código adentro del if va a ser ejecutado una sola vez, cuando pasoActual sea igual a 99. En el resto de las ejecuciones no pasará nada, ya que \`\`\`pasoActual\`\`\` será diferente de 99`,
  },
  {
    type: 'multiple-choice',
    question: `Qué valor tiene la variable \`\`\`carga\`\`\` cuando se termina de ejecutar el programa?
\`\`\`
variable carga = 40
for desde 1 hasta 100 guardando el valor en pasoActual
  if carga es igual a pasoActual
    carga = carga + 1
  if carga > 60
    carga = 60
\`\`\``,
    options: [
      {
        content: '59',
        message: 'Mal. Carga llega a ser 60, no se detiene en 59',
      },
      {
        content: '60',
        correct: true,
      },
      {
        content: '100',
        message: 'Mal. Carga deja de subir en 60 por el segundo if.',
      },
    ],
  },
  {
    type: 'finish',
    imageUrl: '/images/courses/programming/tick.png',
    title: 'Felicitaciones!',
    text: 'Terminaste la lección de primeros conceptos de la programación! En la próxima lección vas a aprender un lenguaje de programación, y vas a empezar a escribir código.',
    nextUrl: '/course/Programación',
  },
];
const PrimerosConceptosLesson = replaceNewLineInCards(PrimerosConceptosLessonRaw);

const LenguajesLessonRaw = [
  {
    type: 'content',
    imageUrl: '/images/courses/programming/terminal.png',
    text: 'Ahora que ya aprendimos los primeros conceptos de la programación, vamos a aprender la sintaxis de un lenguaje muy usado hoy en día, **JavaScript**.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/javascript.png',
    text: 'Con JavaScript se pueden hacer desde cosas simples como un formulario, hasta juegos en realidad virtual.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/code-window-3.png',
    text: 'En los lenguajes de programación, el código se divide en líneas. Por cada línea, le podemos dar al programa diversas instrucciones, como por ejemplo, empezar una estructura condicional o declarar una variable.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/order.png',
    text: 'El programa lee las líneas de arriba para abajo. Entonces, si necesitamos una variable, primero tenemos que declararla (crear), y solo después de declararla la podemos usar.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/semicolon.png',
    text: 'En la mayoría de las líneas que no son estructuras condicionales o repetitivas, el último caracter de la línea es un punto y coma ```;```  que sirve para darle a entender a la computadora que la línea se termina ahí.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/plus-2.png',
    title: 'console.log()',
    text: 'Supongamos que tenemos un programa que hace la suma de los números del 1 al 50 y nos queremos fijar si está funcionando como lo planeado. Sabemos que el valor de la suma está almacenado en la variable ```sumaTotal```.',
    forceNewStack: true,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/screen.png',
    text: 'Entonces, lo que queremos hacer es que por algún lado se muestre el valor de esa variable para poder darnos cuenta si el programa hace lo que queremos o si hay algún error. Para esto usamos la herramienta ```console.log```.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/syntax.png',
    text: `La sintaxis para usar el console.log es la siguiente: \`\`\`console.log(sumaTotal);\`\`\`
Se escribe \`\`\`console.log\`\`\` y entre paréntesis la variable que queremos enviar.`,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/own-code.png',
    text: 'Ahora vas a poder escribir tu propio código en este ejercicio',
    forceNewStack: true,
  },
  {
    type: 'code',
    question: 'Devolvé el mensaje "Hello World!" usando console.log',
    possibleResults: [
      {
        result: 'Hello World!',
        correct: true,
      },
    ],
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/business-card.png',
    title: 'Tipos de datos',
    text: 'Como vimos anteriormente, una variable es un pedazo de memoria que usamos para guardar cualquier tipo de información. En las variables podemos almacenar distintos tipos de datos.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/user.png',
    text: 'Por ejemplo, podemos tener una variable que almacene el nombre de un usuario, que sería una palabra, y otra variable para la edad de ese usuario, que sería un número.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/number-blocks.png',
    text: 'Primero tenemos el tipo de dato **number** (número). Todas las variables que almacenan un número son de este tipo; el número puede ser tanto positivo como negativo, y puede tener coma.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/calculator.png',
    text: 'Por ejemplo, si definimos la variable ```peso``` a ```30,5``` y la variable ```temperatura``` igual a ```-5```, ambas tienen el tipo de dato **number**.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/letters.png',
    text: 'Después está el tipo de dato **string** (cadena). Se llama así porque representa una cadena de caracteres. Cualquier variable que almacene una o más palabras es de este tipo. Puede tener espacios o cualquier letra, número o símbolo.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/doc.png',
    text: 'Por ejemplo, si tenemos la variable ```nombre```, que es igual a ```“Juan Pérez”```, y la variable contraseña que es igual ```“1234_(qwer)#”```, entonces ambas tienen el tipo de dato **string**.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/checked.png',
    text: 'Por otro lado tenemos el tipo de dato **boolean** (booleano). Una variable con este tipo de dato tiene solo dos valores posibles: ```true``` (verdadero) o ```false``` (falso).',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/thumb-down.png',
    text: 'Si por ejemplo definimos la variable ```terminoElSecundario``` igual a ```true``` o la variable ```aprobo``` igual a ```false```, las dos van a tener el tipo de dato **boolean**.',
  },
  {
    type: 'multiple-choice',
    question: 'Qué tipo de dato es ```"42"```',
    options: [
      {
        content: 'String',
        message: 'Bien! Aunque su contenido sea un número, como está dentro de comillas es un string.',
        correct: true,
      },
      {
        content: 'Number',
        message: 'Mal. Como el 42 está dentro de comillas, es un string.',
      },
      {
        content: 'Boolean',
        message: 'Mal. Como el 42 está dentro de comillas, es un string.',
      },
    ],
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/equal.png',
    title: 'Operadores de comparación',
    text: 'Cuando estamos usando un if, necesitamos una forma de comparar dos variables. Por ejemplo, hay veces que nos queremos fijar si dos variables son iguales o si un número almacenado en una variable es menor que otro.',
  },
  {
    type: 'content',
    text: `Para poder comparar dos variables, existen los operadores de comparación. Si queremos ver si la variable \`\`\`comidaRestante\`\`\` es igual a 0, usamos el operador \`\`\`===\`\`\`. En un if quedaría de la siguiente forma:
\`\`\`
if (comidaRestante === 0) {
  avisar al jugador que se quedó sin comida
}
\`\`\``,
  },
  {
    type: 'content',
    text: `Si queremos verificar que dos variables no sean iguales, por ejemplo para ver si el usuario tuvo algún error al poner su contraseña, usamos el operador \`\`\`!==\`\`\`.
\`\`\`
if (contraseñaIngresada !== “12345678”) {
  alertar al usuario que hubo un error
}
\`\`\``,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/greater.png',
    text: 'Cuando queremos comparar si un número es mayor que otro, usamos el operador ```>```. Un ejemplo de uso sería para ver si la variable ```edadIngresada``` es mayor que 18.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/lesser.png',
    text: 'También tenemos el operador ```<``` para ver si una variable es menor que otra. Por último tenemos los operadores ```>=``` para ver si una variable es mayor o igual que otra y ```<=``` para ver si una variable es menor o igual que otra.',
  },
  {
    type: 'multiple-choice',
    question: `Qué devuelve el siguiente código?
\`\`\`
console.log(18 >= 20);
\`\`\``,
    options: [
      {
        content: 'true',
        message: 'Mal. 18 no es mayor o igual que 20, entonces va a devolver false.',
      },
      {
        content: 'false',
        correct: true,
      },
    ],
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/puzzle.png',
    title: 'Operadores lógicos',
    text: 'Otra clase de operadores son los lógicos. Por ejemplo, si queremos en un if ver que una variable numérica esté entre dos valores, en vez de usar dos if, usamos un if que contenga las dos comparaciones.',
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/and.png',
    text: `Para juntar dos comparaciones en un if usamos el operador **and** (y), que devuelve verdadero si ambos valores son \`\`\`true\`\`\`. La forma de escribirlo es \`\`\`&&\`\`\`, y nos quedaría así:
\`\`\`
if (edad >= 18 && edad < 50)
\`\`\``,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/code-window-4.png',
    text: `Por otro lado, cuando queremos ver si una variable es igual a un valor **o** al otro, usamos el operador lógico **or** (o). La forma de escribirlo es \`\`\`||\`\`\`, y nos quedaría de la siguiente forma en código:
\`\`\`
if (contraseña === “123” || contraseña === “1234”)
\`\`\``,
  },
  {
    type: 'multiple-choice',
    question: `Qué devuelve el siguiente código?
\`\`\`
variable edad = 18
console.log(edad > 8 && edad <= 18)
\`\`\``,
    options: [
      {
        content: 'true',
        correct: true,
      },
      {
        content: 'false',
        message: 'Mal. Edad es 18, que es mayor a 8 y a la vez menor o igual a 18. Entonces, como ambas condiciones son verdaderas, el and va a devolver true.',
      },
    ],
  },
  {
    type: 'multiple-choice',
    question: `Qué devuelve el siguiente código?
\`\`\`
variable ventanaEstaAbierta = false
variable puertaEstaAbierta = false
console.log(ventanaEstaAbierta || puertaEstaAbierta)
\`\`\``,
    options: [
      {
        content: 'true',
        message: 'Mal. las dos variables son falsas, entonces el || va a devolver false',
      },
      {
        content: 'false',
        correct: true,
      },
    ],
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/sd-card.png',
    title: 'Variables',
    text: `Veamos cómo se usan las variables en JavaScript. Si, por ejemplo, queremos declarar una variable que se llame \`\`\`edad\`\`\` y queremos que sea igual a \`\`\`20\`\`\` (años), se escribiría de la siguiente forma:
\`\`\`
let edad = 20;
\`\`\``,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/brackets-1.png',
    text: 'La sintaxis es primero poner la palabra ```let```, después el nombre de la variable, a continuación el signo igual ```=```, luego el valor y por último el punto y coma ```;```',
  },
  {
    type: 'code',
    question: 'Carlitos tiene 20 años, y queremos saber en qué año nació. Usá variables para devolver el año usando console.log.',
    possibleResults: [
      {
        result: 1997,
        correct: true,
      },
      {
        result: '1997',
        message: 'Mal. En vez de devolver un número devolviste un string.',
      },
    ],
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/plus-18.png',
    title: 'If y else',
    text: 'Supongamos que queremos no dejar pasar al usuario si es mayor de edad. Para eso tenemos que usar una estructura condicional.',
  },
  {
    type: 'content',
    text: `Usando la sintaxis de JavaScript, el condicional sería así:
\`\`\`js
if (edad >= 18) {
  console.log(“Sos mayor de edad, no podés entrar!”);
}
\`\`\`
Primero se pone la palabra clave \`\`\`if\`\`\`, para indicarle a la computadora que viene un condicional. Después entre paréntesis va la pregunta que le hacemos al \`\`\`if\`\`\`: es \`\`\`edad\`\`\` mayor a \`\`\`18\`\`\`?`,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/brackets-2.png',
    text: 'En el caso de que la respuesta sea que sí, el programa va a ejecutar lo que esté dentro de las llaves ```{ }```, que en este caso es no dejar pasar al usuario.',
  },
  {
    type: 'content',
    text: `Qué pasa si queremos ejecutar algo cuando el usuario **no** es mayor de edad? Hay que agregar la palabra clave \`\`\`else\`\`\`
\`\`\`
if (edad >= 18) {
  console.log(“Sos mayor de edad, no podés entrar!”);
}
else {
  console.log(“Sos menor de edad. Podés entrar tranquilo!”);
}
\`\`\``,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/enter.png',
    text: 'En este caso si el usuario es menor de edad, lo vamos a dejar pasar.',
  },
  {
    type: 'multiple-choice',
    question: `Qué devuelve este código?
\`\`\`
let contraseña = "hola123";
let contraseñaIngresada = "hola" + "123";
if (contraseña === contraseñaIngresada) {
  console.log("Acceso permitido");
}
else {
  console.log("Acceso denegado");
}
\`\`\``,
    options: [
      {
        content: '"Acceso permitido"',
        correct: true,
      },
      {
        content: '"Acceso denegado"',
        message: 'Mal. El + une a los strings, entonces va a quedar "hola123", que es la contraseña correcta.',
      },
    ],
  },
  {
    type: 'content',
    title: 'Loops',
    text: `Antes habíamos visto que el for era de la siguiente forma
\`\`\`
let sumaTotal = 0;
let pasoActual = 1; (paso 1)
if (pasoActual === 1) { (paso 2)
  sumaTotal = sumaTotal + pasoActual; (paso 3)
  pasoActual = pasoActual + 1; (paso 4)
  (volver al if)
}
terminar el for
\`\`\``,
  },
  {
    type: 'content',
    imageUrl: '/images/courses/programming/info.png',
    text: `Veamos como es con la sintaxis de JavaScript.
En programación se acostumbra a llamar i (de iterador) a la variable que recorre todos los valores del for. En este caso pasoActual se pasaría a llamar i.`,
  },
  {
    type: 'content',
    text: `La palabra clave que se usa es \`\`\`for\`\`\`. el paso 1), 2) y 4) se ponen entre paréntesis después del for.
\`\`\`
for (let i = 1; i < 100; i = i + 1) {
  sumaTotal = sumaTotal + i;
}
\`\`\``,
  },
  {
    type: 'content',
    text: `Cuando la condición (\`\`\`i < 100\`\`\`) es verdadera, se ejecuta el código entre paréntesis. En caso de que no, se termina el for.
\`\`\`
for (let i = 1; i < 100; i = i + 1) {
  sumaTotal = sumaTotal + i;
}
\`\`\``,
  },
  {
    type: 'multiple-choice',
    question: 'Cuál es el for con la sintaxis correcta para mostrar los números los números 1000, 900, 800 … 200, 100?',
    options: [
      {
        content: `\`\`\`
for (i = 1000; i > 0; i = i - 100) {
  console.log( i );
}
\`\`\``,
        message: 'Mal. Al declarar la variable i falta usar let.',
      },
      {
        content: `\`\`\`
for (let i = 1000; i > 0; i = i - 100) {
  console.log( i );
}
\`\`\``,
        correct: true,
      },
      {
        content: `\`\`\`
for (let i = 1000; i > 0; i = i + 100) {
  console.log( i );
}
\`\`\``,
        message: 'Mal. Si a i se le suma 100 en cada paso, el for nunca va a terminar.',
      },
    ],
  },
  {
    type: 'code',
    question: 'Devolver la suma de los números del 1 al 1000 usando un for.',
    possibleResults: [
      {
        result: 500500,
        correct: true,
      },
      {
        result: '500500',
        message: 'Mal. En vez de devolver el número, devolviste un string.',
      },
    ],
  },
  {
    type: 'finish',
    imageUrl: '/images/courses/programming/tick.png',
    title: 'Felicitaciones!',
    text: 'Terminaste el curso de introducción a la programación! Esperamos que te haya gustado, próximamente se vienen más cursos sobre diferentes temas.',
  },
  {
    type: 'feedback',
    title: 'Ayudanos!',
    text: 'Qué te pareció el curso? Tu comentario nos es de gran ayuda!',
    nextUrl: '/',
  },
];
const LenguajesLesson = replaceNewLineInCards(LenguajesLessonRaw);

export { IntroduccionLesson, PrimerosConceptosLesson, LenguajesLesson };
