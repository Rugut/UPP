Ext.define('Обработки.ПолучениеФайловИзИнтернета.ФормаПараметрыДоступаНаСервер',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:325px;height:194px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Параметры доступа на сервер',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодДоступаНаСервер',
			width: 243,
			height: 19,
			style: 'position:absolute;left:74px;top:98px;width:243px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодДоступаНаСервер',
			text: 'Логин/Код:',
			style: 'position:absolute;left:8px;top:98px;width:61px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПарольДоступаНаСервер',
			width: 243,
			height: 19,
			style: 'position:absolute;left:74px;top:122px;width:243px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПарольДоступаНаСервер',
			text: 'Пароль:',
			style: 'position:absolute;left:8px;top:122px;width:61px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Запомнить код и пароль',
			style: 'position:absolute;left:8px;top:146px;width:309px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУкажитеПараметры',
			text: 'Укажите логин/код и пароль для доступа к серверу',
			style: 'position:absolute;left:8px;top:53px;width:309px;height:40px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаголовок',
			text: 'Авторизация на сервере',
			style: 'position:absolute;left:8px;top:8px;width:309px;height:40px;text-align:center;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:169px;width:325px;height:25px;',
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
					text:'Отмена',
				},
			]
		},
	]
});