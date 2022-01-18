import { Link } from 'react-router-dom';

const Row3 = () => {
    return (
        <section id="row3">
            <div className="container">
                <div className="row">
                    <Link to="InRow3item1" className="col-md-4 mt-2">
                        <div>
                            <img alt="img5" className="img2" src="https://www.dwinawan.com/blog/thumb_article16.jpg" />
                            <p className="date pt-3"> January 16, 2022</p>
                            <h3 className="row-headings">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                            <p className="row-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, reiciendis quo, sint ipsa voluptatum, ratione quisquam iusto ut dolores voluptates assumenda possimus numquam facere et pariatur modi voluptate optio similique!</p>
                        </div>
                    </Link>

                    <Link to="InRow3item2" className="col-md-4 mt-2">
                        <div>
                            <img alt="img6" className="img3" src="https://www.dwinawan.com/blog/thumb_article15.jpg" />
                            <p className="date pt-3"> January 16, 2022</p>
                            <h3 className="row-headings">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                            <p className="row-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, reiciendis quo, sint ipsa voluptatum, ratione quisquam iusto ut dolores voluptates assumenda possimus numquam facere et pariatur modi voluptate optio similique!</p>
                        </div>
                    </Link>

                    <Link to="InRow3item3" className="col-md-4 mt-2">
                        <div>
                            <img alt="img7" className="img3" src="https://www.dwinawan.com/blog/thumb_article14.jpg" />
                            <p className="date pt-3"> January 16, 2022</p>
                            <h3 className="row-headings">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                            <p className="row-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, reiciendis quo, sint ipsa voluptatum, ratione quisquam iusto ut dolores voluptates assumenda possimus numquam facere et pariatur modi voluptate optio similique!</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Row3;