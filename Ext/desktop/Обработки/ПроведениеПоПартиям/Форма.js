Ext.define('Обработки.ПроведениеПоПартиям.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:377px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Проведение по партиям',
	
	items:
	[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 103,
			height: 19,
			style: 'position:absolute;left:207px;top:33px;width:103px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:352px;width:400px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: ' Провести по партиям по дату:',
			style: 'position:absolute;left:8px;top:33px;width:195px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:8px;top:75px;width:138px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:8px;top:94px;width:195px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формировать проводки',
			style: 'position:absolute;left:248px;top:94px;width:144px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:160px;width:384px;height:184px;',
			height: 184,width: 384,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Организация',
					width:'173',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Головная организация',
					width:'100',
					dataIndex:'ГоловнаяОрганизация',
					flex:1,
				},
				{
					text:'Дата начала проведения',
					width:'92',
					dataIndex:'КолонкаЗаголовок',
					flex:1,
				},
				{
					text:'Упр. учет',
					width:'80',
					dataIndex:'УУ',
					flex:1,
				},
				{
					text:'Бух. и нал. учет',
					width:'80',
					dataIndex:'БУ',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПроведениеПоПартиям/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'Организация',
					},
					{
						name:'ГоловнаяОрганизация',
					},
					{
						name:'КолонкаЗаголовок',
					},
					{
						name:'УУ',
					},
					{
						name:'БУ',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: ' По видам учета:',
			style: 'position:absolute;left:8px;top:57px;width:384px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: ' По организациям:',
			style: 'position:absolute;left:8px;top:117px;width:384px;height:16px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Настройка обработки',
				},
				'-',
				{
					text:'Установка границы последовательности',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:136px;width:384px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Подробно',
				},
			]
		},
	]
});