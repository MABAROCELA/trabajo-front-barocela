**UTN – Regional Buenos Aires**
**Programación Web Inicial - TT**

**Proyecto Integrador Final**

**Profesor:** Pastor Bernal
**Alumna:** Marta Barocela (DNI 31.453.478)

El proyecto consiste en la página web de una marca ficticia de ropa infantil (PERITA). La realicé utilizando la librería REACT y pretende tener un diseño totalmente responsivo.


A continuación presento una breve descripción de lo realizado:


BARRA DE NAVEGACIÓN - - - - - - - - 

Está compuesta por los componentes **Navibar** y **Linkbar**

**Navibar** está realizado con Bootstrap y presenta el logo a la izquierda y el menú de RRSS a la derecha.
**Linkbar** está realizado con Bootstrap y presenta el menú de navegación

HOME - - - - - - - - 

El componente **Home** está realizado con Bootstrap y presenta un carrusel con fotos. La primera foto es la presentación de la colección y lleva al componente **ListaProductos**

LOGIN - - - - - - - - 

El componente **Login** está realizado en HTML y CSS nativos. También utilicé los hooks { useState } y { useEffect } y tiene alertas customizadas de SweetAlert.

Para registrarse en el componente Login hay que completar obligatoriamente todos los datos y apretar el botón "REGISTRARSE" que imprime los datos ingresados en la consola y también quedan almacenados en el Local Storage. Al completar con los mismos datos y apretando el botón "INICIAR SESIÓN" se redirige al cliente a una pantalla de bienvenida. En esta se toma el nombre con el que se registró y mediante la Api externa OpenWeatherMap (componente **ApiClima**) toma los datos de localización, idioma y clima actual de la región del visitante y devuelve la información en el mensaje de bienvenida. Desde allí se puede cerrar sesión o ir a la Colección (componente **ListaProductos**) para comprar.

- - - - - - - -  FW23 - - - - - - - - 

Esta sección presenta el componente **ListaProductos** que está a su vez constituido por el mapeo del componente **CardProducto**. El diseño está realizado con CSS Grid Layout.

El componente **CardProducto** está realizado con bootstrap y muestra el nombre, precio, talles e imagen principal de cada producto al mapear el array de "productos.js". Este array presenta los siguientes datos: Código de producto, Nombre, Precio, Composición, Descripción, Talles, 1 foto principal y 2 fotos secundarias. En la parte inferior de la Card presenta el botón "VER DETALLES" que lleva al cliente al componente **DetalleProducto** correspondiente al producto elegido a través de su código.

El componente **DetalleProducto** está realizado en HTML y CSS nativos utilziando los hooks  { useParams } y { useState } y el evento onClick. Presenta las tres fotos (1 principal y 2 secundarias) que pueden verse en tamaño grande al clikearlas en el sector izquierdo, mientras que en el derecho se presentan el nombre, descripción, composición, precio, talles disponsibles (que se asignan aleatoriamente en el array "productos.js") y el botón "COMPRAR". Solamente habiendo elegido un talle se habilita el botón de compra, y una vez apretando aparece un alert que detalla nombre y talle del producto seleccionado y avisa que fue agragado al carrito (que no está habilitado y se presenta para mostrar la posible funcionalidad).

SALE - - - - - - - - 
Esta sección se encuentra deshabilitada y tiene solamente fines estéticos para la barra de navegación.

FOOTER - - - - - - - - 
El componente **Footer** está realizado con bootstrap utilizando CSS Flex Layout. Presenta tres secciones con anclas y un pequeño form con email input para suscribirse.