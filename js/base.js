
$(document).ready(function(){
	$(":input[name='xm']").blur(function(){
		if($(this).val() == ''){
			$(this).attr('value','亲，不写名字以后就叫您亲喽！');
		}
	}).focus(function(){
		$(this).attr('value','');
	});
	$(":input[name='mobile']").blur(function(){
		if($(this).val() == ''){
			$(this).attr('value','不留电话人家怎么找你哟！');
		}
		
	}).focus(function(){
		$(this).attr('value','');
	});
	$(":input[name='text_address']").blur(function(){
		if($(this).val() == ''){
			$(this).attr('value','别忘了写地址哦，亲！');
		}
		
	}).focus(function(){
		$(this).attr('value','');
	});

	$(":input[name='email']").blur(function(){
		if($(this).val() == ''){
			$(this).attr('value','留下邮箱常联系哟！');
		}
		
	}).focus(function(){
		$(this).attr('value','');
	});

	//添加内容
	$(".shortcut-message h3").click(function(){$("#J_preinstallMsg").slideToggle();});
	var target=$("#J_preinstallMsg li");
	target.click(function(){
		$("#text_content").append( $(this).text() + '\n' );
		});
});

function AddFavorite(sUrl,sTitle)
{
	sUrl = unescape(sUrl);
	sTitle = unescape(sTitle);
   if (document.all)
   {
      window.external.addFavorite(sUrl,sTitle);
   }
   else if (window.sidebar)
   {
      window.sidebar.addPanel(sTitle, sUrl, "");
   }
} 

function checkInput(){
		var oForm = document.getElementsByTagName('form')[0];
		if(oForm.xm.value == "" || oForm.xm.value == '请输入姓名')
		{
			alert('请输入您的姓名');
			oForm.xm.focus();
			return false;
		}
		if(oForm.mobile.value == "" || oForm.mobile.value == '请输入手机号')
		{
			alert('请输入手机号');
			oForm.mobile.focus();
			return false;
		}else {
			if(oForm.mobile.value.length != 11)
			{
				alert('请输入正确的手机号码!！');
				oForm.mobile.focus();
				return false;
			}
		}
		
}

