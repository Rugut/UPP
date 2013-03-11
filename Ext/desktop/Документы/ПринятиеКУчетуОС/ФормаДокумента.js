Ext.define('Документы.ПринятиеКУчетуОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 559,width: 706,
	iconCls: 'bogus',
	title: 'Принятие к учету ОС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:706px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Подменю3',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:534px;width:706px;height:25px;',
			items:
			[
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
				{
					text:'Разделитель2',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:507px;width:608px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:690px;height:396px;',
			height: 396,width: 690,
			items:
			[
				{
					title:'ОсновныеСредства',
				},
				{
					title:'ОбщиеСведения',
				},
				{
					title:'УпрУчет',
				},
				{
					title:'БухУчет',
				},
				{
					title:'НалУчет',
				},
				{
					title:'УСНУчет',
				},
				{
					title:'Дополнительно',
				},
			]
		},
	]
});