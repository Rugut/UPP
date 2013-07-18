Ext.require(['Данные.Справочники.МаршрутыСогласования'], function () 
{
	Ext.define('Справочники.МаршрутыСогласования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:428px;height:319px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Этап согласования',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:95px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 312,
			height: 19,
			style: 'position:absolute;left:108px;top:33px;width:312px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Следующий этап:',
			style: 'position:absolute;left:8px;top:57px;width:95px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Родитель',
			width: 312,
			height: 19,
			style: 'position:absolute;left:108px;top:57px;width:312px;height:19px;',
		},
		{
			id: 'СогласующиеЛица',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:134px;width:412px;height:152px;',
			height: 152,width: 412,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Пользователь',
					width:'242',
					dataIndex:'Пользователь',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.МаршрутыСогласования").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МаршрутыСогласования/ВыбратьПоСсылке/100', timeout: 3},
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
						var грид = Ext.getCmp('СогласующиеЛица');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.МаршрутыСогласования.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.МаршрутыСогласования.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Согласующие лица',
			style: 'position:absolute;left:8px;top:89px;width:412px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:428px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:294px;width:428px;height:25px;',
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
			style: 'position:absolute;left:8px;top:110px;width:412px;height:24px;',
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
			]
		},
	]
	});
});