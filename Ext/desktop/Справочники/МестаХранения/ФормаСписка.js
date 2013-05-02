Ext.define('Справочники.МестаХранения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:620px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Места хранения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:438px;height:279px;',
			height: 279,width: 438,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Владелец',
					width:'76',
					dataIndex:'Владелец',
					flex:1,
				},
				{
					text:'Код',
					width:'80',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'264',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МестаХранения/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Владелец',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать код',
				},
					]
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:279px;',
			height: 279,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МестаХранения/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
	]
});