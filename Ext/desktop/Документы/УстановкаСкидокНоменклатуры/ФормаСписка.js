Ext.require(['Данные.Документы.УстановкаСкидокНоменклатуры'], function () 
{
	Ext.define('Документы.УстановкаСкидокНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:672px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установки скидок номенклатуры',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'Список',
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
					width:'241',
					dataIndex:'Условие',
					flex:1,
				},
				{
					text:'Значение условия',
					width:'131',
					dataIndex:'ЗначениеУсловия',
					flex:1,
				},
				{
					text:'Ответственный',
					width:'195',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаСкидокНоменклатуры/ВыбратьПоСсылке/100', timeout: 200},
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
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('Список');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УстановкаСкидокНоменклатуры.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УстановкаСкидокНоменклатуры.ФормаСпискаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
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
	}],
	dockedItems:
	[
	]
	});
});