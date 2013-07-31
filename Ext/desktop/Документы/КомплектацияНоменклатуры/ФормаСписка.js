Ext.require(['Данные.Документы.КомплектацияНоменклатуры'], function () 
{
	Ext.define('Документы.КомплектацияНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Комплектации номенклатуры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'Список',
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
					width:'132',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Склад',
					width:'110',
					dataIndex:'Склад',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'108',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Количество комплектов',
					width:'126',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Организация',
					width:'118',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Учитывать НП',
					width:'0',
					dataIndex:'УчитыватьНП',
					flex:1,
				},
				{
					text:'Вид операции',
					width:'100',
					dataIndex:'ВидОперации',
					flex:1,
				},
				{
					text:'Вид комплектации',
					width:'100',
					dataIndex:'ВидКомплектации',
					flex:1,
				},
				{
					text:'Подразделение',
					width:'149',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'133',
					dataIndex:'Ответственный',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'220',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КомплектацияНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
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
						name:'Склад',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Количество',
					},
					{
						name:'Организация',
					},
					{
						name:'УчитыватьНП',
					},
					{
						name:'ВидОперации',
					},
					{
						name:'ВидКомплектации',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Ответственный',
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
						var грид = Ext.getCmp('Список');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.КомплектацияНоменклатуры.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КомплектацияНоменклатуры.ФормаСпискаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
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
					text:'Печать по умолчанию',
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
		],
	}],
	dockedItems:
	[
	]
	});
});