Ext.require(['Данные.Обработки.ОбщиеОбъектыРегламентированнойОтчетности'], function () 
{
	Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ОшибкаДоступаВИнтернет',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:396px;height:398px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ошибка доступа в Интернет',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьОписаниеОшибки',
			text: 'НадписьОписаниеОшибки',
			style: 'position:absolute;left:8px;top:8px;width:380px;height:29px;text-align:center;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:46px;width:380px;height:4px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Ошибка может быть связана с тем, что с Вашего компьютера отсутствует возможность доступа в Интернет, некорректно заданы настройки доступа или сервер Интернета не отвечает.\r\n\r\nНиже приведены параметры доступа в Интернет, которые используются для подключения. Вы можете проверить их и, при необходимости, уточнить, а затем повторить попытку соединения.\r\n\r\nИзмененные параметры доступа в Интернет будут сохранены и использованы при следующем обращении к серверу.',
			style: 'position:absolute;left:8px;top:63px;width:380px;height:135px;',
		},
		{
			xtype: 'label',
			text: 'Параметры доступа в Интернет',
			style: 'position:absolute;left:8px;top:213px;width:380px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для доступа в Интернет необходима авторизация на прокси',
			style: 'position:absolute;left:8px;top:241px;width:333px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:64px;top:299px;width:263px;height:47px;',
			height: 47,width: 263,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Имя пользователя:',
			style: 'position:absolute;left:4px;top:5px;width:105px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяПользователя',
			width: 153,
			height: 19,
			style: 'position:absolute;left:110px;top:3px;width:153px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Пароль:',
			style: 'position:absolute;left:4px;top:30px;width:105px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Пароль',
			width: 153,
			height: 19,
			style: 'position:absolute;left:110px;top:28px;width:153px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:14px;top:256px;width:2px;height:104px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:16px;top:325px;width:20px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:35px;top:312px;width:2px;height:26px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:37px;top:312px;width:25px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:37px;top:337px;width:25px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Если для доступа в Интернет необходима авторизация на прокси, то установите данный флажок и задайте параметры авторизации ниже.',
			style: 'position:absolute;left:25px;top:257px;width:363px;height:29px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:16px;top:359px;width:365px;height:4px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:380px;top:325px;width:2px;height:34px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:361px;top:325px;width:20px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:334px;top:312px;width:25px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:334px;top:337px;width:25px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:358px;top:313px;width:2px;height:24px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:373px;width:396px;height:25px;',
			width: 396,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Повторить',
					tooltip:'',
				},
				'-',
				{
					text:'Отмена',
					tooltip:'Закрыть',
					iconCls:'x-Close',
				},
			]
		},
	]
	});
});