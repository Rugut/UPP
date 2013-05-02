Ext.define('Отчеты.ОборотыСчетаМеждународный.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:285px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:260px;width:490px;height:25px;',
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
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:236px;',
			height: 236,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчет',
			text: 'Счет:',
			style: 'position:absolute;left:6px;top:6px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Счет',
			style: 'position:absolute;left:84px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По субсчетам',
			style: 'position:absolute;left:268px;top:174px;width:96px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:184px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:30px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:266px;top:30px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:54px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:54px;width:382px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по валютам',
			style: 'position:absolute;left:268px;top:134px;width:142px;height:15px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:84px;top:78px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Период:',
			style: 'position:absolute;left:6px;top:78px;width:76px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дебет',
			style: 'position:absolute;left:128px;top:134px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Кредит',
			style: 'position:absolute;left:194px;top:134px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дебет',
			style: 'position:absolute;left:128px;top:154px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Кредит',
			style: 'position:absolute;left:194px;top:154px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дебет',
			style: 'position:absolute;left:128px;top:174px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Кредит',
			style: 'position:absolute;left:194px;top:174px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Дебет',
			style: 'position:absolute;left:128px;top:194px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Кредит',
			style: 'position:absolute;left:194px;top:194px;width:60px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Все периоды',
			style: 'position:absolute;left:270px;top:78px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сальдо на начало:',
			style: 'position:absolute;left:14px;top:134px;width:112px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Сальдо на конец:',
			style: 'position:absolute;left:14px;top:154px;width:112px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Обороты за период:',
			style: 'position:absolute;left:14px;top:174px;width:112px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Обороты со счетами:',
			style: 'position:absolute;left:14px;top:194px;width:112px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Данные по количеству',
			style: 'position:absolute;left:268px;top:154px;width:142px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По субсчетам кор. счетов',
			style: 'position:absolute;left:268px;top:194px;width:151px;height:15px;',
		},
					]
				},
				{
					title:'Детализация счета',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:48px;width:460px;height:162px;',
			height: 162,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'294',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'Тип',
					width:'142',
					dataIndex:'Тип',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОборотыСчетаМеждународный/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Поле',
					},
					{
						name:'Тип',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'По субконто:',
			style: 'position:absolute;left:6px;top:6px;width:102px;height:16px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:28px;width:460px;height:182px;',
			height: 182,width: 460,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'120',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'80',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'240',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'120',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'120',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОборотыСчетаМеждународный/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:4px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
	]
});