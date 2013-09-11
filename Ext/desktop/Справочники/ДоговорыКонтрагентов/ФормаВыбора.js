Ext.require(['Данные.Справочники.ДоговорыКонтрагентов'], function () 
{
	Ext.define('Справочники.ДоговорыКонтрагентов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:742px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Договоры контрагентов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:560px;height:320px;',
			height: 320,width: 560,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Валюта',
					width:'60',
					dataIndex:'ВалютаВзаиморасчетов.Представление',
					flex:1,
				},
				{
					text:'Организация',
					width:'95',
					dataIndex:'Организация.Представление',
					flex:1,
				},
				{
					text:'Взаиморасчеты',
					width:'107',
					dataIndex:'ВедениеВзаиморасчетов.Представление',
					flex:1,
				},
				{
					text:'Вид договора',
					width:'131',
					dataIndex:'ВидДоговора.Представление',
					flex:1,
				},
				{
					text:'Номер',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата',
					width:'80',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Владелец',
					width:'96',
					dataIndex:'Владелец',
					flex:1,
				},
				{
					text:'Основной проект',
					width:'231',
					dataIndex:'ОсновнойПроект',
					flex:1,
				},
				{
					text:'Срок действия договора',
					width:'84',
					dataIndex:'СрокДействия',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ДоговорыКонтрагентов").data,
					fields: ['Ссылка','Родитель.Представление','Картинка','Код','Наименование','ВалютаВзаиморасчетов.Представление','Организация.Представление','ВедениеВзаиморасчетов.Представление','ВидДоговора.Представление','Номер','Дата','Владелец','ОсновнойПроект','СрокДействия',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоговорыКонтрагентов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ВалютаВзаиморасчетов',
					},
					{
						name:'Организация',
					},
					{
						name:'ВедениеВзаиморасчетов',
					},
					{
						name:'ВидДоговора',
					},
					{
						name:'Номер',
					},
					{
						name:'Дата',
					},
					{
						name:'Владелец',
					},
					{
						name:'ОсновнойПроект',
					},
					{
						name:'СрокДействия',
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДоговорыКонтрагентов.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДоговорыКонтрагентов.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:742px;height:25px;',
			width: 742,
			height: 25,
			items:
			[
				{
					text:'Выбрать',
					tooltip:'Выбрать значение',
					iconCls:'x-Select',
				},
				'-',
				{
					text:'Файлы',
					tooltip:'Действия формы файлы',
				},
			]
		},
		{
			id: 'СправочникДерево',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ДоговорыКонтрагентов").data,
					fields: ['Ссылка','Родитель.Представление','Наименование',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоговорыКонтрагентов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('СправочникДерево');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДоговорыКонтрагентов.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДоговорыКонтрагентов.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
	]
	});
});