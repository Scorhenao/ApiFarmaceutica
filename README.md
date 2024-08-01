# ApiFarmaceutica

# Structure folders of the ApiFarmaceutica


- **`src/`**: Carpeta principal del código fuente del proyecto.
  - **`controllers/`**: Contiene los controladores que manejan las solicitudes HTTP y delegan la lógica a los servicios.
    - **`analisisDatosController.ts`**: Controlador para análisis de datos.
    - **`medicamentoController.ts`**: Controlador para operaciones relacionadas con medicamentos.
    - **`pacienteController.ts`**: Controlador para operaciones relacionadas con pacientes.
  - **`db/`**: Configuración de la conexión a la base de datos.
    - **`connection.ts`**: Archivo para configurar la conexión con la base de datos MySQL.
  - **`models/`**: Modelos de datos que definen las estructuras de las tablas de la base de datos.
    - **`medicamentoModel.ts`**: Modelo para la tabla de medicamentos.
    - **`pacienteModel.ts`**: Modelo para la tabla de pacientes.
    - **`prescripcionModel.ts`**: Modelo para la tabla de prescripciones.
  - **`routes/`**: Rutas de la API, que definen los puntos finales y asignan controladores.
    - **`analisisDatosRoutes.ts`**: Rutas para análisis de datos.
    - **`medicamentoRoutes.ts`**: Rutas para operaciones relacionadas con medicamentos.
    - **`pacienteRoutes.ts`**: Rutas para operaciones relacionadas con pacientes.
  - **`services/`**: Servicios que contienen la lógica de negocio y acceso a datos.
    - **`analisisDatosService.ts`**: Servicio para análisis de datos.
    - **`medicamentoService.ts`**: Servicio para operaciones con medicamentos.
    - **`pacienteService.ts`**: Servicio para operaciones con pacientes.
  - **`utils/`**: Utilidades y funciones auxiliares.
    - **`csvWriter.ts`**: Utilidad para exportar datos a archivos CSV.
  - **`index.ts`**: Archivo principal para configurar y arrancar el servidor Express.
- **`tsconfig.json`**: Configuración de TypeScript.
- **`package.json`**: Archivo de configuración de npm con dependencias y scripts.
- **`README.md`**: Documentación del proyecto.

/src
  /controllers
    medicamentoController.ts
    pacienteController.ts
    prescripcionController.ts
    analisisDatosController.ts
  /models
    medicamento.ts
    paciente.ts
    prescripcion.ts
  /services
    inventarioService.ts
    registroPacientesService.ts
    analisisDatosService.ts
  /routes
    medicamentoRoutes.ts
    pacienteRoutes.ts
    prescripcionRoutes.ts
    analisisDatosRoutes.ts
  /db
    connection.ts
  /utils
    csvWriter.ts
  index.ts
/tsconfig.json
/package.json

# installation steps
## configuration of the environment
### be sure that you have installed NodeJS and NPM

1. Initialization of  the Project:
    - Create a new folder for the project and open the terminal
    - execute: **npm init -y** for create the package.json
    - execute: **npm install** to use packages

2.  Installation of dependecies:
    - Install TypeScript: **npm install typescript --save-dev**
    - Install ts-node for execute files TypeScript: **npm install ts-node --save-dev**
    - Intall Express: **npm install express**
    - Install mysql2 for connection to the database: **npm install mysql2**
    - Install Nodemon for reset automatically the API: **npm install nodemon --save-dev**
    - Intall @types/express and @types/node for the type of TypeScript: **npm install @types/express @types/node --save-dev**
    - Install nodejs: **npm install nodejs**

3. Configuration of TypeScript:
    - excecute: **npx tsc --init** to create a file tsconfig.json
    - configure: tsconfig.json (habilite struct, es6) 

4. configure scripts for ts:

    - modify in package.json:

    ****************************************************************
    - "scripts": {
    - "start": "nodemon index.ts",
    - "build": "tsc",
    - "dev": "ts-node src/index.ts
    }
    ****************************************************************