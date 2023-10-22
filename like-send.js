function likeSendApi(arr, callback) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', `https://kanport-like-couter.kankaweeisci123.workers.dev/${arr}`, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            // Request was successful, handle the response data here
            var response = xhr.responseText.toString();
            callback(response); // Call the callback function with the response
        } else {
            // Handle the error case here
            callback(null); // Pass null as the response to indicate an error
        }
    };

    xhr.send();
}