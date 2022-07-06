export const generateBarChartModel = (noOfLeaves, leavesAvailable) => {
    return {
        labels: ['Leaves available', 'Leaves taken'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: ['Leave availability'],
                data: [leavesAvailable, noOfLeaves-leavesAvailable],
                // you can set indiviual colors for each bar
                backgroundColor: [
                    'rgba(0, 255, 0, 0.6)',
                    'rgba(255, 0, 0, 0.6)'
                ],
                borderWidth: 1,
            }
        ]
    }
}
export const generateLineChartModel = (noOfLeaves, leavesAvailable) => {
    return {
        labels: ['Leaves available', 'Leaves taken'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: ['Leave availability'],
                data: [leavesAvailable, noOfLeaves-leavesAvailable],
                // you can set indiviual colors for each bar
                backgroundColor: [
                    'rgba(0, 255, 0, 0.6)',
                    'rgba(255, 0, 0, 0.6)'
                ],
                borderWidth: 1,
            }
        ]
    }
}
export const generatePieChartModel = (noOfLeaves, leavesAvailable) => {
    return {
        labels: ['Leaves available', 'Leaves taken'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: ['Leave availability'],
                data: [leavesAvailable, noOfLeaves-leavesAvailable],
                // you can set indiviual colors for each bar
                backgroundColor: [
                    'rgba(0, 255, 0, 0.6)',
                    'rgba(255, 0, 0, 0.6)'
                ],
                borderWidth: 1,
            }
        ]
    }
}
export const generateScatterChartModel = (noOfLeaves, leavesAvailable) => {
    return {
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: 'Leave availability',
                data: [
                    {x:0,y:1}
                ],
                // you can set indiviual colors for each bar
                backgroundColor: 'rgba(0, 255, 0, 0.6)'
            }
        ]
    }
}