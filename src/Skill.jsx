import React from 'react'
import './Skill.css'
const Skill = () => {
    const progress = 100
    const progress1 = 90
    const progress2 = 85
    const progress3 = 75
    const progress4 = 90
    const progress5 = 85
    const progress6 = 80
    const progress7 = 75
    const progress8 = 70
    const progress9 = 80
    const progress10 = 70
    return (
        <div className='skillbox mx-5'>
            <h1 className='text-center mt-3'>Technical Skills</h1>
            <p className='text-center mt-3'>Technologies I use to build responsive and scalable web applications. </p>
            <h3 className='skillheadtext mx-5'>Frontend</h3>
            <div className='skillboxicon d-flex gap-5  text-center pt-5 skill'>
               
                    <div className='div-box pt-2 rounded '> <i class="fa-brands fa-html5"></i>HTML5
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress1}%` }}>{progress1}%</div>
                        </div>
                    </div>

                
                <div className='div-box pt-2 rounded'><i class="fa-brands fa-css3"></i>CSS3
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress2}%` }}>{progress2}%</div>
                    </div>
                </div>
                <div className='div-box pt-2 rounded'><i class="fa-brands fa-js"></i>JavaScript(ES6+)
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress3}%` }}>{progress3}%</div>
                    </div>
                </div>
                <div className='div-box pt-2 rounded'> <i class="fa-brands fa-bootstrap"></i>Bootstrap5
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress4}%` }}>{progress4}%</div>
                    </div>
                </div>
                <div className='div-box pt-2 rounded'><i class="fa-brands fa-tailwind-css"></i>Tailwind CSS
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress5}%` }}>{progress5}%</div>
                    </div>
                </div>
                <div className='div-box pt-2 rounded'><i class="fa-brands fa-react"></i>ReactJS
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress6}%` }}>{progress6}%</div>
                    </div>
                </div>
            </div>
            <h3 className=' skillheadtext mx-5 mt-5'>Backend</h3>
            <div className='skillboxicon d-flex gap-5  text-center pt-5 skill'>
                <div className='div-box pt-2 rounded'><i class="fa-brands fa-python"></i>Python
                     <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${progress7}%`}}>{progress7}%</div>
                    </div>
                </div>
                <div className='div-box pt-2 rounded'>Django
                     <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${progress8}%`}}>{progress8}%</div>
                    </div>
                </div>
                <div className='div-box pt-2 rounded'>RestAPI
                     <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${progress9}%`}}>{progress9}%</div>
                    </div>
                </div>
            </div>
            <h3 className='skillheadtext mx-5 mt-5'>Database</h3>
            <div className='skillboxicon d-flex gap-5  text-center pt-5 skill'>
                <div className='div-box pt-2 rounded'>MySQL
                     <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${progress10}%`}}>{progress10}%</div>
                    </div>
                </div>
            </div>
            <h3 className='skillheadtext mx-5 mt-5'>Tools</h3>
            <div className='skillboxicon d-flex gap-5  text-center pt-5 skill'>
                <div className='div-box pt-2 rounded'>Git\
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress4}%` }}>{progress4}%</div>
                    </div>
                </div>
                <div className='div-box pt-2 rounded'><i class="fa-brands fa-github"></i>GitHub
                <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress}%` }}>{progress}%</div>
                    </div></div>
                <div className='div-box pt-2 rounded'>Visual Studio
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress}%` }}>{progress}%</div>
                    </div>
                </div>
                <div className='div-box pt-2 rounded'>Postman
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${progress}%` }}>{progress}%</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skill