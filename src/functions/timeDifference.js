import moment from "moment";

export const dayDifference = (startDate, endDate, asDays) => {
    if (asDays)
        return moment.duration(moment(new Date(endDate)).diff(new Date(startDate))).asDays();

    return moment.duration(moment(new Date(endDate)).diff(new Date(startDate))).days();
}

export const hourDifference = (startDate, endDate, asHours) => {
    if (asHours)
        return moment.duration(moment(new Date(endDate)).diff(new Date(startDate))).asHours();

    return moment.duration(moment(new Date(endDate)).diff(new Date(startDate))).hours();
}

export const minuteDifference = (startDate, endDate, asMinutes) => {
    if (asMinutes)
        return moment.duration(moment(new Date(endDate)).diff(new Date(startDate))).asMinutes();

    return moment.duration(moment(new Date(endDate)).diff(new Date(startDate))).minutes();
}


