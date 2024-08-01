CREATE DATABASE farmacia;
CREATE TABLE Medicamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  cantidad INT NOT NULL,
  fechaDeCaducidad DATE NOT NULL,
  precio DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Pacientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  edad INT NOT NULL,
  historialMedico TEXT
);

CREATE TABLE Prescripciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pacienteId INT,
  medicamentoId INT,
  dosis VARCHAR(255),
  frecuencia VARCHAR(255),
  duracion VARCHAR(255),
  FOREIGN KEY (pacienteId) REFERENCES Pacientes(id),
  FOREIGN KEY (medicamentoId) REFERENCES Medicamentos(id)
);
