import { Link } from 'react-router-dom';


const Projets = () => {
  return(
    <div>
      <div class="mt-5">
        <h1>PLATON trusted us !</h1>
        <Link to="/works/:id"><button class="btn btn-primary">Our study case</button></Link>
      </div>
      <div class="mt-5">
        <h1>SOLANE trusted us !</h1>
        <Link to="/works/:id"><button class="btn btn-primary">Our study case</button></Link>
      </div>
      <div class="mt-5">
        <h1>SEDAL trusted us !</h1>
        <Link to="/works/:id"><button class="btn btn-primary">Our study case</button></Link>
      </div>
    </div>

  )
};

export default Projets;