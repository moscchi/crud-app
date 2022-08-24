const CrudTableRow = ({ caballero, deleteData, setDataToEdit }) => {
  return (
    <tr>
      <td>{caballero.name}</td>
      <td>{caballero.constellation}</td>
      <td>
        <td>
          <button onClick={() => setDataToEdit(caballero)}>Editar</button>
          <button onClick={() => deleteData(caballero.id)}>Eliminar</button>
        </td>
      </td>
    </tr>
  );
};

export default CrudTableRow;
