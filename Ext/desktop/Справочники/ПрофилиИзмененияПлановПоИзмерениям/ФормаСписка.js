Ext.define('Справочники.ПрофилиИзмененияПлановПоИзмерениям.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:629px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Профили изменения планов по измерениям',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:447px;height:280px;',
			height: 280,width: 447,
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
					width:'80',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'161',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Измерение',
					width:'100',
					dataIndex:'ИзмерениеБюджетирования',
					flex:1,
				},
				{
					text:'Источник данных',
					width:'205',
					dataIndex:'ИсточникДанных',
					flex:1,
				},
				{
					text:'Показатель источника',
					width:'124',
					dataIndex:'ПоказательИсточника',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрофилиИзмененияПлановПоИзмерениям/ВыбратьПоСсылке/100'},
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
						name:'ИзмерениеБюджетирования',
					},
					{
						name:'ИсточникДанных',
					},
					{
						name:'ПоказательИсточника',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'120',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрофилиИзмененияПлановПоИзмерениям/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:0px;top:0px;width:629px;height:25px;',
			items:
			[
			]
		},
	]
});