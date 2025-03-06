import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export function useGames() {
    const isLoading = useSelector((state: RootState) => state.game.isLoading);
    const results = useSelector((state: RootState) => state.game.response.results);
    const error = useSelector((state: RootState) => state.game.error);

    const dispatch = useDispatch<AppDispatch>();

    return { isLoading, results, error, dispatch };
}