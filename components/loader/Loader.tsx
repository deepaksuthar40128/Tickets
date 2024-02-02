const Loader = () => {
    return (
        <div className="w-full h-16">
            <div className="mx-auto w-max -translate-x-6">
                <div className="w-12 h-12 rounded-full absolute
                            border-2 border-solid border-gray-200"></div>

                <div className="w-12 h-12 rounded-full animate-spin absolute
                            border-2 border-solid border-blue-500 border-t-transparent"></div>
            </div>
        </div>
    )
}
export default Loader