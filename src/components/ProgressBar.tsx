const ProgressBar = ({value, max, preferences}) => {
    const percentage = (value / max) * 100;
    const progressPercentage = `${percentage}%`;

    return (
        <div className="w-full bg-slate rounded-full h-2 dark:bg-gray-700">
            <div
                className="h-2 rounded-full"
                style={{width: progressPercentage, backgroundColor: preferences?.hexColor}}
            ></div>
        </div>
    );
};

export default ProgressBar;
