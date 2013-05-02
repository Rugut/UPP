Ext.define('Справочники.КлючевыеРесурсыПредприятия.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ключевые ресурсы предприятия',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:518px;height:280px;',
			height: 280,width: 518,
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
					text:'Базовая единица',
					width:'120',
					dataIndex:'БазоваяЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'База задания потребности',
					width:'140',
					dataIndex:'БазаЗаданияПотребности',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КлючевыеРесурсыПредприятия/ВыбратьПоСсылке/100'},
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
						name:'БазоваяЕдиницаИзмерения',
					},
					{
						name:'БазаЗаданияПотребности',
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
					width:'160',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КлючевыеРесурсыПредприятия/ВыбратьПоСсылке/100'},
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
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
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