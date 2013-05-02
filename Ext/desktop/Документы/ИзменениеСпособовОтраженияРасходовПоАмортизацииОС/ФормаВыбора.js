Ext.define('Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииОС.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:680px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменение способа отражения расходов по амортизации ОС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:664px;height:380px;',
			height: 380,width: 664,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'УУ',
					width:'20',
					dataIndex:'ОтражатьВУправленческомУчете',
					flex:1,
				},
				{
					text:'БУ',
					width:'20',
					dataIndex:'ОтражатьВБухгалтерскомУчете',
					flex:1,
				},
				{
					text:'НУ',
					width:'20',
					dataIndex:'ОтражатьВНалоговомУчете',
					flex:1,
				},
				{
					text:'Дата',
					width:'132',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Способ отражения расходов по амортизации',
					width:'120',
					dataIndex:'СпособОтраженияРасходовПоАмортизации',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИзменениеСпособовОтраженияРасходовПоАмортизацииОС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'ОтражатьВУправленческомУчете',
					},
					{
						name:'ОтражатьВБухгалтерскомУчете',
					},
					{
						name:'ОтражатьВНалоговомУчете',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'Организация',
					},
					{
						name:'СпособОтраженияРасходовПоАмортизации',
					},
					{
						name:'Ответственный',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:680px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Выбрать',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
			]
		},
	]
});