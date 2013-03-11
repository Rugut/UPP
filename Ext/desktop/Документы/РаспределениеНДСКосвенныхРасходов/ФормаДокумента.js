Ext.define('Документы.РаспределениеНДСКосвенныхРасходов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 715,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:715px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ЗаполнитьДокумент',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:715px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:418px;width:613px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:426px;top:56px;width:281px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:85px;width:699px;height:328px;',
			height: 328,width: 699,
			items:
			[
				{
					title:'Реализация',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыручкаБезНДС',
			style: 'position:absolute;left:164px;top:58px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыручкаНДС0',
			style: 'position:absolute;left:164px;top:106px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыручкаНДС',
			style: 'position:absolute;left:164px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:6px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыручкаЕНВД',
			style: 'position:absolute;left:164px;top:82px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'КосвенныеРасходы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:1px;width:685px;height:24px;',
			items:
			[
				{
					text:'Распределить',
				},
				{
					text:'Заполнить',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:685px;height:148px;',
			height: 148,width: 685,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидЦенности',
				},
				{
					text:'Поставщик',
				},
				{
					text:'СчетФактура',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'БазисРаспределенияВключаетЕНВД',
				},
				{
					text:'НДСВключенВСтоимость',
				},
				{
					text:'СчетУчетаНДС',
				},
				{
					text:'СуммаВсего',
				},
				{
					text:'НДСВсего',
				},
				{
					text:'НДССумма',
				},
				{
					text:'НДС18',
				},
				{
					text:'БезНДССумма',
				},
				{
					text:'БезНДС',
				},
				{
					text:'ЕНВДСумма',
				},
				{
					text:'ЕНВДНДС',
				},
				{
					text:'СуммаБезНДС0',
				},
				{
					text:'НДС0',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:179px;width:685px;height:123px;',
			height: 123,width: 685,
			columns:
			[
				{
					text:'ОтражатьВНалоговомУчете',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'ХарактерЗатрат',
				},
				{
					text:'СчетЗатрат',
				},
				{
					text:'СчетЗатратНУ',
				},
				{
					text:'СчетЗатратЕНВД',
				},
				{
					text:'Подразделение',
				},
				{
					text:'ВидАналитики',
				},
				{
					text:'ВидАналитикиДоп',
				},
				{
					text:'ВидСубконто1',
				},
				{
					text:'ВидСубконто2',
				},
				{
					text:'ВидСубконто3',
				},
				{
					text:'ВидСубконтоНУ1',
				},
				{
					text:'ВидСубконтоНУ2',
				},
				{
					text:'ВидСубконтоНУ3',
				},
				{
					text:'Аналитика',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
				{
					text:'Субконто1',
				},
				{
					text:'Субконто2',
				},
				{
					text:'Субконто3',
				},
				{
					text:'СубконтоНУ1',
				},
				{
					text:'СубконтоНУ2',
				},
				{
					text:'СубконтоНУ3',
				},
				{
					text:'СуммаБезНДС',
				},
				{
					text:'НДС',
				},
				{
					text:'Заказ',
				},
				{
					text:'Затрата',
				},
				{
					text:'ХарактеристикаЗатраты',
				},
				{
					text:'СерияЗатраты',
				},
			]
		},
					]
				},
				{
					title:'СчетаСписанияНДС',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатратСписанияНДС',
			style: 'position:absolute;left:98px;top:80px;width:241px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:98px;top:104px;width:241px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:128px;width:333px;height:91px;',
			height: 91,width: 333,
			items:
			[
				{
					title:'Счет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНДС',
			style: 'position:absolute;left:92px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС1',
			style: 'position:absolute;left:92px;top:24px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС2',
			style: 'position:absolute;left:92px;top:48px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС3',
			style: 'position:absolute;left:92px;top:72px;width:240px;height:19px;',
		},
					]
				},
				{
					title:'Надпись',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:359px;top:128px;width:332px;height:91px;',
			height: 91,width: 332,
			items:
			[
				{
					title:'Счет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНДСНУ',
			style: 'position:absolute;left:92px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ1',
			style: 'position:absolute;left:92px;top:24px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ2',
			style: 'position:absolute;left:92px;top:48px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ3',
			style: 'position:absolute;left:92px;top:72px;width:240px;height:19px;',
		},
					]
				},
				{
					title:'Надпись',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:98px;top:56px;width:241px;height:19px;',
		},
					]
				},
			]
		},
	]
});