import { useState, useEffect } from "react";
import { SongForm } from "./SongForm";
import { SongDetails } from "./SongDetails";
import { Loader } from "../loader/Loader";
import { helpHttp } from "../../helpers/helpHttp";

export const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;
      //const artistURL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      const songURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      console.log(songURL);

      setLoading(true);

      const [songRes]: any = await Promise.all([
        //helpHttp().get(artistURL),
        helpHttp().get(songURL),
      ]);

      setLyric(songRes);

      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data: any) => {
    setSearch(data);
  };

  return (
    <div>
      <h2>Song Search</h2>
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      {search && !loading && <SongDetails search={search} lyric={lyric} />}
    </div>
  );
};
