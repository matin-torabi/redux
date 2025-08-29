import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./menu";
import { sliderSlice } from "./slider";
import { cardSlice } from "./card";
import { categorySlice } from "./category";
import { productsexistSlice } from "./productsexist";
import { dastresiSlice } from "./dastresi";
import { productsSlice } from "./products";
import { brandSlice } from "./Brand";
import { articlesSlice } from "./articles";
import { HeaderTopSlice } from "./HeaderTopSlice";
import { MenuSlice } from "./MenuSlice";
import { BurgerSlice } from "./BurgerSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    slider: sliderSlice.reducer,
    card: cardSlice.reducer,
    category: categorySlice.reducer,
    productsexist: productsexistSlice.reducer,
    dastresi:dastresiSlice.reducer,
    brand:brandSlice.reducer,
    header: HeaderTopSlice.reducer,
    menu: MenuSlice.reducer,
    burger: BurgerSlice.reducer,    
    articles:articlesSlice.reducer
  },
});
