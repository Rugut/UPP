Ext.define('Справочники.Склады.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 320,width: 529,
	iconCls: 'bogus',
	title: 'Склады (места хранения)',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:481px;top:58px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:103px;top:58px;width:338px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:103px;top:267px;width:418px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:25px;',
			items:
			[
				{
					text:'РазделительПрава',
				},
				{
					text:'Права',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Файлы',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:295px;width:529px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:103px;top:33px;width:418px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:513px;height:177px;',
			height: 177,width: 513,
			items:
			[
				{
					title:'Общие',
				},
				{
					title:'Свойства',
				},
				{
					title:'Категории',
				},
			]
		},
	]
});