Ext.define('Документы.СчетФактураВыданный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 582,width: 804,
	iconCls: 'bogus',
	title: 'Счет-фактура выданный',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:115px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:804px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайлПанель',
				},
				{
					text:'ПодписатьИОтправить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLПанель',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочта',
				},
				{
					text:'Действие',
				},
				{
					text:'ВыгрузитьВФорматеCommerceML',
				},
				{
					text:'ЭД',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СписокЭлектронныхДокументов',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Подменю',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочтаПанель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СформироватьНовый',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайл',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'РазделительЭД',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:557px;width:804px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительЗаписать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:215px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:461px;top:55px;width:337px;height:85px;',
			height: 85,width: 337,
			items:
			[
				{
					title:'СтраницаКорректировочныйИсправленный',
				},
				{
					title:'СтраницаКорректировочный',
				},
				{
					title:'СтраницаОбычный',
				},
				{
					title:'СтраницаИсправленный',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:461px;top:32px;width:337px;height:19px;',
			height: 19,width: 337,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:55px;width:433px;height:85px;',
			height: 85,width: 433,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:149px;width:790px;height:401px;',
			height: 401,width: 790,
			items:
			[
				{
					title:'Основное',
				},
				{
					title:'Дополнительно',
				},
			]
		},
	]
});