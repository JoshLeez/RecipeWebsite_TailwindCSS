
const Footer = () => {
  return (
    <footer className="mt-20 px-32 py-16 bg-primary_color">
        <section className="flex flex-row gap-44 container mx-auto justify-center">
            <div className="flex flex-col gap-[15px] text-white w-80">
                <h1 className="text-4xl font-semibold">JoshRecipe</h1>
                <p className="text-base font-normal">Id cursus metus aliquam eleifend mi in nulla posuere. Lorem faucibus vitae aliquet</p>
            </div>
            <div className="text-white flex flex-row gap-28">
                <div className="flex flex-col gap-4">
                    <h3 className="text-base font-semibold">About Us</h3>
                    <div className="flex flex-col gap-2 text-sm font-normal">
                        <p>About the Website</p>
                        <p>Partnership</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-base font-semibold">Service</h3>
                    <div className="flex flex-col gap-2 text-sm font-normal">
                        <p>Our Contact</p>
                        <p>Recipe</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-base font-semibold">About Us</h3>
                    <div className="flex flex-col gap-2 text-sm font-normal">
                        <p>About the Website</p>
                        <p>Partnership</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer