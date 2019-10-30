function showOdds(start, end) {
    for (start; start <= end; start++) {
        if (start % 2 == 0 ) {
            console.log(start)
        }
    }
} 

showOdds(0, 32)