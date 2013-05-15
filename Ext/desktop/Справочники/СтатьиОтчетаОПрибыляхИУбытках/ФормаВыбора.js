Ext.define('Справочники.СтатьиОтчетаОПрибыляхИУбытках.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статьи отчета о прибылях и убытках',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:400px;height:280px;',
			height: 280,width: 400,
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
					width:'48',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'320',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СтатьиОтчетаОПрибыляхИУбытках/ВыбратьПоСсылке/100'},
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
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});