Ext.require(['Данные.Справочники.ФизическиеЛица'], function () 
{
	Ext.define('Справочники.ФизическиеЛица.ФормаВводаДанныхТруд',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:371px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Физические лица',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТрудоваяДеятельность',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:54px;width:384px;height:118px;',
			height: 118,width: 384,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Предшествующее место работы',
					width:'100',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Начало работы',
					width:'100',
					dataIndex:'НачалоРаботы',
					flex:1,
				},
				{
					text:'Окончание работы',
					width:'100',
					dataIndex:'ОкончаниеРаботы',
					flex:1,
				},
				{
					text:'Должность по предшествующему месту работы',
					width:'100',
					dataIndex:'Должность',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Ссылка','Родитель.Представление','НомерСтроки','Организация','НачалоРаботы','ОкончаниеРаботы','Должность',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Организация',
					},
					{
						name:'НачалоРаботы',
					},
					{
						name:'ОкончаниеРаботы',
					},
					{
						name:'Должность',
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
						var грид = Ext.getCmp('ТрудоваяДеятельность');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаВводаДанныхТрудСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаВводаДанныхТрудСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Форма СЗВ-К',
				},
				'-',
				{
					text:'Заполнить по данным СЗВ-К',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Трудовая деятельность',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Стажи общего характера',
			style: 'position:absolute;left:8px;top:177px;width:384px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Работа на Севере',
			style: 'position:absolute;left:8px;top:298px;width:384px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СеверныйСтаж',
			width: 384,
			height: 19,
			style: 'position:absolute;left:8px;top:319px;width:384px;height:19px;',
		},
		{
			id: 'Стажи',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:198px;width:384px;height:94px;',
			height: 94,width: 384,
			columns:
			[
				{
					text:'Вид стажа',
					width:'100',
					dataIndex:'ВидСтажа',
					flex:1,
				},
				{
					text:'Дата отсчета',
					width:'100',
					dataIndex:'ДатаОтсчета',
					flex:1,
				},
				{
					text:'Лет',
					width:'50',
					dataIndex:'РазмерЛет',
					flex:1,
				},
				{
					text:'Месяцев',
					width:'50',
					dataIndex:'РазмерМесяцев',
					flex:1,
				},
				{
					text:'Дней',
					width:'50',
					dataIndex:'РазмерДней',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ФизическиеЛица").data,
					fields: ['Ссылка','Родитель.Представление','ВидСтажа','ДатаОтсчета','РазмерЛет','РазмерМесяцев','РазмерДней',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФизическиеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ВидСтажа',
					},
					{
						name:'ДатаОтсчета',
					},
					{
						name:'РазмерЛет',
					},
					{
						name:'РазмерМесяцев',
					},
					{
						name:'РазмерДней',
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
						var грид = Ext.getCmp('Стажи');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФизическиеЛица.ФормаВводаДанныхТрудСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФизическиеЛица.ФормаВводаДанныхТрудСобытия");
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:346px;width:400px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});