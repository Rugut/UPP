Ext.define('Документы.ОперацияМеждународная.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Журнал операций (международный учет)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:764px;height:159px;',
			height: 159,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'132',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОперацияМеждународная/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Организация',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:222px;width:764px;height:240px;',
			height: 240,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Счет Дт',
					width:'80',
					dataIndex:'СчетДт',
					flex:1,
				},
				{
					text:'Субконто Дт',
					width:'120',
					dataIndex:'СубконтоДт1',
					flex:1,
				},
				{
					text:'',
					width:'80',
					dataIndex:'СубконтоДт2',
					flex:1,
				},
				{
					text:'',
					width:'80',
					dataIndex:'СубконтоДт3',
					flex:1,
				},
				{
					text:'Количество Дт',
					width:'8',
					dataIndex:'КоличествоДт',
					flex:1,
				},
				{
					text:'Валюта Дт',
					width:'54',
					dataIndex:'ВалютаДт',
					flex:1,
				},
				{
					text:'Вал. сумма Дт',
					width:'98',
					dataIndex:'ВалютнаяСуммаДт',
					flex:1,
				},
				{
					text:'Счет Кт',
					width:'110',
					dataIndex:'СчетКт',
					flex:1,
				},
				{
					text:'Субконто Кт',
					width:'110',
					dataIndex:'СубконтоКт1',
					flex:1,
				},
				{
					text:'',
					width:'115',
					dataIndex:'СубконтоКт2',
					flex:1,
				},
				{
					text:'',
					width:'115',
					dataIndex:'СубконтоКт3',
					flex:1,
				},
				{
					text:'Количество Кт',
					width:'95',
					dataIndex:'КоличествоКт',
					flex:1,
				},
				{
					text:'Валюта Кт',
					width:'52',
					dataIndex:'ВалютаКт',
					flex:1,
				},
				{
					text:'Вал. сумма Кт',
					width:'96',
					dataIndex:'ВалютнаяСуммаКт',
					flex:1,
				},
				{
					text:'Сумма',
					width:'66',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Содержание',
					width:'184',
					dataIndex:'Содержание',
					flex:1,
				},
				{
					text:'Номер журнала',
					width:'45',
					dataIndex:'НомерЖурнала',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОперацияМеждународная/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'СчетДт',
					},
					{
						name:'СубконтоДт1',
					},
					{
						name:'СубконтоДт2',
					},
					{
						name:'СубконтоДт3',
					},
					{
						name:'КоличествоДт',
					},
					{
						name:'ВалютаДт',
					},
					{
						name:'ВалютнаяСуммаДт',
					},
					{
						name:'СчетКт',
					},
					{
						name:'СубконтоКт1',
					},
					{
						name:'СубконтоКт2',
					},
					{
						name:'СубконтоКт3',
					},
					{
						name:'КоличествоКт',
					},
					{
						name:'ВалютаКт',
					},
					{
						name:'ВалютнаяСуммаКт',
					},
					{
						name:'Сумма',
					},
					{
						name:'Содержание',
					},
					{
						name:'НомерЖурнала',
					},
				]
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаОрганизация',
			style: 'position:absolute;left:102px;top:33px;width:220px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
			]
		},
	]
});