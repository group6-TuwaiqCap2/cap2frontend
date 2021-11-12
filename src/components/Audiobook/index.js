import React from 'react'

const Audiobook = () => {
  // const [Audiobook, setAudiobook] = useState([]);
  // useEffect(() => {
  //   getAllaudiobook();
  // }, []);
  // const getAllaudiobook = async () => {
  //   const Audiobook = await axios.get(`${BASE_URL}/audiobook`);
  //   console.log(Audiobook);
  //   setMovies(audiobook.data.results);
  // };
  return (
    <div>
      <h1>Audiobook</h1>
      {/* <ul>
            {Audiobook.map((aBook) => (
              <li key={aBook.trackId}>{aBook.artistName}</li>
            ))}
          </ul> */}
    </div>
  )
}

export default Audiobook;
