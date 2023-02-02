// notification function
export function showNotification(setter) {
    // when called, setter is equal to true
    setter(true);
    // set timeout to 2 seconds
    setTimeout(() => {
        // after 2 seconds set to false, switch between
        setter(false);

    }, 2000)
}