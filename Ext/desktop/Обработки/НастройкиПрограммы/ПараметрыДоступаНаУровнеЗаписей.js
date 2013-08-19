Ext.require(['Данные.Обработки.НастройкиПрограммы'], function () 
{
	Ext.define('Обработки.НастройкиПрограммы.ПараметрыДоступаНаУровнеЗаписей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:333px;height:335px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Параметры доступа на уровне записей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'checkbox',
			boxLabel: 'Ограничить доступ на уровне записей по видам объектов:',
			style: 'position:absolute;left:8px;top:8px;width:317px;height:19px;',
		},
		{
			id: 'ВидыОбъектовДоступа',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:317px;height:251px;',
			height: 251,width: 317,
			columns:
			[
				{
					text:'Вид объекта доступа',
					width:'163',
					dataIndex:'ВидОбъектаДоступа',
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
						name:'ВидОбъектаДоступа',
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
						var грид = Ext.getCmp('ВидыОбъектовДоступа');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиПрограммы.ПараметрыДоступаНаУровнеЗаписейСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиПрограммы.ПараметрыДоступаНаУровнеЗаписейСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодсказкаКВидамОбъектов',
			text: 'Настройка доступа выполняется для групп пользователей.',
			style: 'position:absolute;left:8px;top:283px;width:317px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:310px;width:333px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
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
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});