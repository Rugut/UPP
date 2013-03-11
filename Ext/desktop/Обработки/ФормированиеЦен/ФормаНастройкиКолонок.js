Ext.define('Обработки.ФормированиеЦен.ФормаНастройкиКолонок',
	{
	extend: 'Ext.window.Window',
	height: 208,width: 425,
	iconCls: 'bogus',
	title: 'Форма настройки показа колонок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:183px;width:425px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:9px;width:409px;height:166px;',
			height: 166,width: 409,
			columns:
			[
				{
					text:'КолонкаСтрока',
				},
				{
					text:'ПоложениеКолонки',
				},
			]
		},
	]
});