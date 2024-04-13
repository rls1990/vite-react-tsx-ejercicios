import { useFetch } from "../../hooks/fetch/useFetch";
import { Loader } from "../loader/Loader";
import { Message } from "../message/Message";

interface SelectListProps {
  title: string;
  url: string;
  handleChangue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectList = ({ title, url, handleChangue }: SelectListProps) => {
  const { data, error, loading } = useFetch(url);

  if (!data) return null;
  if (error)
    return (
      <Message
        bgColor="#dc3545"
        msg={`Error ${error.status} ${error.statusText}`}
      />
    );

  const id = `select-${title}`;
  const label = title.charAt(0).toUpperCase() + title.slice(1);
  const options = data.response[title];

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChangue}>
        <option value="">Elige un {title}</option>
        {data &&
          options.map((el: string, index: number) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))}
      </select>
    </>
  );
};
