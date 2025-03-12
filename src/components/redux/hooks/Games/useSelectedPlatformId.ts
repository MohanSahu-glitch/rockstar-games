import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectPlatformId } from "../../selectors";
import { endpoint } from "../../../../constants";

/**
 * Should only be used for games, as we are filtering games with this.
 */
export const useSelectedPlatformid = (entity = endpoint.games) => {
    return useSelector((state: RootState) => selectPlatformId(state, entity));
}