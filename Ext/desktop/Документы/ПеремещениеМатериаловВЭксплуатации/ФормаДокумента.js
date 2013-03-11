Ext.define('Документы.ПеремещениеМатериаловВЭксплуатации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 384,width: 652,
	iconCls: 'bogus',
	title: 'Перемещение материалов в эксплуатации',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:332px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ПроводкиДтКт',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:307px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:359px;width:652px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Печать',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:114px;width:636px;height:182px;',
			height: 182,width: 636,
			items:
			[
				{
					title:'Материалы',
				},
				{
					title:'Получатели',
				},
			]
		},
	]
});