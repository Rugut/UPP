Ext.define('Справочники.ВнешниеОбработки.ФормаВыбораТЧПринадлежности',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:335px;height:245px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Табличная часть',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:319px;height:204px;',
			height: 204,width: 319,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВнешниеОбработки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:220px;width:335px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
			]
		},
	]
});