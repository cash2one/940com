Fengs.add("940/index",function(S,$,cookie,md5,layerBox,share){var home={init:function(){this.way(),this.shareFn()},way:function(){Fengs.use("940/utils/slide"),Fengs.use("940/utils/popBox");var e={init:function(e){this.wrap_soll=$(e),this.ulHeight=this.wrap_soll.find("ul").height(),this.ulHeight<=this.wrap_soll.parent().height()||this.exeFn(this.wrap_soll)},exeFn:function(e){var i=this;if(0!=e.length){var t=e.offset().top,s=null;this.wrap_soll.append(this.wrap_soll.html());var n=function(){i.wrap_soll.css({top:"-=1"}),i.ulHeight<=t-i.wrap_soll.offset().top&&i.wrap_soll.css("top",0)};s=setInterval(n,30),this.wrap_soll.hover(function(){clearInterval(s)},function(){s=setInterval(n,30)})}}};e.init(".wrap_soll");var i={},t={off:!1,login:function(e){$.browser.msie&&t.log();var n=$("#homeLog"+(e?e:"")),a=$("#homeName"+(e?e:"")),o=$("#homePass"+(e?e:"")),l=$("#logBox"),r=l.find("span"),c=$("#logstatus"),u=null,h=$(".log_ul").find(".txt_input input"),p=$(".log_checkbox"),d=p.find(".check");t.off&&a.focus(),p.children().click(function(){d.is(".checked")?d.removeClass("checked"):d.addClass("checked")}),i.submitFn=function(){l.show(),n.val("登录中...").addClass("log_cur").off(),$.ajax({type:"post",url:"/login",data:{user_name:a.val(),password:o.val()},dataType:"json",success:function(e){1==e.status?(t.off?layer.msg("登录成功！",{time:1500}):(r.removeClass("error").addClass("succ").html("登录成功！"),c.find("p").eq(0).hide().siblings().show()),setTimeout(function(){$(".log_before").hide().siblings(".log_after").show(),s.loginFn()},1e3),d.is(".checked")?($.cookie("940_COM_USER",a.val(),{expires:1e3,path:"/"}),$.cookie("940_COM_PASS",o.val(),{expires:1e3,path:"/"})):($.cookie("940_COM_USER",a.val(),{path:"/"}),$.cookie("940_COM_PASS",o.val(),{path:"/"})),$("#logstatus").html('<p><b></b><a href="/user">'+a.val()+'</a><i>|</i><a id="signOut" href="javascript:">退出</a></p>'),setTimeout(function(){layer.closeAll()},1500)):t.off?layer.msg(e.tips,{time:1500}):r.addClass("error").html(e.tips),i.meout(),n.val("登 录").removeClass("log_cur").click(i.submitFn)},error:function(){n.val("登 录").removeClass("log_cur").click(i.submitFn),alert("服务器繁忙！")}})},i.meout=function(){clearTimeout(u),u=setTimeout(function(){r.removeClass("error succ"),l.hide()},2e3)},n.click(i.submitFn),$(document).keydown(function(e){h.is(":focus")&&13==e.keyCode&&i.submitFn()})},log:function(){var e=Number($.browser.version),i=$(".log_ul").find(".txt_input");e>9||i.each(function(e){var i=$(this).children();0==e?($(this).append("<i class='prompt'>用户名 (邮箱)</i>"),t.textChange(i)):($(this).append("<i class='prompt'>密码</i>"),t.passwordChange(i))})},textChange:function(e){var i=e.siblings(".prompt");e.focus(function(){i.hide()}).blur(function(){""==e.val()&&i.show()}),i.click(function(){e.focus(),i.hide()})},passwordChange:function(e){var i=e.siblings(".prompt");e.focus(function(){i.hide()}).blur(function(){""==e.val()&&i.show()}),i.click(function(){e.focus(),i.hide()})}};t.login(),window.userData=0;var s={loginFn:function(){var e=$.cookie("940_COM_USER"),i=$.cookie("940_COM_PASS"),t=this;return this.logstatus=$("#logstatus"),null==e||null==i?(this.logstatus.html('<p><a id="topLoing" href="javascript:">登录</a><i>|</i><a href="/reg">注册</a></p>'),$(".log_after").hide().siblings(".log_before").show(),void t.topLoding()):(this.logstatus.html('<p><b></b><a href="/user">'+e+'</a><i>|</i><a id="signOut" href="javascript:">退出</a></p>'),$(".log_before").hide().siblings(".log_after").show(),void $.ajax({type:"post",url:"/userInfo",data:{user_name:e,password:i},dataType:"json",success:function(i){if(userData=i,console.log(userData),1==userData.status){var s=$(".user_dl dt");s.html(-1!=userData.im.indexOf("images")?'<img src="/'+userData.im+'">':2==userData.s?'<img src="/images/user/nv_pic.png">':'<img src="/images/user/nan_pic.png">'),$(".xy_info em").html(userData.r?userData.r:e)}t.sign()}}))},sign:function(){var e=this;$("#signOut").click(function(){$.cookie("940_COM_USER",null,{path:"/"}),$.cookie("940_COM_PASS",null,{path:"/"}),e.logstatus.html('<p><a  id="topLoing" href="javascript:">登录</a><i>|</i><a href="/reg">注册</a></p>'),$(".log_after").hide().siblings(".log_before").show(),e.topLoding()})},topLoding:function(){$("#topLoing,#regLoin").on("click",function(){layer.open({type:1,title:"用户登录",area:["310px","350px"],shadeClose:!1,moveType:1,content:'<div style="padding:0px 20px;margin: 0 auto;width: 240px;"><ul class="log_ul">										<li class="txt_input"><input id="homeName1" type="text" placeholder="用户名 (邮箱)"></li>										<li class="txt_input"><input id="homePass1" type="password" placeholder="密码"></li>										<li class="txt_checkbox log_checkbox">											<div class="fl check checked"></div>											<p class="fl">下次自动登录</p>										</li>										<li class="but_submit"><input id="homeLog1" type="submit" value="登 录"></li>										<li class="but_reg"><a href="javascript:">忘记密码</a> <a class="reg" href="/reg">注册账户</a></li>										</ul></div>',success:function(){t.off=!0,t.login(1)},cancel:function(){t.off=!1}})})}};s.loginFn();var n={init:function(){function e(){i.aLi=i.ul_list_share.find("li"),lastLi=i.aLi.eq(i.aLi.length-1).clone(!0).css({opacity:"0",height:0}),i.aLi.eq(i.aLi.length-1).remove(),i.ul_list_share.prepend(lastLi),lastLi.animate({height:62},600,function(){lastLi.animate({opacity:1},800)})}this.butTab();var i=this,t=null;this.ul_list_share=$(".ul_list_share"),this.ul_list_share.find("li").length<=6||(this.ul_list_share.hover(function(){clearInterval(t)},function(){t=setInterval(e,3e3)}),t=setInterval(e,3e3))},butTab:function(){var e=1;$but_tab=$(".but_tab"),$but_tab.on("mouseover","li",function(){$(this).addClass("act").siblings().removeClass("act")}).on("mouseout","li",function(){$but_tab.find("li").eq(e).addClass("act").siblings().removeClass("act")}).on("click","li",function(){e=$(this).index()})}};n.init(),$.extend({switc:function(e){var i={pattern:!0};e=$.extend({},i,e);var t={fade:function(){function i(){o.find("li").eq(n).addClass("cur").siblings().removeClass("cur"),t.children().eq(n).fadeIn(600).siblings().fadeOut(600)}var t=e.obj.children().eq(0),s=t.children().length,n=0,a=null;t.children().eq(0).show().siblings().hide();{var o=$("<ul>");!function(){o.addClass("exp_ul");for(var i=0;s>i;i++)o.append("<li></li>");o.children().eq(0).addClass("cur"),e.obj.append(o)}()}o.on("mouseover","li",function(){n=$(this).index(),i()}),a=setInterval(function(){n++,n%=s,i()},3e3),e.obj.hover(function(){clearInterval(a)},function(){a=setInterval(function(){n++,n%=s,i()},3e3)})},soll:function(){}};1==e.pattern?t.fade():t.soll()}}),$.switc({obj:$("#l_slide"),pattern:!0})},shareFn:function(){$(function(){var $share_link=$(".share_link"),content=document.title,openUrl="",iWidth=650,iHeight=400,iTop=(window.screen.availHeight-30-iHeight)/2,iLeft=(window.screen.availWidth-10-iWidth)/2;with($share_link.on("click","a",function(){{var e=$(this).index();(new Date).getTime()}3!=e&&4!=e&&(0==e?(iWidth=740,iHeight=560,openUrl="http://connect.qq.com/widget/shareqq/index.html?url=http%3A%2F%2F940.com&title="+content+"&desc=&summary=&site="):1==e?openUrl="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2F940.com&title="+content+"&desc=&summary=&site=":2==e?openUrl="http://share.v.t.qq.com/index.php?c=share&a=index&url=http%3A%2F%2F940.com&title="+content+"&appkey=801cf76d3cfc44ada52ec13114e84a96":5==e&&(openUrl="http://service.weibo.com/share/share.php?url=http%3A%2F%2F940.com&title="+content+"&searchPic=true#_loginLayer_1452496668906"),window.open(openUrl,"","height="+iHeight+", width="+iWidth+", top="+iTop+", left="+iLeft))}),document)0[(getElementsByTagName("head")[0]||body).appendChild(createElement("script")).src="http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion="+~(-new Date/36e5)];$("#homeShare").click(function(){share.goShare()})})}};home.init()},["jquery/cookie","common/md5","940/utils/layer","940/utils/sucShare"]);