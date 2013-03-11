Ext.define('Справочники.ФизическиеЛица.ФормаВводаДанныхНДФЛ',
	{
	extend: 'Ext.window.Window',
	height: 373,width: 692,
	iconCls: 'bogus',
	title: 'Физические лица',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:348px;width:692px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:676px;height:332px;',
			height: 332,width: 676,
			items:
			[
				{
					title:'Вычеты',
				},
				{
					title:'СтатусНалогоплательщика',
				},
				{
					title:'Доходы',
				},
			]
		},
	]
});