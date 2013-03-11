Ext.define('Документы.ПоступлениеТоваровИзПереработки.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 422,width: 652,
	iconCls: 'bogus',
	title: 'Поступление товаров из переработки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Подбор',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'Настройка',
				},
				{
					text:'Подменю',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель8',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:397px;width:652px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
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
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладОрдер',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
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
			name: 'Заказ',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:370px;width:548px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:157px;width:636px;height:180px;',
			height: 180,width: 636,
			items:
			[
				{
					title:'Продукция',
				},
				{
					title:'Тара',
				},
				{
					title:'Материалы',
				},
				{
					title:'Распределение',
				},
				{
					title:'ПрочиеЗатраты',
				},
				{
					title:'РаспределениеПрочихЗатрат',
				},
				{
					title:'ВозвратныеОтходы',
				},
				{
					title:'РаспределениеВозвратныхОтходов',
				},
				{
					title:'СчетаУчета',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:346px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:424px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПоступления',
			style: 'position:absolute;left:336px;top:57px;width:84px;height:19px;',
		},
	]
});