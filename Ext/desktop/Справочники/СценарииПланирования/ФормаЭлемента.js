Ext.define('Справочники.СценарииПланирования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 291,width: 543,
	iconCls: 'bogus',
	title: 'Сценарии планирования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:266px;width:543px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:543px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:529px;height:225px;',
			height: 225,width: 529,
			items:
			[
				{
					title:'Основная',
				},
				{
					title:'КурсыВалют',
				},
			]
		},
	]
});