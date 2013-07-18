Ext.require(['Данные.Справочники.ПрофилиИзмененияПлановПоИзмерениям'], function () 
{
	Ext.define('Справочники.ПрофилиИзмененияПлановПоИзмерениям.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:474px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Профили изменения планов по измерениям',
	
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
			style: 'position:absolute;left:8px;top:33px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 220,
			height: 19,
			style: 'position:absolute;left:122px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипРаспределения',
			text: 'Тип распределения:',
			style: 'position:absolute;left:8px;top:84px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидРаспределения',
			width: 344,
			height: 19,
			style: 'position:absolute;left:122px;top:84px;width:344px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИзмерение',
			text: 'Измерение:',
			style: 'position:absolute;left:8px;top:57px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-trigger-square',
			name: 'ИзмерениеБюджетирования',
			width: 344,
			height: 19,
			style: 'position:absolute;left:122px;top:57px;width:344px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИсточникДанных',
			text: 'Источник данных:',
			style: 'position:absolute;left:8px;top:108px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ИсточникДанных',
			width: 344,
			height: 19,
			style: 'position:absolute;left:122px;top:108px;width:344px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказатель',
			text: 'Показатель:',
			style: 'position:absolute;left:8px;top:132px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПоказательИсточника',
			width: 344,
			height: 19,
			style: 'position:absolute;left:122px;top:132px;width:344px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Рассчитывать проценты автоматически',
			style: 'position:absolute;left:8px;top:179px;width:230px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределять значение по всем элементам',
			style: 'position:absolute;left:8px;top:159px;width:250px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Элементы для распределения:',
			style: 'position:absolute;left:8px;top:204px;width:458px;height:16px;',
		},
		{
			id: 'ЭлементыДляРаспределения',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:244px;width:458px;height:160px;',
			height: 160,width: 458,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Элемент',
					width:'220',
					dataIndex:'ЭлементУправленческойАналитики',
					flex:1,
				},
				{
					text:'Процент',
					width:'80',
					dataIndex:'ПроцентДляРаспределения',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ПрофилиИзмененияПлановПоИзмерениям").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПрофилиИзмененияПлановПоИзмерениям/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ЭлементУправленческойАналитики',
					},
					{
						name:'ПроцентДляРаспределения',
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
						var грид = Ext.getCmp('ЭлементыДляРаспределения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ПрофилиИзмененияПлановПоИзмерениям.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПрофилиИзмененияПлановПоИзмерениям.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:344px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 80,
			height: 19,
			style: 'position:absolute;left:386px;top:33px;width:80px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:220px;width:458px;height:24px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:474px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:412px;width:474px;height:25px;',
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
	]
	});
});