
$.window=function(options){return $.Window.getInstance(null,options);};$.fn.window=function(options){return $.Window.getInstance($(this),options);}
$.Window=(function(){var VERSION="5.03";var ICON_WH=16;var ICON_MARGIN=4;var ICON_OFFSET=ICON_WH+ICON_MARGIN;var OPACITY_MINIMIZED=0.7;var MINIMIZED_NARROW=24;var MINIMIZED_LONG=120;var RESIZE_EVENT_DELAY=200;var ua=navigator.userAgent.toLowerCase();var windowIndex=0;var lastSelectedWindow=null;var windowStorage=[];var initialized=false;var resizeTimer=null;var parentCallers=[];var minWinData={long:MINIMIZED_LONG,storage:[]};var setting={dock:'left',dockArea:null,animationSpeed:400,minWinNarrow:MINIMIZED_NARROW,minWinLong:MINIMIZED_LONG,handleScrollbar:true,showLog:false};function selectWindow(parent,wnd){if(parent==null){if(lastSelectedWindow!=null&&lastSelectedWindow!=wnd){lastSelectedWindow.unselect();wnd.select();}else if(lastSelectedWindow==null){wnd.select();}
lastSelectedWindow=wnd;}else{if(parent.get(0)._lastSelectedWindow!=null&&parent.get(0)._lastSelectedWindow!=wnd){parent.get(0)._lastSelectedWindow.unselect();wnd.select();}else if(parent.get(0)._lastSelectedWindow==null){wnd.select();}
parent.get(0)._lastSelectedWindow=wnd;}}
function getWindow(windowId){for(var i=0,len=windowStorage.length;i<len;i++){var wnd=windowStorage[i];if(wnd.getWindowId()==windowId){return wnd;}}}
function pushWindow(wnd){windowStorage.push(wnd);}
function popWindow(wnd){for(var i=0,len=windowStorage.length;i<len;i++){var w=windowStorage[i];if(w==wnd){windowStorage.splice(i--,1);break;}}}
function pushMinWindow(parent,wnd){if(setting.dockArea!=null){parent=$(setting.dockArea);}
if(parent!=null){parent.get(0)._minWinData.storage.push(wnd);}else{minWinData.storage.push(wnd);}}
function popMinWindow(parent,wnd){var doAdjust=false;parent=(setting.dockArea!=null)?$(setting.dockArea):parent;var storage=(parent!=null)?parent.get(0)._minWinData.storage:minWinData.storage;for(var i=0;i<storage.length;i++){var w=storage[i];if(w==wnd){storage.splice(i--,1);doAdjust=true;continue;}
if(doAdjust){w._decreaseMiniIndex();}}}
function getMinWindowLength(parent){parent=(setting.dockArea!=null)?$(setting.dockArea):parent;var storage=(parent!=null)?parent.get(0)._minWinData.storage:minWinData.storage;return storage.length;}
function checkMinWindowSize(parent,bPush){var bAdjust=false;var rect=null;var mwdata=null;if(setting.dockArea!=null){parent=$(setting.dockArea);}
if(parent!=null){rect={width:parent.innerWidth(),height:parent.innerHeight()};mwdata=parent.get(0)._minWinData;}else{rect=getBrowserScreenWH();mwdata=minWinData;}
var count=getMinWindowLength(parent);if(setting.dock=='left'||setting.dock=='right'){if(bPush){if(((count+1)*mwdata.long)>rect.height){mwdata.long=rect.height/(count+1);adjustAllMinWindows(parent);}}else if(mwdata.long<setting.minWinLong){if((count*setting.minWinLong)<rect.height){mwdata.long=setting.minWinLong;}else{mwdata.long=rect.height/count;}}}else if(setting.dock=='top'||setting.dock=='bottom'){if(bPush){if(((count+1)*mwdata.long)>rect.width){mwdata.long=rect.width/(count+1);adjustAllMinWindows(parent);}}else if(mwdata.long<setting.minWinLong){if((count*setting.minWinLong)<rect.width){mwdata.long=setting.minWinLong;}else{mwdata.long=rect.width/count;}}}}
function adjustAllMinWindows(parent){parent=(setting.dockArea!=null)?$(setting.dockArea):parent;var storage=(parent!=null)?parent.get(0)._minWinData.storage:minWinData.storage;for(var i=0;i<storage.length;i++){storage[i]._adjustMinimizedPos(false);}}
function hideBrowserScrollbar(){if(setting.handleScrollbar){if(ua.indexOf("msie 7")>=0){$("body").attr("scroll","no");}else{document.body.style.overflow="hidden";}}}
function showBrowserScrollbar(){if(setting.handleScrollbar){if(ua.indexOf("msie 7")>=0){$("body").removeAttr("scroll");}else{document.body.style.overflow="auto";}}}
function getBrowserScreenWH(){var width=document.documentElement.clientWidth;var height=document.documentElement.clientHeight;return{width:width,height:height};}
function getBrowserScrollXY(){var scrOfX=0,scrOfY=0;if(typeof(window.pageYOffset)=='number'){scrOfY=window.pageYOffset;scrOfX=window.pageXOffset;}else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){scrOfY=document.body.scrollTop;scrOfX=document.body.scrollLeft;}else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){scrOfY=document.documentElement.scrollTop;scrOfX=document.documentElement.scrollLeft;}
return{left:scrOfX,top:scrOfY};}
function getParentPanelStartPos(parent,bWithoutCheckAbsolute){var pos=null;if(parent!=null){var bAbsolute=(parent.css('position')=='absolute');if(bAbsolute&&!bWithoutCheckAbsolute){pos={left:0,top:0};}else{pos=parent.offset();var bTop=parseInt(parent.css('borderTopWidth'));var bLeft=parseInt(parent.css('borderLeftWidth'));pos.left+=bLeft;pos.top+=bTop;}
log('start pos: '+pos.left+','+pos.top);}
return pos;}
function getCssStyleByDock(parent,miniIndex){var targetCss={};var screenWH=getBrowserScreenWH();var cpos=null;var narrow=setting.minWinNarrow;var long=minWinData.long;if(setting.dockArea!=null){var pOffset={left:0,top:0};if(parent!=null){var bAbsolute=(parent.css('position')=='absolute');if(bAbsolute){pOffset=getParentPanelStartPos(parent,true);}}
parent=$(setting.dockArea);cpos=getParentPanelStartPos(parent,true);cpos.left-=pOffset.left;cpos.top-=pOffset.top;long=parent.get(0)._minWinData.long;}else if(parent!=null){cpos=getParentPanelStartPos(parent);long=parent.get(0)._minWinData.long;}
if(setting.dock=='left'||setting.dock=='right'){targetCss.width=narrow;targetCss.height=long-1;targetCss.top=miniIndex*long;if(setting.dock=='left'){if(parent!=null){targetCss.top+=cpos.top;targetCss.left=cpos.left;}else{targetCss.left=0;}}else if(setting.dock=='right'){if(parent!=null){targetCss.top+=cpos.top;targetCss.left=cpos.left+parent.width()-narrow-2;}else{targetCss.left=screenWH.width-narrow;}}}else if(setting.dock=='top'||setting.dock=='bottom'){targetCss.width=long-1;targetCss.height=narrow;targetCss.left=miniIndex*long;if(setting.dock=='top'){if(parent!=null){targetCss.top=cpos.top;targetCss.left+=cpos.left;}else{targetCss.top=0;}}else if(setting.dock=='bottom'){if(parent!=null){targetCss.top=cpos.top+parent.height()-narrow-2;targetCss.left+=cpos.left;}else{targetCss.top=screenWH.height-narrow;}}}
log(targetCss);return targetCss;}
function log(msg){if(setting.showLog&&window.console!=null){console.log(msg);}}
function info(msg){if(window.console!=null){console.info(msg);}}
function warn(msg){if(window.console!=null){console.warn(msg);}}
function error(msg){if(window.console!=null){console.error(msg);}}
function constructor(caller,options){var _this=null;var windowId="window_"+(windowIndex++);var minimized=false;var maximized=false;var selected=false;var redirectCheck=false;var pos=new Object();var wh=new Object();var orgPos=new Object();var orgWh=new Object();var targetCssStyle={};var headerFuncPanel=null;var funcBarWidth=0;var miniStackIndex=-1;var animating=false;var textPanelWidthOffset=0;var container=null;var header=null;var frame=null;var footer=null;var options=$.extend({icon:"auto",title:"",url:"",content:"",footerContent:"",containerClass:"",headerClass:"",frameClass:"",footerClass:"",selectedHeaderClass:"",x:-1,y:-1,z:2000,width:400,height:300,minWidth:200,minHeight:150,maxWidth:800,maxHeight:600,showModal:false,modalOpacity:0.5,showFooter:true,showRoundCorner:false,closable:true,minimizable:true,maximizable:true,bookmarkable:true,draggable:true,resizable:true,scrollable:true,checkBoundary:false,withinBrowserWindow:false,custBtns:null,onOpen:null,onShow:null,onClose:null,onSelect:null,onUnselect:null,onDrag:null,afterDrag:null,onResize:null,afterResize:null,onMinimize:null,afterMinimize:null,onMaximize:null,afterMaximize:null,onCascade:null,afterCascade:null,onIframeStart:null,onIframeEnd:null,iframeRedirectCheckMsg:null,createRandomOffset:{x:0,y:0}},options);function initialize(instance){_this=instance;if(options.showModal){showOverlay();}
var realCaller=caller!=null?caller:$("body");var cornerClass=options.showRoundCorner?"ui-corner-all ":"";realCaller.append("<div id='"+windowId+"' class='window_panel "+cornerClass+options.containerClass+"'></div>");container=realCaller.children("div#"+windowId);if($.isFunction(options.onOpen)){options.onOpen(_this);}
wh.w=options.width;wh.h=options.height;container.width(options.width);container.height(options.height);container.css("z-index",options.z);if($.browser.msie){container.css({paddingRight:1,paddingBottom:1});}
if(options.x>=0||options.y>=0){var scrollPos=getBrowserScrollXY();if(options.x>=0){var pLeft=0;if(caller!=null){var cpos=getParentPanelStartPos(caller);pLeft=options.x+cpos.left;}else{pLeft=options.x+scrollPos.left;}
container.css("left",pLeft);}else{alignHorizontalCenter();}
if(options.y>=0){var pTop=0;if(caller!=null){var cpos=getParentPanelStartPos(caller);pTop=options.y+cpos.top;}else{pTop=options.y+scrollPos.top;}
container.css("top",pTop);}else{alignVerticalCenter();}}else{alignCenter();}
var currPos=container.position();container.css({left:currPos.left,top:currPos.top});if(options.icon=="auto"){options.icon=_prepareFaviconUrl();}
var iconHtml='';if(options.icon!=null){iconHtml="<img class='window_title_icon' src='"+options.icon+"' style='display:none;' onload='javascript:$.Window._iconOnLoad(this);'/>";}
cornerClass=options.showRoundCorner?"ui-corner-top ":"";var headerHtml="<div class='window_header window_header_normal ui-widget-header "+cornerClass+"no-resizable "+options.headerClass+"'>"+
iconHtml+"<div class='window_title_text'>"+options.title+"</div>"+"<div class='window_function_bar'></div>"+"</div>";container.append(headerHtml);header=container.children("div.window_header");hideIcon();if(options.maximizable){header.dblclick(function(){if(maximized){restore();}else{maximize();}});}
headerFuncPanel=header.children("div.window_function_bar");if(options.closable){headerFuncPanel.append("<div title='close window' class='closeImg window_icon_button no-draggable'></div>");headerFuncPanel.children(".closeImg").click(function(){close();});funcBarWidth+=ICON_OFFSET;}
if(options.maximizable){headerFuncPanel.append("<div title='maximize window' class='maximizeImg window_icon_button no-draggable'></div>");headerFuncPanel.append("<div title='cascade window' class='cascadeImg window_icon_button no-draggable' style='display:none;'></div>");headerFuncPanel.children(".maximizeImg").click(function(){maximize();});headerFuncPanel.children(".cascadeImg").click(function(){restore();});funcBarWidth+=ICON_OFFSET;}
if(options.minimizable){headerFuncPanel.append("<div title='minimize window' class='minimizeImg window_icon_button no-draggable'></div>");headerFuncPanel.children(".minimizeImg").click(function(){minimize();});funcBarWidth+=ICON_OFFSET;}
if(options.bookmarkable&&options.url!=null&&$.trim(options.url)!=""){headerFuncPanel.append("<div title='bookmark this' class='bookmarkImg window_icon_button no-draggable'></div>");headerFuncPanel.children(".bookmarkImg").click(function(){doBookmark(options.title,options.url);});funcBarWidth+=ICON_OFFSET;}
addCustomizedButtns(headerFuncPanel);$(".window_icon_button").dblclick(function(){return false;});adjustHeaderTextPanelWidth();headerFuncPanel.width(funcBarWidth);var frameHeight=getFrameHeight(wh.h);if(options.url!=null&&$.trim(options.url)!=""){if($.isFunction(options.onIframeStart)){log("start connecting iframe: "+options.url);options.onIframeStart(_this,options.url);}
if(options.iframeRedirectCheckMsg){redirectCheck=true;window.onbeforeunload=function(){if(redirectCheck){var msg=options.iframeRedirectCheckMsg.replace("{url}",options.url);return msg;}}}
container.append("<div class='frame_loading'>Loading...</div>");var loading=container.children(".frame_loading");loading.css("marginLeft",'-'+(loading.outerWidth()/2)-20+'px');loading.click(function(){loading.remove();});var scrollingHtml=options.scrollable?"yes":"no";container.append("<iframe style='display:none;' class='window_frame ui-widget-content no-draggable no-resizable "+options.frameClass+"' scrolling='"+scrollingHtml+"' src='"+options.url+"' width='100%' height='"+frameHeight+"px' frameborder='0'></iframe>");frame=container.children(".window_frame");frame.ready(function(){frame.show();});frame.load(function(){redirectCheck=false;loading.remove();log("load iframe finished: "+options.url);if($.isFunction(options.onIframeEnd)){options.onIframeEnd(_this,options.url);}});}else{container.append("<div class='window_frame ui-widget-content no-draggable no-resizable "+options.frameClass+"' style='width:100%; height:"+frameHeight+"px;'></div>");frame=container.children(".window_frame");if(options.content!=null){setContent(options.content);frame.children().show();}
frame.css({overflow:options.scrollable?"auto":"hidden"});}
if(options.showFooter){cornerClass=options.showRoundCorner?"ui-corner-bottom ":"";container.append("<div class='window_footer ui-widget-content "+cornerClass+"no-draggable no-resizable "+options.footerClass+"'><div></div></div>");footer=container.children("div.window_footer");if(options.footerContent!=null){setFooterContent(options.footerContent);footer.children("div").children().show();}}else{cornerClass=options.showRoundCorner?"ui-corner-bottom ":"";frame.addClass(cornerClass);}
container.mousedown(function(){selectWindow(caller,_this);});if(options.draggable){container.draggable({cancel:".no-draggable",start:function(){log("drag start");if(minimized||maximized){container.css("position","fixed");container.css(targetCssStyle);}
showOverlay();hideContent();if(options.onDrag){options.onDrag(_this);}},stop:function(){log("drag stop");if(minimized||maximized){container.css("position","fixed");container.css(targetCssStyle);}
hideOverlay();showContent();if(options.afterDrag){options.afterDrag(_this);}}});if(options.checkBoundary){if(options.withinBrowserWindow&&caller==null){container.draggable('option','containment','window');}else{container.draggable('option','containment','parent');}}}
if(options.resizable){container.resizable({cancel:".no-resizable",alsoResize:frame,start:function(){log("resize start");if(minimized||maximized){return false;}
showOverlay();hideContent();if(options.onResize){options.onResize(_this);}},stop:function(){log("resize stop");if(minimized||maximized){return false;}
hideOverlay();adjustHeaderTextPanelWidth();showContent();if(options.afterResize){options.afterResize(_this);}}});if(options.checkBoundary){}
if(options.maxWidth>=0){container.resizable('option','maxWidth',options.maxWidth);}
if(options.maxHeight>=0){container.resizable('option','maxHeight',options.maxHeight);}
if(options.minWidth>=0){container.resizable('option','minWidth',options.minWidth);}
if(options.minHeight>=0){container.resizable('option','minHeight',options.minHeight);}}
if($.isFunction(options.onShow)){options.onShow(_this);}}
function getDomain(url){var tmp=url.match(/:\/\/(.[^/]+)/);if(tmp!=null&&tmp.length>=2){return tmp[1];}else{return null;}}
function _addIcon(){if(options.icon!=null&&options.icon!=''){var html="<img class='window_title_icon' src='"+options.icon+"' style='display:none;' onload='javascript:$.Window._iconOnLoad(this);'/>";header.prepend(html);}}
function setIcon(iconUrl){options.icon=iconUrl;if(options.icon=="auto"){options.icon=_prepareFaviconUrl();}
if(options.icon!=null){var icon=header.children('.window_title_icon');if(icon.get(0)!=null){hideIcon();icon.attr('src',options.icon);}else{_addIcon();}}}
function showIcon(){var icon=header.children('.window_title_icon');if(icon.get(0)!=null){icon.show();var txt=header.children('.window_title_text');txt.css('margin-left','0');textPanelWidthOffset=20;adjustHeaderTextPanelWidth();}}
function hideIcon(){var icon=header.children('.window_title_icon');if(icon.get(0)!=null){icon.hide();var txt=header.children('.window_title_text');txt.css('margin-left','-20px');textPanelWidthOffset=0;adjustHeaderTextPanelWidth();}}
function setTitle(title){options.title=title;header.children(".window_title_text").text(title);if(minimized){_transformTitleText();}}
function getTitle(){return options.title;}
function setUrl(url){options.url=url;frame.attr("src",url);if(options.icon!=null){setIcon('auto');}}
function _prepareFaviconUrl(){if(options.url!=null&&$.trim(options.url)!=""){var domain=getDomain(options.url);if(domain!=null){return'http://'+domain+'/favicon.ico';}}
return null;}
function getUrl(){return options.url;}
function setContent(content){options.content=content;if(typeof content=='object'){content=$(content).clone(true);}else if(typeof content=='string'){}
frame.empty();frame.append(content);}
function getContent(){return frame.html();}
function setFooterContent(content){if(options.showFooter){options.footerContent=content;if(typeof content=='object'){content=$(content).clone(true);}else if(typeof content=='string'){}
footer.children("div").empty();footer.children("div").append(content);}}
function getFooterContent(){return footer.children("div").html();}
function showOverlay(){var overlay=$("#window_overlay");if(overlay.get(0)==null){$("body").append("<div id='window_overlay'>&nbsp;</div>");overlay=$("#window_overlay");overlay.css('z-index',options.z+1);}
if(options.showModal){overlay.css({opacity:options.modalOpacity});}else{overlay.css({opacity:0});}
overlay.show();}
function hideOverlay(bForce){if(options.showModal==false||bForce){$("#window_overlay").hide();}}
function transferToFixed(){var currPos=container.offset();var scrollPos=getBrowserScrollXY();container.css({position:"fixed",left:currPos.left-scrollPos.left,top:currPos.top-scrollPos.top});}
function transferToAbsolute(){var currPos=container.offset();container.css({position:"absolute",left:currPos.left,top:currPos.top});}
function addCustomizedButtns(headerFuncPanel){if(options.custBtns!=null&&typeof options.custBtns=='object'){for(var i=0;i<options.custBtns.length;i++){var btnData=options.custBtns[i];if(btnData!=null&&typeof btnData=='object'){if(btnData.id!=null&&btnData.callback!=null){var id=btnData.id!=null?btnData.id:"";var clazz=btnData.clazz!=null?btnData.clazz:"";var title=btnData.title!=null?btnData.title:"";var style=btnData.style!=null?btnData.style:"";var image=btnData.image!=null?btnData.image:"";var callback=btnData.callback!=null?btnData.callback:"";if(btnData.image!=null&&btnData.image!=""){headerFuncPanel.append("<img id='"+id+"' src='"+image+"' title='"+title+"' class='"+clazz+" window_icon_button no-draggable' style='"+style+"'/>");}else{headerFuncPanel.append("<div id='"+id+"' src='"+image+"' title='"+title+"' class='"+clazz+" window_icon_button no-draggable' style='"+style+"'></div>");}
var btn=headerFuncPanel.children("[id="+id+"]");btn.get(0).clickCb=callback;if($.isFunction(callback)){btn.click(function(){this.clickCb($(this),_this);});}}else{var btn=$(btnData).clone(true);btn.addClass("window_icon_button no-draggable cust_button");headerFuncPanel.append(btn);btn.show();}}
funcBarWidth+=ICON_OFFSET;}}}
function _adjustMinimizedPos(bImmediate,callback){animating=true;targetCssStyle=getCssStyleByDock(caller,miniStackIndex);if(bImmediate){container.css(targetCssStyle);animating=false;if($.isFunction(callback)){callback();}}else{container.animate(targetCssStyle,setting.animationSpeed,'swing',function(){animating=false;if($.isFunction(callback)){callback();}});}}
function adjustHeaderTextPanelWidth(){header.children("div.window_title_text").width(header.width()-funcBarWidth-textPanelWidthOffset);}
function adjustFrameWH(){var width=container.width();var height=container.height();var frameHeight=getFrameHeight(height);frame.width(width);frame.height(frameHeight);}
function doBookmark(title,url){if($.browser.mozilla&&window.sidebar){window.sidebar.addPanel(title,url,"");}else if($.browser.msie&&window.external){window.external.AddFavorite(url,title);}else if(ua.indexOf("chrome")>=0){alert("Sorry! Chrome doesn't support bookmark function currently.");}else if($.browser.safari||ua.indexOf("safari")>=0){alert("Sorry! Safari doesn't support bookmark function currently.");}else if($.browser.opera||ua.indexOf("opera")>=0){alert("Sorry! Opera doesn't support bookmark function currently.");}}
function hideContent(){var bgColor=frame.css("backgroundColor");if(bgColor!=null&&bgColor!="transparent"&&bgColor!="rgba(0, 0, 0, 0)"){container.css("backgroundColor",bgColor);}
frame.hide();if(options.showFooter){footer.hide();}
container.css("opacity",OPACITY_MINIMIZED);}
function showContent(){frame.show();if(options.showFooter){footer.show();}
container.css("opacity",1);}
function getFrameHeight(windowHeight){var footerHeight=options.showFooter?16:0;return windowHeight-20-footerHeight-4;}
function _transformTitleText(){if(setting.dock=='top'||setting.dock=='bottom'){return;}
var textBlock=header.children("div.window_title_text");var icon=header.children('.window_title_icon');if(icon.is(':visible')){textBlock.addClass('window_title_text_vertical_with_icon');}else{textBlock.addClass('window_title_text_vertical');}
var text=options.title;var buf="";for(var i=0;i<text.length;i++){var c=text.charAt(i);if(c=="-"||c=="_"){c="|";}
if(c==" "){c="<div style='height:5px; line-height:5px;'>&nbsp;</div>";buf+=c;}else{buf+=c+"<br>";}}
textBlock.html(buf);}
function restoreTitleText(){var textBlock=header.children("div.window_title_text");textBlock.removeClass('window_title_text_vertical');textBlock.removeClass('window_title_text_vertical_with_icon');textBlock.text(options.title);}
function getCaller(){return caller;}
function getContainer(){return container;}
function getHeader(){return header;}
function getFrame(){return frame;}
function getFooter(){return footer;}
function getTargetCssStyle(){return targetCssStyle;}
function alignCenter(){var pLeft=0,pTop=0;if(caller!=null){var cpos=getParentPanelStartPos(caller);pLeft=cpos.left+(caller.width()-container.width())/2;pTop=cpos.top+(caller.height()-container.height())/2;}else{var scrollPos=getBrowserScrollXY();var screenWH=getBrowserScreenWH();pLeft=scrollPos.left+(screenWH.width-container.width())/2;pTop=scrollPos.top+(screenWH.height-container.height())/2;};if(options.createRandomOffset.x>0){pLeft+=((Math.random()-0.5)*options.createRandomOffset.x);}
if(options.createRandomOffset.y>0){pTop+=((Math.random()-0.5)*options.createRandomOffset.y);}
container.css({left:pLeft,top:pTop});}
function alignHorizontalCenter(){var pLeft=0;if(caller!=null){pLeft=getParentPanelStartPos(caller).left+(caller.width()-container.width())/2;}else{var scrollPos=getBrowserScrollXY();var screenWH=getBrowserScreenWH();pLeft=scrollPos.left+(screenWH.width-container.width())/2;}
container.css({left:pLeft});}
function alignVerticalCenter(){var pTop=0;if(caller!=null){pTop=getParentPanelStartPos(caller).top+(caller.height()-container.height())/2;}else{var scrollPos=getBrowserScrollXY();var screenWH=getBrowserScreenWH();pTop=scrollPos.top+(screenWH.height-container.height())/2;}
container.css({top:pTop});}
function select(){selected=true;if(maximized==false){container.css('z-index',options.z+2);if(options.selectedHeaderClass){header.addClass(options.selectedHeaderClass);}}
if($.isFunction(options.onSelect)){options.onSelect();}}
function unselect(){selected=false;if(maximized==false){container.css('z-index',options.z);if(options.selectedHeaderClass){header.removeClass(options.selectedHeaderClass);}}
if($.isFunction(options.onUnselect)){options.onUnselect();}}
function move(x,y,bShift){if(!maximized&&!minimized){var styleObj={};if(typeof x=='number'){if(bShift){var currPos=container.offset();x+=currPos.left;}
styleObj.left=x;}
if(typeof y=='number'){styleObj.top=y;if(bShift){var currPos=container.offset();y+=currPos.top;}
styleObj.top=y;}
container.css(styleObj);}}
function resize(w,h){if(!maximized&&!minimized){var styleObj={};if(w>0){styleObj.width=w;}
if(h>0){styleObj.height=h;}
container.css(styleObj);adjustHeaderTextPanelWidth();}}
function maximize(bImmediately,bNoSaveDisplay){if(!$.browser.msie&&caller==null){hideBrowserScrollbar();}
maximized=true;container.draggable('disable');container.resizable('disable');if(bNoSaveDisplay!=true){pos.left=container.css("left");pos.top=container.css("top");wh.w=container.width();wh.h=container.height();}
container.addClass('no-resizable');var scrollPos=getBrowserScrollXY();var screenWH=getBrowserScreenWH();if(caller!=null){var cpos=getParentPanelStartPos(caller);targetCssStyle={left:cpos.left,top:cpos.top,width:caller.width(),height:caller.height(),opacity:1};}else{targetCssStyle={left:scrollPos.left,top:scrollPos.top,width:screenWH.width,height:screenWH.height,opacity:1};}
if(bImmediately){container.css(targetCssStyle);adjustHeaderTextPanelWidth();adjustFrameWH();header.removeClass('window_header_normal');header.addClass('window_header_maximize');headerFuncPanel.children(".maximizeImg").hide();headerFuncPanel.children(".cascadeImg").show();}else{hideContent();container.animate(targetCssStyle,setting.animationSpeed,'swing',function(){if($.browser.msie&&caller==null){hideBrowserScrollbar();}
showContent();adjustHeaderTextPanelWidth();adjustFrameWH();header.removeClass('window_header_normal');header.addClass('window_header_maximize');headerFuncPanel.children(".maximizeImg").hide();headerFuncPanel.children(".cascadeImg").show();if($.isFunction(options.afterMaximize)){options.afterMaximize(_this);}});container.css('z-index',options.z+3);}
if($.isFunction(options.onMaximize)){options.onMaximize(_this);}}
function minimize(){hideOverlay(true);showBrowserScrollbar();minimized=true;container.draggable('disable');container.resizable('disable');orgPos.left=container.css("left");orgPos.top=container.css("top");orgWh.w=container.width();orgWh.h=container.height();miniStackIndex=getMinWindowLength(caller);targetCssStyle={opacity:OPACITY_MINIMIZED};container.addClass('no-resizable');if(caller==null&&setting.dockArea==null){transferToFixed();}
headerFuncPanel.hide();hideContent();checkMinWindowSize(caller,true);_adjustMinimizedPos(false,function(){container.css('z-index',options.z);header.children("div.window_title_text").width("96%");header.attr("title",options.title);header.removeClass('window_header_normal');header.removeClass('window_header_maximize');header.addClass('window_header_minimize');if(setting.dock=='left'||setting.dock=='right'){header.addClass('window_header_minimize_vertical');}
if(options.showRoundCorner){header.removeClass('ui-corner-top');header.addClass('ui-corner-all');}
_transformTitleText();header.click(function(){if(!animating){restore();}});if($.isFunction(options.afterMinimize)){options.afterMinimize(_this);}});container.mouseover(function(){$(this).css("opacity",1);});container.mouseout(function(){$(this).css("opacity",OPACITY_MINIMIZED);});if($.isFunction(options.onMinimize)){options.onMinimize(_this);}
pushMinWindow(caller,_this);}
function restore(){if(options.showModal){showOverlay();}
var rpos=null;var rwh=null;var zIndex=options.z+2;if(minimized){rpos=orgPos;rwh=orgWh;if(caller==null){transferToAbsolute();}
restoreTitleText();header.removeAttr("title");header.removeClass('window_header_minimize');header.removeClass('window_header_minimize_vertical');if(maximized){header.addClass('window_header_maximize');if(caller!=null){rpos=getParentPanelStartPos(caller);}else{var scrollPos=getBrowserScrollXY();rpos={left:scrollPos.left,top:scrollPos.top};}
zIndex=options.z+3;container.css('z-index',zIndex);}else{header.addClass('window_header_normal');container.removeClass('no-resizable');}}else if(maximized){maximized=false;rpos=pos;rwh=wh;header.removeClass('window_header_maximize');header.addClass('window_header_normal');container.removeClass('no-resizable');}
if(options.showRoundCorner){header.removeClass('ui-corner-all');header.addClass('ui-corner-top');}
container.unbind("mouseover");container.unbind("mouseout");targetCssStyle={left:rpos.left,top:rpos.top,width:rwh.w,height:rwh.h,opacity:1};hideContent();container.animate(targetCssStyle,setting.animationSpeed,'swing',function(){container.css('z-index',zIndex);showContent();header.unbind('click');adjustHeaderTextPanelWidth();adjustFrameWH();if(maximized){if(caller==null){hideBrowserScrollbar();}
headerFuncPanel.children(".maximizeImg").hide();headerFuncPanel.children(".cascadeImg").show();}else{showBrowserScrollbar();container.draggable('enable');container.resizable('enable');headerFuncPanel.children(".maximizeImg").show();headerFuncPanel.children(".cascadeImg").hide();}
headerFuncPanel.show();if(minimized){minimized=false;popMinWindow(caller,_this);checkMinWindowSize(caller,false);adjustAllMinWindows(caller);}
if($.isFunction(options.afterCascade)){options.afterCascade(_this);}});if($.isFunction(options.onCascade)){options.onCascade(_this);}}
function close(quiet){if(!quiet&&$.isFunction(options.onClose)){options.onClose(_this);}
destroy();}
function destroy(){redirectCheck=false;if(maximized){showBrowserScrollbar();}
popWindow(_this);container.remove();hideOverlay(true);}
function show(){container.show();}
function hide(){container.hide();}
function _decreaseMiniIndex(){miniStackIndex--;}
return{initialize:initialize,getTargetCssStyle:getTargetCssStyle,getWindowId:function(){return windowId;},getCaller:getCaller,getContainer:getContainer,getHeader:getHeader,getFrame:getFrame,getFooter:getFooter,alignCenter:alignCenter,alignHorizontalCenter:alignHorizontalCenter,alignVerticalCenter:alignVerticalCenter,select:select,unselect:unselect,move:move,resize:resize,maximize:maximize,minimize:minimize,restore:restore,close:close,hide:hide,show:show,setTitle:setTitle,setUrl:setUrl,setContent:setContent,setFooterContent:setFooterContent,getTitle:getTitle,getUrl:getUrl,getContent:getContent,getFooterContent:getFooterContent,isMaximized:function(){return maximized;},isMinimized:function(){return minimized;},isSelected:function(){return selected;},setIcon:setIcon,showIcon:showIcon,hideIcon:hideIcon,_decreaseMiniIndex:_decreaseMiniIndex,_adjustMinimizedPos:_adjustMinimizedPos,_setOrgWH:function(wh){orgWh.w=wh.width;orgWh.h=wh.height;},_transformTitleText:_transformTitleText,toString:function(){return'[Window] id='+windowId+', title='+options.title;}};}
return{getInstance:function(caller,options){var instance=constructor(caller,options);instance.initialize(instance);selectWindow(caller,instance);pushWindow(instance);if(caller!=null){if(caller.get(0)._minWinData==null){caller.get(0)._minWinData={long:setting.minWinLong,storage:[]};}
parentCallers.push(caller);}
if(!initialized){$(window).resize(function(){if(resizeTimer!=null){clearTimeout(resizeTimer);}
resizeTimer=window.setTimeout(function(){var screenWH=getBrowserScreenWH();for(var i=0,len=windowStorage.length;i<len;i++){var wnd=windowStorage[i];if(wnd.isMaximized()){if(wnd.isMinimized()){wnd._setOrgWH(screenWH);}else{wnd.maximize(true,true);}}
if(wnd.isMinimized()){wnd._adjustMinimizedPos(true);}}},RESIZE_EVENT_DELAY);});initialized=true;}
return instance;},getVersion:function(){return VERSION;},prepare:function(custSetting){$.extend(setting,custSetting);minWinData.long=setting.minWinLong;if(setting.dockArea!=null){var dArea=$(setting.dockArea);if(dArea.get(0)._minWinData==null){dArea.get(0)._minWinData={long:setting.minWinLong,storage:[]};}}},closeAll:function(quiet){var count=windowStorage.length;for(var i=0;i<count;i++){var wnd=windowStorage[0];wnd.close(quiet);}
windowStorage=[];minWinData.storage=[];minWinData.long=setting.minWinLong;for(var i=0;i<parentCallers.length;i++){var mwdata=parentCallers[i].get(0)._minWinData;mwdata.storage=[];mwdata.long=setting.minWinLong;}},hideAll:function(){for(var i=0,len=windowStorage.length;i<len;i++){windowStorage[i].getContainer().hide();}},showAll:function(){for(var i=0,len=windowStorage.length;i<len;i++){windowStorage[i].getContainer().show();}},getAll:function(){return windowStorage;},getWindow:getWindow,getSelectedWindow:function(){for(var i=0,len=windowStorage.length;i<len;i++){var wnd=windowStorage[i];if(wnd.isSelected()){return wnd;}}},_iconOnLoad:function(element){var windowId=$(element).parent().parent().attr('id');log('_iconOnLoad: '+windowId);if(windowId!=null){var wnd=$.Window.getWindow(windowId);if(wnd!=null){wnd.showIcon();}}else{warn('[_iconOnLoad] lost window id!!!');}}}})();$.window.getVersion=$.Window.getVersion;$.window.prepare=$.Window.prepare;$.window.closeAll=$.Window.closeAll;$.window.hideAll=$.Window.hideAll;$.window.showAll=$.Window.showAll;$.window.getAll=$.Window.getAll;$.window.getWindow=$.Window.getWindow;$.window.getSelectedWindow=$.Window.getSelectedWindow;