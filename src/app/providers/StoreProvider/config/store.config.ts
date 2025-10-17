import { cartSliceReducer } from "@/src/widgets/Cart";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
	return configureStore({
		reducer: {
			cart: cartSliceReducer,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
