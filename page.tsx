"use client"

import { useState } from "react"
import { Instagram, Phone, MapPin, Clock, Home, ChevronDown, Calendar, Users, Send } from 'lucide-react'

const translations = {
  es: {
    // Header
    inicio: "Inicio",
    quienesSomos: "¿Quiénes somos?",
    carta: "Carta",
    ubicacion: "Ubicación",
    reserva: "Reserva",
    reservarOnline: "Reservar Online",
    
    // Home section
    autenticaPizzeria: "Auténtica Pizzería Napolitana en Barcelona",
    verCarta: "Ver Nuestra Carta",
    reservarMesa: "Reservar Mesa",
    tradicionNapolitana: "Tradición Napolitana",
    
    // Menu section
    nuestraCarta: "Nuestra Carta",
    saboresNapoles: "Auténticos sabores de Nápoles",
    platos: "platos",
    
    // About section
    masianelloTitle: "Masaniello",
    historiaHeroe: "La Historia de un Héroe",
    aboutText1: "Tommaso Aniello, conocido como Masaniello, fue un pescador napolitano que en 1647 lideró una histórica revuelta popular contra el dominio español en Nápoles. Su valentía y liderazgo lo convirtieron en un símbolo de libertad y resistencia.",
    aboutText2: "En nuestro restaurante honramos su espíritu rebelde y su amor por Nápoles, ofreciendo la auténtica cocina napolitana con la pasión y el carácter que él representaba.",
    heroeNapoles: "Héroe de Nápoles",
    
    // Location section
    direccion: "Dirección",
    horarios: "Horarios",
    contacto: "Contacto",
    lunesViernes: "Lunes - Domingo",

    // Reservation Section
    nombre: "Nombre",
    telefono: "Teléfono",
    email: "Correo Electrónico",
    fecha: "Fecha",
    hora: "Hora",
    personas: "Personas",
    comentarios: "Comentarios",
    enviarReserva: "Enviar Reserva",
    enviando: "Enviando...",
    reservaEnviada: "¡Reserva enviada! Nos pondremos en contacto contigo pronto.",
    errorReserva: "Hubo un error al enviar la reserva. Por favor, inténtalo de nuevo más tarde.",
    camposRequeridos: "Por favor, complete todos los campos obligatorios.",
    
    // Footer
    autenticaCocina: "Auténtica cocina napolitana en Barcelona, honrando la tradición y el espíritu rebelde de Masaniello.",
    derechosReservados: "© 2024 Masaniello Barcelona. Todos los derechos reservados."
  },
  en: {
    // Header
    inicio: "Home",
    quienesSomos: "About Us",
    carta: "Menu",
    ubicacion: "Location",
    reserva: "Reserve",
    reservarOnline: "Book Online",
    
    // Home section
    autenticaPizzeria: "Authentic Neapolitan Pizzeria in Barcelona",
    verCarta: "View Our Menu",
    reservarMesa: "Reserve Table",
    tradicionNapolitana: "Neapolitan Tradition",
    
    // Menu section
    nuestraCarta: "Our Menu",
    saboresNapoles: "Authentic flavors from Naples",
    platos: "dishes",
    
    // About section
    masianelloTitle: "Masaniello",
    historiaHeroe: "The Story of a Hero",
    aboutText1: "Tommaso Aniello, known as Masaniello, was a Neapolitan fisherman who in 1647 led a historic popular revolt against Spanish rule in Naples. His courage and leadership made him a symbol of freedom and resistance.",
    aboutText2: "In our restaurant we honor his rebellious spirit and his love for Naples, offering authentic Neapolitan cuisine with the passion and character he represented.",
    heroeNapoles: "Hero of Naples",
    
    // Location section
    direccion: "Address",
    horarios: "Hours",
    contacto: "Contact",
    lunesViernes: "Monday - Sunday",

    // Reservation Section
    nombre: "Name",
    telefono: "Phone",
    email: "Email",
    fecha: "Date",
    hora: "Time",
    personas: "People",
    comentarios: "Comments",
    enviarReserva: "Send Reservation",
    enviando: "Sending...",
    reservaEnviada: "Reservation sent! We will contact you soon.",
    errorReserva: "There was an error sending the reservation. Please try again later.",
    camposRequeridos: "Please fill in all required fields.",
    
    // Footer
    autenticaCocina: "Authentic Neapolitan cuisine in Barcelona, honoring the tradition and rebellious spirit of Masaniello.",
    derechosReservados: "© 2024 Masaniello Barcelona. All rights reserved."
  },
  fr: {
    // Header
    inicio: "Accueil",
    quienesSomos: "Qui sommes-nous",
    carta: "Menu",
    ubicacion: "Localisation",
    reserva: "Réserver",
    reservarOnline: "Réserver en Ligne",
    
    // Home section
    autenticaPizzeria: "Authentique Pizzeria Napolitaine à Barcelone",
    verCarta: "Voir Notre Menu",
    reservarMesa: "Réserver Table",
    tradicionNapolitaine: "Tradition Napolitaine",
    
    // Menu section
    nuestraCarta: "Notre Menu",
    saboresNapoles: "Saveurs authentiques de Naples",
    platos: "plats",
    
    // About section
    masianelloTitle: "Masaniello",
    historiaHeroe: "L'Histoire d'un Héros",
    aboutText1: "Tommaso Aniello, connu sous le nom de Masaniello, était un pêcheur napolitain qui en 1647 dirigea une révolte populaire historique contre la domination espagnole à Naples. Son courage et son leadership en firent un symbole de liberté et de résistance.",
    aboutText2: "Dans notre restaurant, nous honorons son esprit rebelle et son amour pour Naples, en offrant une cuisine napolitaine authentique avec la passion et le caractère qu'il représentait.",
    heroeNapoles: "Héros de Naples",
    
    // Location section
    direccion: "Adresse",
    horarios: "Horaires",
    contacto: "Contact",
    lunesViernes: "Lundi - Dimanche",

    // Reservation Section
    nombre: "Nom",
    telefono: "Téléphone",
    email: "Courriel",
    fecha: "Date",
    hora: "Heure",
    personas: "Personnes",
    comentarios: "Commentaires",
    enviarReserva: "Envoyer la Réservation",
    enviando: "Envoi...",
    reservaEnviada: "Réservation envoyée ! Nous vous contacterons bientôt.",
    errorReserva: "Une erreur s'est produite lors de l'envoi de la réservation. Veuillez réessayer plus tard.",
    camposRequeridos: "Veuillez remplir tous les champs obligatoires.",
    
    // Footer
    autenticaCocina: "Cuisine napolitaine authentique à Barcelone, honorant la tradition et l'esprit rebelle de Masaniello.",
    derechosReservados: "© 2024 Masaniello Barcelona. Tous droits réservés."
  },
  it: {
    // Header
    inicio: "Home",
    quienesSomos: "Chi Siamo",
    carta: "Menu",
    ubicacion: "Posizione",
    reserva: "Prenota",
    reservarOnline: "Prenota Online",
    
    // Home section
    autenticaPizzeria: "Autentica Pizzeria Napoletana a Barcellona",
    verCarta: "Vedi il Nostro Menu",
    reservarMesa: "Prenota Tavolo",
    tradicionNapolitana: "Tradizione Napoletana",
    
    // Menu section
    nuestraCarta: "Il Nostro Menu",
    saboresNapoles: "Sapori autentici di Napoli",
    platos: "piatti",
    
    // About section
    masianelloTitle: "Masaniello",
    historiaHeroe: "La Storia di un Eroe",
    aboutText1: "Tommaso Aniello, conosciuto come Masaniello, era un pescatore napoletano che nel 1647 guidò una storica rivolta popolare contro il dominio spagnolo a Napoli. Il suo coraggio e la sua leadership lo resero un simbolo di libertà e resistenza.",
    aboutText2: "Nel nostro ristorante onoriamo il suo spirito ribelle e il suo amore per Napoli, offrendo autentica cucina napoletana con la passione e il carattere che rappresentava.",
    heroeNapoles: "Eroe di Napoli",
    
    // Location section
    direccion: "Indirizzo",
    horarios: "Orari",
    contacto: "Contatto",
    lunesViernes: "Lunedì - Domenica",

    // Reservation Section
    nombre: "Nome",
    telefono: "Telefono",
    email: "Email",
    fecha: "Data",
    hora: "Ora",
    personas: "Persone",
    comentarios: "Commenti",
    enviarReserva: "Invia Prenotazione",
    enviando: "Invio...",
    reservaEnviada: "Prenotazione inviata! Ti contatteremo presto.",
    errorReserva: "Si è verificato un errore durante l'invio della prenotazione. Per favore riprova più tardi.",
    camposRequeridos: "Si prega di compilare tutti i campi obbligatori.",
    
    // Footer
    autenticaCocina: "Autentica cucina napoletana a Barcellona, onorando la tradizione e lo spirito ribelle di Masaniello.",
    derechosReservados: "© 2024 Masaniello Barcelona. Tutti i diritti riservati."
  }
}

const menuSections = {
  es: {
    PIZZE: [
      { name: "FOCACCIA", price: "5€", description: "" },
      { name: "MARINARA", price: "7€", description: "Tomate, ajo, orégano y albahaca" },
      { name: "MARGHERITA", price: "7€", description: "Tomate, mozzarella y albahaca" },
      { name: "FILETTO", price: "9€", description: "Tomatitos, mozzarella y albahaca" },
      { name: "BUFALA", price: "10€", description: "Tomate, mozzarella de búfala y albahaca" },
      { name: "DIAVOLA", price: "10€", description: "Tomate, mozzarella, salami picante" },
      { name: "PROSCIUTTO E FUNGHI", price: "10€", description: "Tomate, mozzarella, jamón cocido y champiñones" },
      { name: "SICILIANA", price: "10€", description: "Tomate, mozzarella, anchoas y berenjena" },
      { name: "NAPOLI", price: "10€", description: "Tomate, mozzarella, anchoas, alcaparras y aceitunas negras" },
      { name: "ORTOLANA", price: "10€", description: "Tomate, mozzarella, variedad de verduras" },
      { name: "CAPRICCIOSA", price: "10€", description: "Tomate, mozzarella, jamón cocido, alcachofa, champiñones y olivas" },
      { name: "CALZONE", price: "12.50€", description: "Tomate, mozzarella, ricotta, jamón cocido" },
      { name: "TROPEA", price: "12.50€", description: "Tomate, mozzarella, atún, cebolla roja de Tropea y olivas" },
      { name: "FLOTADOR", price: "12.50€", description: "Borde relleno de ricotta, tomate y mozzarella de búfala" },
      { name: "CATALANA", price: "13€", description: "Tomate, mozzarella, jamón cocido, huevo y champiñones" },
      { name: "CROCCHÉ", price: "12.50€", description: "Jamón cocido, provola y croquetas de patata" },
      { name: "SALSICCIA FRIARIELLI", price: "12.50€", description: "Butifarra, grelos y provola" },
      { name: "CONTADINA", price: "12.50€", description: "Tomate, butifarra, champiñones, cebolla y mozzarella" },
      { name: "4 FORMAGGI", price: "12.50€", description: "Tomate, mozzarella, gorgonzola, provola y parmesano" },
      { name: "SOFIA", price: "10€", description: "Frankfurt, patatas fritas y mozzarella" },
      { name: "MARIA", price: "10€", description: "Pollo, patatas fritas y mozzarella" },
      { name: "EMIGRANTE", price: "12€", description: "Tomate, mozzarella, jamón de parma, rúcula y láminas de parmesano" },
      { name: "PARMIGIANA", price: "11€", description: "Tomate, pastel de berenjena, provola y albahaca" },
      { name: "MORTADELLA", price: "12€", description: "Tomate, mozzarella de búfala, mortadela, burrata y pistacho" },
      { name: "VESUVIO", price: "13€", description: "Pizza en forma de volcán con tomate, ricotta, salami y mozzarella" },
      { name: "ARICCIA", price: "12€", description: "Porchetta (cerdo asado), provola y berenjena" },
      { name: "PIZZA FRITTA", price: "12€", description: "Ricotta, jamón cocido, mozzarella y tomate" },
      { name: "PIZZA MASSANIELLO", price: "12€", description: "Tomatitos, burrata y granela de pistacho" },
      { name: "MIMOSA", price: "12€", description: "Nata, jamón cocido, maíz y mozzarella" },
    ],
    SALTIMBOCCA: [
      { name: "SALSICCIA FRIARIELLI", price: "13€", description: "Butifarra, grelos y provola" },
      { name: "ROMANO", price: "13€", description: "Porchetta (cerdo asado), patatas fritas y provola" },
      { name: "EMIGRANTE", price: "13€", description: "Tomatitos, mozzarella, jamón de parma y grana" },
      { name: "TRENTINO", price: "13€", description: "Salami, mozzarella, gorgonzola y tomatitos" },
    ],
    "SEGUNDOS PLATOS": [
      { name: "ENTRECOT AI FERRI", price: "18€", description: "Entrecot a la brasa con patatas o ensalada" },
      { name: "ENTRECOT AI FUNGHI PORCINI", price: "18€", description: "Entrecot con boletus y aceite de trufa" },
      { name: "TAGLIATA DI MANZO", price: "18€", description: "Tiras de entrecot con rúcula, tomatitos y láminas de grana" },
      { name: "FILETTO DI MANZO ALLA GRIGLIA", price: "22€", description: "Solomillo de ternera a la plancha (300 gr). Elegir salsa entre: Seta, Gorgonzola" },
      { name: "COTOLETTA DI POLLO", price: "15€", description: "Escalopa de pollo con patatas fritas" },
      { name: "POLLO AI FERRI", price: "14€", description: "Pollo a la plancha con patatas fritas" },
      { name: "GAMBERI E CALAMARI", price: "16€", description: "Gambas y calamares fritos" },
    ],
    ANTIPASTI: [
      { name: "Insalata Burrata", price: "12€", description: "Burrata, rúcula, tomatito bresaola y láminas de grana" },
      { name: "Insalata Massaniello", price: "11€", description: "Ensalata mezclum, alcachofa, atún, olivas verdes, mozzarella y grana" },
      { name: "Insalata Cesar", price: "11€", description: "Ensalata mezclum, cebolla, tomatitos, pollo, croutons de pan y salsa césar" },
      { name: "Bruschetta", price: "6€", description: "Pan con tomate, ajo y aceite del chef" },
      { name: "Bruschetta melanzane", price: "10€", description: "Capas de berenjena, salsa de tomate, mozzarella y albahaca" },
      { name: "Parmigiana", price: "10€", description: "Berenjena, salsa de tomate, mozzarella y orégano" },
      { name: "Formaggio di fossa", price: "10€", description: "Queso provola del sur" },
      { name: "Polpettina della casa", price: "20€ (2 personas)", description: "Croquetas de ragú de carne, arroz, menta y mozzarella f." },
      { name: "Fritura napolitana", price: "12€", description: "Croquetas de arroz, jamón cocido y salami" },
      { name: "Polpette al Sugo", price: "12€", description: "Albóndigas de ternera con ragú de tomate" },
      { name: "Tris di montanare", price: "9€", description: "Masa pizza frita con salsa y queso" },
      { name: "Soute di marsco", price: "14€", description: "Salteado de almeja y mejillones con pan tostado" },
      { name: "Cozze alla marinara", price: "10€", description: "Con mejillones, ajo, tomate y pan tostado" },
      { name: "Bresaola e burrata", price: "12€", description: "Bresaola, rúcula, tomatitos y grana" },
      { name: "Carpaccio di bresaola", price: "12€", description: "Ternera, rúcula, y grana" },
    ],
    "PRIMI PIATTI": [
      { name: "Lasagna di carne", price: "12€", description: "Lasaña casera de carne" },
      { name: "Spaghetti carbonara", price: "11€", description: "Espaguetis con guanciale, huevos y parmesano" },
      { name: "Rigatoni bolognese", price: "11€", description: "Pasta con tomate, carne picada, albahaca y parmesano" },
      { name: "Rigatoni 4 formaggi", price: "10€", description: "Pasta con cuatro quesos" },
      { name: "Penne siciliana", price: "11€", description: "Tomate, berenjena, albahaca" },
      { name: "Spaghetti sofia", price: "10€", description: "Tomatito, ricotta, ajo y aceite" },
      { name: "Gnocchi sorrentina", price: "13€", description: "Tomatito, mozzarella y albahaca" },
      { name: "Spaghetti pomodoro fresco", price: "10€", description: "Espaguetis con tomate fresco y albahaca" },
      { name: "Spaghetti arrabbiata", price: "10€", description: "Espaguetis con toque de picante" },
      { name: "Penne con polpette al sugo", price: "12€", description: "Pasta con ragú de tomate y albóndigas de ternera" },
      { name: "Rigatoni salsicce e funghi", price: "12€", description: "Con butifarra, hongos porcini y provola" },
      { name: "Paccheri maria", price: "15€", description: "Macarrones XXL con tomate, burrata y granela de pistacho" },
      { name: "Paccheri frutti di mare", price: "16€", description: "Macarrones XXL con frutos del mar" },
      { name: "Spaghetti alle vongole", price: "16€", description: "Espaguetis con almejas" },
      { name: "Scialatielli allo scoglio", price: "18€", description: "Pasta fresca con frutos del mar" },
      { name: "Ravioli 4 formaggi", price: "15€", description: "Pasta fresca con 4 quesos" },
      { name: "Ravioli tartufo", price: "15€", description: "Pasta fresca con hongos porcini y aceite de trufa" },
      { name: "Pasta burrata", price: "15€", description: "Pasta fresca con tomatitos, burrata y granela de pistacho" },
    ],
    RISOTTI: [
      { name: "Risotto alla pescatora", price: "18€", description: "Arroz con frutos del mar" },
      { name: "Risotto verdure", price: "14€", description: "Arroz con verduras mixtas y mascarpone" },
      { name: "Risotto funghi", price: "15€", description: "Arroz con hongos porcini y aceite de trufa" },
    ],
  },
  en: {
    PIZZE: [
      { name: "FOCACCIA", price: "5€", description: "" },
      { name: "MARINARA", price: "7€", description: "Tomato, garlic, oregano and basil" },
      { name: "MARGHERITA", price: "7€", description: "Tomato, mozzarella and basil" },
      { name: "FILETTO", price: "9€", description: "Cherry tomatoes, mozzarella and basil" },
      { name: "BUFALA", price: "10€", description: "Tomato, buffalo mozzarella and basil" },
      { name: "DIAVOLA", price: "10€", description: "Tomato, mozzarella, spicy salami" },
      { name: "PROSCIUTTO E FUNGHI", price: "10€", description: "Tomato, mozzarella, cooked ham and mushrooms" },
      { name: "SICILIANA", price: "10€", description: "Tomato, mozzarella, anchovies and eggplant" },
      { name: "NAPOLI", price: "10€", description: "Tomato, mozzarella, anchovies, capers and black olives" },
      { name: "ORTOLANA", price: "10€", description: "Tomato, mozzarella, variety of vegetables" },
      { name: "CAPRICCIOSA", price: "10€", description: "Tomato, mozzarella, cooked ham, artichoke, mushrooms and olives" },
      { name: "CALZONE", price: "12.50€", description: "Tomato, mozzarella, ricotta, cooked ham" },
      { name: "TROPEA", price: "12.50€", description: "Tomato, mozzarella, tuna, Tropea red onion and olives" },
      { name: "FLOTADOR", price: "12.50€", description: "Stuffed crust with ricotta, tomato and buffalo mozzarella" },
      { name: "CATALANA", price: "13€", description: "Tomato, mozzarella, cooked ham, egg and mushrooms" },
      { name: "CROCCHÉ", price: "12.50€", description: "Cooked ham, provola and potato croquettes" },
      { name: "SALSICCIA FRIARIELLI", price: "12.50€", description: "Sausage, broccoli greens and provola" },
      { name: "CONTADINA", price: "12.50€", description: "Tomato, sausage, mushrooms, onion and mozzarella" },
      { name: "4 FORMAGGI", price: "12.50€", description: "Tomato, mozzarella, gorgonzola, provola and parmesan" },
      { name: "SOFIA", price: "10€", description: "Frankfurt, French fries and mozzarella" },
      { name: "MARIA", price: "10€", description: "Chicken, French fries and mozzarella" },
      { name: "EMIGRANTE", price: "12€", description: "Tomato, mozzarella, Parma ham, arugula and parmesan shavings" },
      { name: "PARMIGIANA", price: "11€", description: "Tomato, eggplant cake, provola and basil" },
      { name: "MORTADELLA", price: "12€", description: "Tomato, buffalo mozzarella, mortadella, burrata and pistachio" },
      { name: "VESUVIO", price: "13€", description: "Volcano-shaped pizza with tomato, ricotta, salami and mozzarella" },
      { name: "ARICCIA", price: "12€", description: "Porchetta (roast pork), provola and eggplant" },
      { name: "PIZZA FRITTA", price: "12€", description: "Ricotta, cooked ham, mozzarella and tomato" },
      { name: "PIZZA MASSANIELLO", price: "12€", description: "Cherry tomatoes, burrata and pistachio granules" },
      { name: "MIMOSA", price: "12€", description: "Cream, cooked ham, corn and mozzarella" },
    ],
    SALTIMBOCCA: [
      { name: "SALSICCIA FRIARIELLI", price: "13€", description: "Sausage, broccoli greens, and provola" },
      { name: "ROMANO", price: "13€", description: "Porchetta (roast pork), French fries, and provola" },
      { name: "EMIGRANTE", price: "13€", description: "Cherry tomatoes, mozzarella, Parma ham, and grana" },
      { name: "TRENTINO", price: "13€", description: "Salami, mozzarella, gorgonzola, and cherry tomatoes" },
    ],
    "SEGUNDOS PLATOS": [
      { name: "ENTRECOT AI FERRI", price: "18€", description: "Grilled entrecôte with potatoes or salad" },
      { name: "ENTRECOT AI FUNGHI PORCINI", price: "18€", description: "Entrecôte with porcini mushrooms and truffle oil" },
      { name: "TAGLIATA DI MANZO", price: "18€", description: "Strips of entrecôte with arugula, cherry tomatoes, and grana shavings" },
      { name: "FILETTO DI MANZO ALLA GRIGLIA", price: "22€", description: "Grilled beef fillet (300 gr). Choose a sauce between: Mushrooms, Gorgonzola" },
      { name: "COTOLETTA DI POLLO", price: "15€", description: "Chicken cutlet with fries" },
      { name: "POLLO AI FERRI", price: "14€", description: "Grilled chicken with fries" },
      { name: "GAMBERI E CALAMARI", price: "16€", description: "Fried prawns and squid" },
    ],
    ANTIPASTI: [
      { name: "Insalata Burrata", price: "12€", description: "Burrata, arugula, cherry tomato bresaola and grana shavings" },
      { name: "Insalata Massaniello", price: "11€", description: "Mixed salad, artichoke, tuna, green olives, mozzarella and grana" },
      { name: "Insalata Cesar", price: "11€", description: "Mixed salad, onion, cherry tomatoes, chicken, bread croutons and caesar sauce" },
      { name: "Bruschetta", price: "6€", description: "Bread with tomato, garlic and chef's oil" },
      { name: "Bruschetta melanzane", price: "10€", description: "Layers of eggplant, tomato sauce, mozzarella and basil" },
      { name: "Parmigiana", price: "10€", description: "Eggplant, tomato sauce, mozzarella and oregano" },
      { name: "Formaggio di fossa", price: "10€", description: "Southern provola cheese" },
      { name: "Polpettina della casa", price: "20€ (2 people)", description: "Meat ragù croquettes, rice, mint and mozzarella f." },
      { name: "Fritura napolitana", price: "12€", description: "Rice croquettes, cooked ham and salami" },
      { name: "Polpette al Sugo", price: "12€", description: "Beef meatballs with tomato ragù" },
      { name: "Tris di montanare", price: "9€", description: "Fried pizza dough with sauce and cheese" },
      { name: "Soute di marsco", price: "14€", description: "Sautéed clams and mussels with toasted bread" },
      { name: "Cozze alla marinara", price: "10€", description: "With mussels, garlic, tomato and toasted bread" },
      { name: "Bresaola e burrata", price: "12€", description: "Bresaola, arugula, cherry tomatoes and grana" },
      { name: "Carpaccio di bresaola", price: "12€", description: "Beef, arugula, and grana" },
    ],
    "PRIMI PIATTI": [
      { name: "Lasagna di carne", price: "12€", description: "Homemade meat lasagna" },
      { name: "Spaghetti carbonara", price: "11€", description: "Spaghetti with guanciale, eggs and parmesan" },
      { name: "Rigatoni bolognese", price: "11€", description: "Pasta with tomato, ground meat, basil and parmesan" },
      { name: "Rigatoni 4 formaggi", price: "10€", description: "Pasta with four cheeses" },
      { name: "Penne siciliana", price: "11€", description: "Tomato, eggplant, basil" },
      { name: "Spaghetti sofia", price: "10€", description: "Cherry tomato, ricotta, garlic and oil" },
      { name: "Gnocchi sorrentina", price: "13€", description: "Cherry tomato, mozzarella and basil" },
      { name: "Spaghetti pomodoro fresco", price: "10€", description: "Spaghetti with fresh tomato and basil" },
      { name: "Spaghetti arrabbiata", price: "10€", description: "Spaghetti with spicy touch" },
      { name: "Penne con polpette al sugo", price: "12€", description: "Pasta with tomato ragù and beef meatballs" },
      { name: "Rigatoni salsicce e funghi", price: "12€", description: "With sausage, porcini mushrooms and provola" },
      { name: "Paccheri maria", price: "15€", description: "XXL macaroni with tomato, burrata and pistachio granules" },
      { name: "Paccheri frutti di mare", price: "16€", description: "XXL macaroni with seafood" },
      { name: "Spaghetti alle vongole", price: "16€", description: "Spaghetti with clams" },
      { name: "Scialatielli allo scoglio", price: "18€", description: "Fresh pasta with seafood" },
      { name: "Ravioli 4 formaggi", price: "15€", description: "Fresh pasta with 4 cheeses" },
      { name: "Ravioli tartufo", price: "15€", description: "Fresh pasta with porcini mushrooms and truffle oil" },
      { name: "Pasta burrata", price: "15€", description: "Fresh pasta with cherry tomatoes, burrata and pistachio granules" },
    ],
    RISOTTI: [
      { name: "Risotto alla pescatora", price: "18€", description: "Rice with seafood" },
      { name: "Risotto verdure", price: "14€", description: "Rice with mixed vegetables and mascarpone" },
      { name: "Risotto funghi", price: "15€", description: "Rice with porcini mushrooms and truffle oil" },
    ],
  },
  fr: {
    PIZZE: [
      { name: "FOCACCIA", price: "5€", description: "" },
      { name: "MARINARA", price: "7€", description: "Tomate, ail, origan et basilic" },
      { name: "MARGHERITA", price: "7€", description: "Tomate, mozzarella et basilic" },
      { name: "FILETTO", price: "9€", description: "Tomates cerises, mozzarella et basilic" },
      { name: "BUFALA", price: "10€", description: "Tomate, mozzarella de bufflonne et basilic" },
      { name: "DIAVOLA", price: "10€", description: "Tomate, mozzarella, salami épicé" },
      { name: "PROSCIUTTO E FUNGHI", price: "10€", description: "Tomate, mozzarella, jambon cuit et champignons" },
      { name: "SICILIANA", price: "10€", description: "Tomate, mozzarella, anchois et aubergine" },
      { name: "NAPOLI", price: "10€", description: "Tomate, mozzarella, anchois, câpres et olives noires" },
      { name: "ORTOLANA", price: "10€", description: "Tomate, mozzarella, variété de légumes" },
      { name: "CAPRICCIOSA", price: "10€", description: "Tomate, mozzarella, jambon cuit, artichaut, champignons et olives" },
      { name: "CALZONE", price: "12.50€", description: "Tomate, mozzarella, ricotta, jambon cuit" },
      { name: "TROPEA", price: "12.50€", description: "Tomate, mozzarella, thon, oignon rouge de Tropea et olives" },
      { name: "FLOTADOR", price: "12.50€", description: "Bord farci de ricotta, tomate et mozzarella de bufflonne" },
      { name: "CATALANA", price: "13€", description: "Tomate, mozzarella, jambon cuit, œuf et champignons" },
      { name: "CROCCHÉ", price: "12.50€", description: "Jambon cuit, provola et croquettes de pomme de terre" },
      { name: "SALSICCIA FRIARIELLI", price: "12.50€", description: "Saucisse, grelos (brocoli) et provola" },
      { name: "CONTADINA", price: "12.50€", description: "Tomate, saucisse, champignons, oignon et mozzarella" },
      { name: "4 FORMAGGI", price: "12.50€", description: "Tomate, mozzarella, gorgonzola, provola et parmesan" },
      { name: "SOFIA", price: "10€", description: "Francfort, frites et mozzarella" },
      { name: "MARIA", price: "10€", description: "Poulet, frites et mozzarella" },
      { name: "EMIGRANTE", price: "12€", description: "Tomate, mozzarella, jambon de Parme, roquette et copeaux de parmesan" },
      { name: "PARMIGIANA", price: "11€", description: "Tomate, gâteau d'aubergine, provola et basilic" },
      { name: "MORTADELLA", price: "12€", description: "Tomate, mozzarella de bufflonne, mortadelle, burrata et pistache" },
      { name: "VESUVIO", price: "13€", description: "Pizza en forme de volcan avec tomate, ricotta, salami et mozzarella" },
      { name: "ARICCIA", price: "12€", description: "Porchetta (porc rôti), provola et aubergine" },
      { name: "PIZZA FRITTA", price: "12€", description: "Ricotta, jambon cuit, mozzarella et tomate" },
      { name: "PIZZA MASSANIELLO", price: "12€", description: "Tomates cerises, burrata et granulés de pistache" },
      { name: "MIMOSA", price: "12€", description: "Crème, jambon cuit, maïs et mozzarella" },
    ],
    SALTIMBOCCA: [
      { name: "SALSICCIA FRIARIELLI", price: "13€", description: "Saucisse, grelos (brocoli) et provola" },
      { name: "ROMANO", price: "13€", description: "Porchetta (porc rôti), frites et provola" },
      { name: "EMIGRANTE", price: "13€", description: "Tomates cerises, mozzarella, jambon de Parme et grana" },
      { name: "TRENTINO", price: "13€", description: "Salami, mozzarella, gorgonzola et tomates cerises" },
    ],
    "SEGUNDOS PLATOS": [
      { name: "ENTRECOT AI FERRI", price: "18€", description: "Entrecôte grillée avec pommes de terre ou salade" },
      { name: "ENTRECOT AI FUNGHI PORCINI", price: "18€", description: "Entrecôte avec cèpes et huile de truffe" },
      { name: "TAGLIATA DI MANZO", price: "18€", description: "Lanières d'entrecôte avec roquette, tomates cerises et copeaux de grana" },
      { name: "FILETTO DI MANZO ALLA GRIGLIA", price: "22€", description: "Filet de bœuf grillé (300 gr). Choisir une sauce parmi : Champignons, Gorgonzola" },
      { name: "COTOLETTA DI POLLO", price: "15€", description: "Escalope de poulet avec des frites" },
      { name: "POLLO AI FERRI", price: "14€", description: "Poulet grillé avec des frites" },
      { name: "GAMBERI E CALAMARI", price: "16€", description: "Crevettes et calamars frits" },
    ],
    ANTIPASTI: [
      { name: "Insalata Burrata", price: "12€", description: "Burrata, roquette, tomate cerise bresaola et copeaux de grana" },
      { name: "Insalata Massaniello", price: "11€", description: "Salade mélangée, artichaut, thon, olives vertes, mozzarella et grana" },
      { name: "Insalata Cesar", price: "11€", description: "Salade mélangée, oignon, tomates cerises, poulet, croûtons de pain et sauce césar" },
      { name: "Bruschetta", price: "6€", description: "Pain avec tomate, ail et huile du chef" },
      { name: "Bruschetta melanzane", price: "10€", description: "Couches d'aubergine, sauce tomate, mozzarella et basilic" },
      { name: "Parmigiana", price: "10€", description: "Aubergine, sauce tomate, mozzarella et origan" },
      { name: "Formaggio di fossa", price: "10€", description: "Fromage provola du sud" },
      { name: "Polpettina della casa", price: "20€ (2 personnes)", description: "Croquettes de ragù de viande, riz, menthe et mozzarella f." },
      { name: "Fritura napolitana", price: "12€", description: "Croquettes de riz, jambon cuit et salami" },
      { name: "Polpette al Sugo", price: "12€", description: "Boulettes de bœuf au ragù de tomate" },
      { name: "Tris di montanare", price: "9€", description: "Pâte à pizza frite avec sauce et fromage" },
      { name: "Soute di marsco", price: "14€", description: "Sauté de palourdes et moules avec pain grillé" },
      { name: "Cozze alla marinara", price: "10€", description: "Avec moules, ail, tomate et pain grillé" },
      { name: "Bresaola e burrata", price: "12€", description: "Bresaola, roquette, tomates cerises et grana" },
      { name: "Carpaccio di bresaola", price: "12€", description: "Bœuf, roquette et grana" },
    ],
    "PRIMI PIATTI": [
      { name: "Lasagna di carne", price: "12€", description: "Lasagne maison à la viande" },
      { name: "Spaghetti carbonara", price: "11€", description: "Spaghetti avec guanciale, œufs et parmesan" },
      { name: "Rigatoni bolognese", price: "11€", description: "Pâtes avec tomate, viande hachée, basilic et parmesan" },
      { name: "Rigatoni 4 formaggi", price: "10€", description: "Pâtes aux quatre fromages" },
      { name: "Penne siciliana", price: "11€", description: "Tomate, aubergine, basilic" },
      { name: "Spaghetti sofia", price: "10€", description: "Tomate cerise, ricotta, ail et huile" },
      { name: "Gnocchi sorrentina", price: "13€", description: "Tomate cerise, mozzarella et basilic" },
      { name: "Spaghetti pomodoro fresco", price: "10€", description: "Spaghetti avec tomate fraîche et basilic" },
      { name: "Spaghetti arrabbiata", price: "10€", description: "Spaghetti avec une touche épicée" },
      { name: "Penne con polpette al sugo", price: "12€", description: "Pâtes avec ragù de tomate et boulettes de bœuf" },
      { name: "Rigatoni salsicce e funghi", price: "12€", description: "Avec saucisse, champignons porcini et provola" },
      { name: "Paccheri maria", price: "15€", description: "Macaronis XXL avec tomate, burrata et granulés de pistache" },
      { name: "Paccheri frutti di mare", price: "16€", description: "Macaronis XXL aux fruits de mer" },
      { name: "Spaghetti alle vongole", price: "16€", description: "Spaghetti aux palourdes" },
      { name: "Scialatielli allo scoglio", price: "18€", description: "Pâtes fraîches aux fruits de mer" },
      { name: "Ravioli 4 formaggi", price: "15€", description: "Pâtes fraîches aux 4 fromages" },
      { name: "Ravioli tartufo", price: "15€", description: "Pâtes fraîches avec champignons porcini et huile de truffe" },
      { name: "Pasta burrata", price: "15€", description: "Pâtes fraîches avec tomates cerises, burrata et granulés de pistache" },
    ],
    RISOTTI: [
      { name: "Risotto alla pescatora", price: "18€", description: "Riz aux fruits de mer" },
      { name: "Risotto verdure", price: "14€", description: "Riz aux légumes mélangés et mascarpone" },
      { name: "Risotto funghi", price: "15€", description: "Riz aux champignons porcini et huile de truffe" },
    ],
  },
  it: {
    PIZZE: [
      { name: "FOCACCIA", price: "5€", description: "" },
      { name: "MARINARA", price: "7€", description: "Pomodoro, aglio, origano e basilico" },
      { name: "MARGHERITA", price: "7€", description: "Pomodoro, mozzarella e basilico" },
      { name: "FILETTO", price: "9€", description: "Pomodorini, mozzarella e basilico" },
      { name: "BUFALA", price: "10€", description: "Pomodoro, mozzarella di bufala e basilico" },
      { name: "DIAVOLA", price: "10€", description: "Pomodoro, mozzarella, salame piccante" },
      { name: "PROSCIUTTO E FUNGHI", price: "10€", description: "Pomodoro, mozzarella, prosciutto cotto e funghi" },
      { name: "SICILIANA", price: "10€", description: "Pomodoro, mozzarella, acciughe e melanzane" },
      { name: "NAPOLI", price: "10€", description: "Pomodoro, mozzarella, acciughe, capperi e olive nere" },
      { name: "ORTOLANA", price: "10€", description: "Pomodoro, mozzarella, varietà di verdure" },
      { name: "CAPRICCIOSA", price: "10€", description: "Pomodoro, mozzarella, prosciutto cotto, carciofi, funghi e olive" },
      { name: "CALZONE", price: "12.50€", description: "Pomodoro, mozzarella, ricotta, prosciutto cotto" },
      { name: "TROPEA", price: "12.50€", description: "Pomodoro, mozzarella, tonno, cipolla rossa di Tropea e olive" },
      { name: "FLOTADOR", price: "12.50€", description: "Bordo ripieno di ricotta, pomodoro e mozzarella di bufala" },
      { name: "CATALANA", price: "13€", description: "Pomodoro, mozzarella, prosciutto cotto, uovo e funghi" },
      { name: "CROCCHÉ", price: "12.50€", description: "Prosciutto cotto, provola e crocchè di patate" },
      { name: "SALSICCIA FRIARIELLI", price: "12.50€", description: "Salsiccia, friarielli e provola" },
      { name: "CONTADINA", price: "12.50€", description: "Pomodoro, salsiccia, funghi, cipolla e mozzarella" },
      { name: "4 FORMAGGI", price: "12.50€", description: "Pomodoro, mozzarella, gorgonzola, provola e parmigiano" },
      { name: "SOFIA", price: "10€", description: "Wurstel, patatine fritte e mozzarella" },
      { name: "MARIA", price: "10€", description: "Pollo, patatine fritte e mozzarella" },
      { name: "EMIGRANTE", price: "12€", description: "Pomodoro, mozzarella, prosciutto di Parma, rucola e scaglie di parmigiano" },
      { name: "PARMIGIANA", price: "11€", description: "Pomodoro, tortino di melanzane, provola e basilico" },
      { name: "MORTADELLA", price: "12€", description: "Pomodoro, mozzarella di bufala, mortadella, burrata e pistacchio" },
      { name: "VESUVIO", price: "13€", description: "Pizza a forma di vulcano con pomodoro, ricotta, salame e mozzarella" },
      { name: "ARICCIA", price: "12€", description: "Porchetta, provola e melanzane" },
      { name: "PIZZA FRITTA", price: "12€", description: "Ricotta, prosciutto cotto, mozzarella e pomodoro" },
      { name: "PIZZA MASSANIELLO", price: "12€", description: "Pomodorini, burrata e granella di pistacchio" },
      { name: "MIMOSA", price: "12€", description: "Panna, prosciutto cotto, mais e mozzarella" },
    ],
    SALTIMBOCCA: [
      { name: "SALSICCIA FRIARIELLI", price: "13€", description: "Salsiccia, friarielli e provola" },
      { name: "ROMANO", price: "13€", description: "Porchetta, patatine fritte e provola" },
      { name: "EMIGRANTE", price: "13€", description: "Pomodorini, mozzarella, prosciutto di Parma e grana" },
      { name: "TRENTINO", price: "13€", description: "Salame, mozzarella, gorgonzola e pomodorini" },
    ],
    "SEGUNDOS PLATOS": [
      { name: "ENTRECOT AI FERRI", price: "18€", description: "Entrecôte alla griglia con patate o insalata" },
      { name: "ENTRECOT AI FUNGHI PORCINI", price: "18€", description: "Entrecôte con funghi porcini e olio al tartufo" },
      { name: "TAGLIATA DI MANZO", price: "18€", description: "Tagliata di manzo con rucola, pomodorini e scaglie di grana" },
      { name: "FILETTO DI MANZO ALLA GRIGLIA", price: "22€", description: "Filetto di manzo alla griglia (300 gr). Scegliere salsa tra: Funghi, Gorgonzola" },
      { name: "COTOLETTA DI POLLO", price: "15€", description: "Cotoletta di pollo con patatine fritte" },
      { name: "POLLO AI FERRI", price: "14€", description: "Pollo alla griglia con patatine fritte" },
      { name: "GAMBERI E CALAMARI", price: "16€", description: "Gamberi e calamari fritti" },
    ],
    ANTIPASTI: [
      { name: "Insalata Burrata", price: "12€", description: "Burrata, rucola, pomodorini bresaola e scaglie di grana" },
      { name: "Insalata Massaniello", price: "11€", description: "Insalata mista, carciofi, tonno, olive verdi, mozzarella e grana" },
      { name: "Insalata Cesar", price: "11€", description: "Insalata mista, cipolla, pomodorini, pollo, crostini di pane e salsa caesar" },
      { name: "Bruschetta", price: "6€", description: "Pane con pomodoro, aglio e olio dello chef" },
      { name: "Bruschetta melanzane", price: "10€", description: "Strati di melanzane, salsa di pomodoro, mozzarella e basilico" },
      { name: "Parmigiana", price: "10€", description: "Melanzane, salsa di pomodoro, mozzarella e origano" },
      { name: "Formaggio di fossa", price: "10€", description: "Formaggio provola del sud" },
      { name: "Polpettina della casa", price: "20€ (2 persone)", description: "Crocchette di ragù di carne, riso, menta e mozzarella f." },
      { name: "Fritura napolitana", price: "12€", description: "Crocchette di riso, prosciutto cotto e salame" },
      { name: "Polpette al Sugo", price: "12€", description: "Polpette di manzo con ragù di pomodoro" },
      { name: "Tris di montanare", price: "9€", description: "Impasto pizza fritto con salsa e formaggio" },
      { name: "Soute di marsco", price: "14€", description: "Sauté di vongole e cozze con pane tostato" },
      { name: "Cozze alla marinara", price: "10€", description: "Con cozze, aglio, pomodoro e pane tostato" },
      { name: "Bresaola e burrata", price: "12€", description: "Bresaola, rucola, pomodorini e grana" },
      { name: "Carpaccio di bresaola", price: "12€", description: "Manzo, rucola e grana" },
    ],
    "PRIMI PIATTI": [
      { name: "Lasagna di carne", price: "12€", description: "Lasagna casalinga di carne" },
      { name: "Spaghetti carbonara", price: "11€", description: "Spaghetti con guanciale, uova e parmigiano" },
      { name: "Rigatoni bolognese", price: "11€", description: "Pasta con pomodoro, carne macinata, basilico e parmigiano" },
      { name: "Rigatoni 4 formaggi", price: "10€", description: "Pasta con quattro formaggi" },
      { name: "Penne siciliana", price: "11€", description: "Pomodoro, melanzane, basilico" },
      { name: "Spaghetti sofia", price: "10€", description: "Pomodorini, ricotta, aglio e olio" },
      { name: "Gnocchi sorrentina", price: "13€", description: "Pomodorini, mozzarella e basilico" },
      { name: "Spaghetti pomodoro fresco", price: "10€", description: "Spaghetti con pomodoro fresco e basilico" },
      { name: "Spaghetti arrabbiata", price: "10€", description: "Spaghetti con tocco piccante" },
      { name: "Penne con polpette al sugo", price: "12€", description: "Pasta con ragù di pomodoro e polpette di manzo" },
      { name: "Rigatoni salsicce e funghi", price: "12€", description: "Con salsiccia, funghi porcini e provola" },
      { name: "Paccheri maria", price: "15€", description: "Maccheroni XXL con pomodoro, burrata e granella di pistacchio" },
      { name: "Paccheri frutti di mare", price: "16€", description: "Maccheroni XXL con frutti di mare" },
      { name: "Spaghetti alle vongole", price: "16€", description: "Spaghetti con vongole" },
      { name: "Scialatielli allo scoglio", price: "18€", description: "Pasta fresca con frutti di mare" },
      { name: "Ravioli 4 formaggi", price: "15€", description: "Pasta fresca con 4 formaggi" },
      { name: "Ravioli tartufo", price: "15€", description: "Pasta fresca con funghi porcini e olio al tartufo" },
      { name: "Pasta burrata", price: "15€", description: "Pasta fresca con pomodorini, burrata e granella di pistacchio" },
    ],
    RISOTTI: [
      { name: "Risotto alla pescatora", price: "18€", description: "Riso con frutti di mare" },
      { name: "Risotto verdure", price: "14€", description: "Riso con verdure miste e mascarpone" },
      { name: "Risotto funghi", price: "15€", description: "Riso con funghi porcini e olio al tartufo" },
    ],
  }
}

const flags = {
  es: "🇪🇸",
  en: "🇬🇧", 
  fr: "🇫🇷",
  it: "🇮🇹"
}

export default function MasianelloRestaurant() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [currentLanguage, setCurrentLanguage] = useState<'es' | 'en' | 'fr' | 'it'>('es')
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    people: "",
    comments: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const t = translations[currentLanguage]
  const currentMenuSections = menuSections[currentLanguage]

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const changeLanguage = (lang: 'es' | 'en' | 'fr' | 'it') => {
    setCurrentLanguage(lang)
    setShowLanguageDropdown(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.time || !formData.people) {
      alert(t.camposRequeridos)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          people: "",
          comments: ""
        })
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20masianello.jpg-PoeJis7naMvldQQ1afu6O6i6CLFhwq.jpeg"
                alt="Masaniello Logo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold text-red-600 transform skew-x-6">Masaniello</h1>
                <p className="text-sm text-gray-600">Pizzería Napolitana</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors font-medium"
                >
                  <span className="text-lg">{flags[currentLanguage]}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {showLanguageDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[120px]">
                    {Object.entries(flags).map(([lang, flag]) => (
                      <button
                        key={lang}
                        onClick={() => changeLanguage(lang as 'es' | 'en' | 'fr' | 'it')}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-red-50 transition-colors"
                      >
                        <span className="text-lg">{flag}</span>
                        <span className="text-sm font-medium">{lang.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {t.inicio}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {t.quienesSomos}
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {t.carta}
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {t.ubicacion}
              </button>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/masaniellobcn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <button
                  onClick={() => scrollToSection("reservation")}
                  className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium text-sm">{t.reservarOnline}</span>
                </button>
                <a
                  href="tel:931244912"
                  className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium text-sm">{t.reserva}</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Home Section - Más grande */}
      <section
        id="home"
        className="h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pizza2.jpg-UPcZ9izXd4El36ZF4w5cs5Xuof67Dp.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-3xl mx-auto">
            {/* Logo y Foto lado a lado */}
            <div className="flex items-center justify-center gap-6 mb-12">
              {/* Logo del restaurante */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20masianello.jpg-PoeJis7naMvldQQ1afu6O6i6CLFhwq.jpeg"
                alt="Logo Masaniello"
                className="w-36 h-36 rounded-full border-4 border-red-600 shadow-xl"
              />

              {/* Foto histórica de Masaniello */}
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/masianello.jpg-it7wy4BILI2ObOcG8gWNDE7VWHzd74.jpeg"
                  alt="Masaniello Historical Portrait"
                  className="w-36 h-40 rounded-lg border-4 border-red-600 shadow-xl object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                  1647
                </div>
              </div>
            </div>

            <p className="text-lg md:text-xl mb-16 text-white font-light italic">
              {t.autenticaPizzeria}
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
              <button
                onClick={() => scrollToSection("menu")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {t.verCarta}
              </button>
              <button
                onClick={() => scrollToSection("reservation")}
                className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                {t.reservarMesa}
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 text-sm">
                <Home className="w-4 h-4 text-red-600" />
                <span className="font-medium">{t.tradicionNapolitana}</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-red-600" />
                <span className="font-medium">13:00 - 16:00 | 19:00 - 24:00</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="font-medium">C/ de Galileu, 1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section - 6 botones rojos con imágenes */}
      <section id="menu" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-4 transform skew-x-6">{t.nuestraCarta}</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6 transform skew-x-6"></div>
              <p className="text-lg text-gray-700">{t.saboresNapoles}</p>
            </div>

            {/* 6 Botones principales con imágenes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {Object.entries(currentMenuSections).map(([sectionName, items]) => {
                const images = {
                  PIZZE: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pizze-section-lVmB2GXXs0WZnLCAPjgtQTR15pGBMF.png",
                  SALTIMBOCCA: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deliciosos-rollitos-de-pollo-rellenos-de-judias-verdes-y-zanahorias-envueltas-en-tiras-de-tocino.jpg-MN88Jiv7qnTplaGJRH3Ip8GEoJHyfT.jpeg",
                  "SEGUNDOS PLATOS": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/presentacion-de-un-filete-jugoso.jpg-682gAY18JY6tyXSdUZaFtvkwkGToSJ.jpeg",
                  ANTIPASTI: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antipasti-section-u57Yi1jo0O8Wogll8MXWyojzkWwQZZ.png",
                  "PRIMI PIATTI": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/primi-piatti-section-NWZLbEzsadxHhiJUnepqn7Lii4LbfK.png",
                  RISOTTI: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/risotti-section-2MiKk9N6OG10s9RzQjLHwmrjYnk5X4.png",
                }

                return (
                  <button
                    key={sectionName}
                    onClick={() => toggleSection(sectionName)}
                    className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={images[sectionName as keyof typeof images] || "/placeholder.svg"}
                        alt={sectionName}
                        className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-white"
                      />
                      <h3 className="text-xl font-bold uppercase tracking-wide">{sectionName}</h3>
                      <p className="text-red-100 text-sm mt-1">{items.length} {t.platos}</p>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Contenido desplegable */}
            {activeSection && (
              <div className="border border-red-200 rounded-lg overflow-hidden animate-slide-down">
                <div className="bg-red-600 text-white p-4">
                  <h3 className="text-2xl font-bold uppercase tracking-wide">{activeSection}</h3>
                </div>
                <div className="bg-white p-6">
                  <div className="grid gap-3">
                    {currentMenuSections[activeSection as keyof typeof currentMenuSections].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-start p-3 border-b border-red-100 last:border-b-0 hover:bg-red-50 transition-colors duration-200"
                      >
                        <div className="flex-1">
                          <h4 className="font-bold text-red-600 text-base transform skew-x-3">{item.name}</h4>
                          {item.description && (
                            <p className="text-gray-600 mt-1 text-sm leading-relaxed">{item.description}</p>
                          )}
                        </div>
                        <div className="ml-4 text-right">
                          <span className="text-lg font-bold text-red-600 transform skew-x-3">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 transform skew-x-6">{t.masianelloTitle}</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-8 transform skew-x-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <h3 className="text-2xl font-bold text-red-600 transform skew-x-6">{t.historiaHeroe}</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {t.aboutText1}
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  {t.aboutText2}
                </p>
              </div>

              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-red-600 to-red-800 rounded-lg transform rotate-3 shadow-2xl">
                  <div className="absolute inset-4 bg-white rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/masianello.jpg-it7wy4BILI2ObOcG8gWNDE7VWHzd74.jpeg"
                        alt="Masaniello"
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h4 className="text-xl font-bold text-red-600 transform skew-x-6">{t.masianelloTitle}</h4>
                      <p className="text-gray-600 mt-2">1620 - 1647</p>
                      <p className="text-sm text-gray-500 mt-1">{t.heroeNapoles}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-red-600 mb-4 transform skew-x-6">{t.ubicacion}</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8 transform skew-x-6"></div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-600 mb-4 transform skew-x-3">{t.direccion}</h3>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span>Carrer de Galileu, 1, Barcelona</span>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-600 mb-4 transform skew-x-3">{t.horarios}</h3>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Clock className="w-5 h-5 text-red-600" />
                    <div>
                      <p>{t.lunesViernes}</p>
                      <p>13:00 - 16:00 | 19:00 - 24:00</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-600 mb-4 transform skew-x-3">{t.contacto}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Phone className="w-5 h-5 text-red-600" />
                      <span>931 244 912</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Instagram className="w-5 h-5 text-red-600" />
                      <span>@masaniellobcn</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden h-80 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0234567890123!2d2.1234567890123456!3d41.38879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f8b8b8b8b8%3A0x1234567890123456!2sCarrer%20de%20Galileu%2C%201%2C%2008001%20Barcelona%2C%20Barcelona%2C%20Spain!5e0!3m2!1sen!2ses!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Masaniello - Carrer de Galileu, 1, Barcelona"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-16 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-4 transform skew-x-6">{t.reservarMesa}</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6 transform skew-x-6"></div>
              <p className="text-lg text-gray-700">Completa el formulario y nos pondremos en contacto contigo</p>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.nombre} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.telefono} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      {t.fecha} *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {t.hora} *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">--:--</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="14:00">14:00</option>
                      <option value="14:30">14:30</option>
                      <option value="15:00">15:00</option>
                      <option value="15:30">15:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                      <option value="22:00">22:00</option>
                      <option value="22:30">22:30</option>
                      <option value="23:00">23:00</option>
                      <option value="23:30">23:30</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="w-4 h-4 inline mr-1" />
                      {t.personas} *
                    </label>
                    <select
                      name="people"
                      value={formData.people}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Seleccionar</option>
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.comentarios}
                  </label>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    placeholder="Alergias, preferencias de mesa, etc."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    {t.reservaEnviada}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {t.errorReserva}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? t.enviando : t.enviarReserva}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4 transform skew-x-6">Masaniello</h3>
              <p className="text-red-100 text-sm">
                {t.autenticaCocina}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 transform skew-x-6">{t.contacto}</h4>
              <div className="space-y-2 text-red-100 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Carrer de Galileu, 1, Barcelona</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>931 244 912</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="w-4 h-4" />
                  <span>@masaniellobcn</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 transform skew-x-6">{t.horarios}</h4>
              <div className="space-y-1 text-red-100 text-sm">
                <p>{t.lunesViernes}</p>
                <p>13:00 - 16:00</p>
                <p>19:00 - 24:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-red-500 mt-6 pt-6 text-center text-red-100 text-sm">
            <p>{t.derechosReservados}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
