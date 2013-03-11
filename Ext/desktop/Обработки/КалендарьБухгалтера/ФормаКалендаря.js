Ext.define('Обработки.КалендарьБухгалтера.ФормаКалендаря',
	{
	extend: 'Ext.window.Window',
	height: 571,width: 669,
	iconCls: 'bogus',
	title: 'Календарь бухгалтера',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:669px;height:25px;',
			items:
			[
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Обновить',
				},
				{
					text:'Действие',
				},
				{
					text:'Неделя',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'День',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:546px;width:669px;height:25px;',
			items:
			[
				{
					text:'ПодменюПечати',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДляОрганизации',
			style: 'position:absolute;left:110px;top:33px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Год',
			style: 'position:absolute;left:573px;top:63px;width:89px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:63px;width:514px;height:480px;',
			height: 480,width: 514,
			items:
			[
				{
					title:'День',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:502px;height:469px;',
			height: 469,width: 502,
			columns:
			[
				{
					text:'КартинкаОповещение',
				},
				{
					text:'Срок',
				},
				{
					text:'Период',
				},
				{
					text:'НазваниеОтчетаИлиНалога',
				},
				{
					text:'Кто',
				},
			]
		},
					]
				},
				{
					title:'Неделя',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:295px;top:28px;width:218px;height:24px;',
			items:
			[
				{
					text:'ПерейтиКДате',
				},
				{
					text:'Открыть',
				},
				{
					text:'Оповещение',
				},
			]
		},
	]
});