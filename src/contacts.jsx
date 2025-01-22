export default function Contacts(){

    return(
        <>
            <div className="contacts p-5" id="contact">
                <div>
                    <p className="desc font-bold text-center">Remaya Organizaion</p>
                    <p className="desc font-bold text-center">+254-774-545-775</p>
                    <br />
                    <p className="desc font-bold text-center">PO BOX : 8545-00200</p>
                    <p className="desc font-bold text-center">Nairobi, Kenya</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="desc font-bold text-lg text-center">Subscribe to our Newsletter</p>
                    <p className="desc text-center">Be the first to hear important updates, see brand new resources, and find new ways to connect from the team at Remaya organization.</p>
                    <input type="text" placeholder="Your Email Adress" className="desc" id="email-input"/>
                    <br />
                    <button className="desc subscribe-button">Subscribe</button>
                </div>
                <div className="flex flex-col items-center">
                        <a href="#MAIN1">
                            <button className="btn">Home</button>
                        </a>
                        <a href="#abd">
                            <buttton className="btn">About us</buttton>
                        </a>
                        <a href="#projects">
                            <button className="btn">Projects</button>
                        </a>
                        <a href="#mission">
                            <button className="btn">Mission And Vision</button>
                        </a>
                        <a href="#contact">
                            <button className="btn">Contact Us</button>
                        </a>
                </div>

            </div>
        </>
    )
}