// import internal dependencies
import v1 from './v1';

////////////////////////////////////////////////////////////////////////////////////////////////////

const version = (version: number) => {
    switch (version) {
        case 1:
            return v1;
    }

    throw new Error(`Sorry, unable to resolve requested router version "${version}".`);
};

////////////////////////////////////////////////////////////////////////////////////////////////////

export default { version };
