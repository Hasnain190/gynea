

export const calculateEDD = (lastMenstrualPeriodDate: Date) => {
    const millisecondsForEDD = lastMenstrualPeriodDate.getTime() + 280 * (1000 * 3600 * 24);
    return new Date(millisecondsForEDD).toDateString();
};

export const calculateDurationOfPregnancy = (lastMenstrualPeriodDate: Date) => {
    const today = new Date();
    const lmpInDays = Math.floor(lastMenstrualPeriodDate.getTime() / (1000 * 3600 * 24));
    const daysTillToday = Math.floor(today.getTime() / (1000 * 3600 * 24));

    if (daysTillToday > lmpInDays) {
        let diff = daysTillToday - lmpInDays;
        let weeks = Math.floor(diff / 7)
        let days = diff % 7

        return { weeks, days }
    }
    return { weeks: 0, days: 0 };
};
