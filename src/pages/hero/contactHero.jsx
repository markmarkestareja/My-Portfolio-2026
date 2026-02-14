import contactImg from "../../assets/images/hero/contact/contact.jpg";

function ContactHero() {
    return (
        <section className="flex flex-col md:flex-row justify-between items-start gap-4 h-lvh">
            <div className="">
                <div className="flex flex-col gap-4">
                    <p className="text-black-100">CONTACT ME</p>
                    <div>
                        <h2 className="text-black-100 max-w-2xl">BUILD YOUR ONLINE PRESENCE AND</h2>
                        <div className="relative w-max">
                            <a className="text-h1 md:text-h1MD lg:text-h1LG font-light italic tracking-tighter text-base/8 md:text-base/12 lg:text-base/18" href="#">START HERE</a>
                            <svg className="text-black-100 w-5 lg:w-8 h-auto -rotate-45 absolute right-[-50px]" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="48" d="m112 244l144-144l144 144M256 120v292"/></svg>
                        </div>
                    </div>
                </div>
                <p className="text-black-300 mt-13.5">Hello, if you find my works interesting or have any inquiries, feel free to fill out the form below or you can also contact me through the contact details provided below.</p>
            </div>
            <div className=" overflow-hidden h-full flex justify-center self-center">
                <img className="h-full w-auto object-cover rounded-tl-[150px] 2xl:rounded-tl-[200px]  rounded-br-[150px] 2xl:rounded-br-[200px]" src={contactImg} alt="Contact" />
            </div>
        </section>
    )
}

export default ContactHero;