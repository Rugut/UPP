Ext.define('Справочники.КонтактныеЛица.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:464px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Контактные лица',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:448px;height:280px;',
			height: 280,width: 448,
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
					text:'ФИО',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Дата рождения',
					width:'84',
					dataIndex:'ДатаРождения',
					flex:1,
				},
				{
					text:'Имя',
					width:'120',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Количество дней до напоминания',
					width:'14',
					dataIndex:'КоличествоДнейДоНапоминания',
					flex:1,
				},
				{
					text:'Напоминать о дне рождения',
					width:'20',
					dataIndex:'НапоминатьОДнеРождения',
					flex:1,
				},
				{
					text:'Описание',
					width:'120',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Отчество',
					width:'120',
					dataIndex:'Отчество',
					flex:1,
				},
				{
					text:'Пол',
					width:'80',
					dataIndex:'Пол',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'120',
					dataIndex:'Фамилия',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтактныеЛица/ВыбратьПоСсылке/100'},
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
						name:'ДатаРождения',
					},
					{
						name:'Имя',
					},
					{
						name:'КоличествоДнейДоНапоминания',
					},
					{
						name:'НапоминатьОДнеРождения',
					},
					{
						name:'Описание',
					},
					{
						name:'Отчество',
					},
					{
						name:'Пол',
					},
					{
						name:'Фамилия',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:464px;height:25px;',
			dock: 'top',
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