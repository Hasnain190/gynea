import React, { useEffect, useState } from 'react'
import { calculateEDD, calculateDurationOfPregnancy } from './dateUtilities';

export const useDateCalculator = (initialDate: Date) => {
    const [date, setDate] = useState(initialDate);
    const [EDD, setEDD] = useState('');
    const [DOP, setDOP] = useState({ weeks: 0, days: 0 });



    useEffect(() => {
        setEDD(calculateEDD(date));
        setDOP(calculateDurationOfPregnancy(date));
    }, [date]);
    return { date, EDD, DOP, setDate }

}
