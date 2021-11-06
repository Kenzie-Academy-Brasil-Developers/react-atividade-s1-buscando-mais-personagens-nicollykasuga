import { CharCard } from "../CharCard/index";
import "./style.css";
function Characters({ characterList }) {
  console.log(characterList);
  return (
    <>
      <h1>Meus personagens</h1>
      <div className="container">
        {characterList.map((item, index) => (
          <CharCard
            key={item.id}
            img={item.image}
            name={item.name}
            status={item.status}
          ></CharCard>
        ))}
      </div>
    </>
  );
}

export { Characters };
