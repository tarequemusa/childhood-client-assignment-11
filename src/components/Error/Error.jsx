import {Link, useRouteError} from 'react-router-dom'
import useTitle from '../../Hooks/useTitle';

const Error = () => {
    const {error, status} = useRouteError();
    useTitle('404')
    return (
        <>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>


                <div className='grid grid-cols-2 gap-4'>
                    <div className='text-center mt-5 rounded-xl border border-slate-600'>
                        <img className='rounded-xl flex items-center' src="https://i.ibb.co/TPM7VFn/Error-404-Page-Under-Construction-Concept-Social-Media.png" alt="" />
                    </div>
                    <div className='text-center mt-5 rounded-xl border border-slate-600 flex items-center justify-center'>
                        <div>
                            <h2 className='fw-bold display-5 text-orange-500'>
                                <span className='sr-only'>Nothing matched your search criteria:</span>{' '}
                                <span className='text-8xl font-extrabold text-red-700'> {status || 404}</span>
                            </h2>
                            <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                                {error?.message}
                            </p>
                            <Link to='/' className='btn btn-danger shadow bg-green-500 rounded text-white p-3 mb-5'>
                                BACK TO HOMEPAGE
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Error;