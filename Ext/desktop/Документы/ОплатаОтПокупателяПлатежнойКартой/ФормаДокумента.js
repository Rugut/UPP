Ext.define('Документы.ОплатаОтПокупателяПлатежнойКартой.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:658px;height:460px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Оплата от покупателя платежной картой',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:14px;top:408px;width:80px;height:19px;text-align:left;',
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
			name: 'Комментарий',
			style: 'position:absolute;left:100px;top:408px;width:550px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:14px;top:384px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:100px;top:384px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:328px;top:384px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:412px;top:384px;width:238px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:435px;width:658px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'Оплатить картой',
				},
				'-',
				{
					text:'Чек',
				},
				'-',
				{
					text:'ОК',
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
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:412px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:490px;top:33px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Отразить в:',
			style: 'position:absolute;left:330px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:568px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:642px;height:276px;',
			height: 276,width: 642,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:31px;width:628px;height:220px;',
			height: 220,width: 628,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ПКО',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:0px;top:0px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:82px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:23px;width:628px;height:197px;',
			height: 197,width: 628,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'ПлатежПоНесколькимСделкам',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСуммаВзаиморасчетов',
			text: 'Сумма:',
			style: 'position:absolute;left:322px;top:48px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Заказ покупателя:
',
			style: 'position:absolute;left:322px;top:0px;width:86px;height:27px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:628px;height:152px;',
			height: 152,width: 628,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Договор контрагента',
					width:'110',
				},
				{
					text:'Сделка',
					width:'100',
				},
				{
					text:'Документ расчетов с контрагентом',
					width:'100',
				},
				{
					text:'Сумма взаиморасчетов',
					width:'100',
				},
				{
					text:'Курс взаиморасчетов',
					width:'100',
				},
				{
					text:'Сумма платежа',
					width:'90',
				},
				{
					text:'% НДС',
					width:'41',
				},
				{
					text:'Сумма НДС',
					width:'100',
				},
				{
					text:'Счет учета расчетов с контрагентом',
					width:'100',
				},
				{
					text:'Счет учета расчетов по авансам',
					width:'100',
				},
				{
					text:'Проект',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:21px;width:308px;height:24px;',
			items:
			[
				{
					text:'По задолженностям',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтогоСписок',
			text: 'Итого платежей по списку:',
			style: 'position:absolute;left:314px;top:21px;width:307px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетРасчетов',
			text: 'Счет расчетов:',
			style: 'position:absolute;left:322px;top:72px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетАвансов',
			text: 'Счет авансов:',
			style: 'position:absolute;left:322px;top:96px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументРасчетовСКонтрагентом',
			text: 'Док. расчетов:',
			style: 'position:absolute;left:322px;top:28px;width:80px;height:15px;',
		},
					]
				},
				{
					title:'ПлатежПоОднойСделке',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:82px;top:0px;width:167px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:408px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокументаРасчеты',
			style: 'position:absolute;left:408px;top:48px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетов',
			style: 'position:absolute;left:82px;top:24px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:82px;top:48px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаНДС',
			style: 'position:absolute;left:82px;top:72px;width:90px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПодбор',
			text: 'Подбор',
			style: 'position:absolute;left:254px;top:0px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:82px;top:96px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Проект:',
			style: 'position:absolute;left:0px;top:96px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетов',
			text: 'USD',
			style: 'position:absolute;left:512px;top:48px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:408px;top:72px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовПоАвансам',
			style: 'position:absolute;left:408px;top:96px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументРасчетовСКонтрагентом',
			style: 'position:absolute;left:408px;top:24px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'radio',
			boxLabel: 'Без разбиения',
			style: 'position:absolute;left:408px;top:0px;width:100px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Списком',
			style: 'position:absolute;left:518px;top:0px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРедактировать',
			text: 'Редактировать:',
			style: 'position:absolute;left:322px;top:0px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДокумента',
			style: 'position:absolute;left:88px;top:6px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаДокумент',
			text: 'Сумма:',
			style: 'position:absolute;left:6px;top:6px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумент',
			text: 'USD',
			style: 'position:absolute;left:185px;top:6px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Эквайрер',
			text: 'Эквайрер',
			style: 'position:absolute;left:121px;top:29px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорВзаиморасчетовЭквайрера',
			text: 'Договор взаиморасчетов:',
			style: 'position:absolute;left:286px;top:29px;width:134px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Эквайринг',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДоговорЭквайринга',
			text: 'Договор эквайринга:',
			style: 'position:absolute;left:6px;top:6px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорЭквайринга',
			style: 'position:absolute;left:120px;top:6px;width:514px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовСЭквайрером',
			text: 'Счет расчетов:',
			style: 'position:absolute;left:6px;top:105px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСЭквайером',
			style: 'position:absolute;left:120px;top:105px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЭквайрер',
			text: 'Эквайрер:',
			style: 'position:absolute;left:6px;top:29px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ДоговорЭквайрера',
			text: 'Договор эквайрера',
			style: 'position:absolute;left:425px;top:29px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентТорговойУступки',
			text: '% торговой уступки:',
			style: 'position:absolute;left:6px;top:75px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентТорговойУступки',
			style: 'position:absolute;left:120px;top:75px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаТорговойУступки',
			style: 'position:absolute;left:425px;top:75px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидОплаты',
			text: 'Вид оплаты:',
			style: 'position:absolute;left:6px;top:52px;width:110px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОплаты',
			style: 'position:absolute;left:120px;top:52px;width:514px;height:19px;',
		},
					]
				},
			]
		},
	]
});