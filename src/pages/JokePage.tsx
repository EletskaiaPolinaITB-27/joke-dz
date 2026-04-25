import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosApi } from '../axiosApi';

export const JokePage = () => {
  const { category } = useParams();
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const getJoke = async () => {
      try {
        const response = await axiosApi(`/random?category=${category}`);
        setJoke(response.data.value);
      } catch (e) {
        console.log(e);
      }
    };

    if (category) {
      getJoke();
    }
  }, [category]);

  return (
    <div>
      <h2>Joke category = {category}</h2>
      <p>{joke}</p>
    </div>
  )
}