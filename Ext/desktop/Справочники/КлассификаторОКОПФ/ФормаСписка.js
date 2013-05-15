Ext.define('Справочники.КлассификаторОКОПФ.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:476px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Классификатор ОКОПФ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:460px;height:280px;',
			height: 280,width: 460,
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
					width:'80',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Наименование полное',
					width:'220',
					dataIndex:'НаименованиеПолное',
					flex:1,
				},
				{
					text:'Быстрый выбор',
					width:'100',
					dataIndex:'БыстрыйВыбор',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КлассификаторОКОПФ/ВыбратьПоСсылке/100'},
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
						name:'НаименованиеПолное',
					},
					{
						name:'БыстрыйВыбор',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:476px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'',
				},
			]
		},
	]
});