// main
loadItems()
.then(items => {
    displayItems(items);
    setEventListeners(items);
})
.catch(consloe.log);