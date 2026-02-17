function ContactPage(){
    return(
        <>
            <section className="bg-black-100 h-full">
                <div className="flex flex-col gap-4">
                    <h1 className="">LET'S <span className="text-white font-regular">WORK</span> TOGETHER</h1>
                    <p>Hello, if you find my works interesting or have any inquiries, feel free to fill out the form below or you can also contact me through the contact details provided below.</p>
                    <p>mark.estareja.me@gmail.com | (+63) 91 494 5150</p>
                </div>
                <form onSubmit="" className="w-full h-auto flex flex-col gap-2">
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <input type="address" name="address" placeholder="Your Address" />
                    <textarea name="message" placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </>
    )
}

export default ContactPage;