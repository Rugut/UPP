Ext.define('Справочники.ГруппыДоступаФизическихЛиц.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:614px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы доступа физических лиц',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:447px;height:259px;',
			height: 259,width: 447,
			columns:
			[
				{
					text:'',
					width:'33',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'42',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'340',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГруппыДоступаФизическихЛиц/ВыбратьПоСсылке/100'},
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
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:259px;',
			height: 259,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГруппыДоступаФизическихЛиц/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:614px;height:25px;',
			items:
			[
				{
					text:'Доступ к текущему элементу',
				},
				{
					text:'Доступ к справочнику в целом',
				},
			]
		},
	]
});