Ext.define('Обработки.КалендарьБухгалтера.ФормаНапоминания',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:476px;height:283px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Форма',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:258px;width:476px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:7px;width:460px;height:218px;',
			height: 218,width: 460,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Тип сообщения',
					width:'111',
					dataIndex:'ТипСообщения',
					flex:1,
				},
				{
					text:'Срок',
					width:'80',
					dataIndex:'ПоследняяДатаДействия',
					flex:1,
				},
				{
					text:'За период',
					width:'100',
					dataIndex:'ЗаПериод',
					flex:1,
				},
				{
					text:'Отчет/налог',
					width:'100',
					dataIndex:'НазваниеОтчетаИлиНалога',
					flex:1,
				},
				{
					text:'Периодичность',
					width:'100',
					dataIndex:'Периодичность',
					flex:1,
				},
				{
					text:'Организация',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КалендарьБухгалтера/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ТипСообщения',
					},
					{
						name:'ПоследняяДатаДействия',
					},
					{
						name:'ЗаПериод',
					},
					{
						name:'НазваниеОтчетаИлиНалога',
					},
					{
						name:'Периодичность',
					},
					{
						name:'Организация',
					},
				]
			},
		},
		{
			xtype: 'button',
			name: 'Открыть',
			text: 'Открыть',
			style: 'position:absolute;left:8px;top:230px;width:80px;height:20px;',
		},
		{
			xtype: 'button',
			name: 'Отменить',
			text: 'Отменить',
			style: 'position:absolute;left:94px;top:230px;width:80px;height:20px;',
		},
	]
});