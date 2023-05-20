import {useEffect} from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `${ title } - Childhood | Kids Toys Store`;
    }, [title])
};

export default useTitle;