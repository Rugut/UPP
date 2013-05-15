Ext.define('Справочники.СтрокиФинансовогоРасчета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:616px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Строки финансового расчета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:600px;height:320px;',
			height: 320,width: 600,
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
					width:'81',
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
					text:'Вид строки',
					width:'120',
					dataIndex:'ВидСтроки',
					flex:1,
				},
				{
					text:'Измерение',
					width:'120',
					dataIndex:'Измерение',
					flex:1,
				},
				{
					text:'Формула',
					width:'220',
					dataIndex:'Формула',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СтрокиФинансовогоРасчета/ВыбратьПоСсылке/100'},
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
						name:'ВидСтроки',
					},
					{
						name:'Измерение',
					},
					{
						name:'Формула',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:616px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Переместить вверх',
				},
				{
					text:'Переместить вниз',
				},
			]
		},
	]
});