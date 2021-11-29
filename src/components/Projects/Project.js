import './Project.css'
import cbr from '../../images/project/cbr.PNG'
import tour from '../../images/project/tour.PNG'
import bdedu from '../../images/project/bdedu.PNG'



const Project = () => {

    return (
        <div className='project-section' id='project'>
            <div className='container p-4'>
                <h1 class='p-5 text-center text-dark'>My Projects</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100 p-2">
                            <img src={cbr} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title ">Honda CBR</h5>
                                <p class="card-text">● Authentication system added (user & admin) <br />
                                    ● Users can order bikes, write reviews <br />
                                    ● HTML, CSS, Bootstrap were used for this site</p>
                                <hr />

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100" >
                            <img src={tour} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">World Tour Planner</h5>
                                <p class="card-text">● Authentication system added (user & admin) <br />
                                    ● Users can book any kind of tourist place <br />
                                    ● React, React Router, Firebase, Bootstrap, MongoDB, Express were used for this site</p>
                                <hr />

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100" >
                            <img src={bdedu} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">BD Educational Platform</h5>
                                <p class="card-text">● Authentication system added (user & admin) <br />
                                    ● Users can take any kind of health service <br />
                                    ● React, React Router, Firebase, Bootstrap, MongoDB, Express were used for this site</p>
                                <hr />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;