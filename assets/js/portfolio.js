// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

$(document).ready(function() {
    // Handle portfolio modal
    const photographer = getUrlParameter('photographer');
    if (photographer) {
        const modalMap = {
            'yuri': '#modal-portfolio-1',
            'farizan': '#modal-portfolio-2',
            'andriat': '#modal-portfolio-3',
            'uray': '#modal-portfolio-4',
            'christian': '#modal-portfolio-5',
            'anggi': '#modal-portfolio-6'
        };

        if (modalMap[photographer]) {
            $(modalMap[photographer]).modal('show');
        }
    }
}); 