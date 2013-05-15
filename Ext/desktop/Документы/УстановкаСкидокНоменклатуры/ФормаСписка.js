Ext.define('Документы.УстановкаСкидокНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:672px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установки скидок номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:656px;height:380px;',
			height: 380,width: 656,
			columns:
			[
				{
					text:' ',
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
					text:'Вид операции',
					width:'100',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Информация',
					width:'100',
					dataIndex:'ВидСкидки',
					flex:1,
				},
				{
					text:'Условие',
					width:'242',
					dataIndex:'Условие',
					flex:1,
				},
				{
					text:'Значение условия',
					width:'132',
					dataIndex:'ЗначениеУсловия',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'196',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаСкидокНоменклатуры/ВыбратьПоСсылке/100'},
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
						name:'ВидОперации',
					},
					{
						name:'ВидСкидки',
					},
					{
						name:'Условие',
					},
					{
						name:'ЗначениеУсловия',
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
			style: 'position:absolute;left:0px;top:0px;width:672px;height:25px;',
			items:
			[
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
				{
					text:'Печать по умолчанию',
				},
			]
		},
	],
	dockedItems:
	[
	]
});