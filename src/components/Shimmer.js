const newobj = {
  backgroundColor: "grey",
  width: "500px",
  height: "100px",
};
export const Shimmer = () => {
  return (
    <div className="Restraurant">
      <h1 className="head h1 shimmer"></h1>
      <h1 className="h1 shimmer bt"></h1>
      <div className="Restraurant-card">
        {Array(8)
          .fill("")
          .map((e,index) => (
            <div className="card" key={index}>
              <div className="food-img-container shimmer"></div>

              <h2 className="restaurant-name h2 shimmer"></h2>
              <h3 className="h3 shimmer"></h3>
              <h3 className="h3 shimmer"></h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="res-menu">
      <div className="res-head">
        <img className="res-img shimmer"></img>

        <div>
          <h3 className="h3 shimmer"></h3>
          <h4 className="h2 shimmer"></h4>
          <h4 className="h2 shimmer"></h4>
          <h4 className="p shimmer"></h4>
        </div>
      </div>
      {Array(5)
        .fill("")
        .map((e,index) => (
          <div key={index}>
            <h1 className="h1 shimmer bt"></h1>
            <h1 className="h3 shimmer"></h1>
            <div className="menu-items">
              <div className="menu-food-card">
                <div className="food-details">
                  <h4 className="h2 shimmer"></h4>
                  <h4 className="h2 shimmer"></h4>
                  <p className="p shimmer"></p>
                </div>
                <div className="menu-food-container shimmer">
                  <img />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
