Ext.define('Документы.ВводНачальныхОстатковУСН.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 453,width: 681,
	iconCls: 'bogus',
	title: 'Ввод начальных остатков УСН',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:84px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:189px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:57px;width:225px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:681px;height:25px;',
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
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:428px;width:681px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:86px;width:665px;height:286px;',
			height: 286,width: 665,
			items:
			[
				{
					title:'Взаиморасчеты',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:651px;height:254px;',
			height: 254,width: 651,
			items:
			[
				{
					title:'ВзаиморасчетыСПоставщиками',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидЗадолженности',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'Сделка',
				},
				{
					text:'РасчетныйДокумент',
				},
				{
					text:'СуммаВзаиморасчетов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'ВзаиморасчетыСПокупателями',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидЗадолженности',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'Сделка',
				},
				{
					text:'РасчетныйДокумент',
				},
				{
					text:'СуммаВзаиморасчетов',
				},
				{
					text:'ДоходЕНВД',
				},
				{
					text:'ДоходКомитента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'ВзаиморасчетыСПодотчетниками',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидЗадолженности',
				},
				{
					text:'Подотчетник',
				},
				{
					text:'РасчетныйДокумент',
				},
				{
					text:'СуммаВзаиморасчетов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'ВзаиморасчетыССотрудниками',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидЗадолженности',
				},
				{
					text:'Работник',
				},
				{
					text:'СуммаВзаиморасчетов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'ВзаиморвасчетыПоНалогам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидЗадолженности',
				},
				{
					text:'СчетРасчетовПоНалогу',
				},
				{
					text:'СуммаВзаиморасчетов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ПартииТоваровНаСкладах',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:651px;height:228px;',
			height: 228,width: 651,
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
					text:'Склад',
				},
				{
					text:'ДокументОприходования',
				},
				{
					text:'Количество',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:651px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'ПартииТоваровПереданные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:651px;height:228px;',
			height: 228,width: 651,
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
					text:'СчетУчета',
				},
				{
					text:'ДокументОприходования',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'ДокументПередачи',
				},
				{
					text:'Количество',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:651px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'РасходыУСН',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:651px;height:254px;',
			height: 254,width: 651,
			items:
			[
				{
					title:'Номенклатура',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ДокументОприходования',
				},
				{
					text:'СчетУчета',
				},
				{
					text:'СтатусыПартийУСН',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'РасчетныйДокумент',
				},
				{
					text:'СтатусыОплатыРасходовУСН',
				},
				{
					text:'ОтражениеВУСН',
				},
				{
					text:'Валюта',
				},
				{
					text:'Количество',
				},
				{
					text:'Сумма',
				},
				{
					text:'НДС',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'НМА',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НМА',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'РасчетныйДокумент',
				},
				{
					text:'ОтражениеВУСН',
				},
				{
					text:'Валюта',
				},
				{
					text:'Сумма',
				},
				{
					text:'НДС',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Услуги',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'РасчетныйДокумент',
				},
				{
					text:'ОтражениеВУСН',
				},
				{
					text:'Валюта',
				},
				{
					text:'Сумма',
				},
				{
					text:'НДС',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'РБП',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'РБП',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'РасчетныйДокумент',
				},
				{
					text:'СтатусыОплатыРасходовУСН',
				},
				{
					text:'ОтражениеВУСН',
				},
				{
					text:'Валюта',
				},
				{
					text:'Сумма',
				},
				{
					text:'НДС',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Запрлата',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Работник',
				},
				{
					text:'ОтражениеВУСН',
				},
				{
					text:'Сумма',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Налоги',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'СчетРасчетовПоНалогу',
				},
				{
					text:'ОтражениеВУСН',
				},
				{
					text:'Сумма',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'КорректировкаСведений',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:651px;height:254px;',
			height: 254,width: 651,
			items:
			[
				{
					title:'ОсновныеСредства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОсновноеСредство',
				},
				{
					text:'ДатаПриобретения',
				},
				{
					text:'ПервоначальнаяСтоимостьУСН',
				},
				{
					text:'СуммаНачисленнойАмортизации',
				},
				{
					text:'СрокПолезногоИспользования',
				},
				{
					text:'ПорядокВключенияСтоимостиВСоставРасходовУСН',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'НематериальныеАктивы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:637px;height:196px;',
			height: 196,width: 637,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НематериальныйАктив',
				},
				{
					text:'ДатаПриобретения',
				},
				{
					text:'ПервоначальнаяСтоимостьУСН',
				},
				{
					text:'СуммаНачисленнойАмортизации',
				},
				{
					text:'СрокПолезногоИспользования',
				},
				{
					text:'ПорядокВключенияСтоимостиВСоставРасходовУСН',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:637px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:401px;width:579px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:377px;width:579px;height:19px;',
		},
	]
});