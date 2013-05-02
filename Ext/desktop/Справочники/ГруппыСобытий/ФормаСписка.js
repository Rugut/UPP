Ext.define('Справочники.ГруппыСобытий.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Группы событий',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:484px;height:259px;',
			height: 259,width: 484,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'175',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Вид объекта',
					width:'120',
					dataIndex:'ВидОбъекта',
					flex:1,
				},
				{
					text:'Описание события',
					width:'350',
					dataIndex:'ОписаниеСобытия',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГруппыСобытий/ВыбратьПоСсылке/100'},
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
						name:'ВидОбъекта',
					},
					{
						name:'ОписаниеСобытия',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
			]
		},
	]
});