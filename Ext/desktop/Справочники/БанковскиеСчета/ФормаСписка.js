Ext.define('Справочники.БанковскиеСчета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Банковские счета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:592px;height:320px;',
			height: 320,width: 592,
			columns:
			[
				{
					text:' ',
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
					text:'Банк',
					width:'220',
					dataIndex:'Банк',
					flex:1,
				},
				{
					text:'Валюта счета',
					width:'80',
					dataIndex:'ВалютаДенежныхСредств',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/БанковскиеСчета/ВыбратьПоСсылке/100'},
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
						name:'Банк',
					},
					{
						name:'ВалютаДенежныхСредств',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});