function calcAverageCalories(days) {
    const weekTotalCalories = 0;
    for (const dayOfWeek of days) {
        weekTotalCalories += dayOfWeek[1];
        console.log(weekTotalCalories);
    }
}

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180