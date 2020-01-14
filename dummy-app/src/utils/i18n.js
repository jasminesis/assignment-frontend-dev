export function getCurrentLocale(url) {
    let language = url.split('/')[1]
    return language == "zh-cn" ? 'zh-cn' : 'en';
}