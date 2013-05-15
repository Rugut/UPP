Ext.define('Справочники.ИнформационныеКарты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:680px;height:352px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Информационные карты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:513px;height:311px;',
			height: 311,width: 513,
			columns:
			[
				{
					text:'',
					width:'34',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'225',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Код карты',
					width:'147',
					dataIndex:'КодКарты',
					flex:1,
				},
				{
					text:'Владелец карты',
					width:'151',
					dataIndex:'ВладелецКарты',
					flex:1,
				},
				{
					text:'Вид дисконтной карты',
					width:'152',
					dataIndex:'ВидДисконтнойКарты',
					flex:1,
				},
				{
					text:'Вид карты',
					width:'120',
					dataIndex:'ВидКарты',
					flex:1,
				},
				{
					text:'Тип карты',
					width:'120',
					dataIndex:'ТипКарты',
					flex:1,
				},
				{
					text:'Тип штрих кода',
					width:'120',
					dataIndex:'ТипШтрихКода',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИнформационныеКарты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'КодКарты',
					},
					{
						name:'ВладелецКарты',
					},
					{
						name:'ВидДисконтнойКарты',
					},
					{
						name:'ВидКарты',
					},
					{
						name:'ТипКарты',
					},
					{
						name:'ТипШтрихКода',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:311px;',
			height: 311,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИнформационныеКарты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:680px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});