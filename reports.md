- Explica con tus palabras que es una API

una API es un puente de comunicacion entre dos programas, permite que uno le pida cosas al otro

- En caso de haber utilizado un framework de estilos, justifica su uso y porque elegiste ese.

No utilice, normalmente utilizaria tailwind pero veo que el proyecto fue creado con create-react-app y me parece que tendria que utilizar la version 3, configurando los archivos tailwind.config y postcss, lo cual implicaria instalar mas cosas, preferi mantenerlo simple.

- En caso de haber utilizado un patron de componentes, justifica su uso y porque elegiste ese.

Utilice atomic design, creo que es un buen patron ya que divide responsabilidades, evita duplicidad de codigo y agiliza el desarrollo.

- ¿Que patrones de diseno conoces?, cuales haz aplicado, explica porque lo utilizaste y como te ayudo a resolver un problema o tuvo una ventaja sobre otros.

Como mencione antes utilice Atomic Design para organizar mis componentes, esto ayuda a no duplicar codigo y mantenerlo ordenado y facil de escalar. Tambien he utilizado Observer cuando trabaje con web sockets en Vue, donde ciertos componentes se suscriben a cambios y se actualizaban automaticamente.

- ¿Haz utilizado Sockets?. Si es asi, explica el porque lo utilizaste y sus ventajas.

Si, en mi anterior trabajo utilizamos websockets junto con la libreria Deck.gl y la API de Google Maps para renderizar la posicion GPS de vehiculos en tiempo real, tambien los utilice para crear salas de chat con los GPS para enviar comandos y recibir respuestas, y tambien para transmision de video en vivo.
