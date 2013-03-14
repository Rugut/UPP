Ext.define('Документы.ПринятиеКУчетуНМА.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:644px;height:412px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Принятие к учету НМА',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			items:
			[
				'-',
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:387px;width:644px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражатьВ',
			text: 'Отражать в:',
			style: 'position:absolute;left:330px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:416px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:360px;width:80px;height:19px;text-align:left;',
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
					title:'Нематериальный актив',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСпособОтраженияРасходов',
			text: 'Способ отражения расходов по амортизации:',
			style: 'position:absolute;left:12px;top:124px;width:236px;height:19px;text-align:left;',
		},
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
		{
			xtype: 'label',
			name: 'ИнфоНадписьРасходыНаНИОКР',
			text: '',
			style: 'position:absolute;left:30px;top:148px;width:590px;height:56px;',
		},
					]
				},
				{
					title:'Бухгалтерский учет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСпособПоступления',
			text: 'Способ поступления в организацию:',
			style: 'position:absolute;left:14px;top:75px;width:196px;height:19px;text-align:left;',
		},
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
			xtype: 'checkbox',
			boxLabel: 'Начислять амортизацию',
			style: 'position:absolute;left:298px;top:27px;width:148px;height:19px;',
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
			xtype: 'label',
			name: 'НадписьСчетУчетаНУ',
			text: 'Счет налогового учета:',
			style: 'position:absolute;left:14px;top:27px;width:194px;height:19px;text-align:left;',
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
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Пропорционально объему продукции',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПредполагаемыйОбъемРаботБУ',
			text: 'Предполагаемый объем выработки:',
			style: 'position:absolute;left:6px;top:0px;width:188px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредполагаемыйОбъемПродукцииБУ',
			style: 'position:absolute;left:206px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Коэффициент:',
			style: 'position:absolute;left:8px;top:0px;width:187px;height:19px;',
		},
					]
				},
				{
					title:'Линейный',
				},
				{
					title:'Уменьшаемого остатка',
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
					title:'Налоговый учет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетУчета',
			text: 'Счет бухгалтерского учета:',
			style: 'position:absolute;left:14px;top:27px;width:196px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Начислять амортизацию',
			style: 'position:absolute;left:212px;top:125px;width:148px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНУ',
			style: 'position:absolute;left:212px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаБУВнеоборотногоАктива',
			text: 'Счет бухгалтерского учета:',
			style: 'position:absolute;left:12px;top:52px;width:236px;height:19px;text-align:left;',
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
			xtype: 'label',
			name: 'НадписьСтоимостьПР',
			text: 'Первоначальная стоимость (ПР):',
			style: 'position:absolute;left:14px;top:75px;width:170px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьПР',
			style: 'position:absolute;left:212px;top:75px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьВР',
			text: 'Первоначальная стоимость (ВР):',
			style: 'position:absolute;left:14px;top:99px;width:170px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьВР',
			style: 'position:absolute;left:212px;top:100px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНачислятьАмортизациюНУ',
			text: 'Начислять амортизацию:',
			style: 'position:absolute;left:14px;top:125px;width:170px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:145px;width:614px;height:99px;',
			height: 99,width: 614,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'НМА',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетНачисленияАмортизацииНУ',
			text: 'Счет начисления амортизации:',
			style: 'position:absolute;left:298px;top:25px;width:167px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетНачисленияАмортизацииНУ',
			style: 'position:absolute;left:471px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокПолезногоИспользованияНУ',
			text: 'Срок использования, мес.:',
			style: 'position:absolute;left:12px;top:25px;width:172px;height:19px;text-align:left;',
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
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСпособНачисленияАмортизацииНУ',
			text: 'Метод начисления амортизации (до 2009 г.):',
			style: 'position:absolute;left:6px;top:0px;width:227px;height:19px;text-align:left;',
		},
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
			xtype: 'label',
			name: 'НадписьСпециальныйКоэффициентНУ',
			text: 'Понижающий коэффициент:',
			style: 'position:absolute;left:12px;top:74px;width:172px;height:19px;text-align:left;',
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
			xtype: 'label',
			name: 'ИнфоНадписьРавномерноеСписание',
			text: '',
			style: 'position:absolute;left:24px;top:55px;width:584px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокСписания',
			text: 'Срок списания, мес.:',
			style: 'position:absolute;left:6px;top:25px;width:169px;height:19px;',
		},
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
					title:'Налоговый учет (УСН)',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСрокПолезногоИспользованияБУ',
			text: 'Срок полезного использования, мес.:',
			style: 'position:absolute;left:14px;top:123px;width:196px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПриобретения',
			text: 'Дата приобретения:',
			style: 'position:absolute;left:345px;top:27px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПриобретения',
			style: 'position:absolute;left:547px;top:27px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьУСН',
			text: 'Стоимость (сумма расходов УСН):',
			style: 'position:absolute;left:6px;top:27px;width:222px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьУСН',
			style: 'position:absolute;left:244px;top:27px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокПолезногоИспользованияУСН',
			text: 'Срок полезного использ. (УСН), мес.:',
			style: 'position:absolute;left:345px;top:51px;width:187px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокПолезногоИспользованияУСН',
			style: 'position:absolute;left:547px;top:51px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНачисленнойАмортизацииУСН',
			text: 'Сумма начисленной амортизации (УСН):',
			style: 'position:absolute;left:6px;top:51px;width:222px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНачисленнойАмортизацииУСН',
			style: 'position:absolute;left:244px;top:51px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокВключенияСтоимостиВСоставРасходовУСН',
			text: 'Порядок включения стоимости в состав расходов (УСН):',
			style: 'position:absolute;left:6px;top:75px;width:222px;height:31px;text-align:left;',
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
					text:'N',
					width:'28',
				},
				{
					text:'Дата оплаты',
					width:'100',
				},
				{
					text:'Сумма оплаты',
					width:'100',
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
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:330px;top:56px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:416px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:494px;top:33px;width:80px;height:19px;',
		},
	]
});