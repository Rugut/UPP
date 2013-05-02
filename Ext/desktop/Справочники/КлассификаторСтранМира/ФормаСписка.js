Ext.define('Справочники.КлассификаторСтранМира.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:479px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Классификатор стран мира',
	
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
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Полное наименование',
					width:'220',
					dataIndex:'НаименованиеПолное',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КлассификаторСтранМира/ВыбратьПоСсылке/100'},
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
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:479px;height:25px;',
			items:
			[
				'-',
				{
					text:'Подбор из ОКСМ',
				},
			]
		},
	]
});