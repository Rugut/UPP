Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Настройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:398px;height:409px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки защищенного документооборота',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'fieldset',
			title: 'Персональные настройки',
			style: 'position:absolute;left:8px;top:186px;width:382px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Разрешить обновление модуля через Интернет (рекомендуется)',
			style: 'position:absolute;left:16px;top:230px;width:363px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Задаются отдельно для каждого пользователя.',
			style: 'position:absolute;left:8px;top:203px;width:382px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:252px;width:382px;height:124px;',
			height: 124,width: 382,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Для доступа в Интернет необходима авторизация на прокси',
			style: 'position:absolute;left:8px;top:7px;width:374px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:61px;top:71px;width:258px;height:45px;',
			height: 45,width: 258,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Пользователь:',
			style: 'position:absolute;left:2px;top:3px;width:80px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Пароль:',
			style: 'position:absolute;left:2px;top:28px;width:52px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяПользователяПрокси',
			width: 174,
			height: 19,
			style: 'position:absolute;left:84px;top:0px;width:174px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПарольПользователяПрокси',
			width: 174,
			height: 19,
			style: 'position:absolute;left:84px;top:26px;width:174px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:13px;top:21px;width:3px;height:73px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:14px;top:92px;width:19px;height:3px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:33px;top:81px;width:2px;height:26px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:35px;top:81px;width:20px;height:3px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:35px;top:106px;width:20px;height:3px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Если для доступа в Интернет необходима авторизация на прокси, то установите данный флажок и задайте параметры авторизации ниже.',
			style: 'position:absolute;left:24px;top:24px;width:358px;height:29px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:10px;width:382px;height:162px;',
			height: 162,width: 382,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Общие настройки',
			style: 'position:absolute;left:0px;top:0px;width:382px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'МодульДокументооборотаПредставление',
			width: 374,
			height: 19,
			style: 'position:absolute;left:8px;top:92px;width:374px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Задаются администратором информационной базы.',
			style: 'position:absolute;left:0px;top:17px;width:382px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:124px;width:374px;height:3px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Криптопровайдер:',
			style: 'position:absolute;left:8px;top:140px;width:98px;height:15px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:111px;top:138px;width:271px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Использовать встроенный модуль документооборота',
			style: 'position:absolute;left:8px;top:45px;width:296px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Использовать внешний модуль:',
			style: 'position:absolute;left:8px;top:69px;width:182px;height:16px;',
		},
			]
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:384px;width:398px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});