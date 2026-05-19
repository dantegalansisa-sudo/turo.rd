// TURO — Steakhouse Premium · Santo Domingo
// Catálogo completo del menú. Editar para precios o fotos reales por plato.

export interface Dish {
  name: string;
  description?: string;
  image?: string;
  price?: string;
  tag?: 'signature' | 'new' | 'spicy';
}

export interface SubSection {
  id: string;
  title: string;
  subtitle?: string;
  dishes: Dish[];
}

export interface CategoryPage {
  slug: string;
  title: string;
  tagline: string;
  coverVideo: string;
  poster?: string;
  sections: SubSection[];
}

// Posters por categoría — usados en la portada de cada página de menú.
// (Quitamos los videos del 787; ahora son imágenes con grain animado.)
const COVERS = {
  crudos: '/assets/img/food87.png',
  josper: '/assets/img/carne.png',
  pescados: '/assets/img/food55.png',
  pastas: '/assets/img/food.png',
  ensaladas: '/assets/img/food12.png',
  brunch: '/assets/img/heros.jpg',
} as const;
const VIDEO = '';

export const MENU: CategoryPage[] = [
  {
    slug: 'crudos-entradas',
    title: 'Crudos & Entradas',
    tagline: 'El abrebocas: frescura, brasa y producto que habla solo.',
    coverVideo: VIDEO, poster: COVERS.crudos,
    sections: [
      {
        id: 'crudos',
        title: 'Crudos',
        subtitle: 'Producto fresco, manos firmes, mínima intervención.',
        dishes: [
          { name: 'Ostras Blue Point', description: 'Ostras frescas Blue Point sobre hielo, mignonette de la casa.', image: '/assets/img/food87.png', tag: 'signature' },
          { name: 'Bone Marrow Steak Tartare', description: 'Steak tartare de res sobre hueso de tuétano asado al Josper.', image: '/assets/img/carne9.png', tag: 'signature' },
          { name: 'Cóctel de Camarones', description: 'Camarones grandes, salsa de cóctel, aguacate y limón.', image: '/assets/img/food55.png' },
          { name: 'Carpaccio de Res', description: 'Lonchas finas de res, rúcula, parmesano y aceite de trufa.', image: '/assets/img/carne7.png' },
          { name: 'Salmón Tartare', description: 'Salmón fresco, palta, cítricos, aceite verde y crujiente.', image: '/assets/img/food45.png' },
        ],
      },
      {
        id: 'entradas',
        title: 'Entradas',
        dishes: [
          { name: 'Burrata', description: 'Burrata cremosa, tomate confitado, albahaca y aceite de oliva extra virgen.', image: '/assets/img/food.png' },
          { name: 'Carpaccio de Pulpo', description: 'Pulpo a baja temperatura, aceite de pimentón ahumado y aceitunas.', image: '/assets/img/food12.png' },
          { name: 'Carpaccio de Roastbeef', description: 'Roastbeef en finas láminas, alcaparras, parmesano y mostaza.', image: '/assets/img/carne65.png' },
          { name: 'Pulpo a la Brasa', description: 'Pulpo asado al Josper, puré de papas ahumadas y pimentón.', image: '/assets/img/food98.png', tag: 'signature' },
          { name: 'Crispy Shrimp', description: 'Camarones crujientes con alioli picante.', image: '/assets/img/food69.png' },
          { name: 'Ostras Josper', description: 'Ostras gratinadas al carbón con mantequilla de hierbas.' },
          { name: 'Mollejitas de Ternera', description: 'Mollejas crujientes, limón y sal en escamas.' },
          { name: 'Trío', description: 'Selección del chef — tres bocados de la cocina caliente.' },
          { name: 'Chorizo a la Parrilla', description: 'Chorizo artesanal, chimichurri y pan tostado.' },
          { name: 'Croquetas', description: 'Croquetas cremosas de jamón ibérico.' },
          { name: 'King Crab', description: 'Patas de King Crab al vapor, mantequilla cítrica.', tag: 'signature' },
          { name: 'Empanada de Short Rib', description: 'Empanada rellena de short rib braseado por horas.' },
          { name: 'Chipotle Meatballs', description: 'Albóndigas de res en salsa chipotle ligeramente picante.', tag: 'spicy' },
        ],
      },
      {
        id: 'charcuteria',
        title: 'Charcutería',
        subtitle: 'Para abrir mesa, con vino y tiempo.',
        dishes: [
          { name: 'Jamón Serrano' },
          { name: 'Cecina de Wagyu', tag: 'signature' },
          { name: 'Jamón Ibérico de Bellota', tag: 'signature' },
          { name: 'Tabla de Quesos' },
          { name: 'Tabla de Quesos & Embutidos' },
        ],
      },
      {
        id: 'montaditos',
        title: 'Montaditos',
        dishes: [
          { name: 'Morcilla', description: 'Pan tostado, morcilla, cebolla caramelizada.' },
          { name: 'Sobrasada', description: 'Sobrasada mallorquina sobre pan crujiente con miel.' },
          { name: 'Catalana', description: 'Pan con tomate, aceite y jamón.' },
        ],
      },
      {
        id: 'sliders',
        title: 'Sliders',
        dishes: [
          { name: 'Roastbeef', description: 'Mini brioche, roastbeef rosado, salsa de rábano.' },
          { name: 'Pepito', description: 'Lomito, queso y mostaza dijon en pan suave.' },
          { name: 'Trio de Sliders', description: 'Tres sliders surtidos del chef.', tag: 'signature' },
        ],
      },
    ],
  },
  {
    slug: 'josper-grill',
    title: 'Josper Grill',
    tagline: 'La brasa lo cambia todo. Carnes maduradas, fuego vivo, sello Turo.',
    coverVideo: VIDEO, poster: COVERS.josper,
    sections: [
      {
        id: 'carnes',
        title: 'From the Josper Grill',
        subtitle: 'Todos los cortes salen del horno Josper a la brasa de carbón.',
        dishes: [
          { name: 'NY Strip USDA Prime · 16oz', description: 'Corte clásico americano, marmoleo intenso, asado al Josper.', image: '/assets/img/carne.png', tag: 'signature' },
          { name: 'NY Strip Con Hueso · 20oz', description: 'NY Strip madurado con hueso para mayor sabor.', image: '/assets/img/carne1.png' },
          { name: 'Ribeye USDA Prime · 16oz', description: 'Ribeye jugoso, marmoleo premium USDA Prime.', image: '/assets/img/carne2.png', tag: 'signature' },
          { name: 'T-Bone Steak · 20oz', description: 'Lomo y NY Strip unidos por el hueso — para los puristas.', image: '/assets/img/carne3.png' },
          { name: 'Churrasco Black Angus · 10oz', description: 'Churrasco Black Angus, jugoso, con chimichurri.', image: '/assets/img/carne4.png' },
          { name: 'Tenderloin Black Angus · 8oz', description: 'Lomito magro, suave, con reducción de Malbec.', image: '/assets/img/carne5.png' },
          { name: 'Cowboy Steak Natural Black Angus', description: 'Bone-in ribeye natural, presentación dramática.', image: '/assets/img/carne6.png', tag: 'signature' },
          { name: 'Porter House Steak', description: 'El rey de la mesa — lomito + NY Strip en un mismo corte.', image: '/assets/img/carne11.png', tag: 'signature' },
        ],
      },
      {
        id: 'chefs-selections',
        title: "Chef's Selections",
        subtitle: 'Más allá del steak — la cocina del chef.',
        dishes: [
          { name: 'Bacalao Escalibado', description: 'Bacalao confitado, escalibada de pimientos y berenjenas.' },
          { name: 'Short Rib Braseado', description: 'Costilla de res braseada por horas, puré de papas trufado.', image: '/assets/img/carne55.png', tag: 'signature' },
          { name: 'Filete Mignon', description: 'Filete tierno con salsa demi-glace.', image: '/assets/img/carne8.png' },
          { name: 'Pechuga de Pollo al Sartén', description: 'Pechuga jugosa con costra dorada y mantequilla de hierbas.' },
          { name: 'Magret de Pato', description: 'Magret de pato a la brasa con reducción de frutos rojos.' },
          { name: 'Cornish Hen al Carbón', description: 'Pollito de corral entero al carbón con hierbas frescas.' },
          { name: 'Paletilla de Cordero Lechal', description: 'Cordero lechal braseado lentamente, hueso fuera.', tag: 'signature' },
          { name: 'Turo Burger', description: 'Burger insignia de la casa — blend Turo, queso, alioli.', image: '/assets/img/carne65.png', tag: 'signature' },
          { name: 'Dry Aged Burger', description: 'Burger con blend de carne dry-aged 30 días.', tag: 'signature' },
        ],
      },
      {
        id: 'guarniciones',
        title: 'Guarniciones',
        subtitle: 'El acompañamiento perfecto.',
        dishes: [
          { name: 'Coliflor', description: 'Coliflor asada con tahini.' },
          { name: 'Maíz Tierno', description: 'Maíz a la brasa, mantequilla y queso.' },
          { name: 'Pimientos del Padrón', description: 'Pimientos del padrón fritos con sal en escamas.' },
          { name: 'Arroz Salvaje' },
          { name: 'Maduro a la Brasa' },
          { name: 'Espinacas Salteadas' },
          { name: 'Espárragos a la Parrilla' },
          { name: 'Pork Belly Mac & Cheese', tag: 'signature' },
          { name: 'Skillet Cornbread' },
          { name: 'Papa al Horno' },
          { name: 'Brócoli Salteado' },
          { name: 'Hongos Salteados' },
          { name: 'Papas Trufadas', tag: 'signature' },
        ],
      },
    ],
  },
  {
    slug: 'pescados-mariscos',
    title: 'Pescados & Mariscos',
    tagline: 'Del mar al carbón — sin escala.',
    coverVideo: VIDEO, poster: COVERS.pescados,
    sections: [
      {
        id: 'pescados',
        title: 'Del Mar',
        dishes: [
          { name: 'Filete de Salmón', description: 'Salmón al Josper, vegetales de temporada.', image: '/assets/img/food45.png' },
          { name: 'Langostino Tigre', description: 'Langostino tigre a la parrilla con mantequilla de ajo.', image: '/assets/img/food55.png', tag: 'signature' },
          { name: 'Camarones', description: 'Camarones jumbo al ajillo o a la parrilla.', image: '/assets/img/food69.png' },
          { name: 'Dorada Entera', description: 'Dorada al Josper con limón, sal en escamas y aceite verde.', image: '/assets/img/food98.png', tag: 'signature' },
        ],
      },
    ],
  },
  {
    slug: 'pastas-arroces',
    title: 'Pastas & Arroces',
    tagline: 'Sustancia. Carbohidrato hecho bien.',
    coverVideo: VIDEO, poster: COVERS.pastas,
    sections: [
      {
        id: 'pastas',
        title: 'De la cocina',
        dishes: [
          { name: 'Boloñesa', description: 'Pasta fresca con ragú de carne cocido lento.', image: '/assets/img/food.png' },
          { name: 'Shrimp Pasta', description: 'Pasta con camarones, ajo, cherry y albahaca.', image: '/assets/img/food12.png' },
          { name: 'Paella Ibérica', description: 'Paella con chorizo ibérico, pollo y mariscos.', tag: 'signature' },
          { name: 'Risotto de Guinea', description: 'Risotto cremoso con guinea criolla y parmesano.', image: '/assets/img/food87.png', tag: 'signature' },
          { name: 'Meloso de Camarón', description: 'Arroz meloso de camarones — caldoso, sabroso.', image: '/assets/img/food.png' },
        ],
      },
    ],
  },
  {
    slug: 'ensaladas-sopas',
    title: 'Ensaladas & Sopas',
    tagline: 'Verde, fresco, honesto — y cremas que abrazan.',
    coverVideo: VIDEO, poster: COVERS.ensaladas,
    sections: [
      {
        id: 'ensaladas',
        title: 'Ensaladas',
        dishes: [
          { name: 'Ensalada Yuyi', description: 'Mezcla de hojas verdes, queso de cabra, frutas y vinagreta de cítricos.', image: '/assets/img/food12.png', tag: 'signature' },
          { name: 'Ensalada Griega', description: 'Tomate, pepino, feta, aceitunas Kalamata, orégano.' },
          { name: 'Ensalada de Churrasco', description: 'Churrasco en lonchas, lechuga, cherry y dressing chimichurri.', image: '/assets/img/carne9.png' },
          { name: 'Ensalada César', description: 'César clásica con croutons de la casa y parmesano.' },
          { name: 'Ensalada de Camarones', description: 'Camarones al grill sobre cama verde y aderezo de limón.', image: '/assets/img/food69.png' },
          { name: 'Burger Salad', description: 'Carne molida tipo burger sobre ensalada, salsa tatín.' },
        ],
      },
      {
        id: 'sopas',
        title: 'Sopas & Cremas',
        dishes: [
          { name: 'Crema de Tomate', description: 'Cremosa, asada lentamente con albahaca fresca.' },
          { name: 'Crema de Maíz', description: 'Crema de maíz dulce con crocante de tocineta.' },
          { name: 'Chili con Carne', description: 'Chili clásico, frijoles, carne y especias.', tag: 'spicy' },
          { name: 'Butternut Squash Cream', description: 'Crema de auyama asada, semillas tostadas.' },
        ],
      },
    ],
  },
  {
    slug: 'brunch',
    title: 'Turo Brunch',
    tagline: 'Sábados y domingos, 10am – 1pm. La mejor manera de empezar.',
    coverVideo: VIDEO, poster: COVERS.brunch,
    sections: [
      {
        id: 'pescados-brunch',
        title: 'Pescados',
        dishes: [
          { name: 'Bacalao Ahumado', description: 'Bacalao ahumado en casa, pan tostado y crema.' },
          { name: 'Salmón Ahumado', description: 'Salmón ahumado, alcaparras, cebolla morada y bagel.', image: '/assets/img/food45.png' },
          { name: 'Tuna Salad', description: 'Atún fresco sobre ensalada y aderezo cítrico.' },
          { name: 'Salmon Salad', description: 'Salmón a la parrilla sobre ensalada verde.' },
          { name: 'Camarón Salad', description: 'Camarones grillados sobre cama de hojas frescas.' },
          { name: 'Maine Lobster', description: 'Langosta de Maine al vapor, mantequilla de hierbas.', tag: 'signature' },
        ],
      },
      {
        id: 'raw-bar',
        title: 'Raw Bar',
        subtitle: 'Lo más fresco, sin fuego.',
        dishes: [
          { name: 'Blue Point Oysters (x unidad)', description: 'Ostras frescas Blue Point.', image: '/assets/img/food87.png' },
          { name: 'King Crab Legs (x libra)', tag: 'signature' },
          { name: 'Langostino Austral (x libra)' },
          { name: 'Maine Lobster (x libra)', tag: 'signature' },
          { name: 'Tuna Tartare', description: 'Atún rojo, palta, sésamo, ponzu.' },
          { name: 'Steak Tartare', description: 'Tartar de res cortado a cuchillo, yema, mostaza.', image: '/assets/img/carne9.png' },
          { name: 'Salmón Tartare', description: 'Tartar de salmón con palta y cítricos.' },
          { name: 'Carpaccio de Res', description: 'Láminas finas con parmesano, rúcula y trufa.', image: '/assets/img/carne7.png' },
          { name: 'Carpaccio de Vieiras', description: 'Vieiras crudas, aceite de oliva y cítricos.' },
        ],
      },
      {
        id: 'eggs',
        title: 'Eggs',
        dishes: [
          { name: 'Turo Benedicts', description: 'English muffin, jamón ibérico, huevo poché, salsa holandesa.', image: '/assets/img/food.png', tag: 'signature' },
          { name: 'Salmon Benedicts', description: 'Versión clásica con salmón ahumado.' },
          { name: 'Brooklyn Benedicts', description: 'Tocineta crocante y aguacate.' },
          { name: 'Eggs Any Style', description: 'Huevos como los quieras — fritos, revueltos, poché.' },
          { name: 'Omelette al Gusto', description: 'Omelette con tus ingredientes favoritos.' },
        ],
      },
      {
        id: 'brunch-ensaladas',
        title: 'Ensaladas & Sopas',
        dishes: [
          { name: 'Ensalada Yuyi' },
          { name: 'Ensalada César' },
          { name: 'Ensalada de Aguacate', description: 'Aguacate, mezclum, vinagreta de limón.' },
          { name: 'Burger Salad' },
          { name: 'Crema de Tomate' },
          { name: 'Crema de Auyama' },
        ],
      },
      {
        id: 'sweets',
        title: 'Sweets',
        dishes: [
          { name: 'French Toast', description: 'Pan brioche caramelizado, sirope de maple, fruta fresca.', image: '/assets/img/postre.png', tag: 'signature' },
          { name: 'Cóctel de Frutas', description: 'Frutas frescas de temporada.', image: '/assets/img/postre1.png' },
          { name: 'Pancake con Blueberry', description: 'Pancakes esponjosos con arándanos frescos.', image: '/assets/img/postre2.png' },
        ],
      },
      {
        id: 'chefs-specialties',
        title: "Chef's Specialties",
        subtitle: 'Brunch nivel cena.',
        dishes: [
          { name: 'Steak and Eggs', description: 'NY Strip, huevos al gusto, papas trufadas.', image: '/assets/img/carne.png', tag: 'signature' },
          { name: 'Huevos Rotos', description: 'Papas crocantes, jamón ibérico, huevos rotos sobre todo.' },
          { name: 'Mini Focaccia' },
          { name: 'Steak a Caballo', description: 'Steak con huevo encima, jugos de carne.', image: '/assets/img/carne4.png' },
          { name: 'Prime Rib Roast', description: 'Roast beef asado lento, jugos naturales.', image: '/assets/img/carne1.png', tag: 'signature' },
          { name: 'Steak Frites', description: 'Steak con papas fritas estilo bistró.' },
          { name: 'Gallinita Frita', description: 'Pollito de corral frito, miel picante.' },
          { name: 'Canasta de Bollería Mixta', description: 'Cruasanes, danishes y panecillos del horno.' },
        ],
      },
    ],
  },
];

export const SITE = {
  name: 'Turo',
  fullName: 'Turo · Steakhouse Premium',
  handle: '@turo.rd',
  phone: '(809) 784-5211',
  whatsapp: '18097845211',
  whatsappLink: 'https://wa.me/18097845211',
  instagram: 'https://www.instagram.com/turo.rd/',
  reservationUrl: 'https://appointment.inflo.business/diezton/reservation?step=service',
  address: 'Calle Andrés Julio Aybar 25, Santo Domingo',
  hours: [
    { days: 'Lun – Vie', time: '12:00 PM – 11:00 PM' },
    { days: 'Sáb – Dom', time: '12:00 PM – 11:00 PM' },
    { days: 'Brunch Sáb–Dom', time: '10:00 AM – 1:00 PM' },
  ],
} as const;
