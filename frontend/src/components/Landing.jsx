import { useState } from 'react';

const Landing = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeClass, setActiveClass] = useState(`${"carousel-item active"}`)
    const [inactiveClass, setInactiveClass] = useState(`${"carousel-item"}`)
    const prevSlide = () => {
        console.log("prev indicator clicked");
        switch (activeSlide) {
            case 0:
                setActiveSlide(3)
                break;
            case 1:
                setActiveSlide(0)
                break;
            case 2:
                setActiveSlide(1)
                break;
            case 3:
                setActiveSlide(2)
                break;
            default:
                setActiveSlide(activeSlide)
                break;
        }
    };
    const nextSlide = () => {
        console.log("next indicator clicked");
        switch (activeSlide) {
            case 0:
                setActiveSlide(1)
                break;
            case 1:
                setActiveSlide(2)
                break;
            case 2:
                setActiveSlide(3)
                break;
            case 3:
                setActiveSlide(0)
                break;
            default:
                setActiveSlide(activeSlide)
                break;
        };
    };

    return (
        <div>
            <div className="container">
                <h3 className="jumbotron text-center bg-dark text-light">Welcome to Book Exchange</h3>
            </div>
            <div className="container-sm w-70">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" ></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1}></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3}></li>
                    </ol>
                    <div className="carousel-inner bg-dark">
                        <div className={activeClass}>
                            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=405&h=540&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2Fhpsorcstone.jpg" className="d-block w-25 m-auto" alt="Harry Potter and the Sorcerers Stone" />
                        </div>
                        <div className={inactiveClass}>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/71ykU-RQ0nL._AC_SY741_.jpg" className="d-block w-25 m-auto" alt="..." />
                        </div>
                        <div className={inactiveClass}>
                            <img src="https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg" className="d-block w-25 m-auto" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden" onClick={prevSlide}>Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden" onClick={nextSlide}>Next</span>
                    </a>
                </div>
            </div>
            <hr className="mx-3" />
            <div className="container-lg mx-5 px-5">
            </div>
        </div>
    )
};

export default Landing;