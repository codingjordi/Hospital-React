import {useState, useEffect, createContext} from 'react';
import axios from 'axios';

const InformesContext = createContext();
const API_URL = 'https://663b7395fee6744a6ea1b083.mockapi.io/api/v1/hospital/informes';


// eslint-disable-next-line react/prop-types
const  APIConnection = ({ children }) => {

  const [informes, setInformes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [userType, setUserType] = useState(''

  // }

  useEffect(() => {
    const fetchInformes = async () => {
      try {
        const response = await axios.get(`${API_URL}`);
        setInformes(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInformes();
  }, [informes]);

  const deleteInforme = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      setInformes(informes.filter((informe) => informe.id !== id));
    } catch (error) {
      console.error("Error deleting informe:", error);
    }
   };

  const addInforme = async (informe) => {
    try {
      const response = await axios.post(`${API_URL}`, informe);
      setInformes([...informes, response.data]);
    } catch (error) {
      console.error("Error adding informe:", error);
    }
  };

  const updateInforme = async (informe) => {
    try {
      const response = await axios.put(
        `${API_URL}/${informe.id}`,
        informe
      );
      setInformes(
        informes.map((i) => (i.id === informe.id ? response.data : i))
      );
    } catch (error) {
      console.error("Error updating informe:", error);
    }
  };

  {/*const getInformeById = async (id) => {
    try {
      const response = await axios.get(
        `${API_URL}/${informe.id}`,
        informe
      );
      setInformes(
        informes.map((informe) => (i.id === informe.id ? response.data : i))
      );
    } catch (error) {
      console.error("Error getting informe:", error);
    }
  }*/}

    return (
        <InformesContext.Provider
        value={{
            informes,
            isLoading,
            deleteInforme,
            addInforme,
            updateInforme,
        }}
        >
        {children}
        </InformesContext.Provider>
    );
};

export { APIConnection, InformesContext };