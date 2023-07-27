import Card from "./Card"

const HighLight = () => {
  return (
    <div className="flex flex-col gap-11 mb-12 w-[1293px] mx-auto">
        <header className="flex flex-row h-auto w-auto items-center justify-between">
          <h2 className="text-3xl font-semibold">Highlight Menu</h2>
          <h6 className="text-primary_color text-base cursor-pointer">View All {'>'}</h6>
        </header>
        <section className="flex flex-row justify-between">
          <Card/>
          <Card/>
          <Card/>
        </section>
    </div>
  )
}

export default HighLight