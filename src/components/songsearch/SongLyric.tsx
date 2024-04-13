interface SongLyricProps {
  title: string;
  lyrics: string;
}

export const SongLyric = ({ title, lyrics }: SongLyricProps) => {
  return (
    <div>
      <h4>{title}</h4>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyrics}</blockquote>
    </div>
  );
};
