Ext.define('Документы.ПринятиеКУчетуНМА.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 412,width: 644,
	iconCls: 'bogus',
	title: 'Принятие к учету НМА',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			items:
			[
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПринятиеКУчетуНематериальногоАктива',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ПринятиеКУчетуРезультатовНИОКР',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:387px;width:644px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
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
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:360px;width:546px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:83px;width:628px;height:271px;',
			height: 271,width: 628,
			items:
			[
				{
					title:'ОбщиеСведения',
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
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:416px;top:56px;width:220px;height:19px;',
		},
	]
});