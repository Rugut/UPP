Ext.define('Справочники.НастройкиАналитикиУчета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:506px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки аналитики учета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:490px;height:539px;',
			height: 539,width: 490,
			columns:
			[
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Упр. учет',
					width:'60',
					dataIndex:'УправленческийУчет',
					flex:1,
				},
				{
					text:'Регл. учет',
					width:'60',
					dataIndex:'РегламентированныйУчет',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиАналитикиУчета/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
					{
						name:'УправленческийУчет',
					},
					{
						name:'РегламентированныйУчет',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:506px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Заполнить по умолчанию',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});