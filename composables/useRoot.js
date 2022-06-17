function useRoot () {
    let data = reactive({
        debug: true,
        counter: 0
    });

    function addOne()
    {
        data.counter += 1;
    }

    return {data, addOne};
}

export { useRoot }
