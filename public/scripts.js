


setTimeout(() => {
    build();
}, 100);

function build()
{
    const tabItems = document.querySelectorAll(".app-bar .ux-tab-bar a");
    for (let i = 0; i < tabItems.length; i++)
    {
        let item = tabItems[i];
        item.onclick = (e) => {
            e.preventDefault();
            setTimeout(() => {
                window.location = item.getAttribute("href");
            }, 300);
        };
    }
}
const OS = {
    WIN64: "WIN64",
    MACOS: "MACOS",
    LINUX: "LINUX",
    OTHER: "OTHER"
};
function getOS()
{
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    let os = OS.OTHER;
    if (macosPlatforms.indexOf(platform) !== -1)
        os = OS.MACOS;
    else if (windowsPlatforms.indexOf(platform) !== -1)
        os = OS.WIN64;
    else if (os === OS.OTHER && /Linux/.test(platform))
        os = OS.LINUX;
    return os;
}
