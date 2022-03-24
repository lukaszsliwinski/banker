const table = document.getElementById('table');
const rows = table.rows


const ascSort = () => {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 1; i < (rows.length - 1); i++) {
            let element1 = rows[i].getElementsByTagName('td')[0].innerHTML.toLowerCase();
            let element2 = rows[i+1].getElementsByTagName('td')[0].innerHTML.toLowerCase();
            if (element1 > element2) {
                rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
                sorted = false;
            };
        };
    };
};


const descSort = () => {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 1; i < (rows.length - 1); i++) {
            let element1 = rows[i].getElementsByTagName('td')[0].innerHTML.toLowerCase();
            let element2 = rows[i+1].getElementsByTagName('td')[0].innerHTML.toLowerCase();
            if (element1 < element2) {
                rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
                sorted = false;
            };
    }   ;
    };
};


// main sort function
const sort = () => {
    let selectedOption = document.getElementById('sorting_type').value;

    if (selectedOption == 'asc') {
        ascSort();
    } else {
        descSort();
    };
};