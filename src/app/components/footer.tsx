const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <div className="container fixed bottom-5 ">
            <div className="flex justify-center">
                <h3>{`${currentYear}@Muhammad Usman Ahmad`}</h3>
            </div>
        </div>
    )


}

export default Footer;