// import { SongArtist } from "./SongArtist";
import { Message } from "../message/Message";
import { SongLyric } from "./SongLyric";

interface SongDetailsProps {
  search: any;
  lyric: any;
}

export const SongDetails = ({ search, lyric }: SongDetailsProps) => {
  if (!lyric) return null;

  return (
    <>
      <h3>Detalles</h3>
      {lyric.err || lyric.name === "AbortError" ? (
        <Message
          bgColor="#dc3545"
          msg={`Error: no existe la canción ${search.song}`}
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}

      {/* <SongArtist /> */}
    </>
  );
};
