Ext.require(['Данные.Справочники.КоэффициентыСтажа'], function () 
{
	Ext.define('Справочники.КоэффициентыСтажа.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:438px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Размеры начислений в зависимости от стажа',
	
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
			style: 'position:absolute;left:316px;top:33px;width:32px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 80,
			height: 19,
			style: 'position:absolute;left:350px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Шкала зависимости от стажа',
			style: 'position:absolute;left:8px;top:59px;width:422px;height:16px;',
		},
		{
			id: 'Шкала',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:99px;width:422px;height:160px;',
			height: 160,width: 422,
			columns:
			[
				{
					text:'С',
					width:'80',
					dataIndex:'СтажС',
					flex:1,
				},
				{
					text:'По',
					width:'80',
					dataIndex:'СтажПо',
					flex:1,
				},
				{
					text:'Размер',
					width:'120',
					dataIndex:'Величина',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.КоэффициентыСтажа").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КоэффициентыСтажа/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'СтажС',
					},
					{
						name:'СтажПо',
					},
					{
						name:'Величина',
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
						var грид = Ext.getCmp('Шкала');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.КоэффициентыСтажа.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КоэффициентыСтажа.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
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
			style: 'position:absolute;left:0px;top:0px;width:438px;height:25px;',
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
				'-',
				{
					text:'Редактировать код',
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
			style: 'position:absolute;left:0px;top:267px;width:438px;height:25px;',
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
			style: 'position:absolute;left:8px;top:75px;width:422px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
	]
	});
});