Ext.define('Документы.ЗаказПоставщику.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 490,width: 821,
	iconCls: 'bogus',
	title: 'Документ Заказ поставщику',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:113px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:223px;top:33px;width:138px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:441px;width:719px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:821px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'Действие',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLПанель',
				},
				{
					text:'ПодписатьИОтправить',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель13',
				},
				{
					text:'Файлы1',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочта',
				},
				{
					text:'Разделитель12',
				},
				{
					text:'Разделитель11',
				},
				{
					text:'СформироватьНовый',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочтаПанель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РазделительЭД',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайлПанель',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'ПерезаполнитьДаннымиИзЭД',
				},
				{
					text:'ЭД',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ВыгрузитьВФорматеCommerceML',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'СписокЭлектронныхДокументов',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайл',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:153px;width:807px;height:243px;',
			height: 243,width: 807,
			items:
			[
				{
					title:'Оборудование',
				},
				{
					title:'Товары',
				},
				{
					title:'Материалы',
				},
				{
					title:'Услуги',
				},
				{
					title:'Тара',
				},
				{
					title:'Дополнительно',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:530px;top:81px;width:285px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:113px;top:81px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:57px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:113px;top:129px;width:303px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:800px;top:105px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:730px;top:399px;width:80px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:730px;top:420px;width:80px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтруктурнаяЕдиница',
			style: 'position:absolute;left:530px;top:129px;width:285px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОплаты',
			style: 'position:absolute;left:266px;top:105px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПоступления',
			style: 'position:absolute;left:113px;top:105px;width:95px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:465px;width:821px;height:25px;',
			items:
			[
				{
					text:'РазделительОК',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Печать',
				},
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:465px;width:821px;height:25px;',
			items:
			[
				{
					text:'ЗарегистрироватьИЗакрыть',
				},
				{
					text:'РазделительЗакрыть1',
				},
				{
					text:'Закрыть',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Зарегистрировать',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:821px;height:25px;',
			items:
			[
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'ДействиеПерейти',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель13',
				},
			]
		},
	]
});