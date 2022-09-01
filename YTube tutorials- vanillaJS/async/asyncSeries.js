//Run the functions in the tasks collection in series, each one running once the previous function has completed.If any functions in the series pass an error to its callback, no more functions are run and callback is immediately called with the value of the error.Otherwise, callback receives an array of results when tasks have completed.
const async = {
    series: (tasks, callback) => {
        let i = 0;

        const results = [];
        const _callback = (err, result) => {
            results[i] = result;
            if (err || ++i >= tasks.length) {
                callback(err, results);
                return;
            }

            tasks[i](_callback);
        };

        tasks[0](_callback);
    },
    parallel: (tasks, callback) => {
        let done = false;
        let count = 0;
        const results = [];

        const _callback = (i, err, result) => {
            count++;
            results[i] = result;
            if (!done && (err || count === tasks.length)) {
                callback(err, results);
                done = true;
                return;
            }
        };

        tasks.forEach((task, i) => {
            task((err, result) => _callback(i, err, result));
        });
    }
};

async.series(
    [
        function (callback) {
            // do some stuff ...
            callback(null, "one");
        },
        function (callback) {
            // do some more stuff ...
            callback(null, "two");
        }
    ],
    // optional callback
    function (err, results) {
        // results is now equal to ['one', 'two']
        console.log(err, results);
    }
);

async.parallel(
    [
        function (callback) {
            setTimeout(function () {
                callback(null, "one");
            }, 200);
        },
        function (callback) {
            setTimeout(function () {
                callback(null, "two");
            }, 100);
        }
    ],
    // optional callback
    function (err, results) {
        // the results array will equal ['one','two'] even though
        // the second function had a shorter timeout.
        console.log(err, results);
    }
);