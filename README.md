## IP Bags

### Proyecto final ReactJS - Inés Piazzalonga

Este es un ecommerce de carteras de mujer, en donde se simula la compra de productos. Todo el sitio fue creado con ReactJS

[![Watch the video](./src/assets/proyectoFinal.mp4)]

### Páginas

- Home : La página principal muestra el Navbar, con una imagen de inicio y un botón "shop" que lleva al ItemListContainer donde se muestran todos los productos de la tienda.

- Tienda : La vista inicial de la tienda contiene todos los productos (con la posibilidad de navegar por categorías desde el navbar) de la misma con sus respectivas fotos, nombres, precios y un boton "mas info" que dirige al ItemDetail donde se ven los detalles de cada producto. Dentro del ItemDetail se encuentra el botón "agregar al carrito" donde se puede seleccionar la cantidad de productos deseados, al hacer click en éste botón se da la opción de ir al carrito (dirige a Cart) o seguir comprando (dirige a la vista principal de la tienda). Todos los productos se encuentran almacenados en Firebase.

- Carrito : El ícono del carrito esta presente durante toda la experiencia en el sitio. En caso de que el carrito esté vacío se ve un cartel que indica que no hay productos con un link a la vista principal de la tienda. Si el carrito tiene al menos un producto se muestra el detalle de compra, con sus repectivos items e información, al tener un carrito con productos también se habilita el formulario desde donde se tomará la información del usuario seteando así la orden con su ID y datos de usuario e items adquiridos.

### Librerías

- React Router Dom // Colección de componentes que facilitan la navegación entre páginas en React, el cual use para la navegación dinámica de la misma
- FireBase // Base de datos provista por Google, utilizada para guardar la lista de productos y las órdenes de compra
- Toastify // crea alertas personalizadas para indicar que se agregó un producto al carrito
- Sweet Alert // crea alertas personalizadas para confirmar la compra e indicar el número de compra

### Deploy

El deploy del sitio fue realizado en Netlify, se encuentra en este link =>

En inicio se muestran todos los productos en ItemListContainer, ingresando a cada producto se abre itemDetail que muestra los detalles de cada uno.
Cada itemDetail tiene un contador con botón de "agregar al carrito"
En NavBar cada link te muestra diferentes productos de la categoria que indica.
# ipBags-react
