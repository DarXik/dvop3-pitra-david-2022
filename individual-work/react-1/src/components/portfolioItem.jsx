function portfolioItem(param) {
  return (
    <div className={param.classN}>
      <div className={param.classN + "-image"}>
        <img src={param.img} alt="image" />
      </div>
      <div className={param.classN + "-title"}>
        <h3>{param.title}</h3>
      </div>
      <div className={param.classN + "-info"}>
        <p>{param.text}</p>
      </div>
    </div>
  );
}
export default portfolioItem;