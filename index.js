function superbowlWin(array) {
    const win = array.find(function (record) {
        return record.result === 'W'
    });
    if (win) {
        return win.year;
    } else {
        return undefined;
    }
}