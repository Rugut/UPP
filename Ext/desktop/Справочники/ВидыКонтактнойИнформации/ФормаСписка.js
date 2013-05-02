Ext.define('Справочники.ВидыКонтактнойИнформации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:636px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Виды контактной информации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:620px;height:220px;',
			height: 220,width: 620,
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
					text:'Тип',
					width:'120',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Вид объекта контактной информации',
					width:'220',
					dataIndex:'ВидОбъектаКонтактнойИнформации',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВидыКонтактнойИнформации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Тип',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВидОбъектаКонтактнойИнформации',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:636px;height:25px;',
			items:
			[
			]
		},
	]
});