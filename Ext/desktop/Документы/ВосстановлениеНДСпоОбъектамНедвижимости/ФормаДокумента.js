Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 459,width: 644,
	iconCls: 'bogus',
	title: 'Восстановление НДС по объектам недвижимости',
	
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
			style: 'position:absolute;left:203px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:58px;width:227px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:407px;width:540px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:434px;width:644px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:628px;height:321px;',
			height: 321,width: 628,
			items:
			[
				{
					title:'ОбъектыНедвижимости',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:614px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодборОбъектыНедвижимости',
				},
				{
					text:'ЗаполнитьСуммыНДСПоСФ',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьДолюВыручки',
				},
				{
					text:'ЗаполнитьПараметрыОбъектовНедвижимости',
				},
				{
					text:'ЗаполнитьСуммыНДСПоСФвСтроке',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:614px;height:115px;',
			height: 115,width: 614,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОбъектНедвижимости',
				},
				{
					text:'ИспользуетсяДляОперацийНеОблагаемыхНДС',
				},
				{
					text:'ДатаНачалаИспользованияДляОпераций',
				},
				{
					text:'ДатаВводаВЭксплуатациюБУ',
				},
				{
					text:'ДатаНачисленияАмортизацииНУ',
				},
				{
					text:'СтоимостьОбъектаНедвижимости',
				},
				{
					text:'СуммаНДСПоПодряднымРаботам',
				},
				{
					text:'СуммаНДСПоСМРДляСобственногоПотребления',
				},
				{
					text:'СуммаНДСПоОбъектуНедвижимости',
				},
				{
					text:'ДоляВыручкиНеОблагаемаяНДС',
				},
				{
					text:'СуммаНДСПоПодряднымРаботамВосстановлена',
				},
				{
					text:'СуммаНДСПоСМРДляСобственногоПотребленияВосстановлена',
				},
				{
					text:'СуммаНДСПоОбъектуНедвижимостиВосстановлена',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:164px;width:614px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ПодборСчетовфактур',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:188px;width:614px;height:106px;',
			height: 106,width: 614,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'СчетФактура',
				},
				{
					text:'ВидЦенности',
				},
				{
					text:'КодОперацииДляДекларации',
				},
				{
					text:'Поставщик',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'ДокументОплаты',
				},
				{
					text:'СуммаБезНДС',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'НДС',
				},
				{
					text:'СуммаБезНДСВосстановлена',
				},
				{
					text:'НДСВосстановлен',
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
			name: 'СчетСписанияНДС',
			style: 'position:absolute;left:105px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС1',
			style: 'position:absolute;left:105px;top:35px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС2',
			style: 'position:absolute;left:105px;top:59px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС3',
			style: 'position:absolute;left:105px;top:82px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНДСНУ',
			style: 'position:absolute;left:421px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ1',
			style: 'position:absolute;left:420px;top:35px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ2',
			style: 'position:absolute;left:420px;top:59px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ3',
			style: 'position:absolute;left:420px;top:82px;width:200px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:93px;top:6px;width:527px;height:19px;',
		},
					]
				},
			]
		},
	]
});