#!/usr/bin/env node

const fs = require('fs');
const parse = require('papaparse');

const app = require('caporal');

// Config parameters
const config = {
    outputFile: 'datas/output.html',
};

app
    .version('1.0.1')
    .description('htmlify-csv')
    .command('convert', 'Convert CSV file to HTML table')
    .argument('<file>', 'Input file (CSV) to render in HTML')
    .option('--delimiter <delimiter>', 'CSV delimiter', /(.*)/, ',')
    .option('--output <output>', 'Output filename', /(.*)/, config.outputFile)
    .action((args, options) => {

        // Define output filename
        let { outputFile } = config;
        if (options.output) {
            outputFile = options.output;
        }

        // Read CSV file
        fs.readFile(args.file, 'utf8', (err, datas) => {

            // Parse CSV file
            const results = parse.parse(datas, {
                delimiter: options.delimiter,
                skipEmptyLines: true,
            });

            const output = results.data;

            const columns = output[0];

            // Create HTML's table structure
            let html = '';

            html += '<table class="tablesorter">\n';
            html += '\t<thead>\n';
            html += '\t\t<tr>\n';

            // Columns
            for (let i = 0; i < columns.length; i++) {
                html += `\t\t\t<th>${columns[i]}</th>\n`;
            }

            html += '\t\t</tr>\n';
            html += '\t</thead>\n';

            html += '\t<tbody>\n';

            // Body
            for (let i = 1; i < output.length; i++) {
                const rows = output[i];

                html += '\t\t<tr>\n';

                for (let j = 0; j < rows.length; j++) {
                    html += `\t\t\t<td>${rows[j]}</td>\n`;
                }

                html += '\t\t</tr>\n';
            }

            html += '\t</tbody>\n';
            html += '</table>\n';

            // Create full HTML code
            const generatedOutput = createTemplate(html);

            // Write HTML code in output file
            fs.writeFile(outputFile, generatedOutput, (err) => {
                if (err) {
                    console.log(err);
                }
            });

        });

    });

app.parse(process.argv);


// Creates HTML's code
function createTemplate(table) {
    let html = '';

    html += `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>CSV to HTML table - htmlify-csv</title>
        <link href="assets/theme.blue.css" rel="stylesheet">
        <style>
        html { font-family: Arial; font-size: 12px; }
        footer { font-size: 11px; }
        </style>
    </head>
    <body>

`;

    html += table;

    html += `
<footer>
    <p>Made by <a href="https://github.com/shevabam/htmlify-csv">htmlify-csv.js</a></p>
</footer>

<script src="assets/jquery.min.js"></script>
<script src="assets/jquery.tablesorter.min.js"></script>
<script src="assets/jquery.tablesorter.widgets.min.js"></script>
<script>
    $(document).ready(function(){
        var $table = $('table').tablesorter({
            theme: 'blue',
            widgets: ["zebra", "filter"],
            widgetOptions : {
                filter_columnFilters: true
            }
        });

        $("table > tbody  > tr").each(function() {
            const maxAllowed = parseFloat($(this).find("td:last").text());
            const duration = parseFloat($(this).find("td:eq(3)").text());

            if (isNaN(duration) || (!isNaN(maxAllowed) && duration > maxAllowed)) {
                $(this).children().css({'color': 'red', 'font-weight': 'bold'});
            }
        });
    });
</script>
</body>
</html>`;

    return html;
}

