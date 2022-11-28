function portfolioItem(param) {
  return (
    <div class="main-content">
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
      <div class="content-2">
        <div class="content-2-image">
          <img src={param.img} alt="image" />
        </div>
        <div class="content-2-title">
          <h3></h3>
        </div>
        <div class="content-2-info">
          <p>{param.text}</p>
        </div>
      </div>
      <div class="content-3">
        <div class="content-3-image">
          <img src={param.img} alt="image" />
        </div>
        <div class="content-3-title">
          <h3>{param.title}</h3>
        </div>
        <div class="content-3-info">
          <p>{param.text}</p>
        </div>
      </div>
    </div>
  );
}
export default portfolioItem;
