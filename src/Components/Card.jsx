
const Card = () => {
  return (
    <article className="flex flex-col justify-between gap-5 w-96">
     <img src="/food/strawBerryCake.svg" className="h-60" alt="highlight-recipe"/>
     <div className="flex flex-col gap-7 px-6 pb-8 rounded-b-[20px] shadow-xl">
        <h1 className="text-lg font-bold">Tiramisu Cake With Strawberry Sauce</h1>
        <div className="flex flex-row items-center gap-[50px]">
            <h6>Josh Lee</h6>
            <div className="flex flex-row gap-[10px]">
                <a  className="border-2 cursor-pointer border-primary_color px-6 py-[10px] bg-white text-xs text-primary_color rounded-3xl hover:bg-primary_color 
                hover:text-white">Easy</a>
                <a className="border-2 border-primary_color cursor-pointer px-5 py-3 bg-primary_color text-xs text-white rounded-3xl 
                 hover:bg-white hover:text-primary_color">View Recipe</a>
            </div>
        </div>
     </div>
    </article>
  )
}

export default Card