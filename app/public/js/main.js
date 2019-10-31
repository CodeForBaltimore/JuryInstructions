if(typeof tinymce !== 'undefined'){
    tinymce.init({
    selector: '#content',
    plugins: [
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen fullpage",
        "insertdatetime media table contextmenu paste"
    ],
    toolbar: "insertfile undo redo | styleselect | bold italic | " +
        "alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | " +
        "link image"
    });
}

function Export2Doc(element, filename = '') {
    var content = sanitizeContent(tinyMCE.get(element).getContent());

    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml + content + postHtml;

    var blob = new Blob(['\ufeff', html], {
        type: 'application/octet-stream;charset=utf-8'
    });

    // Specify link url

    // var url = 'data:application/octet-stream;charset=utf-8,' + encodeURIComponent(html);
    // will use URL object instead 
    var url = URL.createObjectURL(blob)

    // Specify file name
    filename = filename ? filename + '-' + getDate() : 'document';

    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    // Create a link to the file
    downloadLink.href = url;

    // Setting the file name
    downloadLink.download = `${filename}.doc`

    //triggering the function
    downloadLink.click();

    // remove link from document
    document.body.removeChild(downloadLink);
}

function Export2Pdf(element, filename = '') {
    var doc = new jsPDF()
    var content = sanitizeContent(element);

    var specialElementHandlers = {
        '#elementH': function (element, renderer) {
            return true;
        }
    };
    doc.fromHTML(content, 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });

    doc.save(filename + '-' + getDate() + '.pdf');
}

function sanitizeContent(content) {
    content = content.replace(/<!DOCTYPE html>|<html>|<head>|<\/head>|<body>|<\/body>|<\/html>/gi, "").trim();

    return content;
}

function getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
}

module.exports = {sanitizeContent, getDate};
