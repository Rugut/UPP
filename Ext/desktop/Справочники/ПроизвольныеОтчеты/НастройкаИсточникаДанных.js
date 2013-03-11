Ext.define('Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанных',
	{
	extend: 'Ext.window.Window',
	height: 291,width: 359,
	iconCls: 'bogus',
	title: 'Настройка источника данных',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:266px;width:359px;height:25px;',
			items:
			[
				{
					text:'ДействиеЗакрыть',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДействиеОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:132px;width:343px;height:126px;',
			height: 126,width: 343,
			columns:
			[
				{
					text:'Параметр',
				},
				{
					text:'ПутьКДанным',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:56px;width:343px;height:45px;',
			height: 45,width: 343,
			items:
			[
				{
					title:'Отчет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяИсточника',
			style: 'position:absolute;left:87px;top:0px;width:256px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НастройкаОтчета',
			style: 'position:absolute;left:87px;top:24px;width:256px;height:19px;',
		},
					]
				},
				{
					title:'ПроизвольныйОтчет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СохраненнаяНастройка',
			style: 'position:absolute;left:87px;top:24px;width:256px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроизвольныйОтчет',
			style: 'position:absolute;left:87px;top:0px;width:256px;height:19px;',
		},
					]
				},
				{
					title:'ВнешняяОбработка',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВнешняяОбработка',
			style: 'position:absolute;left:87px;top:0px;width:256px;height:19px;',
		},
					]
				},
			]
		},
	]
});