import "./style.css";
function CharCard({ key, img, name, status }) {
  console.log(img);
  return (
    <>
      <div className={status === "Alive" ? "aliveCard" : "deadCard"}>
        <div key={key}>
          <img className="image" src={img} alt={name}></img>
          <p>{name}</p>
        </div>
      </div>
    </>
  );
}

export { CharCard };
