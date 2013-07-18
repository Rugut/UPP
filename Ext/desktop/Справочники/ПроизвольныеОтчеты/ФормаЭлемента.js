Ext.require(['Данные.Справочники.ПроизвольныеОтчеты'], function () 
{
	Ext.define('Справочники.ПроизвольныеОтчеты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:445px;height:323px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Общая настройка отчета',
	
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
			style: 'position:absolute;left:9px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 341,
			height: 19,
			style: 'position:absolute;left:96px;top:33px;width:341px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Описание',
			style: 'position:absolute;left:8px;top:251px;width:429px;height:39px;',
		},
		{
			id: 'ИсточникиДанных',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:135px;width:429px;height:92px;',
			height: 92,width: 429,
			columns:
			[
				{
					text:'Имя источника',
					width:'119',
					dataIndex:'ИмяИсточника',
					flex:1,
				},
				{
					text:'Набор данных',
					width:'129',
					dataIndex:'НаборДанных',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ПроизвольныеОтчеты").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПроизвольныеОтчеты/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ИмяИсточника',
					},
					{
						name:'НаборДанных',
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
						var грид = Ext.getCmp('ИсточникиДанных');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПроизвольныеОтчеты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПроизвольныеОтчеты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьГруппа',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:58px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Родитель',
			width: 341,
			height: 19,
			style: 'position:absolute;left:96px;top:58px;width:341px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписание',
			text: 'Описание:',
			style: 'position:absolute;left:8px;top:232px;width:56px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Источники данных',
			style: 'position:absolute;left:8px;top:95px;width:429px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:298px;width:445px;height:25px;',
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
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:445px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Показатель монитора эффективности',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:111px;width:429px;height:24px;',
			dock: 'top',
			items:
			[
			]
		},
	]
	});
});