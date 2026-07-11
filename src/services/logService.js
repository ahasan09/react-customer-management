// Sentry (@sentry/browser v4) was removed during the Vite/React 18 migration:
// the SDK was several major versions out of date and shipped a hardcoded demo
// DSN. Errors are logged to the console instead. To re-enable remote error
// tracking, install a current @sentry/browser and call Sentry.init() here.

function init() {
  // no-op (previously Sentry.init)
}

function configure() {
  // no-op (previously Sentry.configureScope)
}

function log(error) {
  console.error(error);
}

export default {
  init,
  configure,
  log,
};
