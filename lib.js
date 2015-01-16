var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>";
}

lib.generateHeading = function(level, text) {
    return "<h"+ level +">" + text + "</h"+ level + ">";

}

lib.generateOrderedList = function(arrayOfText) {
    var htmlString = "<ol>" + "\n";
    for (var i = 0; i < arrayOfText.length; i++) {
        htmlString += "<li>" + arrayOfText[i] + "</li>" + "\n";
    }
    htmlString += "</ol>";
    return htmlString;
}

lib.generateUnorderedList = function(arrayOfText) {
    var htmlString = "<ul>" + "\n";
    for (var i = 0; i < arrayOfText.length; i++) {
        htmlString += "<li>" + arrayOfText[i] + "</li>" + "\n";
    }
    htmlString += "</ul>";
    return htmlString;
}

lib.generateTableRow = function (arrayOfText) {
    var htmlString = "<tr>" + "\n";
    for (var i = 0; i < arrayOfText.length; i++) {
        htmlString += "<td>" + arrayOfText[i] + "</td>" + "\n";
    }
    htmlString += "</tr>" + "\n";
    return htmlString;
}

lib.generateTable = function(twoDimensionalArrayOfText) {
    var htmlString = "<tabel>" + "\n" ;
    htmlString += lib.generateTableRow(twoDimensionalArrayOfText[0]);
    htmlString += lib.generateTableRow(twoDimensionalArrayOfText[1]);
    htmlString += "</tabel>";
    
    return htmlString;  
}

lib.generateHyperLink = function(url, text) {
    return '<a href="' + url +'">' + text + '</a>';
}

lib.generateFormTextField = function(name) {
    return '<input type="text" name="'+ name +'">';
}

lib.generateFormTextField = function(name) {
    return '<input type="text" name="'+ name +'">';
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    return "<label>"+ label +"</label>" '<input type="text" name="'+ name +'">';
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    var htmlString = "<select>" + "\n";
    for (var i = 0; i < arrayOfValues.length; i++) {
        htmlString += '<option value="'+ arrayOfValues[i] +'">'+ arrayOfText[i] +"</option>"+ "\n";
    }
    htmlString += "</select>";
    return htmlString;
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    if (allowfullscreen === true) {
        return '<iframe width="'+ width +'" height="'+ height +'" src="//www.youtube.com/embed/'+ videoId +'" allowfullscreen></iframe>';
    } else {
        return '<iframe width="'+ width +'" height="'+ height +'" src="//www.youtube.com/embed/'+ videoId +'" ></iframe>';
    }
}

module.exports = lib