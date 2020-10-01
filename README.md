# Wolox Challenge

## DEMO

Podes ver una demo del challenge [aca](https://joaquinmiguens.github.io/wolox-interview/) :rocket: :raised_hands:

## Instalación 🔧

Realizar un fork del repositorio.


Clonar el proyecto en la VM.

```git clone https://github.com/{tu.usuario}/wolox-interview.git folder ```


Luego nos posicionamos en el root del proyecto, donde se encuentra la mayoría de los scripts

```cd folder```


Una vez en la carpeta raiz del proyecto instalamos las dependecias

```npm install```

## Modo de desarrollo

Para comenzar con el modo de produccion y hacer un deploy a github.pages debemos, antes que nada, verificar que los test sean logrados con exito para eso debemos ejecutar:

```ng test```

Luego para iniciar nuestro servidor local debemos ejecutar:

```ng serve```


Una vez ejecutado abra el navegador e ingrese **localhost:4200/**.

## Modo de produccion


Para comenzar con el modo de produccion y hacer un deploy a github.pages debemos, antes que nada, verificar que los test sean logrados con exito para eso debemos ejecutar:

```ng test```


Luego debemos ingresar al archivo **package.json** y modificar la variable **homepage** asignandole la url de tu github.page.

> Nota: Su url debe tener el siguiente formato : https://{{username}}.github.io/wolox-interview/


Desde nuestra consola ejecutar el siguiente comando

``` npm run deploy ```


**Ahora si, tu app debe encontrarse alojada en https://{{username}}.github.io/wolox-interview/**
