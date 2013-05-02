Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительная информация',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:592px;height:220px;',
			height: 220,width: 592,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Вид данных',
					width:'120',
					dataIndex:'ВидДанных',
					flex:1,
				},
				{
					text:'Имя файла',
					width:'220',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Описание',
					width:'220',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ХранилищеДополнительнойИнформации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ВидДанных',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
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