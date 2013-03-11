Ext.define('Документы.ВводНачальныхОстатковНДСпоПартиям.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 484,width: 780,
	iconCls: 'bogus',
	title: 'Ввод начальных остатков НДС по партиям',
	
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
			style: 'position:absolute;left:103px;top:429px;width:669px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:426px;top:33px;width:346px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:101px;width:764px;height:104px;',
			height: 104,width: 764,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'СерияНоменклатуры',
				},
				{
					text:'СчетУчета',
				},
				{
					text:'Партия',
				},
				{
					text:'Склад',
				},
				{
					text:'Количество',
				},
				{
					text:'Заказ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:459px;width:780px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
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
			style: 'position:absolute;left:8px;top:213px;width:764px;height:187px;',
			height: 187,width: 764,
			items:
			[
				{
					title:'ДополнительныеСведения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:79px;width:764px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:103px;top:405px;width:669px;height:19px;',
		},
	]
});