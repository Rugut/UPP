Ext.define('Документы.ФормированиеПотребностей.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 650,
	iconCls: 'bogus',
	title: 'Формирование потребностей',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:88px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:188px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'РежимВыбораДатПериодом',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:650px;height:25px;',
			items:
			[
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
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:59px;width:634px;height:332px;',
			height: 332,width: 634,
			items:
			[
				{
					title:'ПланыПродаж',
				},
				{
					title:'ПланыПроизводства',
				},
				{
					title:'ПланыЗакупок',
				},
				{
					title:'ВнутренниеЗаказы',
				},
				{
					title:'ЗаказыПокупателей',
				},
				{
					title:'ЗаказыНаПроизводство',
				},
				{
					title:'ПланыПосменные',
				},
				{
					title:'Потребности',
				},
				{
					title:'Дополнительно',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:95px;top:398px;width:547px;height:19px;',
		},
	]
});