const revealingCounterModule = (() => {
    let count = 0;
    const increase = () => {
        ++count;
        console.log(count);
        return count;
    }
    const reset = () => {
        count = 0;
        console.log('count is reset');
    }
    return {
        increase,
        reset
    }
})