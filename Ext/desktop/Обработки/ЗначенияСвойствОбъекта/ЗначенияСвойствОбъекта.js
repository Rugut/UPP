Ext.define('Обработки.ЗначенияСвойствОбъекта.ЗначенияСвойствОбъекта',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:476px;height:346px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Свойства',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:476px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:460px;height:280px;',
			height: 280,width: 460,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Свойство',
					width:'220',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'220',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗначенияСвойствОбъекта/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Свойство',
					},
					{
						name:'Значение',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:321px;width:476px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});