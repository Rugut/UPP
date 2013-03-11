Ext.define('Справочники.СтатьиОборотовПоБюджетам.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 457,width: 495,
	iconCls: 'bogus',
	title: 'Статьи оборотов по бюджетам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:495px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:432px;width:495px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
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
			style: 'position:absolute;left:8px;top:84px;width:479px;height:316px;',
			height: 316,width: 479,
			items:
			[
				{
					title:'Основная',
				},
				{
					title:'Проводки',
				},
				{
					title:'Данные',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:407px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода2',
			style: 'position:absolute;left:130px;top:33px;width:232px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:130px;top:57px;width:357px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:130px;top:405px;width:357px;height:19px;',
		},
	]
});