var cheerio = require('cheerio'),
    _ = require('lodash'),
    format = require('util').format,
    gutil = require('gulp-util'),
    through = require('through2');

module.exports = function (opts) {
    var selectors;
    
    opts = opts || [];
    if (_.isArray(opts.attrs)) {
        selectors = opts.attrs.map(function (attr) { return format('[%s]', attr) });
    } else if (_.isObject(opts.attrs)) {
        selectors  = _.map(opts.attrs, function (value, name) {
            return value.map(function (value) { return format('[%s="%s"]', name, value); }).join();
        });
    }
    console.log('selectors', selectors);

    return through.obj(function (file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new gutil.PluginError('gulp-resources', 'Streams are not supported!'));
            return cb();
        }

        if (file.isBuffer()) {
            var contents = file.contents.toString('utf8');
            try {
                var $ = cheerio.load(contents, { decodeEntities : false }),
                    changed = false;

                selectors.forEach(function (selector) {
                    var $elements = $(selector);
                    if ($elements.length) {
                        changed = true;
                        $elements.remove();
                    }
                });

                if (changed) {
                    file.contents = new Buffer($.html());
                }
            } catch (ex) {
                this.emit('error', ex);
                return cb();
            }
        }
        this.push(file);
        cb();
    });
};