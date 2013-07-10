Ext.define('Документы.СчетФактураПолученный.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:746px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Счета-фактуры полученные',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДокументСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:730px;height:380px;',
			height: 380,width: 730,
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
					width:'1200',
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
					width:'1200',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Контрагент',
					width:'1200',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Вид счета-фактуры',
					width:'1200',
					dataIndex:'ВидСчетаФактуры',
					flex:1,
				},
				{
					text:'Документ - основание',
					width:'1200',
					dataIndex:'ДокументОснование',
					flex:1,
				},
				{
					text:'Номер вход. документа',
					width:'1200',
					dataIndex:'НомерВходящегоДокумента',
					flex:1,
				},
				{
					text:'Дата вход. документа',
					width:'100',
					dataIndex:'ДатаВходящегоДокумента',
					flex:1,
				},
				{
					text:'Исправление',
					width:'80',
					dataIndex:'Исправление',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'1200',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетФактураПолученный/ВыбратьПоСсылке/100', timeout: 3},
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
						name:'Контрагент',
					},
					{
						name:'ВидСчетаФактуры',
					},
					{
						name:'ДокументОснование',
					},
					{
						name:'НомерВходящегоДокумента',
					},
					{
						name:'ДатаВходящегоДокумента',
					},
					{
						name:'Исправление',
					},
					{
						name:'Комментарий',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ДокументСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:746px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
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
			]
		},
	]
});