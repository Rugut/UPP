Ext.require(['Данные.Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов'], function () 
{
	Ext.define('Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаНастройкиПолейНаименованияОбъектаПриЗагрузке',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:326px;height:363px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка представления наименования объекта при загрузке',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:33px;width:310px;height:24px;',
			width: 310,
			height: 24,
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			id: 'ПоляПредставленияНаименованияОбъектаПриЗагрузке',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:310px;height:297px;',
			height: 297,width: 310,
			columns:
			[
				{
					text:'',
					width:'18',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Имя реквизита',
					width:'283',
					dataIndex:'ИмяРеквизита',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ЭкспортИмпортКонтактныхДанныхОбъектов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Использование',
					},
					{
						name:'ИмяРеквизита',
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
						var грид = Ext.getCmp('ПоляПредставленияНаименованияОбъектаПриЗагрузке');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаНастройкиПолейНаименованияОбъектаПриЗагрузкеСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаНастройкиПолейНаименованияОбъектаПриЗагрузкеСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:326px;height:25px;',
			width: 326,
			height: 25,
			items:
			[
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});