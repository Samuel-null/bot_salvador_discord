//const Discord = require("discord.js");
//const client = new Discord.Client();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require("./config.json");
let prefix = config.prefix;

client.on("ready", () => {
    console.log("Activado!!");
 });
 
 client.on("messageCreate", (message) => {
    
    //si el contenido del mensaje no empieza con nuestro prefix, retorne nada o detenga las funciones.
    if (!message.content.startsWith(prefix)) return; 
    //si el contenido del mensaje fue enviado por un BOT, retorne nada.
    if (message.author.bot) return;


    //creamos una variable llamada args que sera nuestros argumentos separado del prefix y comando, gracias a que usamos slice(), que ignora el primer contenido del mensaje (-ping), dejandonos solo el texto siguiente como argumento. Y tambien usamos trim() para asegurar que no haya espacios antes o después del texto.
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    //creamos una variable llamada command, que obtendra un elemento que sera nuestro comando. Usamos shift() justamente para que elimine el primer elemento de la matriz, que seria el prefix y devuelva solamente el nombre del comando.
    const command = args.shift().toLowerCase();


     //aqui he usado .startswith 
   /*if(message.content.startsWith(prefix + "mamapingas")) {
     message.channel.send("mamapingas tu madre");
   }*/


   // pero aqui lo he simplificado con ===
   if(command === "testtexto"){
       message.channel.send("test de texto");
   }



   //Cara o cruz al hazar
    if (command === "lanzarmoneda") {
        //var numero = Math.floor(Math.random() * (5 - 1)) + 1;
        //consigo un numero random del 0 al 1 (2 excluido) y lo meto en la variable rand
        let rand = Math.floor(Math.random() * 2);
        //si rand es 0 se crea la variable mensaje con el contenido string cara  
        if (rand == 0) {
            var mensaje = "cara";
        }
        //si no es 0 se crea pero con el string cruz
        else{
            var mensaje = "cruz";
        }
        //se envia la variable cara
        message.channel.send(mensaje);
   }
 



    //piedra papel tijera
    
    
    if (command === "g") {
        //Creamos una variable nueva usando let llamada texto que contiene nuestros argumentos unidos con un espacio usando el metodo join(' '), usamos la variable texto que contiene los argumentos enviados 
        let texto = args.join(" ");
        //si no hay condicion nos devuelve lo siguiente
        if(!texto) return message.channel.send(`Elije piedra papel o tijera pelotudo`);

        let saca = args[0];
        //if(!saca == "piedra"||"papel"||"tijera") return message.channel.send(`Elije piedra papel o tijera pelotudo`);

        //tirada del bot
        //consigo un numero random del 0 al 1 (2 excluido) y lo meto en la variable rand
        let rand = Math.floor(Math.random() * 3);
        //si rand es 0 se crea la variable mensaje con el contenido string piedra
        if (rand == 0) {
            var mensaje2 = "piedra";
        }
        //si no es 1 se crea pero con el string papel
        if (rand == 1) {
            var mensaje2 = "papel";
        }
        //si no es 1 se crea pero con el string papel
        if (rand == 2) {
            var mensaje2 = "tijera";
            
        }

        if (saca == mensaje2) {
            var mensajefinal="救世主 a sacado " + mensaje2 + " es un empate";
        }
        if (mensaje2 == "piedra" && saca != "papel") {
            var mensajefinal="救世主 a sacado " + mensaje2 + " te ganao tooontoooo";
        }
        if (mensaje2 == "papel" && saca != "tijera") {
            var mensajefinal="救世主 a sacado " + mensaje2 + " te ganao tooontoooo";
        }
        if (mensaje2 == "tijera" && saca != "piedra") {
            var mensajefinal="救世主 a sacado " + mensaje2 + " te ganao tooontoooo";
        }
        else{
            var mensajefinal="救世主 a sacado" + mensaje2 + " usas hacks";
        }

        //se envia el mensaje
        message.channel.send(mensajefinal);
   }
 });
 
 
 client.login(config.token);