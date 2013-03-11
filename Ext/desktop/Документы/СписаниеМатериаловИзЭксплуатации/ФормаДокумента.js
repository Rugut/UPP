Ext.define('Документы.СписаниеМатериаловИзЭксплуатации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 366,width: 652,
	iconCls: 'bogus',
	title: 'Списание материалов из эксплуатации',
	
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
			style: 'position:absolute;left:96px;top:314px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель6',
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
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель7',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:636px;height:177px;',
			height: 177,width: 636,
			items:
			[
				{
					title:'Товары',
				},
				{
					title:'СписаниеРасходов',
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
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:290px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:341px;width:652px;height:25px;',
			items:
			[
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Печать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипСтоимости',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
	]
});