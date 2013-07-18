Ext.require(['Данные.Справочники.ГруппыПользователей'], function () 
{
	Ext.define('Справочники.ГруппыПользователей.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:417px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группа пользователей',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:386px;top:33px;width:25px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 80,
			height: 19,
			style: 'position:absolute;left:412px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 284,
			height: 19,
			style: 'position:absolute;left:92px;top:33px;width:284px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Родитель:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Родитель',
			width: 400,
			height: 19,
			style: 'position:absolute;left:92px;top:57px;width:400px;height:19px;',
		},
		{
			id: 'ПользователиГруппы',
			xtype: 'grid',
			style: 'position:absolute;left:266px;top:138px;width:226px;height:214px;',
			height: 214,width: 226,
			columns:
			[
				{
					text:'N',
					width:'38',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Пользователь группы',
					width:'147',
					dataIndex:'Пользователь',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ГруппыПользователей").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГруппыПользователей/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Пользователь',
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
						var грид = Ext.getCmp('ПользователиГруппы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ГруппыПользователей.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГруппыПользователей.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'ВидыОбъектовДоступа',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:138px;width:249px;height:214px;',
			height: 214,width: 249,
			columns:
			[
				{
					text:'Вид объекта доступа',
					width:'163',
					dataIndex:'ВидОбъектаДоступа',
					flex:1,
				},
				{
					text:'Чтение',
					width:'48',
					dataIndex:'ДоступноОбъектов',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ГруппыПользователей").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГруппыПользователей/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ВидОбъектаДоступа',
					},
					{
						name:'ДоступноОбъектов',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ГруппыПользователей.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГруппыПользователей.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьRLS',
			text: 'Ограничение доступа',
			style: 'position:absolute;left:8px;top:90px;width:249px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСоставГруппы',
			text: 'Состав группы',
			style: 'position:absolute;left:266px;top:90px;width:226px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Перед включением пользователей в группу проверьте настройки доступа',
			style: 'position:absolute;left:266px;top:355px;width:226px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждениеОграниченияДоступа',
			text: '',
			style: 'position:absolute;left:8px;top:355px;width:249px;height:29px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:392px;width:500px;height:25px;',
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
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:266px;top:113px;width:226px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:113px;width:249px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Настройка доступа',
				},
			]
		},
	]
	});
});