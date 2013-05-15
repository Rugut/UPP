Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ФайлыСведенийСпецоператоры_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:741px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список Кэш файлов Спецоператоров',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:725px;height:259px;',
			height: 259,width: 725,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'350',
					dataIndex:'УчетнаяЗапись',
					flex:1,
				},
				{
					text:'Данные',
					width:'100',
					dataIndex:'Данные',
					flex:1,
				},
				{
					text:'Дата обновления файла на сервере',
					width:'140',
					dataIndex:'ДатаФайла',
					flex:1,
				},
				{
					text:'Размер (в байтах)',
					width:'70',
					dataIndex:'Размер',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'УчетнаяЗапись',
					},
					{
						name:'Данные',
					},
					{
						name:'ДатаФайла',
					},
					{
						name:'Размер',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:741px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Очистить кэш',
				},
			]
		},
	]
});