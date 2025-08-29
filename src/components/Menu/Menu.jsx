const Menu = async() => {
    let menu = []
    try {
        let data = await fetch("https://matimtorabi.github.io/db/db.json")

        let res = await data.json()
        menu = res.menu.map((item)=>{
            if (item.dropdown.length>0) {
                return `
                    <div class="border-b border-gray-200">
                        <button class="accordion-btn w-full p-4 text-right flex justify-between items-center ">
                            <span class="font-medium font-[Yekan]">${item.title}</span>
                            <span class="transform transition-transform duration-300 text-lg">
                                <i class="icon-chevron-left transform -rotate-90 align-middle text-lg h-18"></i>
                            </span>
                        </button>
                        <div class="accordion-content max-h-0 overflow-hidden transition-all duration-300">
                            <div class="p-4 bg-[#F5F5F5] space-y-3 max-h-60 overflow-y-auto">
                                ${item.dropdown.map((childe)=>{
                                    return `
                                        <a href="#" class="text-sm font-[Yekan] block pr-4 py-2 rounded transition">${childe.name}</a>
                                    `
                                }).join(" ")}
                            </div>
                        </div>
                    </div>
                `
            }
        })
        document.querySelector(".draver ").innerHTML = menu.join(" ")
    } catch (error) {
        console.log(error);
    }

}
 
export default Menu;
