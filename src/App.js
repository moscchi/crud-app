import axios from "axios";
import { useEffect, useState } from "react";
import CrudForm from "./components/CrudForm.jsx";
import CrudTable from "./components/CrudTable.jsx";
import Loader from "./components/Loader.jsx";
function App() {
  const initialDb = [];
  const [db, setDb] = useState(initialDb); // db = DataBase
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(false);


  const getData = async () => {
    const res = await axios.get("http://localhost:4004/santos"),
      json = await res.data;
    setDb(json);
  };
  useEffect(() => {
    setLoading(true);
    getData()
    setLoading(false);
  }, []);

    const createData = async (data) => {
    data.id = Date.now();

    let options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(data)
    };
    let res = await axios("http://localhost:4004/santos", options),
    caballero = await res.data
    setDb([...db, caballero]);
  };

  const updateData = async (data) => {
    let endpoint = `http://localhost:4004/santos/${data.id}`;

    let options = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(data)
    },
    res = await axios(endpoint, options),
    caballero = await res.data

      let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb([...newData, caballero]);
    };
  

    const deleteData = async (id) => {
      let isDelete = window.confirm(
        `Estás seguro que deseas eliminar el registro "${id}"?`
      );
  
      if (isDelete) {
        let endpoint = `http://localhost:4004/santos/${id}`;
  
        let options = {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        },
        res = await axios(endpoint, options),
        caballero = await res.data
        setDb([...db, caballero]);
      } else {
        return;
      }
    };
  

  return (
    <div>
      <h2>CRUD App</h2>
      <div>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
      </div>
      <div>
      {loading && <Loader />}
  {db && (
    <CrudTable
      data={db}
      setDataToEdit={setDataToEdit}
      deleteData={deleteData}
    />
  )}
      </div>
    </div>
  );
}

export default App;
