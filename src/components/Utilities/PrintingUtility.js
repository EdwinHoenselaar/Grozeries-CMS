import * as qz from 'qz-tray';
import { sha256 } from 'js-sha256';

////// Qz-tray --> used for printing to any type of printer.
////// ----------> https://qz.io/wiki/2.0-getting-started
qz.api.setSha256Type(data => sha256(data));
qz.api.setPromiseType(resolver => new Promise(resolver));

qz.websocket.connect().then(function() { 
    return qz.printers.find("PDFwriter");              // Pass the printer name into the next Promise
}).then(function(printer) {
    let config = qz.configs.create(printer);       // Create a default config for the found printer
    let data = [
        'Grozeries Delivery\n',
        'Albert\n',
        'Otto Copesstraat 34a\n',
        '5213GM  Den Bosch\n'
    ]
    return qz.print(config, data);
}).catch(function(e) { console.error(e); });
