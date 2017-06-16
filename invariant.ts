declare const process;

const NODE_ENV = process.env.NODE_ENV;

const invariant = function (condition, format, CustomError) {
    if (NODE_ENV !== 'production') {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    }

    if (!condition) {
        let error;
        if (format === undefined) {
            error = new Error(
                'typed-invariant: Minified exception occurred; use the non-minified dev environment ' +
                'for the full error message and additional helpful warnings.'
            );
        } else {
            if (CustomError) {
                error = new CustomError(format)
            }
            else {
                error = new Error(format);
                error.name = 'Invariant Violation';
            }
        }
        error.framesToPop = 1;
        throw error;
    }
};

export = invariant;
