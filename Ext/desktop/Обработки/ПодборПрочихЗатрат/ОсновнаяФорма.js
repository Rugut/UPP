Ext.require(['Данные.Обработки.ПодборПрочихЗатрат'], function () 
{
	Ext.define('Обработки.ПодборПрочихЗатрат.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:504px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Подбор прочих затрат',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДеревоСтатейЗатрат',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:489px;height:156px;',
			height: 156,width: 489,
			columns:
			[
				{
					text:'Статьи затрат',
					width:'566',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодборПрочихЗатрат/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Наименование',
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
						var грид = Ext.getCmp('ДеревоСтатейЗатрат');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодборПрочихЗатрат.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодборПрочихЗатрат.ОсновнаяФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			id: 'СпрСтатьиЗатрат',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:245px;width:489px;height:197px;',
			height: 197,width: 489,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'35',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'250',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Остаток',
					width:'78',
					dataIndex:'ОстатокУпр',
					flex:1,
				},
				{
					text:'Остаток (регл.)',
					width:'76',
					dataIndex:'ОстатокРегл',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодборПрочихЗатрат/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
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
						name:'ОстатокУпр',
					},
					{
						name:'ОстатокРегл',
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
						var грид = Ext.getCmp('СпрСтатьиЗатрат');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПодборПрочихЗатрат.ОсновнаяФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПодборПрочихЗатрат.ОсновнаяФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:8px;width:113px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Подразделение',
			width: 290,
			height: 19,
			style: 'position:absolute;left:121px;top:8px;width:290px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновить',
			text: 'Обновить',
			style: 'position:absolute;left:416px;top:8px;width:81px;height:43px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:8px;top:28px;width:113px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			trigger2Cls: 'x-form-select-trigger',
			name: 'ПодразделениеОрганизации',
			width: 290,
			height: 19,
			style: 'position:absolute;left:121px;top:32px;width:290px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипУчета',
			text: 'Остатки по данным:',
			style: 'position:absolute;left:8px;top:56px;width:112px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Остатки на дату:',
			style: 'position:absolute;left:318px;top:56px;width:93px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОстатков',
			width: 81,
			height: 19,
			style: 'position:absolute;left:416px;top:56px;width:81px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Упр. учета',
			style: 'position:absolute;left:121px;top:56px;width:75px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Регл. учета',
			style: 'position:absolute;left:202px;top:56px;width:79px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});