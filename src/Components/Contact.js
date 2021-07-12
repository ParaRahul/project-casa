import React from 'react'
import Navbar from "./NavBar"

export default function Contact() {


 
    return (
        <>
        <Navbar color="teal lighten-1" />
        <div className="contactus" style={{height:'90vh',width:"100%",display:"flex", justifyContent:"center",alignItems:"center"}}>
            <div className="row center">
                <h1>Contact us</h1>
                <div className="col s12 m4 l12"> 
                    <form className="col">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                <label htmlFor="last_name">Last Name</label>
                            </div>

                            <div className="input-field col s12">
                                <i className="material-icons prefix">phone</i>
                                <input id="icon_telephone" type="tel" className="validate"/>
                                <label htmlFor="icon_telephone">Telephone</label>
                            </div>

                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label htmlFor="email">Email</label>
                            </div>


                            <div className="input-field col s12">
                                <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
                                <label htmlFor="textarea2">Textarea</label>

                                <button className="btn">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
        </div>
        </>
    )
}
