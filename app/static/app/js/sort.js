const table = document.getElementById('table');
const rows = table.rows


// ascending sort function
const ascSort = () => {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 1; i < (rows.length - 1); i++) {
            // get two adjacent elements
            let element1 = rows[i].getElementsByTagName('td')[0].innerHTML.toLowerCase();
            let element2 = rows[i+1].getElementsByTagName('td')[0].innerHTML.toLowerCase();
            // replace if necessary
            if (element1 > element2) {
                rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
                sorted = false;
            };
        };
    };
};


// descending sort function
const descSort = () => {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 1; i < (rows.length - 1); i++) {
            // get two adjacent elements
            let element1 = rows[i].getElementsByTagName('td')[0].innerHTML.toLowerCase();
            let element2 = rows[i+1].getElementsByTagName('td')[0].innerHTML.toLowerCase();
            // replace if necessary
            if (element1 < element2) {
                rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
                sorted = false;
            };
        };
    };
};


// main sort function
const sort = () => {
    // get sorting type from template
    let selectedOption = document.getElementById('sorting_type').value;

    if (selectedOption == 'asc') {
        ascSort();
    } else {
        descSort();
    };
};