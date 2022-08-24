import CrudTableRow from "./CrudTableRow"

const CrudTable = ({data, setDataToEdit, deleteData}) => {
    return (
      <div>
        <h3>Tabla de Datos</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Constelacion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
  {
    data.length === 0 && (
     <tr>
        <td colSpan="3">Sin datos</td>
     </tr>
    )
   }
   {
    data.length !== 0 && (
      data.map( caballero => <CrudTableRow  key={caballero.id} caballero={caballero} setDataToEdit={setDataToEdit} deleteData={deleteData}/> ) 
    )
   }
</tbody>
      </table>
    </div>
  )
}
export default CrudTable  