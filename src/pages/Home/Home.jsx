import "./Home.css";

function Home() {
  return (
    <div className="Home-container">
      <div className="Home-img">
        <img src="../../../public/sia.jpg" alt="" />
      </div>
      <div className="Home-text">
        <h1>
          Hello,it's <span>Sia</span>
        </h1>
        <h4>
          &nbsp;&nbsp;สาขาวิชาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
        </h4>
        <p>
          &nbsp;&nbsp;"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam adipisci, illo cumque minima hic officiis obcaecati modi magnam laborum esse! In enim, recusandae obcaecati dolor cupiditate veritatis maiores sint? Exercitationem."
        </p>
      </div>
      <div className="Home-card-container">
        <div className="card-home">
          <img src="../../../public/cat.jpg" alt="" />
          <div className="card-home-text">
            <h3>Card Title 1</h3>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>

        <div className="card-home">
          <img src="../../../public/moutain.jpg" alt="" />
          <div className="card-home-text">
            <h3>Card Title 2</h3>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="" className="btn btn btn-primary">
              Read More
            </a>
          </div>
        </div>

        <div className="card-home">
          <img src="../../../public/sea.jpg" alt="" />
          <div className="card-home-text">
            <h3>Card Title 3</h3>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="" className="btn btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
