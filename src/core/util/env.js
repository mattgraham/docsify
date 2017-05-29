export const UA = window.navigator.userAgent.toLowerCase()

export const isIE = UA && /msie|trident/.test(UA)

export const isMobile = document.body.clientWidth <= 600

export const inBrowser = typeof window !== 'undefined'

/**
 * @see https://github.com/MoOx/pjax/blob/master/lib/is-supported.js
 */
export const supportsPushState = inBrowser && (function () {
  // Borrowed wholesale from https://github.com/defunkt/jquery-pjax
  return window.history &&
    window.history.pushState &&
    window.history.replaceState &&
    // pushState isn’t reliable on iOS until 5.
    !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)
})()
