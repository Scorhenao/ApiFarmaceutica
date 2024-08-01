export interface pacientes {
    id: number;
    nombre: string;
    edad:number;
    historialMedico:Text;
}

export interface Prescripcion {
    medicamentoId: number;
    dosis: string;
    frecuencia: string;
    duracion: string;
  }