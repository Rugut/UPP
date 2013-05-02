Ext.define('Документы.ПоступлениеДенежныхДокументов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:670px;height:371px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Поступление денежных документов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:186px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:319px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:204px;top:33px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:319px;width:560px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомерВходящегоДокумента',
			text: 'Вх. номер:',
			style: 'position:absolute;left:346px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:107px;width:654px;height:159px;',
			height: 159,width: 654,
			items:
			[
				{
					title:'От кого',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:126px;',
			height: 126,width: 640,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'От контрагента',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовСКонтрагентом',
			text: 'Счет расчетов:',
			style: 'position:absolute;left:0px;top:80px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентом',
			style: 'position:absolute;left:82px;top:80px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:82px;top:54px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:82px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:0px;top:54px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПринятоОт',
			text: 'Принято от:',
			style: 'position:absolute;left:0px;top:26px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПринятоОт',
			style: 'position:absolute;left:82px;top:26px;width:558px;height:19px;',
		},
					]
				},
				{
					title:'Прочее',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаРасчетовСКонтрагентомПрочее',
			text: 'Счет кредита:',
			style: 'position:absolute;left:0px;top:28px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаРасчетовСКонтрагентомПрочее',
			style: 'position:absolute;left:83px;top:28px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт1',
			text: 'Субконто Кт1:',
			style: 'position:absolute;left:0px;top:53px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт1',
			style: 'position:absolute;left:83px;top:53px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт2',
			text: 'Субконто Кт2:',
			style: 'position:absolute;left:0px;top:78px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт2',
			style: 'position:absolute;left:83px;top:78px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт3',
			text: 'Субконто Кт3:',
			style: 'position:absolute;left:0px;top:103px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт3',
			style: 'position:absolute;left:83px;top:103px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПринятоОтПрочее',
			text: 'Принято от:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПринятоОтПрочее',
			style: 'position:absolute;left:82px;top:0px;width:558px;height:19px;',
		},
					]
				},
				{
					title:'От подотчетного лица',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодотчетноеЛицо',
			text: 'Подотчетное лицо:',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:28px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодотчетноеЛицо',
			style: 'position:absolute;left:82px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПринятоОтПодотчетноеЛицо',
			text: 'Принято от:',
			style: 'position:absolute;left:0px;top:29px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПринятоОтПодотчетноеЛицо',
			style: 'position:absolute;left:82px;top:29px;width:558px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетныйДокумент',
			text: 'Расчетный документ:',
			style: 'position:absolute;left:0px;top:58px;width:82px;height:28px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасчетныйДокумент',
			style: 'position:absolute;left:82px;top:58px;width:558px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Денежные документы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:640px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:640px;height:102px;',
			height: 102,width: 640,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Денежный документ',
					width:'180',
					dataIndex:'ДенежныйДокумент',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Сумма',
					width:'120',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоступлениеДенежныхДокументов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДенежныйДокумент',
					},
					{
						name:'Количество',
					},
					{
						name:'Сумма',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВходящегоДокумента',
			text: 'от:',
			style: 'position:absolute;left:537px;top:33px;width:35px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:295px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:102px;top:295px;width:560px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящегоДокумента',
			style: 'position:absolute;left:434px;top:33px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВходящегоДокумента',
			style: 'position:absolute;left:574px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВсего',
			text: 'Всего,USD:',
			style: 'position:absolute;left:470px;top:271px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:542px;top:271px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:346px;width:670px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаДенежныхДокументов',
			text: 'Счет учета:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаДенежныхДокументов',
			style: 'position:absolute;left:96px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумента',
			text: 'Валюта:',
			style: 'position:absolute;left:191px;top:81px;width:44px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:236px;top:81px;width:80px;height:19px;',
		},
	]
});