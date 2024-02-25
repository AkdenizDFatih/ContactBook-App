import React from 'react'

const ContactList = () => {
  return (
    <div>
        <section className='contact-add p-3'>
            <div>
                <div>
                    <div>
                        <div>
                            <p>
                                Contact Book
                                <button className='btn btn-primary ms-2'>
                                    <i className='fa-solid fa-plus'></i>
                                </button>
                            </p>
                            <section className='contact-list'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='card'>
                                            <div className="card-body">
                                                <div className="col-md-4">
                                                    <img src="https://img.icons8.com/matisse/100/user-male.png" alt="user-male-circle" className='img-fluid'/>
                                                </div>
                                                <div className="col-md-7">

                                                </div>
                                                <div className="col-md-1">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
  )
}

export default ContactList