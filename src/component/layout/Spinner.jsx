import SpinnerLoading from './assets/loader.gif';

const Spinner = () => {
    return (
        <div className='w-100 mt-20'>
            <img src={SpinnerLoading} alt="Loading..." width={180} className="text-center mx-auto" />
        </div>
    )
}

export default Spinner
