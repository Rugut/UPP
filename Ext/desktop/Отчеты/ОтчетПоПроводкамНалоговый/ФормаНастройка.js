Ext.define('Отчеты.ОтчетПоПроводкамНалоговый.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:460px;height:324px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка: Отчет по проводкам',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:444px;height:283px;',
			height: 283,width: 444,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНач',
			style: 'position:absolute;left:100px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКон',
			style: 'position:absolute;left:204px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:184px;top:6px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:288px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:32px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:100px;top:32px;width:248px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:120px;width:126px;height:135px;',
			height: 135,width: 126,
			columns:
			[
				{
					text:'Дебет',
					width:'45',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Кредит',
					width:'47',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Субконто',
					width:'240',
					dataIndex:'Субконто',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетПоПроводкамНалоговый/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'СчетДт',
					},
					{
						name:'СчетКт',
					},
					{
						name:'Субконто',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:140px;top:120px;width:296px;height:135px;',
			height: 135,width: 296,
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
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтчетПоПроводкамНалоговый/ВыбратьПоСсылке/100'},
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
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерЖурнала',
			style: 'position:absolute;left:116px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номер журнала:',
			style: 'position:absolute;left:6px;top:6px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Подстрока',
			style: 'position:absolute;left:72px;top:99px;width:364px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В субконто',
			style: 'position:absolute;left:72px;top:146px;width:128px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В содержании',
			style: 'position:absolute;left:72px;top:123px;width:128px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Без учета регистра',
			style: 'position:absolute;left:228px;top:123px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Подстрока:',
			style: 'position:absolute;left:6px;top:99px;width:62px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Документ:',
			style: 'position:absolute;left:6px;top:33px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Регистратор',
			style: 'position:absolute;left:116px;top:33px;width:320px;height:19px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:299px;width:460px;height:25px;',
			dock: 'bottom',
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
	]
});