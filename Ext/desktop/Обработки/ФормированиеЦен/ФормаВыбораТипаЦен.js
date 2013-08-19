Ext.require(['Данные.Обработки.ФормированиеЦен'], function () 
{
	Ext.define('Обработки.ФормированиеЦен.ФормаВыбораТипаЦен',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:263px;height:232px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Форма выбора типа цен',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:6px;width:247px;height:24px;',
			items:
			[
				{
					text:'Добавить тип цен',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Установить все пометки',
				},
				{
					text:'Снять все пометки',
				},
			]
		},
		{
			id: 'ДеревоТиповЦенСкидок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:247px;height:145px;',
			height: 145,width: 247,
			columns:
			[
				{
					text:'Тип цен/скидок',
					width:'100',
					dataIndex:'ТипЦенСкидокСтрока',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ФормированиеЦен/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ТипЦенСкидокСтрока',
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
						var грид = Ext.getCmp('ДеревоТиповЦенСкидок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ФормированиеЦен.ФормаВыбораТипаЦенСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ФормированиеЦен.ФормаВыбораТипаЦенСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Перемещать отмеченные элементы наверх',
			style: 'position:absolute;left:8px;top:180px;width:247px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:207px;width:263px;height:25px;',
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