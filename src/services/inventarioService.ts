import { Medicamento } from '../models/medicamento';
import connection from '../db/connection';

export class InventarioService {
  async agregarMedicamento(medicamento: Medicamento): Promise<void> {
    await connection.promise().query(
      'INSERT INTO Medicamentos (nombre, cantidad, fechaDeCaducidad, precio) VALUES (?, ?, ?, ?)',
      [medicamento.nombre, medicamento.cantidad, medicamento.fechaDeCaducidad, medicamento.precio]
    );
  }

  async actualizarCantidad(id: number, cantidad: number): Promise<void> {
    await connection.promise().query(
      'UPDATE Medicamentos SET cantidad = ? WHERE id = ?',
      [cantidad, id]
    );
  }

  async eliminarMedicamentosCaducados(): Promise<void> {
    const hoy = new Date();
    await connection.promise().query(
      'DELETE FROM Medicamentos WHERE fechaDeCaducidad < ?',
      [hoy]
    );
  }

  async listarMedicamentos(): Promise<Medicamento[]> {
    const [rows] = await connection.promise().query(
      'SELECT * FROM Medicamentos'
    );
    return rows as Medicamento[];
  }
}
