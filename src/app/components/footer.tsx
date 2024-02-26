const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <div className="container  bottom-5 py-10 ">
            <div className="flex justify-center">
                <h3>{`${currentYear}@Muhammad Usman Ahmad`}</h3>
            </div>
        </div>
    )


}

export default Footer;