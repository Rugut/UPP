Ext.define('Документы.КорректировкаСтоимостиСписанияТоваров.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:558px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировки стоимости списания товаров',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:542px;height:259px;',
			height: 259,width: 542,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'УУ',
					width:'21',
					dataIndex:'ОтражатьВУправленческомУчете',
					flex:1,
				},
				{
					text:'БУ',
					width:'21',
					dataIndex:'ОтражатьВБухгалтерскомУчете',
					flex:1,
				},
				{
					text:'НУ',
					width:'21',
					dataIndex:'ОтражатьВНалоговомУчете',
					flex:1,
				},
				{
					text:'МУ',
					width:'21',
					dataIndex:'ОтражатьВМеждународномУчете',
					flex:1,
				},
				{
					text:'Дата',
					width:'140',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'56',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'За период',
					width:'95',
					dataIndex:'ПериодРегистрации',
					flex:1,
				},
				{
					text:'Организация',
					width:'139',
					dataIndex:'Организация',
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
					width:'120',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КорректировкаСтоимостиСписанияТоваров/ВыбратьПоСсылке/100'},
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
						name:'ОтражатьВМеждународномУчете',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ПериодРегистрации',
					},
					{
						name:'Организация',
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
			style: 'position:absolute;left:0px;top:0px;width:558px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
	]
});