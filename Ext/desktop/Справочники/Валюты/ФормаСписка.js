Ext.require(['Данные.Справочники.Валюты'], function () 
{
	Ext.define('Справочники.Валюты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:285px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Валюты',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СписокВалюты',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:592px;height:220px;',
			height: 220,width: 592,
			columns:
			[
				{
					text:' ',
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
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Полное наименование',
					width:'220',
					dataIndex:'НаименованиеПолное',
					flex:1,
				},
				{
					text:'Курс',
					width:'80',
					dataIndex:'Курс',
					flex:1,
				},
				{
					text:'Кратность',
					width:'80',
					dataIndex:'Кратность',
					flex:1,
				},
				{
					text:'Параметры прописи на русском',
					width:'220',
					dataIndex:'ПараметрыПрописиНаРусском',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Валюты").data,
					fields: ['Ссылка','Картинка','Код','Наименование','НаименованиеПолное','Курс','Кратность','ПараметрыПрописиНаРусском',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Валюты/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'НаименованиеПолное',
					},
					{
						name:'Курс',
					},
					{
						name:'Кратность',
					},
					{
						name:'ПараметрыПрописиНаРусском',
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
						var грид = Ext.getCmp('СписокВалюты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Валюты.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Валюты.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			width: 608,
			height: 25,
			items:
			[
				'-',
				{
					text:'Подбор из ОКВ',
					tooltip:'Подбор валют из Общероссийского классификатора валют',
				},
				'-',
				{
					text:'Загрузить курсы',
					tooltip:'Загрузить курсы',
				},
			]
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКурса',
			width: 80,
			height: 19,
			style: 'position:absolute;left:74px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКурса',
			text: 'Дата курса:',
			style: 'position:absolute;left:8px;top:33px;width:64px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});