Ext.define('Обработки.НастройкиПрограммы.НастройкаОбменаДанными',
	{
	extend: 'Ext.window.Window',
	height: 327,width: 749,
	iconCls: 'bogus',
	title: 'Настройка обмена данными',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:302px;width:749px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДействиеЗаписать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:166px;height:286px;',
			height: 286,width: 166,
			columns:
			[
				{
					text:'Представление',
				},
				{
					text:'ИмяРаздела',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:179px;top:8px;width:562px;height:286px;',
			height: 286,width: 562,
			items:
			[
				{
					title:'ОбменДанными',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрефиксУзлаРаспределеннойИнформационнойБазы',
			style: 'position:absolute;left:268px;top:48px;width:44px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрефиксВнутреннегоШтрихкода',
			style: 'position:absolute;left:268px;top:88px;width:44px;height:19px;',
		},
					]
				},
				{
					title:'ОбменЮНИСКАН',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'GLNПредприятия',
			style: 'position:absolute;left:291px;top:48px;width:165px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрефиксШтрихКодаРегистрацииНоменклатуры',
			style: 'position:absolute;left:291px;top:96px;width:165px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольРегистрацииВЮнискан',
			style: 'position:absolute;left:291px;top:72px;width:165px;height:19px;',
		},
					]
				},
			]
		},
	]
});