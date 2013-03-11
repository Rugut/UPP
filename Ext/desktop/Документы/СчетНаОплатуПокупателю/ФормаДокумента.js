Ext.define('Документы.СчетНаОплатуПокупателю.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 508,width: 657,
	iconCls: 'bogus',
	title: 'Документ Счет на оплату покупателю',
	
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
			style: 'position:absolute;left:96px;top:457px;width:553px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочтаПанель',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ВыгрузитьВФорматеCommerceML',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочта',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLПанель',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайл',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайлПанель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:154px;width:641px;height:242px;',
			height: 242,width: 641,
			items:
			[
				{
					title:'Товары',
				},
				{
					title:'Тара',
				},
				{
					title:'Услуги',
				},
				{
					title:'Дополнительно',
				},
				{
					title:'АвтоматическиеСкидки',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:429px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
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
			name: 'Склад',
			style: 'position:absolute;left:96px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:634px;top:105px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:546px;top:409px;width:99px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:546px;top:433px;width:99px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОплаты',
			style: 'position:absolute;left:236px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтгрузки',
			style: 'position:absolute;left:96px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтруктурнаяЕдиница',
			style: 'position:absolute;left:429px;top:129px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:483px;width:657px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Печать',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ДействиеЗаписать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});