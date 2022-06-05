import moment from "moment";

export const dayDifference = (startDate, endDate) => {
    return moment.duration(moment(new Date(endDate)).diff(new Date(startDate))).days();
}

export const hourDifference = (startDate, endDate, withDecimalPonts) => {
    if (withDecimalPonts)
        return moment.duration(moment(new Date(endDate)).diff(new Date(startDate))).asHours();
    else
        return moment.duration(moment(new Date(endDate)).diff(new Date(startDate))).hours();
}

export const minuteDifference = (startDate, endDate, withDecimalPonts) => {
    if (withDecimalPonts)
        return moment.duration(moment(new Date(endDate)).diff(new Date(startDate))).asMinutes();
    else
        return moment.duration(moment(new Date(endDate)).diff(new Date(startDate))).minutes();
}

