import {StateSchema} from "@/shared/store/types";

export const veryInterestingBookErrorSelector = (state: StateSchema) => state.errors
export const veryInterestingBookLoadingSelector = (state: StateSchema) => state.isLoading