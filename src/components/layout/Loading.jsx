import spinner from './assets/loading.gif'

function Loading() {
    return (
        <div className='w-100 mt-20'>
            <img width={30} src={spinner} alt="Loading..." className="text-center mx-auto" />
        </div>
    )
}

export default Loading
