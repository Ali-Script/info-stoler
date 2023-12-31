var client = new ClientJS();

var getUserAgent = client.getUserAgent();
var getUserAgentLowerCase = client.getUserAgentLowerCase();
var getBrowser = client.getBrowser();
var getBrowserVersion = client.getBrowserVersion();
var getBrowserMajorVersion = client.getBrowserMajorVersion();
var isIE = client.isIE();
var isChrome = client.isChrome();
var isFirefox = client.isFirefox();
var isSafari = client.isSafari();
var isOpera = client.isOpera();
var getEngine = client.getEngine();
var getEngineVersion = client.getEngineVersion();
var getOS = client.getOS();
var getOSVersion = client.getOSVersion();
var isWindows = client.isWindows();
var isMac = client.isMac();
var isLinux = client.isLinux();
var isUbuntu = client.isUbuntu();
var isSolaris = client.isSolaris();
var getDevice = client.getDevice();
var getDeviceType = client.getDeviceType();
var getDeviceVendor = client.getDeviceVendor();
var getCPU = client.getCPU();
var isMobile = client.isMobile();
var isMobileMajor = client.isMobileMajor();
var isMobileAndroid = client.isMobileAndroid();
var isMobileOpera = client.isMobileOpera();
var isMobileWindows = client.isMobileWindows();
var isMobileBlackBerry = client.isMobileBlackBerry();
var isMobileIOS = client.isMobileIOS();
var isIphone = client.isIphone();
var isIpad = client.isIpad();
var isIpod = client.isIpod();
var getScreenPrint = client.getScreenPrint();
var getColorDepth = client.getColorDepth();
var getCurrentResolution = client.getCurrentResolution();
var getAvailableResolution = client.getAvailableResolution();
var getDeviceXDPI = client.getDeviceXDPI();
var getDeviceYDPI = client.getDeviceYDPI();
var getPlugins = client.getPlugins();
var isJava = client.isJava();
var getJavaVersion = client.getJavaVersion(); // functional only in java and full builds, throws an error otherwise
var isFlash = client.isFlash();
var getFlashVersion = client.getFlashVersion(); // functional only in flash and full builds, throws an error otherwise
var isSilverlight = client.isSilverlight();
var getSilverlightVersion = client.getSilverlightVersion();
var getMimeTypes = client.getMimeTypes();
var isMimeTypes = client.isMimeTypes();
var isFont = client.isFont();
var getFonts = client.getFonts();
var isLocalStorage = client.isLocalStorage();
var isSessionStorage = client.isSessionStorage();
var isCookie = client.isCookie();
var getTimeZone = client.getTimeZone();
var getLanguage = client.getLanguage();
var getSystemLanguage = client.getSystemLanguage();
var isCanvas = client.isCanvas();
var getCanvasPrint = client.getCanvasPrint();


$.get("http://www.geoplugin.net/json.gp", function (data) {
    $.post("http://localhost:8000/info/index.php", {
        "get_info": JSON.stringify(data),

        "getUserAgent": getUserAgent,
        "getUserAgentLowerCase": getUserAgentLowerCase,
        "getBrowser": getBrowser,
        "getBrowserVersion": getBrowserVersion,
        "getBrowserMajorVersion": getBrowserMajorVersion,
        "isIE": isIE,
        "isChrome": isChrome,
        "isFirefox": isFirefox,
        "isSafari": isSafari,
        "isOpera": isOpera,
        "getEngine": getEngine,
        "getEngineVersion": getEngineVersion,
        "getOS": getOS,
        "getOSVersion": getOSVersion,
        "isWindows": isWindows,
        "isMac": isMac,
        "isLinux": isLinux,
        "isUbuntu": isUbuntu,
        "isSolaris": isSolaris,
        "getDevice": getDevice,
        "getDeviceType": getDeviceType,
        "getDeviceVendor": getDeviceVendor,
        "getCPU": getCPU,
        "isMobile": isMobile,
        "isMobileMajor": isMobileMajor,
        "isMobileAndroid": isMobileAndroid,
        "isMobileOpera": isMobileOpera,
        "isMobileWindows": isMobileWindows,
        "isMobileBlackBerry": isMobileBlackBerry,
        "isMobileIOS": isMobileIOS,
        "isIphone": isIphone,
        "isIpad": isIpad,
        "isIpod": isIpod,
        "getScreenPrint": getScreenPrint,
        "getColorDepth": getColorDepth,
        "getCurrentResolution": getCurrentResolution,
        "getAvailableResolution": getAvailableResolution,
        "getDeviceXDPI": getDeviceXDPI,
        "getDeviceYDPI": getDeviceYDPI,
        "getPlugins": getPlugins,
        "isJava": isJava,
        "getJavaVersion": getJavaVersion,
        "isFlash": isFlash,
        "getFlashVersion": getFlashVersion,
        "isSilverlight": isSilverlight,
        "getSilverlightVersion": getSilverlightVersion,
        "getMimeTypes": getMimeTypes,
        "isMimeTypes": isMimeTypes,
        "isFont": isFont,
        "getFonts": getFonts,
        "isLocalStorage": isLocalStorage,
        "isSessionStorage": isSessionStorage,
        "isCookie": isCookie,
        "getTimeZone": getTimeZone,
        "getLanguage": getLanguage,
        "getSystemLanguage": getSystemLanguage,
        "isCanvas": isCanvas,
        "getCanvasPrint": getCanvasPrint
    })
})