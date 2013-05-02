Ext.define('Обработки.АдминистрированиеПользователей.ФормаГруппыДоступа',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:627px;height:332px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы доступа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:627px;height:25px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:611px;height:291px;',
			height: 291,width: 611,
			items:
			[
				{
					title:'Группы доступа к контрагентам',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:597px;height:259px;',
			height: 259,width: 597,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Группы доступа контрагентов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:150px;top:0px;width:447px;height:259px;',
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
					text:'Наименование',
					width:'228',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдминистрированиеПользователей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:144px;height:259px;',
			height: 259,width: 144,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдминистрированиеПользователей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
					]
				},
				{
					title:'Настройка недоступна',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтраницы',
			text: 'Настройка групп доступа к контрагентам недоступна, 
т.к. вид объекта доступа "Контрагенты" не используется.',
			style: 'position:absolute;left:0px;top:3px;width:381px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Настройка используемых видов объектов доступа выполняется в форме "Настройка параметров ограничения доступа".',
			style: 'position:absolute;left:0px;top:39px;width:381px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОткрытьФормуНастройки1',
			text: 'Открыть форму настройки параметров ограничения доступа',
			style: 'position:absolute;left:0px;top:75px;width:381px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Группы доступа физических лиц',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:603px;height:259px;',
			height: 259,width: 603,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Группы доступа физических лиц',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:150px;top:0px;width:447px;height:259px;',
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
					text:'Наименование',
					width:'237',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдминистрированиеПользователей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:144px;height:259px;',
			height: 259,width: 144,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдминистрированиеПользователей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
					]
				},
				{
					title:'Настройка недоступна',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтраницы1',
			text: 'Настройка групп доступа к физическим лицам недоступна, 
т.к. вид объекта доступа "Физические лица"  не используется.',
			style: 'position:absolute;left:0px;top:3px;width:384px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Настройка используемых видов объектов доступа выполняется в форме "Настройка параметров ограничения доступа".',
			style: 'position:absolute;left:0px;top:39px;width:384px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОткрытьФормуНастройки2',
			text: 'Открыть форму настройки параметров ограничения доступа',
			style: 'position:absolute;left:0px;top:75px;width:384px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Группы заявок кандидатов',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:6px;width:603px;height:261px;',
			height: 261,width: 603,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Группы заявок кандидатов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:156px;top:0px;width:447px;height:258px;',
			height: 258,width: 447,
			columns:
			[
				{
					text:'',
					width:'33',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Наименование',
					width:'227',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдминистрированиеПользователей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:0px;width:144px;height:258px;',
			height: 258,width: 144,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/АдминистрированиеПользователей/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
				]
			},
		},
					]
				},
				{
					title:'Настройка недоступна',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтраницы2',
			text: 'Настройка групп доступа к заявкам кандидатов недоступна, 
т.к. вид объекта доступа "Заявки кандидатов" не используется.',
			style: 'position:absolute;left:6px;top:3px;width:399px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Настройка используемых видов объектов доступа выполняется в форме "Настройка параметров ограничения доступа".',
			style: 'position:absolute;left:6px;top:39px;width:381px;height:33px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОткрытьФормуНастройки3',
			text: 'Открыть форму настройки параметров ограничения доступа',
			style: 'position:absolute;left:6px;top:75px;width:381px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
	]
});