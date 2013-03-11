Ext.define('Справочники.Склады.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	height: 109,width: 546,
	iconCls: 'bogus',
	title: 'Группа Склады (места хранения)',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:498px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:57px;width:360px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:93px;top:33px;width:445px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:546px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'РазделительПрава',
				},
				{
					text:'Права',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:84px;width:546px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
			]
		},
	]
});