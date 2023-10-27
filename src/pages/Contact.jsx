function Contact() {
    return (
        <>
        
        <div className="container-fluid">
            <h1 className="text-center pt-4 text-primary-emphasis">This is a Contact Page</h1>
            <div className="row">               
            
            <div className="col-md-6 p-5">
                <div className="card">
                    <form>

                        <div className="p-4">
                            <label htmlFor="exampleInputEmail1" className="form-label" >Email Address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        </div>

                        <div className="p-4">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" required/>
                        </div>

                        <div className="p-4">
                            <label htmlFor="floatingTextarea">Message us</label>
                            <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary m-4">Submit</button>
                       

                    </form>                       
               </div>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src="https://www.b2bmg.com/hubfs/contact-1.png" alt="" />
            </div>     
            </div>  
        </div>
        </>
        
    )
}

export default Contact;