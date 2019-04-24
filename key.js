document.onkeydown = function(event) {

    // keyCode は非推奨です
    let keyCode = event.keyCode;
    let key = event.key;
    let code = event.code;

    let keys = getKeyCodes();
    let message = "";

    // 同時押し（Shift, Ctrl, Alt）
    if (event.shiftKey && key != 'Shift') {
        message += "Shift + ";
    }
    if (event.ctrlKey && key != 'Ctrl') {
        message += "Ctrl + ";
    }
    if (event.altKey && key != 'Alt') {
        message += "Alt + ";
    }

    message += keys[keyCode]+" (keyCode:"+keyCode+") key:"+key+" code:"+code;

    let log = document.getElementById("log");
    log.insertAdjacentHTML('afterbegin', "<div>"+message+"</div>");
};

function getKeyCodes() {

    let keyCodes = {

        27:'Esc',
        9:'Tab',
        16:'Shift',
        17:'Ctrl',
        18:'Alt / Option(Mac)',
        20:'CapsLock',
        32:'Space',

        38:'Up',
        40:'Down',
        37:'Left',
        39:'Right',

        91:'/ Left Command(Mac)',
        93:'/ Right Command(Mac)',

        112:'F1',
        113:'F2',
        114:'F3',
        115:'F4',
        116:'F5',
        117:'F6',
        118:'F7',
        119:'F8',
        120:'F9',
        121:'F10',
        122:'F11',
        123:'F12',

        65:'A',
        66:'B',
        67:'C',
        68:'D',
        69:'E',
        70:'F',
        71:'G',
        72:'H',
        73:'I',
        74:'J',
        75:'K',
        76:'L',
        77:'M',
        78:'N',
        79:'O',
        80:'P',
        81:'Q',
        82:'R',
        83:'S',
        84:'T',
        85:'U',
        86:'V',
        87:'W',
        88:'X',
        89:'Y',
        90:'Z',

        48:'0',
        49:'1',
        50:'2',
        51:'3',
        52:'4',
        53:'5',
        54:'6',
        55:'7',
        56:'8',
        57:'9',
        96:'0',
        97:'1',
        98:'2',
        99:'3',
        100:'4',
        101:'5',
        102:'6',
        103:'7',
        104:'8',
        105:'9',
    }

    return keyCodes;
}

