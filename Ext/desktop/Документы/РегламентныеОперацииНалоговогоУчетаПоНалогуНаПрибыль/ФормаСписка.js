Ext.define('Документы.РегламентныеОперацииНалоговогоУчетаПоНалогуНаПрибыль.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Регламентные операции налогового учета (по налогу на прибыль)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'106',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Номер',
					width:'59',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'За период',
					width:'75',
					dataIndex:'ПериодРегистрации',
					flex:1,
				},
				{
					text:'Организация',
					width:'176',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Нормирование расходов на рекламу',
					width:'70',
					dataIndex:'НормированиеРасходовНаРекламу',
					flex:1,
				},
				{
					text:'Нормиров. расходов на добр. страх.',
					width:'70',
					dataIndex:'НормированиеРасходовНаДобровольноеСтрахование',
					flex:1,
				},
				{
					text:'Нормиров. представи- тельских расходов',
					width:'70',
					dataIndex:'НормированиеПредставительскихРасходов',
					flex:1,
				},
				{
					text:'Распред. расходов по видам деят.',
					width:'70',
					dataIndex:'РаспределениеРасходовПоВидамДеятельности',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РегламентныеОперацииНалоговогоУчетаПоНалогуНаПрибыль/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
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
						name:'НормированиеРасходовНаРекламу',
					},
					{
						name:'НормированиеРасходовНаДобровольноеСтрахование',
					},
					{
						name:'НормированиеПредставительскихРасходов',
					},
					{
						name:'РаспределениеРасходовПоВидамДеятельности',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
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
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Дт/кт',
				},
			]
		},
	]
});