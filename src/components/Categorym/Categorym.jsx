
const Categorym = async() => {
    let category = []
    try {
        let data = await fetch("https://matimtorabi.github.io/db/db.json")
        let res = await data.json()
        category = res.category.map((item , index)=>{
                return `
                      <a href="" class=""><img src=${item.image} alt=${item.alt} class="w-[166px] pt-[28px] h-[166px]"></a>
                `
        })
        document.querySelector(".mcat").innerHTML = category.join(" ")
    } catch (error) {
        console.log(error);
    }

}
 
export default Categorym;
