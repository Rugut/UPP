Ext.define('Отчеты.РегламентированныйОтчетБухОтчетность.КонтрольныеСоотношения',
	{
	extend: 'Ext.window.Window',
	height: 451,width: 580,
	iconCls: 'bogus',
	title: 'Результаты проверки соотношений показателей регламентированных отчетов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:580px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'ПересчитатьОбновить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:426px;width:580px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
			]
		},
	]
});