import { createContext, useReducer, ReactNode } from "react";
import sampleRealmProgressData from "../sampledata/SampleRealmProgressData";
import UserProgressData from "../types/UserProgressData";
import { LightItemData } from "../types/RealmProgressData";

type ProgressDataReducerAction = { type: "MARK_COLLECTED" | "MARK_IN_PROGRESS", payload: { realm: string, id: number } };

export const ProgressDataContext = createContext<UserProgressData>(null!);
export const ProgressDataDispatchContext = createContext<React.Dispatch<ProgressDataReducerAction>>(null!);

/**
 * Removes an item from the source array, and inserts it into the target array, inserted at the correct position based on the id of the object.
 * @param source The source array to remove from.
 * @param target The target array to insert into.
 * @param element The element to move.
 * @returns The new source and target arrays.
 */
function moveBetweenArrays(source: LightItemData[], target: LightItemData[], element: LightItemData) {
    let start = 0;
    let end = target.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (target[mid].id < element.id) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    target.splice(start, 0, element);
    source.splice(source.indexOf(element), 1);

    return [source, target];
}

function dataReducer(state: UserProgressData, action: ProgressDataReducerAction) {
    const inProgressArray = [...state[action.payload.realm].inProgress];
    const collectedArray = [...state[action.payload.realm].collected];

    switch (action.type) {
        case 'MARK_COLLECTED': {
            const targetObject = inProgressArray.find(x => x.id === action.payload.id)!;
            // remove from in progress, and insert into collected with position based on id
            const [newInProgressArray, newCollectedArray] = moveBetweenArrays(inProgressArray, collectedArray, targetObject);

            const newState = { ...state };
            newState[action.payload.realm] = { inProgress: newInProgressArray, collected: newCollectedArray };

            return newState;
        }
        case 'MARK_IN_PROGRESS': {
            const targetObject = collectedArray.find(x => x.id === action.payload.id)!;
            // remove from collected, and insert into in progress with position based on id
            const [newCollectedArray, newInProgressArray] = moveBetweenArrays(collectedArray, inProgressArray, targetObject);

            const newState = { ...state };
            newState[action.payload.realm] = { inProgress: newInProgressArray, collected: newCollectedArray };

            return newState;
        }
        default: {
            return state;
        }
    }
}

export function ProgressDataProvider({ children }: { children: ReactNode }) {
    const [progressData, dispatch] = useReducer(dataReducer, sampleRealmProgressData);

    return (
        <ProgressDataContext.Provider value={progressData}>
            <ProgressDataDispatchContext.Provider value={dispatch}>
                {children}
            </ProgressDataDispatchContext.Provider>
        </ProgressDataContext.Provider>
    )
}
