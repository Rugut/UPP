Ext.define('Справочники.ВидыАлкогольнойПродукции.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:350px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Виды алкогольной продукции',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:634px;height:309px;',
			height: 309,width: 634,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'63',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Код вида продукции',
					width:'70',
					dataIndex:'КодВидаПродукции',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВидыАлкогольнойПродукции/ВыбратьПоСсылке/100'},
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
						name:'КодВидаПродукции',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
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