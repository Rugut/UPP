Ext.define('Документы.ОприходованиеТоваров.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 435,width: 668,
	iconCls: 'bogus',
	title: 'Оприходование товаров',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:383px;width:562px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:25px;',
			items:
			[
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:98px;top:335px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:428px;top:335px;width:232px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Основание',
			style: 'position:absolute;left:98px;top:359px;width:562px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:428px;top:57px;width:232px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:561px;top:313px;width:99px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнвентаризацияТоваровНаСкладе',
			style: 'position:absolute;left:98px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:410px;width:668px;height:25px;',
			items:
			[
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
					text:'Разделитель1',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:652px;height:204px;',
			height: 204,width: 652,
			items:
			[
				{
					title:'Товары',
				},
				{
					title:'КоррСчет',
				},
			]
		},
	]
});