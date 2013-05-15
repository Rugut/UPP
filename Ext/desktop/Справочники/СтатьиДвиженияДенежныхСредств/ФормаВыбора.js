Ext.define('Справочники.СтатьиДвиженияДенежныхСредств.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:625px;height:323px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статьи движения денежных средств',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:164px;top:33px;width:453px;height:282px;',
			height: 282,width: 453,
			columns:
			[
				{
					text:'',
					width:'32',
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
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Вид движения денежных средств',
					width:'120',
					dataIndex:'ВидДвиженияДенежныхСредств',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СтатьиДвиженияДенежныхСредств/ВыбратьПоСсылке/100'},
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
						name:'ВидДвиженияДенежныхСредств',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:150px;height:280px;',
			height: 280,width: 150,
			columns:
			[
				{
					text:'Наименование',
					width:'220',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СтатьиДвиженияДенежныхСредств/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:0px;top:0px;width:625px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});