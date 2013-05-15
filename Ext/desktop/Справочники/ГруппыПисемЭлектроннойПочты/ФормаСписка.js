Ext.define('Справочники.ГруппыПисемЭлектроннойПочты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:482px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Группы писем электронной почты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:57px;width:300px;height:296px;',
			height: 296,width: 300,
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
					text:'Порядок',
					width:'120',
					dataIndex:'Порядок',
					flex:1,
				},
				{
					text:'Использовать предметы писем',
					width:'120',
					dataIndex:'ИспользоватьПредметыПисем',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГруппыПисемЭлектроннойПочты/ВыбратьПоСсылке/100'},
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
						name:'Порядок',
					},
					{
						name:'ИспользоватьПредметыПисем',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:160px;height:296px;',
			height: 296,width: 160,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГруппыПисемЭлектроннойПочты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УчетнаяЗапись',
			style: 'position:absolute;left:100px;top:33px;width:374px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Учетная запись:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:482px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});