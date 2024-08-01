# ApiFarmaceutica

# Structure of the ApiFarmaceutica
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
        Create a new folder for the project and open the terminal
        execute npm init -y for create the package.json

2.  Installation of dependecies:
        Install TypeScript: **npm install typeScript --save-dev**
        Install ts-node for execute files TypeScript: **npm install ts-node --save-dev**
        Intall Express: **npm install express**
        Install mysql2 for connection to the database: **npm install mysql2**
        Install Nodemon for reset automatically the API: **npm install nodemon --save-dev**
        Intall @types/express and @types/node for the type of TypeScript: **npm install @types/express @types/node --save-dev**

3. Configuration of TypeScript:
        excecute: **npx tsc --init** to create a file tsconfig.json
        configure: tsconfig.json (habilite struct, es6) 

4.  configure scripts for ts:

    modify in package.json:
    
    ****************************************************************
    "scripts": {
    "start": "nodemon dist/index.js",
    "build": "tsc",
    "dev": "ts-node src/index.ts
    }
    ****************************************************************