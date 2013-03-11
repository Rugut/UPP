Ext.define('Справочники.КодыОКПД.ФормаВыбораПоиск',
	{
	extend: 'Ext.window.Window',
	height: 473,width: 788,
	iconCls: 'bogus',
	title: 'Коды ОКПД',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:451px;height:407px;',
			height: 407,width: 451,
			columns:
			[
				{
					text:'Код',
				},
				{
					text:'Имя',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:788px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'ИерархическийПросмотр',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:448px;width:788px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:466px;top:33px;width:314px;height:407px;',
			height: 407,width: 314,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});