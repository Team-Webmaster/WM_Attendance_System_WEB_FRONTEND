export const generateChartModel = (attendDates, leaveDuration, totalDates, availableleaves) => {
    return [{
        labels: ['Leaves available', 'Leaves taken'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                data: [availableleaves, leaveDuration],
                // you can set indiviual colors for each bar
                backgroundColor: [
                    'rgba(0, 255, 0, 0.6)',
                    'rgba(255, 0, 0, 0.6)'
                ],
                borderWidth: 1,
            }
        ]
    },
    {
        labels: ['Attended Days', 'Absent Days'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                data: [attendDates, totalDates-attendDates],
                // you can set indiviual colors for each bar
                backgroundColor: [
                    'rgba(0, 255, 0, 0.6)',
                    'rgba(255, 0, 0, 0.6)'
                ],
                borderWidth: 1,
            }
        ]
    }
    ]
}