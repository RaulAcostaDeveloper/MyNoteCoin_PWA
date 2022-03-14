const STATIC_CACHE_NAME = "MyNoteCoin-StaticCache-v1";

const ASSETS = [
    "./",
    "./index.html",
    "./manifest.json",
    "./ServiceWorker.js",
    "./Audios/click.mp3",
    "./Audios/pop.mp3",
    "./Css/About.css",
    "./Css/BotonesInicioNavegacion.css",
    "./Css/CantidadesInicio.css",
    "./Css/global.css",
    "./Css/TotalResultadosLista.css",
    "./Css/TransicionDesaparecer.css",
    "./Css/Botones/Boton1.css",
    "./Css/Botones/Boton2.css",
    "./Css/Botones/BotonesFijos.css",
    "./Css/Formularios/Formulario1.css",
    "./Css/Formularios/FormulariosGlobal.css",
    "./Css/Secciones/ElementoEnLista.css",
    "./Css/Secciones/SeccionesGlobal.css",
 
    "./Imagenes/about.png",
    "./Imagenes/editar-documento.png",
    "./Imagenes/Eliminar.png",
    "./Imagenes/EveryPixelLogo.png",
    "./Imagenes/Home.png",
    "./Imagenes/Iconos/maskable_icon_x72.png",
    "./Imagenes/Iconos/maskable_icon_x96.png",
    "./Imagenes/Iconos/maskable_icon_x128.png",
    "./Imagenes/Iconos/maskable_icon_x144.png",
    "./Imagenes/Iconos/maskable_icon_x152.png",
    "./Imagenes/Iconos/maskable_icon_x192.png",
    "./Imagenes/Iconos/maskable_icon_x384.png",
    "./Imagenes/Iconos/maskable_icon_x512.png",
    "./Imagenes/Iconos/maskable_icon_x128.ico",
    "./Imagenes/Iconos/maskable_icon.png",
    "./Imagenes/Secciones/deudas.png",
    "./Imagenes/Secciones/deudasafavor.png",
    "./Imagenes/Secciones/gastos.png",
    "./Imagenes/Secciones/gastosfuturos.png",
    "./Imagenes/Secciones/interrogation-mark.png",
    "./Imagenes/Secciones/semana.png",
    "./Imagenes/Secciones/tarjetas.png",
    "./Imagenes/Guia/guia1.png",
    "./Imagenes/Guia/guia2.png",
    "./Imagenes/Guia/guia3.png",
    "./Imagenes/Guia/guia4.png",
    "./Imagenes/Guia/guia5.png",
    "./Imagenes/Guia/guia6.png",
    "./Imagenes/Guia/guia7.png",
    "./Imagenes/Guia/guia8.png",
    "./Imagenes/Guia/guia9.png",
    "./Imagenes/Guia/guia10.png",
    "./Imagenes/Guia/guia11.png",
    "./Imagenes/Guia/guia12.png",
    "./Imagenes/Guia/guia13.png",
    "./Imagenes/Guia/guia14.png",
    "./Imagenes/Guia/guia15.png",
    "./Imagenes/Guia/guia16.png",

    "./JavaScript/LocalStorage.js",
    "./JavaScript/RedirectHTTPS.js",
    "./JavaScript/RegistroServiceWorker.js",
    "./JavaScript/Audio/ReproducirAudio.js",
    "./JavaScript/Listas/MovimientosListas.js",
    "./JavaScript/ManejoDePantallas/ManejoDePantallas.js",
    "./JavaScript/ManejoDePantallas/Transicion.js",
    "./JavaScript/MovimientosDinero/MovimientosDinero.js",
    "./JavaScript/Validaciones/ValidacionCampos.js"
];

self.addEventListener("install", (evt) => {
    evt.waitUntil(
        caches.open(STATIC_CACHE_NAME).then( (cache) => {
            setTimeout(() => {    
            cache.addAll(ASSETS);
            }, 3000);
        })
    );
});

self.addEventListener("activate", (evt) => {
    evt.waitUntil(
        caches.keys().then( (keys) => {
        setTimeout(() => {
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] !== STATIC_CACHE_NAME) {
                    caches.delete(keys[i]);
                }
            }
        }, 3000);
    }));
});

self.addEventListener("fetch", (evt) => {
    if (navigator.onLine) {
        //Si es online pues hace fetch
    } else {
        //Si es offline, trae de caché los recursos
        console.log("Offline Mode");  
        evt.respondWith(
            caches.match(evt.request).then( (cacheRes) => {
                return (cacheRes);
                }).catch( () => {
                if (evt.request.url.indexOf(".html") > -1) {
                    //Intento que en caso de error carge el fallback pero aún no funciona
                    return caches.match("fallback.html");
                }
        }));
    }
});