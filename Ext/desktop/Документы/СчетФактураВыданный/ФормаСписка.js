Ext.require(['Данные.Документы.СчетФактураВыданный'], function () 
{
	Ext.define('Документы.СчетФактураВыданный.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Счета-фактуры выданные',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДокументСписок',
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
					width:'120',
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
					text:'Контрагент',
					width:'120',
					dataIndex:'Контрагент',
					flex:1,
				},
				{
					text:'Вид счета-фактуры',
					width:'120',
					dataIndex:'ВидСчетаФактуры',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Сумма',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'ВалютаДокумента',
					flex:1,
				},
				{
					text:'Документ-основание',
					width:'120',
					dataIndex:'ДокументОснование',
					flex:1,
				},
				{
					text:'Исправление',
					width:'80',
					dataIndex:'Исправление',
					flex:1,
				},
				{
					text:'Выставлен',
					width:'80',
					dataIndex:'Выставлен',
					flex:1,
				},
				{
					text:'Организация',
					width:'120',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Состояние ЭД',
					width:'124',
					dataIndex:'СостояниеЭД',
					flex:1,
				},
				{
					text:'с нашей стороны',
					width:'124',
					dataIndex:'ДействияСНашейСтороны',
					flex:1,
				},
				{
					text:'со стороны другого участника',
					width:'124',
					dataIndex:'ДействияСоСтороныДругогоУчастника',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СчетФактураВыданный/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
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
						name:'Контрагент',
					},
					{
						name:'ВидСчетаФактуры',
					},
					{
						name:'Сумма',
					},
					{
						name:'ВалютаДокумента',
					},
					{
						name:'ДокументОснование',
					},
					{
						name:'Исправление',
					},
					{
						name:'Выставлен',
					},
					{
						name:'Организация',
					},
					{
						name:'СостояниеЭД',
					},
					{
						name:'ДействияСНашейСтороны',
					},
					{
						name:'ДействияСоСтороныДругогоУчастника',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СчетФактураВыданный.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СчетФактураВыданный.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			width: 780,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				'-',
					]
				},
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
					tooltip:'',
				},
				{
					text:'Структура подчиненности документа',
					tooltip:'',
				},
				'-',
					]
				},
				'-',
				{
					text:'Печать по умолчанию',
					tooltip:'Печать по умолчанию',
				},
				{
					text:'Дт/кт',
					tooltip:'Проводки БУ',
				},
				'-',
				'-',
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});