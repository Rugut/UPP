Ext.define('Документы.РеестрСчетов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:367px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Реестр счетов',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:32px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от',
			style: 'position:absolute;left:180px;top:32px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Расчетный счет:',
			style: 'position:absolute;left:336px;top:56px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетОрганизации',
			style: 'position:absolute;left:424px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:80px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Расчетный счет:',
			style: 'position:absolute;left:336px;top:80px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетКонтрагента',
			style: 'position:absolute;left:424px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Аккредитив №',
			style: 'position:absolute;left:8px;top:104px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерАккредитива',
			style: 'position:absolute;left:96px;top:104px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'от',
			style: 'position:absolute;left:180px;top:104px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаАккредитива',
			style: 'position:absolute;left:196px;top:104px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Сумма:',
			style: 'position:absolute;left:336px;top:104px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаАккредитива',
			style: 'position:absolute;left:424px;top:104px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Закрытие:',
			style: 'position:absolute;left:508px;top:104px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЗакрытия',
			style: 'position:absolute;left:564px;top:104px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:152px;width:636px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:176px;width:636px;height:108px;',
			height: 108,width: 636,
			columns:
			[
				{
					text:'N',
					width:'30',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата отгрузки',
					width:'80',
					dataIndex:'ДатаОтгрузки',
					flex:1,
				},
				{
					text:'Вид транспорта',
					width:'200',
					dataIndex:'ВидТранспорта',
					flex:1,
				},
				{
					text:'№ приемо-сдат. документов',
					width:'184',
					dataIndex:'НомерДокумента',
					flex:1,
				},
				{
					text:'Сумма',
					width:'77',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РеестрСчетов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДатаОтгрузки',
					},
					{
						name:'ВидТранспорта',
					},
					{
						name:'НомерДокумента',
					},
					{
						name:'Сумма',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:316px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:316px;width:548px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Ответственный:',
			style: 'position:absolute;left:10px;top:292px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:292px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:342px;width:652px;height:25px;',
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
			name: 'Надпись13',
			text: 'Исполняющий банк:',
			style: 'position:absolute;left:8px;top:128px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсполняющийБанк',
			style: 'position:absolute;left:119px;top:128px;width:197px;height:19px;',
		},
	]
});