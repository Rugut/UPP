Ext.define('Справочники.ГруппыПочтовойРассылки.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:406px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы почтовой рассылки',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:288px;top:33px;width:31px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:324px;top:33px;width:74px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:189px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:406px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:412px;width:406px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:57px;width:304px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:390px;height:320px;',
			height: 320,width: 390,
			items:
			[
				{
					title:'Состав группы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:376px;height:270px;',
			height: 270,width: 376,
			columns:
			[
				{
					text:'Объект',
					width:'250',
					dataIndex:'Объект',
					flex:1,
				},
				{
					text:'Владелец',
					width:'116',
					dataIndex:'Владелец',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГруппыПочтовойРассылки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Объект',
					},
					{
						name:'Владелец',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:376px;height:24px;',
			items:
			[
				'-',
				{
					text:'Очистить',
				},
				'-',
				{
					text:'',
				},
				'-',
			]
		},
					]
				},
				{
					title:'Использование в учетных записях',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:376px;height:270px;',
			height: 270,width: 376,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'331',
					dataIndex:'УчетнаяЗапись',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГруппыПочтовойРассылки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'УчетнаяЗапись',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:376px;height:24px;',
			items:
			[
				{
					text:'Изменить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
					]
				},
			]
		},
	]
});