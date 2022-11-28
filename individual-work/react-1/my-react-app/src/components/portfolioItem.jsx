function portfolioItem(param) {
  return (
    <div class="content-1">
      <div class="content-1-image">
        <img src={param.img} alt="image" />
      </div>
      <div class="content-1-title">
        <h3>{param.title}</h3>
      </div>
      <div class="content-1-info">
        <p>{param.text}</p>
      </div>
    </div>
    
  );
}
export default portfolioItem;
