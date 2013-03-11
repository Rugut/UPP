Ext.define('Документы.ПринятиеКУчетуНМА.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 412,width: 644,
	iconCls: 'bogus',
	title: 'Принятие к учету НМА',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			items:
			[
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПринятиеКУчетуНематериальногоАктива',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ПринятиеКУчетуРезультатовНИОКР',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:387px;width:644px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
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
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:360px;width:546px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:83px;width:628px;height:271px;',
			height: 271,width: 628,
			items:
			[
				{
					title:'ОбщиеСведения',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияРасходов',
			style: 'position:absolute;left:251px;top:124px;width:369px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаБУВнеоборотногоАктива',
			style: 'position:absolute;left:251px;top:52px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНУВнеоборотногоАктива',
			style: 'position:absolute;left:251px;top:76px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НематериальныйАктив',
			style: 'position:absolute;left:251px;top:28px;width:369px;height:19px;',
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
			name: 'СпособПоступления',
			style: 'position:absolute;left:212px;top:75px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокПолезногоИспользованияБУ',
			style: 'position:absolute;left:212px;top:123px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособНачисленияАмортизацииБУ',
			style: 'position:absolute;left:212px;top:147px;width:234px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаБУ',
			style: 'position:absolute;left:212px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетНачисленияАмортизацииБУ',
			style: 'position:absolute;left:212px;top:195px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьБУ',
			style: 'position:absolute;left:212px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьБух',
			text: 'Рассчитать стоимость',
			style: 'position:absolute;left:298px;top:51px;width:148px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:171px;width:426px;height:24px;',
			height: 24,width: 426,
			items:
			[
				{
					title:'ПропорциональноОбъемуПродукции',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредполагаемыйОбъемПродукцииБУ',
			style: 'position:absolute;left:206px;top:0px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Линейный',
				},
				{
					title:'УменьшаемогоОстатка',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоэффициентБУ',
			style: 'position:absolute;left:206px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
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
			style: 'position:absolute;left:212px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьНУ',
			style: 'position:absolute;left:212px;top:51px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьНал',
			text: 'Рассчитать стоимость',
			style: 'position:absolute;left:298px;top:51px;width:148px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьПР',
			style: 'position:absolute;left:212px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьВР',
			style: 'position:absolute;left:212px;top:100px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:145px;width:614px;height:99px;',
			height: 99,width: 614,
			items:
			[
				{
					title:'НМА',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетНачисленияАмортизацииНУ',
			style: 'position:absolute;left:471px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокПолезногоИспользованияНУ',
			style: 'position:absolute;left:207px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:47px;width:458px;height:24px;',
			height: 24,width: 458,
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
			style: 'position:absolute;left:238px;top:0px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпециальныйКоэффициентНУ',
			style: 'position:absolute;left:207px;top:74px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'НИОКР',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокПолезногоИспользованияНУНИОКР',
			style: 'position:absolute;left:212px;top:25px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Пустая',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокСписанияНИОКРНаРасходыНУ',
			style: 'position:absolute;left:212px;top:125px;width:234px;height:19px;',
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
			name: 'ДатаПриобретения',
			style: 'position:absolute;left:547px;top:27px;width:71px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьУСН',
			style: 'position:absolute;left:244px;top:27px;width:71px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокПолезногоИспользованияУСН',
			style: 'position:absolute;left:547px;top:51px;width:71px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНачисленнойАмортизацииУСН',
			style: 'position:absolute;left:244px;top:51px;width:71px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокВключенияСтоимостиВСоставРасходовУСН',
			style: 'position:absolute;left:244px;top:75px;width:374px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:152px;width:612px;height:87px;',
			height: 87,width: 612,
			columns:
			[
				{
					text:'НомерСтроки',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:127px;width:612px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:416px;top:56px;width:220px;height:19px;',
		},
	]
});