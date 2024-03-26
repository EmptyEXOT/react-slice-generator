export interface VeryInterestingBookModel {
    error: VeryInterestingBookError | null,
    isLoading: boolean,
}

export interface VeryInterestingBookError {
    statusCode: number,
    message: string,
}