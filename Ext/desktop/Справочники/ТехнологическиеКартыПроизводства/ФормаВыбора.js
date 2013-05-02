Ext.define('Справочники.ТехнологическиеКартыПроизводства.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:674px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Технологические карты производства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:492px;height:320px;',
			height: 320,width: 492,
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
					width:'40',
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
					text:'Состояние',
					width:'120',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Дата утверждения',
					width:'80',
					dataIndex:'ДатаУтверждения',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'180',
					dataIndex:'Подразделение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТехнологическиеКартыПроизводства/ВыбратьПоСсылке/100'},
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
						name:'Состояние',
					},
					{
						name:'ДатаУтверждения',
					},
					{
						name:'Подразделение',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:674px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТехнологическиеКартыПроизводства/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
	]
});