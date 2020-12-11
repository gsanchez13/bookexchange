const Landing = () => {
    return (
        <div>
            <div className="container">
                <h3 className="jumbotron text-center">Welcome to Book Exchange</h3>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=405&h=540&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2Fhpsorcstone.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/71ykU-RQ0nL._AC_SY741_.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                                <img src="https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </a>
            </div>
        </div>
                    )
                };
                
export default Landing;