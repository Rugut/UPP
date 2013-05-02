Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.СообщениеОНесоответствиях',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:513px;height:547px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сообщение о несоответствиях',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:522px;width:513px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:497px;height:506px;',
			height: 506,width: 497,
			items:
			[
				{
					title:'Ошибки ФЛК',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:483px;height:474px;',
			height: 474,width: 483,
			columns:
			[
				{
					text:'Код ошибки',
					width:'89',
					dataIndex:'КодОшибки',
					flex:1,
				},
				{
					text:'Описание',
					width:'111',
					dataIndex:'Описание',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'КодОшибки',
					},
					{
						name:'Описание',
					},
				]
			},
		},
					]
				},
				{
					title:'Ошибки идентификации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:483px;height:474px;',
			height: 474,width: 483,
			columns:
			[
				{
					text:'ИНН продавца',
					width:'89',
					dataIndex:'ИНН',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'111',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ИНН',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
					]
				},
				{
					title:'Общие сведения',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Рег. номер заявления в НО:',
			style: 'position:absolute;left:6px;top:60px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегНомДок',
			style: 'position:absolute;left:191px;top:60px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Дата регистрации в НО в электронном виде:',
			style: 'position:absolute;left:6px;top:85px;width:181px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРегЭл',
			style: 'position:absolute;left:191px;top:90px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Дата регистрации в НО на бумажном носителе:',
			style: 'position:absolute;left:6px;top:120px;width:181px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРегБум',
			style: 'position:absolute;left:191px;top:125px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Номер заявления:',
			style: 'position:absolute;left:6px;top:10px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокНП',
			style: 'position:absolute;left:191px;top:10px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Код страны продавца:',
			style: 'position:absolute;left:6px;top:155px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодСтранПрод1',
			style: 'position:absolute;left:191px;top:155px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Дата заявления:',
			style: 'position:absolute;left:6px;top:35px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДокНП',
			style: 'position:absolute;left:191px;top:35px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Имя файла протокола ФЛК:',
			style: 'position:absolute;left:6px;top:180px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФЛК',
			style: 'position:absolute;left:191px;top:180px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Дата протокола ФЛК:',
			style: 'position:absolute;left:6px;top:205px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаФЛК',
			style: 'position:absolute;left:191px;top:205px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Дата ошибок идентификации:',
			style: 'position:absolute;left:6px;top:230px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИД',
			style: 'position:absolute;left:191px;top:230px;width:298px;height:19px;',
		},
					]
				},
			]
		},
	]
});