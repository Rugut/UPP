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
				},
				{
					title:'ПроизвольныйОтчет',
				},
				{
					title:'ВнешняяОбработка',
				},
			]
		},
	]
});