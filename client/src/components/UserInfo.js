import AllUsers from "../pages/AllUsers";

function UserInfo(props) {
  return (
    <div className="user-info-card">
      <h4>{props.name}</h4>
      <section className="band-names">
        {props.bandNames.map((band, i) => {
          if (!null) {
            return <h5 key={band.text}>{band}</h5>;
          } else {
            return <p>no band names</p>;
          }
        })}
      </section>
    </div>
  );
}

export default UserInfo;