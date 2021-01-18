import React, { useState, useEffect } from 'react'
import Produto from '../components/Produto';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageErrorBox from '../components/MessageErrorBox';

export default function HomeScreen() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {

      try {
        setLoading(true);
        const { data } = await axios.get('/api/produtos');
        setLoading(false);
        setProdutos(data);

      } catch (err) {
        setError(err.message);
        setLoading(false);
      }

    };
    fetchData();
  }, [])
  return (
    <div>
      {loading ? (<LoadingBox />) : error ? (<MessageErrorBox variant="danger">{error}</MessageErrorBox>) : (
        <div className="row center">
          {
            produtos.map((produto) => (
              <Produto key={produto._id} produto={produto} />
            ))}
        </div>

      )}
    </div>
  );
}