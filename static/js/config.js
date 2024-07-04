
var SiteName = "中国民办教育学生信息网(民教网)官网";
// var SiteUrl = "http://www.cphsi.com.cn/";
// 前端服务器地址
// var SiteUrl = 'http://192.168.10.120:8091/'
// var SiteUrl = 'https://cx.cphsi.cn/'
var SiteUrl = 'https://cx.cphsi.com.cn/'

// 后台服务器地址
// var serverUrl='http://192.168.10.120:8090'
// var serverUrl='https://oa.cphsi.cn/admin'
var serverUrl='https://cx.cphsi.com.cn/admin'

// 阿里云图片地址
var serverYUrl='https://cx.cphsi.com.cn/'

var SeoSite = "民教网";
var SeoKey = "民教网,民教网官网,民教官网";
var PicUrl = "http://oa.cphsi.com.cn/uploadfile/";
var publicKey="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCESZB07eu/oopKKkpl/0eZboWzzaCiGauokfYh8Im0ELUpmanuA97fN/yy/JbdnfSChDr3Z7dqlhES20l01+TRgUsWMgs7lz/puUlf7DHkkOVMtU4zZIO7wABHW0IqxOhqosiEs0Sr6Jw5QXbJoyN3+FK5Hs2UFJySXkyf4eFYzQIDAQAB"; //前端加密用户名密码的公钥

//获取url地址参数
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    console.log(theRequest)
    return theRequest;
}
//打印指定内容
function doPrint() {
    bdhtml=window.document.body.innerHTML;
    sprnstr="<!--startprint-->";
    eprnstr="<!--endprint-->";
    pagesetup_null();
    prnhtml=bdhtml.substr(bdhtml.indexOf(sprnstr)+17);
    prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));
    window.document.body.innerHTML=prnhtml;
    window.print();
}
function pagesetup_null(){                
    var hkey_root,hkey_path,hkey_key;
    hkey_root="HKEY_CURRENT_USER"
    hkey_path="\\Software\\Microsoft\\Internet Explorer\\PageSetup\\";
    try{
        var RegWsh = new ActiveXObject("WScript.Shell");
        hkey_key="header";
        RegWsh.RegWrite(hkey_root+hkey_path+hkey_key,"");
        hkey_key="footer";
        RegWsh.RegWrite(hkey_root+hkey_path+hkey_key,"");
    }catch(e){}
}

var beforePrint = function() {
};

var afterPrint = function() {
    // window.location.reload()
};

if (window.matchMedia) {
    var mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener(function(mql) {
        if (mql.matches) {
            beforePrint();
        } else {
            afterPrint();
        }
    });
}
window.onbeforeprint = beforePrint;
window.onafterprint = afterPrint


// function pdfprint(){
//     var element = $("#printHtml");    // 这个dom元素是要导出pdf的div容器
//     var w = element.width();    // 获得该容器的宽
//     var h = element.height();    // 获得该容器的高
//     var offsetTop = element.offset().top;    // 获得该容器到文档顶部的距离
//     var offsetLeft = element.offset().left;    // 获得该容器到文档最左的距离
//     var canvas = document.createElement("canvas");
//     var abs = 0;
//     var win_i = $(window).width();    // 获得当前可视窗口的宽度（不包含滚动条）
//     var win_o = window.innerWidth;    // 获得当前窗口的宽度（包含滚动条）
//     if(win_o>win_i){
//       abs = (win_o - win_i)/2;    // 获得滚动条长度的一半
//     }
//     canvas.width = w * 2;    // 将画布宽&&高放大两倍
//     canvas.height = h * 2;
//     var context = canvas.getContext("2d");
//     context.scale(2, 2);
//     context.translate(-offsetLeft-abs,-offsetTop);    
//     // 这里默认横向没有滚动条的情况，因为offset.left(),有无滚动条的时候存在差值，因此        
//     // translate的时候，要把这个差值去掉
//     html2canvas(element,{
//         async:false,//同步执行
//     }).then(function(canvas) {
//       var contentWidth = canvas.width;
//       var contentHeight = canvas.height;
//       //一页pdf显示html页面生成的canvas高度;
//       var pageHeight = contentWidth / 592.28 * 941.89;
//       //未生成pdf的html页面高度
//       var leftHeight = contentHeight;
//       //页面偏移
//       var position = 0;
//       //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
//       var imgWidth = 595.28;
//       var imgHeight = 552.28/contentWidth * contentHeight;
  
//       var pageData = canvas.toDataURL('image/jpeg', 1.0);
  
//       var pdf = new jsPDF('', 'pt', 'a4');

//       //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
//       //当内容未超过pdf一页显示的范围，无需分页
//       if (leftHeight < pageHeight) {
//       pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
//       } else {    // 分页
//           while(leftHeight > 0) {
//               pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
//               leftHeight -= pageHeight;
//               position -= 841.89;
//               //避免添加空白页
//               if(leftHeight > 0) {
//                 pdf.addPage();
//               }
//           }
//       }
//       var fileName=new Date().getTime();
//       pdf.save(fileName+'.pdf');        
// })

//  }

  
function toPDF(){
    html2canvas($("#printHtml"), {
        useCORS:true,
            onrendered:function(canvas) {
                    var contentWidth = canvas.width;
                    var contentHeight = canvas.height;
                    //一页pdf显示html页面生成的canvas高度;
                    var pageHeight = contentWidth / 592.28 * 961.89;
                    //未生成pdf的html页面高度
                    var leftHeight = contentHeight;
                    //页面偏移
                    var position = 0;
                    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                    var imgWidth = 595.28;
                    var imgHeight = 592.28/contentWidth * contentHeight;

                    var pageData = canvas.toDataURL('image/jpeg', 1.0);

                    var pdf = new jsPDF('', 'pt', 'a4');

                    //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                    //当内容未超过pdf一页显示的范围，无需分页
                    if (leftHeight < pageHeight) {
                    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight );
                    } else {
                        while(leftHeight > 0) {
                            pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                            leftHeight -= pageHeight;
                            position -= 841.89;
                            //避免添加空白页
                            if(leftHeight > 0) {
                            pdf.addPage();
                            }
                        }
                    }
                    var fileName=new Date().getTime();
                    pdf.save(fileName+'.pdf');
            }})
}