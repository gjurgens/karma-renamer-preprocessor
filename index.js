var createRenamerPreprocessor = function(args, config, logger, helper) {
  config = config || {};

  var log = logger.create('preprocessor.renamer');
  var options = args.options || config.options || {};
  var transformPath = args.transformPath || config.transformPath || function(filepath) {
    return filepath;
  };

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
    file.path = transformPath(file.path);
    done(content);
  };
};

createRenamerPreprocessor.$inject = ['args', 'config.renamerPreprocessor', 'logger', 'helper'];

module.exports = {
  'preprocessor:renamer': ['factory', createRenamerPreprocessor]
};
