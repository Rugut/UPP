Ext.define('Справочники.СпособыОтраженияРасходовПоАмортизации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:281px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Способы отражения расходов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:588px;height:240px;',
			height: 240,width: 588,
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
					width:'200',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Организация',
					width:'105',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Способ распределения затрат на выпуск',
					width:'219',
					dataIndex:'СпособРаспределенияЗатратНаВыпуск',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СпособыОтраженияРасходовПоАмортизации/ВыбратьПоСсылке/100'},
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
						name:'Организация',
					},
					{
						name:'СпособРаспределенияЗатратНаВыпуск',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
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