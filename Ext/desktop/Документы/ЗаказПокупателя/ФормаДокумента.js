Ext.define('Документы.ЗаказПокупателя.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 549,width: 945,
	iconCls: 'bogus',
	title: 'Документ Заказ покупателя',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:113px;top:32px;width:115px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:253px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:498px;width:847px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:945px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель14',
				},
				{
					text:'Разделитель11',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'РазделительЭД',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СформироватьНовый',
				},
				{
					text:'ОткрытьФормуНастройкиБланкаТоварногоНаполнения',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель15',
				},
				{
					text:'Файлы1',
				},
				{
					text:'СписокЭлектронныхДокументов',
				},
				{
					text:'ДействиеСоздатьРеализациюСОткрытиемФормы',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ПодписатьИОтправить',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ПерезаполнитьДаннымиИзЭД',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ПараметрыЭлектронногоОбменаДокументами',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеСоздатьРеализацию',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'Действие',
				},
				{
					text:'ЭД',
				},
				{
					text:'ПодменюЗаполнитьИПровести',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'Разделитель13',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:157px;width:929px;height:291px;',
			height: 291,width: 929,
			items:
			[
				{
					title:'Товары',
				},
				{
					title:'Материалы',
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
			style: 'position:absolute;left:597px;top:80px;width:340px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:113px;top:80px;width:347px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:56px;width:347px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:113px;top:128px;width:347px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:922px;top:104px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:835px;top:454px;width:102px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:835px;top:476px;width:102px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОплаты',
			style: 'position:absolute;left:274px;top:104px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтгрузки',
			style: 'position:absolute;left:113px;top:104px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтруктурнаяЕдиница',
			style: 'position:absolute;left:597px;top:128px;width:340px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:524px;width:945px;height:25px;',
			items:
			[
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
					text:'Записать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
			]
		},
	]
});