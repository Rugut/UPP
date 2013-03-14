Ext.define('Документы.АктСверкиВзаиморасчетов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:657px;height:441px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Акт сверки взаиморасчетов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:416px;width:657px;height:25px;',
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
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;',
		},
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
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:328px;top:82px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:82px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:413px;top:82px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:58px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:96px;top:106px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСделка',
			text: 'Сделка:
',
			style: 'position:absolute;left:8px;top:106px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаПериод',
			text: 'За период с ',
			style: 'position:absolute;left:328px;top:33px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:413px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по',
			style: 'position:absolute;left:513px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:13px;top:389px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:389px;width:553px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:530px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:132px;width:641px;height:250px;',
			height: 250,width: 641,
			items:
			[
				{
					title:'По данным организации',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:4px;top:0px;width:630px;height:24px;',
			items:
			[
				{
					text:'Заполнить по данным управленческого учета',
				},
				{
					text:'Заполнить по данным бухгалтерского учета',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:4px;top:24px;width:631px;height:176px;',
			height: 176,width: 631,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Дата',
					width:'100',
				},
				{
					text:'Договор контрагента',
					width:'100',
				},
				{
					text:'Сделка',
					width:'100',
				},
				{
					text:'Документ',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Дебет',
					width:'100',
				},
				{
					text:'Кредит',
					width:'100',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокНаНачало',
			style: 'position:absolute;left:146px;top:207px;width:77px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокНаКонец',
			style: 'position:absolute;left:280px;top:207px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Расхождение',
			style: 'position:absolute;left:569px;top:207px;width:66px;height:19px;',
		},
					]
				},
				{
					title:'По данным контрагента',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:4px;top:24px;width:631px;height:176px;',
			height: 176,width: 631,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Дата',
					width:'72',
				},
				{
					text:'Договор контрагента',
					width:'92',
				},
				{
					text:'Сделка',
					width:'21',
				},
				{
					text:'Документ',
					width:'101',
				},
				{
					text:'Представление',
					width:'252',
				},
				{
					text:'Дебет',
					width:'62',
				},
				{
					text:'Кредит',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:4px;top:0px;width:631px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокНаНачалоКонтрагент',
			style: 'position:absolute;left:148px;top:207px;width:77px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОстатокНаКонецКонтрагент',
			style: 'position:absolute;left:282px;top:207px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасхождениеКонтрагент',
			style: 'position:absolute;left:568px;top:207px;width:67px;height:19px;',
		},
					]
				},
				{
					title:'Счета учета расчетов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:627px;height:178px;',
			height: 178,width: 627,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Счет',
					width:'76',
				},
				{
					text:'Наименование',
					width:'297',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:627px;height:24px;',
			items:
			[
				'-',
			]
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
			style: 'position:absolute;left:97px;top:6px;width:215px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительОрганизаци',
			style: 'position:absolute;left:161px;top:53px;width:472px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставительКонтрагента',
			style: 'position:absolute;left:161px;top:77px;width:472px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОстатки',
			text: 'Остатки ():',
			style: 'position:absolute;left:4px;top:207px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОстаткиКонтрагент',
			text: 'Остатки ():',
			style: 'position:absolute;left:5px;top:207px;width:76px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:630px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:413px;top:58px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумента',
			text: 'Валюта сверки:',
			style: 'position:absolute;left:328px;top:58px;width:83px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сверка согласована',
			style: 'position:absolute;left:328px;top:106px;width:143px;height:19px;',
		},
	]
});