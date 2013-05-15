Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаСпискаДопСтраниц',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:367px;height:262px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выберите страницу',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:351px;height:197px;',
			height: 197,width: 351,
			columns:
			[
				{
					text:'Представления страниц',
					width:'338',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Автоматически',
					width:'100',
					dataIndex:'АвтоматическоеПредставление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОбщиеОбъектыРегламентированнойОтчетности/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Представление',
					},
					{
						name:'АвтоматическоеПредставление',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:237px;width:367px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:367px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Редактировать',
				},
				{
					text:'Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
	]
});