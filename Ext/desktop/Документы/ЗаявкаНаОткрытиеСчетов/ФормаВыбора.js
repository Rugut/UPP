Ext.define('Документы.ЗаявкаНаОткрытиеСчетов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявка на открытие счетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:704px;height:280px;',
			height: 280,width: 704,
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
					text:'Сотрудники',
					width:'100',
					dataIndex:'КраткийСоставДокумента',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'120',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Обработано в банке',
					width:'100',
					dataIndex:'ОбработаноВБанке',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'220',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Банковский счет',
					width:'120',
					dataIndex:'БанковскийСчет',
					flex:1,
				},
				{
					text:'Валюта',
					width:'80',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'№ договора',
					width:'80',
					dataIndex:'НомерДоговора',
					flex:1,
				},
				{
					text:'Текст подтверждения',
					width:'220',
					dataIndex:'ТекстПодтверждения',
					flex:1,
				},
				{
					text:'Вид вклада',
					width:'120',
					dataIndex:'ВидВклада',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЗаявкаНаОткрытиеСчетов/ВыбратьПоСсылке/100'},
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
						name:'Организация',
					},
					{
						name:'КраткийСоставДокумента',
					},
					{
						name:'Ответственный',
					},
					{
						name:'ОбработаноВБанке',
					},
					{
						name:'Комментарий',
					},
					{
						name:'БанковскийСчет',
					},
					{
						name:'Валюта',
					},
					{
						name:'НомерДоговора',
					},
					{
						name:'ТекстПодтверждения',
					},
					{
						name:'ВидВклада',
					},
				]
			},
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
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
				{
					text:'Лицевые счета сотрудников организации',
				},
				{
					text:'',
				},
					]
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
			]
		},
	]
});