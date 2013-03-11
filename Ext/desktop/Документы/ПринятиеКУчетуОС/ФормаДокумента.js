Ext.define('Документы.ПринятиеКУчетуОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 559,width: 706,
	iconCls: 'bogus',
	title: 'Принятие к учету ОС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:706px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Подменю3',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:534px;width:706px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Печать',
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
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:507px;width:608px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:690px;height:396px;',
			height: 396,width: 690,
			items:
			[
				{
					title:'ОсновныеСредства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:212px;width:676px;height:157px;',
			height: 157,width: 676,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОсновноеСредство',
				},
				{
					text:'ИнвНомер',
				},
				{
					text:'ИнвентарныйНомер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:188px;width:676px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьПоНаименованию',
				},
				{
					text:'Подбор',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:676px;height:162px;',
			height: 162,width: 676,
			items:
			[
				{
					title:'ОССоСклада',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:402px;top:0px;width:274px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактеристикаНоменклатуры',
			style: 'position:absolute;left:90px;top:23px;width:206px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияНоменклатуры',
			style: 'position:absolute;left:90px;top:46px;width:206px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:90px;top:0px;width:206px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаБУВнеоборотногоАктива',
			style: 'position:absolute;left:402px;top:23px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНУВнеоборотногоАктива',
			style: 'position:absolute;left:402px;top:46px;width:79px;height:19px;',
		},
					]
				},
				{
					title:'ОбъектыСтроительства',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбъектСтроительства',
			style: 'position:absolute;left:451px;top:0px;width:225px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Стоимость',
			style: 'position:absolute;left:228px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаБУВнеоборотногоАктива1',
			style: 'position:absolute;left:62px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНУВнеоборотногоАктива1',
			style: 'position:absolute;left:62px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьБУ',
			style: 'position:absolute;left:228px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'РассчитатьСтоимость',
			text: 'Рассчитать суммы',
			style: 'position:absolute;left:0px;top:0px;width:142px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьНУ',
			style: 'position:absolute;left:228px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьБУХоз',
			style: 'position:absolute;left:534px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьНУХоз',
			style: 'position:absolute;left:534px;top:48px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:457px;top:120px;width:75px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДС',
			style: 'position:absolute;left:596px;top:120px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьПР',
			style: 'position:absolute;left:228px;top:72px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьПРХоз',
			style: 'position:absolute;left:534px;top:72px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьВР',
			style: 'position:absolute;left:228px;top:96px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьВРХоз',
			style: 'position:absolute;left:534px;top:96px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Прочее',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьУУ',
			style: 'position:absolute;left:118px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ОбщиеСведения',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособыОтраженияРасходовПоАмортизации',
			style: 'position:absolute;left:233px;top:46px;width:295px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ШифрПоЕНАОФ',
			style: 'position:absolute;left:233px;top:6px;width:295px;height:19px;',
		},
					]
				},
				{
					title:'УпрУчет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СоставОсновногоСредства',
			style: 'position:absolute;left:210px;top:30px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:210px;top:6px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МОЛУУ',
			style: 'position:absolute;left:494px;top:18px;width:188px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособНачисленияАмортизацииУУ',
			style: 'position:absolute;left:210px;top:147px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокПолезногоИспользованияУУ',
			style: 'position:absolute;left:210px;top:219px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредполагаемыйОбъемПродукцииУУ',
			style: 'position:absolute;left:210px;top:195px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГодоваяНормаАмортизацииУУ',
			style: 'position:absolute;left:210px;top:243px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрафикАмортизацииПоГодуУУ',
			style: 'position:absolute;left:210px;top:267px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоэффициентУскоренияУУ',
			style: 'position:absolute;left:585px;top:195px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИндивидуальныйГрафикАмортизации',
			style: 'position:absolute;left:495px;top:267px;width:187px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПараметрВыработкиУУ',
			style: 'position:absolute;left:210px;top:171px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗаполнитьУУ',
			text: 'Заполнить по данным бух. учета',
			style: 'position:absolute;left:480px;top:147px;width:196px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеПринятиеКУчету',
			style: 'position:absolute;left:210px;top:74px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеВводаВЭксплуатацию',
			style: 'position:absolute;left:210px;top:98px;width:186px;height:19px;',
		},
					]
				},
				{
					title:'БухУчет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МОЛБУ',
			style: 'position:absolute;left:210px;top:30px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:210px;top:6px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособПоступления',
			style: 'position:absolute;left:494px;top:18px;width:188px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокПолезногоИспользованияБУ',
			style: 'position:absolute;left:210px;top:219px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособНачисленияАмортизацииБУ',
			style: 'position:absolute;left:210px;top:147px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаБУ',
			style: 'position:absolute;left:585px;top:267px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетНачисленияАмортизацииБУ',
			style: 'position:absolute;left:585px;top:246px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГодоваяНормаАмортизацииБУ',
			style: 'position:absolute;left:210px;top:243px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоэффициентУскоренияБУ',
			style: 'position:absolute;left:585px;top:195px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредполагаемыйОбъемПродукцииБУ',
			style: 'position:absolute;left:210px;top:195px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрафикАмортизацииПоГодуБУ',
			style: 'position:absolute;left:210px;top:267px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ЗаполнитьБУ',
			text: 'Заполнить по данным упр. учета',
			style: 'position:absolute;left:480px;top:147px;width:196px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПараметрВыработкиБУ',
			style: 'position:absolute;left:210px;top:171px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеПринятиеКУчетуРегл',
			style: 'position:absolute;left:210px;top:74px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеВводаВЭксплуатациюРегл',
			style: 'position:absolute;left:210px;top:98px;width:186px;height:19px;',
		},
					]
				},
				{
					title:'НалУчет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНУ',
			style: 'position:absolute;left:243px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокВключенияСтоимостиВСоставРасходовНУ',
			style: 'position:absolute;left:243px;top:53px;width:240px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:87px;width:676px;height:283px;',
			height: 283,width: 676,
			items:
			[
				{
					title:'НачислениеАмортизации',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетНачисленияАмортизацииНУ',
			style: 'position:absolute;left:241px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокПолезногоИспользованияНУ',
			style: 'position:absolute;left:241px;top:71px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпециальныйКоэффициентНУ',
			style: 'position:absolute;left:241px;top:95px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:168px;width:676px;height:115px;',
			height: 115,width: 676,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентКапитальныхВложенийВключаемыхВРасходыНУ',
			style: 'position:absolute;left:241px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаЗатратПоАмортизационнойПремии',
			style: 'position:absolute;left:241px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоПоАмортизационнойПремии1',
			style: 'position:absolute;left:241px;top:48px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоПоАмортизационнойПремии2',
			style: 'position:absolute;left:241px;top:72px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоПоАмортизационнойПремии3',
			style: 'position:absolute;left:241px;top:96px;width:238px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:47px;width:670px;height:24px;',
			height: 24,width: 670,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособНачисленияАмортизацииНУ',
			style: 'position:absolute;left:235px;top:0px;width:240px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'ВключениеВРасходыПриПринятииКУчету',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:27px;width:676px;height:256px;',
			height: 256,width: 676,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'button',
			name: 'РассчитатьСтоимостьСписанияНУ',
			text: 'Рассчитать суммы',
			style: 'position:absolute;left:237px;top:21px;width:142px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьНУ1',
			style: 'position:absolute;left:72px;top:21px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияРасходовПриВключенииВСтоимость',
			style: 'position:absolute;left:237px;top:0px;width:433px;height:19px;',
		},
					]
				},
				{
					title:'СтоимостьНеВключаетсяВРасходы',
				},
			]
		},
					]
				},
				{
					title:'УСНУчет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьУСН',
			style: 'position:absolute;left:304px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокПолезногоИспользованияУСН',
			style: 'position:absolute;left:304px;top:31px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПриобретения',
			style: 'position:absolute;left:562px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:205px;width:676px;height:165px;',
			height: 165,width: 676,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОсновноеСредство',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'СуммаОплаты',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:92px;width:676px;height:76px;',
			height: 76,width: 676,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОсновноеСредство',
				},
				{
					text:'ИнвентарныйНомер',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:7px;top:179px;width:675px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокВключенияСтоимостиВСоставРасходовУСН',
			style: 'position:absolute;left:304px;top:56px;width:378px;height:19px;',
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
			style: 'position:absolute;left:92px;top:7px;width:210px;height:19px;',
		},
					]
				},
			]
		},
	]
});