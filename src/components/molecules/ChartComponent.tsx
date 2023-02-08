const ChartComponent = () => {
    return (
        <div className="bg-neutral-cream w-screen h-screen container mx-auto py-1">
            <div className="bg-primary-soft-red flex justify-between rounded-sm p-2">
                <div>
                    <span className="text-whitex font-sans">My balance</span>
                    <p className="text-whitex"> $921.48 </p>
                </div>
                <div>
                    <svg width="100" height="100">
                        <circle cx="50" cy="50" r="20"  />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default ChartComponent;