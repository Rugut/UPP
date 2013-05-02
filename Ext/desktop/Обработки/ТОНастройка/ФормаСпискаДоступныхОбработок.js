Ext.define('Обработки.ТОНастройка.ФормаСпискаДоступныхОбработок',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:957px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список доступных обработок обслуживания',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:236px;width:957px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Отменить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:941px;height:220px;',
			height: 220,width: 941,
			columns:
			[
				{
					text:'Наименование',
					width:'286',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'196',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Описание',
					width:'563',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Версия',
					width:'45',
					dataIndex:'Версия',
					flex:1,
				},
				{
					text:'Версия API',
					width:'83',
					dataIndex:'ВерсияAPI',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТОНастройка/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'Описание',
					},
					{
						name:'Версия',
					},
					{
						name:'ВерсияAPI',
					},
				]
			},
		},
	]
});