Ext.require(['Данные.Обработки.НастройкиПрограммы'], function () 
{
	Ext.define('Обработки.НастройкиПрограммы.НастройкаРолейИсполнителей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка задач пользователей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:8px;width:180px;height:251px;',
		},
		{
			id: 'ТаблицаНастройкиРолей',
			xtype: 'grid',
			style: 'position:absolute;left:194px;top:31px;width:462px;height:228px;',
			height: 228,width: 462,
			columns:
			[
				{
					text:'Организация',
					width:'180',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Роль исполнителя задач',
					width:'140',
					dataIndex:'Роль',
					flex:1,
				},
				{
					text:'Задачи ...',
					width:'100',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Исполнитель',
					width:'100',
					dataIndex:'Исполнитель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиПрограммы/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Организация',
					},
					{
						name:'Роль',
					},
					{
						name:'Использование',
					},
					{
						name:'Исполнитель',
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
						var грид = Ext.getCmp('ТаблицаНастройкиРолей');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НастройкиПрограммы.НастройкаРолейИсполнителейСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиПрограммы.НастройкаРолейИсполнителейСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСотрудник',
			text: 'НадписьСотрудник',
			style: 'position:absolute;left:194px;top:8px;width:462px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:664px;height:25px;',
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
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:276px;top:129px;width:101px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Вывести список...',
				},
			]
		},
	]
	});
});