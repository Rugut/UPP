Ext.define('Обработки.ПолучениеФайловИзИнтернета.ФормаПараметрыПрокси',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:284px;height:154px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Параметры прокси-сервера',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяПользователя',
			width: 183,
			height: 19,
			style: 'position:absolute;left:93px;top:32px;width:183px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяПользователя',
			text: 'Имя:',
			style: 'position:absolute;left:8px;top:32px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПарольПользователя',
			width: 183,
			height: 19,
			style: 'position:absolute;left:93px;top:56px;width:183px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПарольПользователя',
			text: 'Пароль:',
			style: 'position:absolute;left:8px;top:56px;width:42px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Запомнить параметры прокси сервера',
			style: 'position:absolute;left:8px;top:106px;width:268px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресПроксиСервера',
			text: 'Адрес сервера:',
			style: 'position:absolute;left:8px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресПроксиСервера',
			width: 183,
			height: 19,
			style: 'position:absolute;left:93px;top:8px;width:183px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПортПроксиСервера',
			text: 'Порт:',
			style: 'position:absolute;left:8px;top:81px;width:42px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПортПроксиСервера',
			style: 'position:absolute;left:93px;top:81px;width:183px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:129px;width:284px;height:25px;',
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