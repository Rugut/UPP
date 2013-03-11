Ext.define('Обработки.ОнлайнСервисыРегламентированнойОтчетности.НастройкиМеханизмаОнлайнСервисов',
	{
	extend: 'Ext.window.Window',
	height: 500,width: 512,
	iconCls: 'bogus',
	title: 'Настройки оповещений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:475px;width:512px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:496px;height:154px;',
			height: 154,width: 496,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:61px;width:496px;height:82px;',
			height: 82,width: 496,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:226px;width:496px;height:241px;',
			height: 241,width: 496,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:76px;top:140px;width:420px;height:48px;',
			height: 48,width: 420,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПользователяПрокси',
			style: 'position:absolute;left:84px;top:0px;width:174px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольПользователяПрокси',
			style: 'position:absolute;left:84px;top:26px;width:174px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаПроверитьИнтернет',
			text: 'Проверить параметры доступа в Интернет',
			style: 'position:absolute;left:34px;top:200px;width:462px;height:41px;',
		},
					]
				},
			]
		},
	]
});