Ext.define('Справочники.СценарииПланирования.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:775px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сценарии планирования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:593px;height:320px;',
			height: 320,width: 593,
			columns:
			[
				{
					text:'',
					width:'35',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'81',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'180',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Периодичность',
					width:'120',
					dataIndex:'Периодичность',
					flex:1,
				},
				{
					text:'Объект планирования',
					width:'120',
					dataIndex:'ОбъектПланирования',
					flex:1,
				},
				{
					text:'Суммы',
					width:'80',
					dataIndex:'УчетПоСуммам',
					flex:1,
				},
				{
					text:'Количество',
					width:'80',
					dataIndex:'УчетПоКоличеству',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СценарииПланирования/ВыбратьПоСсылке/100'},
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
						name:'Периодичность',
					},
					{
						name:'ОбъектПланирования',
					},
					{
						name:'УчетПоСуммам',
					},
					{
						name:'УчетПоКоличеству',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СценарииПланирования/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:0px;top:0px;width:775px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});